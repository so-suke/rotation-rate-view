import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Container, Table, InputGroup, FormControl, Form, Button } from "react-bootstrap";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "text/plain";

const urlAccess = "https://script.google.com/macros/s/AKfycbxXqnjYzBPgEIio3_fq2ZEQteydAe1op7YXPFT1SfPnK_XZt3whB2krTvvmvxVp0Sxv/exec";
const workRecordIndex = {
  date: 0,
  rotationRate: 4,
  totalRotationNumber: 6,
  roundBase: 7,
  machineName: 9,
  storeName: 10,
};

const workRecordsSample = [
  ["2020-11-27T15:00:00.000Z", "1899-12-30T09:40:00.000Z", "", 11.11, 10.0, 11.4, 141, "", 1607, "機種名サンプル", "店名サンプル", "", "", ""],
];

function App() {
  const [workRecords, setWorkRecords] = useState(workRecordsSample);
  const [storeNameSearchTarget, setStoreNameSearchTarget] = useState("");
  const [machineNamesSearchTarget, setMachineNamesSearchTarget] = useState([""]);
  const [dateGetWorkRecords, setDateGetWorkRecords] = useState("");

  useEffect(() => {
    const workRecordsLocal = localStorage.getItem("workRecords") || "[]";
    const dateGetWorkRecordsLocal = localStorage.getItem("dateGetWorkRecords") || "";
    setWorkRecords(JSON.parse(workRecordsLocal));
    setDateGetWorkRecords(dateGetWorkRecordsLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("workRecords", JSON.stringify(workRecords));
  }, [workRecords]);

  useEffect(() => {
    localStorage.setItem("dateGetWorkRecords", dateGetWorkRecords);
  }, [dateGetWorkRecords]);

  const isIncludesMultiMachineNames = (machineNameWorkRecord: string) => {
    let result = false;
    machineNamesSearchTarget.forEach((machineName) => {
      if (machineNameWorkRecord.includes(machineName)) {
        result = true;
        return;
      }
    });

    return result;
  };

  const filterByTargetName = () => {
    const results = workRecords.filter((workRecord: any) => {
      return workRecord[workRecordIndex.storeName] === storeNameSearchTarget && isIncludesMultiMachineNames(workRecord[workRecordIndex.machineName]);
    });

    return results;
  };

  // スプレッドシートから稼働記録を取得してくる。
  const getWorkRecords = () => {
    axios
      .get(urlAccess)
      .then(function (response) {
        response.data.shift();
        setWorkRecords(response.data);
        // 稼働記録の取得日時を保存する。
        const now = new Date();
        const dateFormat = format(now, "MM月dd日 HH:mm");
        setDateGetWorkRecords(dateFormat);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // change系
  const handleChangeStoreNameSearchTarget = (event: any) => {
    const storeName = event.target.value;
    setStoreNameSearchTarget(storeName);
  };
  const handleChangeMachineNamesSearchTarget = (event: any) => {
    const machineNameMultiple = event.target.value;
    const machineNamesSplit = machineNameMultiple.split(/\s\S/);
    setMachineNamesSearchTarget(machineNamesSplit);
  };

  const TableRowWorkRecord = filterByTargetName().map((workRecord, index) => {
    return (
      <tr key={index}>
        <td>{workRecord[workRecordIndex.date] === "" ? "" : format(new Date(workRecord[workRecordIndex.date]), "yyyy-MM-dd")}</td>
        <td>{workRecord[workRecordIndex.rotationRate]}</td>
        <td>{workRecord[workRecordIndex.totalRotationNumber]}</td>
        <td>{workRecord[workRecordIndex.roundBase]}</td>
        <td>{workRecord[workRecordIndex.machineName]}</td>
        <td>{workRecord[workRecordIndex.storeName]}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <Container className="pt-2">
        <Button variant="outline-secondary" className="mb-2" onClick={getWorkRecords}>
          稼働記録取得
        </Button>
        <p>最終取得日：{dateGetWorkRecords}</p>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" size="sm" defaultValue="" custom onChange={(event) => handleChangeStoreNameSearchTarget(event)}>
              <option value="" disabled hidden>
                店名選択
              </option>
              <option value="DoruNakano">DoruNakano</option>
              <option value="NtNakano">NtNakano</option>
              <option value="LiNakano">LiNakano</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <InputGroup className="mb-3">
          <FormControl placeholder="機種名" onChange={handleChangeMachineNamesSearchTarget} />
          <InputGroup.Append>
            <Button variant="outline-secondary">絞り込み</Button>
          </InputGroup.Append>
        </InputGroup>
        <Table striped bordered hover size="sm" className="m-auto">
          <thead>
            <tr>
              <th>日付</th>
              <th>回転率</th>
              <th>総回転数</th>
              <th>rb</th>
              <th>機種名</th>
              <th>店名</th>
            </tr>
          </thead>
          <tbody>{TableRowWorkRecord}</tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
