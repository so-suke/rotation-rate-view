(this["webpackJsonprotation-rate-view"]=this["webpackJsonprotation-rate-view"]||[]).push([[0],{30:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(24),s=c.n(r),o=(c(30),c(11)),i=c(10),j=c.n(i),l=c(60),d=c(57),h=c(62),b=c(61),u=c(58),O=c(25),x=c(59),f=c(4);j.a.defaults.baseURL="http://localhost:3000",j.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",j.a.defaults.headers.post["Content-Type"]="text/plain";var p=0,v=4,m=6,g=7,S=9,N=10,k=[["2020-11-27T15:00:00.000Z","1899-12-30T09:40:00.000Z","",11.11,10,11.4,141,"",1607,"\u6a5f\u7a2e\u540d\u30b5\u30f3\u30d7\u30eb","\u5e97\u540d\u30b5\u30f3\u30d7\u30eb","","",""]];var y=function(){var e=Object(n.useState)(k),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],y=s[1],w=Object(n.useState)([""]),C=Object(o.a)(w,2),I=C[0],E=C[1],T=Object(n.useState)(""),A=Object(o.a)(T,2),F=A[0],D=A[1];Object(n.useEffect)((function(){var e=localStorage.getItem("workRecords")||"[]",t=localStorage.getItem("dateGetWorkRecords")||"";a(JSON.parse(e)),D(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem("workRecords",JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){localStorage.setItem("dateGetWorkRecords",F)}),[F]);var L=c.filter((function(e){return e[N]===i&&function(e){var t=!1;return I.forEach((function(c){e.includes(c)&&(t=!0)})),t}(e[S])})).map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:""===e[p]?"":Object(l.a)(new Date(e[p]),"yyyy-MM-dd")}),Object(f.jsx)("td",{children:e[v]}),Object(f.jsx)("td",{children:e[m]}),Object(f.jsx)("td",{children:e[g]}),Object(f.jsx)("td",{children:e[S]}),Object(f.jsx)("td",{children:e[N]})]},t)}));return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(d.a,{className:"pt-2",children:[Object(f.jsx)(h.a,{variant:"outline-secondary",className:"mb-2",onClick:function(){j.a.get("https://script.google.com/macros/s/AKfycbxXqnjYzBPgEIio3_fq2ZEQteydAe1op7YXPFT1SfPnK_XZt3whB2krTvvmvxVp0Sxv/exec").then((function(e){e.data.shift(),a(e.data);var t=new Date,c=Object(l.a)(t,"MM\u6708dd\u65e5 HH:mm");D(c)})).catch((function(e){alert(e)}))},children:"\u7a3c\u50cd\u8a18\u9332\u53d6\u5f97"}),Object(f.jsxs)("p",{children:["\u6700\u7d42\u53d6\u5f97\u65e5\uff1a",F]}),Object(f.jsx)(b.a,{children:Object(f.jsx)(b.a.Group,{controlId:"exampleForm.SelectCustom",children:Object(f.jsxs)(b.a.Control,{as:"select",size:"sm",defaultValue:"",custom:!0,onChange:function(e){return function(e){var t=e.target.value;y(t)}(e)},children:[Object(f.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"\u5e97\u540d\u9078\u629e"}),Object(f.jsx)("option",{value:"DoruNakano",children:"DoruNakano"}),Object(f.jsx)("option",{value:"NtNakano",children:"NtNakano"}),Object(f.jsx)("option",{value:"LiNakano",children:"LiNakano"})]})})}),Object(f.jsxs)(u.a,{className:"mb-3",children:[Object(f.jsx)(O.a,{placeholder:"\u6a5f\u7a2e\u540d",onChange:function(e){var t=e.target.value.split(/\s\S/);E(t)}}),Object(f.jsx)(u.a.Append,{children:Object(f.jsx)(h.a,{variant:"outline-secondary",children:"\u7d5e\u308a\u8fbc\u307f"})})]}),Object(f.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"m-auto",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u65e5\u4ed8"}),Object(f.jsx)("th",{children:"\u56de\u8ee2\u7387"}),Object(f.jsx)("th",{children:"\u7dcf\u56de\u8ee2\u6570"}),Object(f.jsx)("th",{children:"rb"}),Object(f.jsx)("th",{children:"\u6a5f\u7a2e\u540d"}),Object(f.jsx)("th",{children:"\u5e97\u540d"})]})}),Object(f.jsx)("tbody",{children:L})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(53);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),w()}},[[54,1,2]]]);
//# sourceMappingURL=main.2497e79a.chunk.js.map