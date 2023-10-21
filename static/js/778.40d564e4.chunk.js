"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{8095:function(e,t,n){var r=n(6691),a=n(184);t.Z=function(){return(0,a.jsx)(r.Z,{categories:[{name:"Category 1"},{name:"Category 2"}],onRemove:console.log})}},1448:function(e,t,n){var r=n(7391),a=n(5527),s=n(4294),i=n(7247),u=n(184);t.Z=function(){return(0,u.jsxs)(a.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:[(0,u.jsx)(r.Z,{id:"outlined-basic",label:"Outlined",variant:"outlined"}),(0,u.jsx)("br",{}),(0,u.jsxs)(s.Z,{variant:"contained",color:"error",children:[(0,u.jsx)(i.Z,{})," \xa0 Delete Personal Account"]})]})}},5187:function(e,t,n){var r=n(3433),a=n(9439),s=n(6691),i=n(2359),u=n(4294),o=n(7621),c=n(9504),l=n(9585),d=n(2791),f=n(9498),x=n(4554),p=n(6125),Z=n(1131),h=n(2885),v=n(8096),g=n(4925),j=n(8406),b=n(3786),m=n(3239),k=n(2527),w=n(184);t.Z=function(){for(var e=d.useRef([]),t=(0,d.useState)([]),n=(0,a.Z)(t,2),y=n[0],S=n[1],C=(0,d.useState)(null),R=(0,a.Z)(C,2),L=R[0],U=R[1],W=(0,d.useState)(!1),T=(0,a.Z)(W,2),A=T[0],N=T[1],O=(0,d.useState)("folklore"),E=(0,a.Z)(O,2),I=E[0],_=(E[1],(0,d.useState)("BD")),D=(0,a.Z)(_,2),z=D[0],M=D[1],P=(0,d.useState)(""),J=(0,a.Z)(P,2),F=J[0],q=J[1],B=(0,d.useState)(!0),G=(0,a.Z)(B,2),$=G[0],V=G[1],H=(0,d.useState)(!1),K=(0,a.Z)(H,2),Q=K[0],X=K[1],Y=(0,d.useState)(!1),ee=(0,a.Z)(Y,2),te=ee[0],ne=ee[1],re=(0,d.useState)([]),ae=(0,a.Z)(re,2),se=ae[0],ie=ae[1],ue=d.useRef(!1),oe=[],ce=0,le=Object.entries(k.Z.languages);ce<le.length;ce++){var de=(0,a.Z)(le[ce],2),fe=de[0],xe=de[1];oe.push({id:fe,label:xe})}oe.sort((function(e,t){return e.label.localeCompare(t.label)})),(0,d.useEffect)((function(){k.Z.fetchCountries(I).then((function(e){S((0,r.Z)(e))}))}),[I]),(0,d.useEffect)((function(){z&&I&&(N(!0),X(!0),k.Z.getCategories({country:z,topic:I}).then((function(e){N(!1),ie(e)})).finally((function(e){N(!1),X(!1)})))}),[z,I]);var pe=(0,d.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;null!==t&&void 0!==t&&t.length&&(F?(ne(!1),z&&t&&I&&(N(!0),k.Z.submitTask({target_wiki:F,country:z,categories:t,topic_id:I,task_data:t}).then((function(e){var t=null===e||void 0===e?void 0:e.id;U(t),N(!1),V(!1)})))):ne(!0))}),[F]);return(0,w.jsxs)(o.Z,{children:[(0,w.jsx)(l.Z,{title:"Add Task",action:(0,w.jsxs)(u.Z,{variant:"contained",color:"success",onClick:pe,disabled:A,size:"small",children:[(0,w.jsx)(i.Z,{})," Generate"]})}),(0,w.jsxs)(c.Z,{children:[(0,w.jsxs)(x.Z,{sx:{display:"flex",justifyContent:"left",flexDirection:"row"},children:[(0,w.jsxs)(v.Z,{sx:{width:300},size:"small",children:[(0,w.jsx)(g.Z,{children:"Country"}),(0,w.jsx)(j.Z,{fullWidth:!0,disabled:A,value:z,label:"Country",onChange:function(e){return e.target.value&&M(e.target.value)},children:y.map((function(e){return(0,w.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,w.jsxs)(v.Z,{sx:{width:300,ml:.5},size:"small",children:[(0,w.jsx)(g.Z,{children:"Target Wiki"}),(0,w.jsx)(j.Z,{fullWidth:!0,disabled:A,error:te,value:F,label:"Target Wiki",onChange:function(e){return e.target.value&&q(e.target.value)},children:oe.map((function(e){return(0,w.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,w.jsx)(u.Z,{variant:"contained",disabled:A,onClick:function(e){return V(!$)},size:"small",sx:{padding:1},children:$?(0,w.jsx)(h.Z,{}):(0,w.jsx)(Z.Z,{})})]}),(0,w.jsx)(p.Z,{in:$,children:Q?(0,w.jsx)(m.Z,{}):(0,w.jsx)(s.Z,{disabled:A,categoryListRef:e,Server:k.Z,initialCategories:se})}),L&&(0,w.jsx)(f.Z,{Server:k.Z,taskID:L,statusRef:ue,setDisabled:N})]})]})}},2211:function(e,t,n){n.a(e,(async function(e,r){try{var a=n(1413),s=n(4165),i=n(5861),u=n(9439),o=n(4294),c=n(7621),l=n(9504),d=n(9585),f=n(2791),x=(n(9498),n(4554)),p=n(3239),Z=n(2368),h=n(7),v=n(2460),g=n(1637),j=n(2527),b=n(3518),m=n(1087),k=n(2419),w=n(184),y=await j.Z.getCountryMap(),S=function(){var e=(0,f.useState)(null),t=(0,u.Z)(e,2),n=t[0],r=t[1],a=(0,f.useState)(0),s=(0,u.Z)(a,2),i=(s[0],s[1]),o=(0,f.useState)(0),c=(0,u.Z)(o,2),l=c[0],d=c[1],Z=(0,f.useState)(0),h=(0,u.Z)(Z,2),v=h[0],g=h[1],b=(0,f.useState)(!1),m=(0,u.Z)(b,2),k=m[0],y=m[1];return(0,f.useEffect)((function(){y(!0),j.Z.getMe().then((function(e){r(e.username),d(e.task_count),i(e.id),g(e.article_count)})).finally((function(){y(!1)}))}),[]),k?(0,w.jsx)(p.Z,{}):(0,w.jsxs)(x.Z,{children:[(0,w.jsxs)("h2",{children:["Welcome, ",n]}),(0,w.jsxs)("h3",{children:["Task Count : ",l]}),(0,w.jsxs)("h3",{children:["Total Article Count : ",v]})]})},C=function(e){var t=e.id,n=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.exportResult(t,"csv");case 2:n=e.sent,(r=document.createElement("a")).href=URL.createObjectURL(new Blob([n],{type:"text/csv"})),r.download="result.csv",r.click();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,w.jsx)(o.Z,{variant:"contained",color:"primary",onClick:n,children:(0,w.jsx)(b.Z,{})})},R=[{field:"id",headerName:"ID",maxWidth:70,flex:1},{field:"status",headerName:"Status",maxWidth:100,flex:1},{field:"topic_id",headerName:"Topic",flex:1},{field:"country",headerName:"Country",flex:1},{field:"category_count",headerName:"Category",maxWidth:100,flex:1},{field:"article_count",headerName:"Article",maxWidth:100,flex:1},{field:"download",headerName:"Download",renderCell:function(e){return e.value}}],L=function(){var e=(0,f.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1],s=(0,f.useState)(!1),i=(0,u.Z)(s,2),o=i[0],c=i[1],l=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"medium"});return(0,f.useEffect)((function(){c(!0),j.Z.getTasks().then((function(e){r(e.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{country:y[e.country]||e.country,created_at:l.format(new Date(e.created_at)),download:"done"==e.status&&(0,w.jsx)(C,{id:e.id})})})))})).finally((function(){c(!1)}))}),[]),(0,w.jsx)(Z._$,{rows:n,columns:R,pageSize:5,sx:{"& .MuiDataGrid-row":{cursor:"pointer",color:"white"},"& .Mui-hovered":{color:"black"},"& .Mui-selected":{color:"black"},"& .task-done":{backgroundColor:h.Z[800],color:"white"},"& .task-done:hover":{backgroundColor:h.Z[600],color:"white"},"& .task-pending":{backgroundColor:g.Z[300],color:"black"},"& .task-failed":{backgroundColor:v.Z[300]}},rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,rowSelection:!1,getRowClassName:function(e){return"task-".concat(e.row.status," .task")},loading:o})};t.Z=function(){var e=function(){return(0,w.jsx)(m.rU,{to:"create",children:(0,w.jsxs)(o.Z,{variant:"contained",color:"success",children:[(0,w.jsx)(k.Z,{})," New"]})})};return(0,w.jsxs)(c.Z,{children:[(0,w.jsx)(d.Z,{action:(0,w.jsx)(e,{})}),(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(S,{}),(0,w.jsx)(L,{})]})]})},r()}catch(U){r(U)}}),1)},7490:function(e,t,n){var r=n(6691),a=n(184);t.Z=function(){return(0,a.jsx)(r.Z,{categories:[{name:"Category 1"},{name:"Category 2"}],onRemove:console.log})}},2527:function(e,t,n){var r=n(7762),a=n(4165),s=n(5861),i=n(5671),u=n(3144),o="tk-lang",c="tk-country",l=function(){function e(){(0,i.Z)(this,e)}return(0,u.Z)(e,null,[{key:"init",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.languages&&e.countries){t.next=20;break}if(localStorage.getItem(o)&&localStorage.getItem(c)){t.next=18;break}return t.t0=localStorage,t.t1=c,t.t2=JSON,t.next=7,fetch("/api/country").then((function(e){return e.json()})).then((function(e){return e.data}));case 7:return t.t3=t.sent,t.t4=t.t2.stringify.call(t.t2,t.t3),t.t0.setItem.call(t.t0,t.t1,t.t4),t.t5=localStorage,t.t6=o,t.t7=JSON,t.next=15,fetch("/api/language").then((function(e){return e.json()})).then((function(e){return e.data}));case 15:t.t8=t.sent,t.t9=t.t7.stringify.call(t.t7,t.t8),t.t5.setItem.call(t.t5,t.t6,t.t9);case 18:e.languages=JSON.parse(localStorage.getItem(o)||"{}"),e.countries=JSON.parse(localStorage.getItem(c)||"{}");case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addSubCategories",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var s,i,u,o,c,l,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=[],i=(0,r.Z)(n),t.prev=2,i.s();case 4:if((u=i.n()).done){t.next=18;break}return o=u.value,console.info("Adding subcategories for",o.title),c=new URL("api/subcat/"+o.title,e.baseURL),t.next=10,fetch(c.toString());case 10:return l=t.sent,t.next=13,l.json();case 13:d=t.sent,s=s.concat(d.data),o.subcat=!1;case 16:t.next=4;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),i.e(t.t0);case 23:return t.prev=23,i.f(),t.finish(23);case 26:return t.abrupt("return",s);case 27:case"end":return t.stop()}}),t,null,[[2,20,23,26]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCategories",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.country,s=n.topic,i=new URL("api/topic/".concat(s.split("/")[0],"/").concat(r,"/categories"),e.baseURL),t.next=4,fetch(i.toString());case 4:return u=t.sent,t.next=7,u.json();case 7:if(!(o=t.sent).success){t.next=12;break}return t.abrupt("return",o.data);case 12:return console.log("Error",o.data),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"submitTask",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchCountries",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n,e.baseURL),t.next=3,fetch(r.toString());case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=13;break}return u=i.data,o=u.map((function(e){return{id:e.id.split("/")[1],label:e.title}})),t.abrupt("return",o);case 13:return console.log("Error",i.data),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"exportResult",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i,u,o=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"json",s=new URL("api/task/".concat(n,"/export/")+r,e.baseURL),t.next=4,fetch(s.toString());case 4:return i=t.sent,t.next=7,i.json();case 7:return u=t.sent,t.abrupt("return",u.data);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTask",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n){var r,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task/"+n,e.baseURL),t.next=3,fetch(r.toString());case 3:return s=t.sent,t.next=6,s.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTasks",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/task",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getMe",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/user/me",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCountryMap",value:function(){var t=(0,s.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/country",e.baseURL),t.next=3,fetch(n).then((function(e){return e.json()}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"searchCategory",value:function(e,t){var n="",r=!1;function i(){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,a.Z)().mark((function s(){var i,u,o,c,l;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=n){a.next=2;break}return a.abrupt("return",e([]));case 2:return i=new URL("https://en.wikipedia.org/w/api.php"),u=new URLSearchParams({action:"query",format:"json",list:"prefixsearch",formatversion:"2",pssearch:n,pslimit:"10",psnamespace:"14",origin:"*"}),i.search=u.toString(),a.next=7,fetch(i.toString());case 7:return o=a.sent,a.next=10,o.json();case 10:return c=a.sent,l=c.query.prefixsearch.map((function(e){return{id:e.pageid,title:e.title}})),r=!1,t(!1),a.abrupt("return",e(l));case 15:case"end":return a.stop()}}),s)})))).apply(this,arguments)}return function(e){var a;t(!0),n=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value,0==r?(r=!0,setTimeout(i,1e3)):console.log("Already queued")}}}]),e}();l.baseURL=new URL(window.location.origin),l.languages=null,l.countries=null,t.Z=l},9778:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var a=n(7689),s=(n(2791),n(5187)),i=n(2211),u=n(1448),o=n(8095),c=n(7490),l=n(2527),d=n(184),f=e([i]);i=(f.then?(await f)():f)[0],l.Z.init();t.default=function(){return(0,d.jsxs)(a.Z5,{children:[(0,d.jsxs)(a.AW,{path:"/topic/*",children:[(0,d.jsx)(a.AW,{path:"create",element:(0,d.jsx)(c.Z,{})}),(0,d.jsx)(a.AW,{path:":id/edit",element:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(a.AW,{path:":id",element:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(a.AW,{path:"*",element:(0,d.jsx)(u.Z,{})})]}),(0,d.jsxs)(a.AW,{path:"task/*",children:[(0,d.jsx)(a.AW,{path:"create",element:(0,d.jsx)(s.Z,{})}),(0,d.jsx)(a.AW,{path:":id",element:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(a.AW,{path:"*",element:(0,d.jsx)(i.Z,{})})]}),(0,d.jsx)(a.AW,{path:"/setting",element:(0,d.jsx)(u.Z,{})}),(0,d.jsx)(a.AW,{path:"*",element:(0,d.jsx)(o.Z,{})})]})},r()}catch(x){r(x)}}))},9498:function(e,t,n){var r=n(9439),a=n(4165),s=n(5861),i=n(5671),u=n(3144),o=n(136),c=n(7277),l=n(3239),d=n(4294),f=n(2791),x=n(7391),p=n(4554),Z=n(3518),h=n(1292),v=n(7621),g=n(9585),j=n(9504),b=n(6125),m=n(2527),k=n(2368),w=n(184),y=[{field:"id",headerName:"ID",maxWidth:30,flex:1,hideable:!1},{field:"title",headerName:"Title",flex:1,hideable:!1},{field:"target",headerName:"Target",flex:1}],S=function(e){var t=e.data,n=null===t||void 0===t?void 0:t.map((function(e,t){return{id:t+1,title:null===e||void 0===e?void 0:e.title,wikidata:null===e||void 0===e?void 0:e.wikidata,target:null===e||void 0===e?void 0:e.target}}));return(0,w.jsx)(k._$,{rows:n,columns:y,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,sx:{width:"100%"}})},C=function(e){var t=e.data;return(0,w.jsx)(x.Z,{id:"outlined-multiline-static",label:null,multiline:!0,rows:4,value:t,fullWidth:!0,onClick:function(e){return e.target.select()}})};f.Component;t.Z=function(e){var t=e.taskID,n=e.statusRef,i=e.setDisabled,u=f.useState([]),o=(0,r.Z)(u,2),c=o[0],x=o[1],k=f.useState(""),y=(0,r.Z)(k,2),R=y[0],L=y[1],U=f.useState(!1),W=(0,r.Z)(U,2),T=W[0],A=W[1],N=f.useState(null),O=(0,r.Z)(N,2),E=O[0],I=O[1],_=f.useState(null),D=(0,r.Z)(_,2),z=(D[0],D[1]),M=f.useState(0),P=(0,r.Z)(M,2),J=P[0],F=P[1],q=f.useState(0),B=(0,r.Z)(q,2),G=B[0],$=B[1],V=f.useState(""),H=(0,r.Z)(V,2),K=H[0],Q=H[1],X=f.useState(0),Y=(0,r.Z)(X,2),ee=Y[0],te=Y[1],ne=f.useState(!1),re=(0,r.Z)(ne,2),ae=re[0],se=re[1];n.current=ae;var ie=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.getTask(t);case 2:"pending"!=(n=e.sent).status?(se(!1),i(!1),F(0),"done"==n.status?ce():"failed"==n.status&&alert("Task Failed")):(se(!0),i(!0),F(setTimeout(ie,1e3))),$(n.article_count),Q(n.last_category),te(n.category_count);case 7:case"end":return e.stop()}}),e)}))),[t]),ue=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,t){var n=document.createElement("a");n.download="results-".concat(e,".csv"),n.href=URL.createObjectURL(new Blob([t],{type:"application/csv"})),n.click(),n.remove()},E){e.next=7;break}return e.next=4,m.Z.exportResult(t,"csv");case 4:return r=e.sent,I(r),e.abrupt("return",n(t,r));case 7:return e.abrupt("return",n(t,E));case 9:case"end":return e.stop()}}),e)}))),[t]),oe=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=4;break}A(!1),e.next=13;break;case 4:if(R){e.next=12;break}return e.next=7,m.Z.exportResult(t,"wikitext");case 7:n=e.sent,A(!0),L(n),e.next=13;break;case 12:A(!0);case 13:case"end":return e.stop()}}),e)}))),[t,T]),ce=(0,f.useCallback)((0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.exportResult(t,"json");case 2:n=e.sent,x(n),z(JSON.stringify(n));case 5:case"end":return e.stop()}}),e)}))),[t]);f.useEffect((function(){return ie(),function(){clearTimeout(J),F(0)}}),[t,ie]);var le=(0,w.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center","& > *":{m:1}},children:[(0,w.jsxs)(d.Z,{variant:"contained",color:"primary",onClick:oe,disabled:ae,size:"small",children:[(0,w.jsx)(h.Z,{})," WikiText"]}),(0,w.jsxs)(d.Z,{variant:"contained",color:"primary",onClick:ue,disabled:ae,size:"small",children:[(0,w.jsx)(Z.Z,{})," CSV"]})]}),de=(0,w.jsxs)(p.Z,{sx:{fontSize:"16px"},children:["Article count : ",G,(0,w.jsx)("br",{}),"Processed Count : ",ee,(0,w.jsx)("br",{}),"Last Category: ",K,(0,w.jsx)("br",{})]});return(0,w.jsxs)(v.Z,{sx:{m:"5px"},children:[(0,w.jsx)(g.Z,{action:le,title:de}),(0,w.jsx)(j.Z,{children:ae?(0,w.jsx)(l.Z,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(b.Z,{in:T,children:(0,w.jsx)(C,{data:R})}),(null===c||void 0===c?void 0:c.length)>0&&(0,w.jsx)(S,{data:c})]})})]})}},6691:function(e,t,n){var r=n(1413),a=n(9439),s=n(5527),i=n(570),u=n(4294),o=n(493),c=n(2791),l=n(3766),d=n(2419),f=n(7391),x=n(5021),p=n(9900),Z=n(7247),h=n(4721),v=n(4554),g=n(2527),j=n(184),b=function(e){var t=e.category,n=e.onRemove,r=e.onSubCategory;return(0,j.jsxs)(x.ZP,{children:[(0,j.jsx)(p.Z,{sx:{padding:"5px"},primary:null===t||void 0===t?void 0:t.title}),(0,j.jsx)(u.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return r(null===t||void 0===t?void 0:t.title)},children:(0,j.jsx)(i.Z,{})}),(0,j.jsx)(u.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return n(null===t||void 0===t?void 0:t.title)},children:(0,j.jsx)(Z.Z,{})})]})},m=function(e){var t=e.onAdd,n=e.disabled,s=c.useState(!1),i=(0,a.Z)(s,2),o=i[0],x=i[1],p=c.useState([]),Z=(0,a.Z)(p,2),h=Z[0],b=Z[1],m=c.useState(""),k=(0,a.Z)(m,2),w=k[0],y=k[1],S=c.useCallback(g.Z.searchCategory(b,x),[]);return(0,j.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%"},children:[(0,j.jsx)(l.Z,{id:"new-category",options:h,disabled:n,size:"small",loading:o,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},sx:{width:"100%",maxWidth:"400px",marginRight:"10px",marginLeft:"10px"},renderInput:function(e){return(0,j.jsx)(f.Z,(0,r.Z)((0,r.Z)({},e),{},{disabled:n,onInput:S,onSelect:function(e){return y(e.target.value)},label:"Add Category"}))}}),(0,j.jsx)(u.Z,{disabled:n,variant:"contained",color:"success",onClick:function(e){return t(w)||y("")},children:(0,j.jsx)(d.Z,{})})]})};t.Z=function(e){var t=e.categoryListRef,n=e.initialCategories,i=e.disabled,u=void 0!==i&&i,l=c.useState({}),d=(0,a.Z)(l,2),f=d[0],x=d[1],p=c.useMemo((function(){return Object.values(f)}),[f]),Z=c.useState(!1),v=(0,a.Z)(Z,2),k=(v[0],v[1],c.useCallback((function(e){e&&f[e]&&(delete f[e],x((0,r.Z)({},f)))}),[f])),w=c.useCallback((function(e){if(e&&!f[e]){var t={name:e,title:e,pageid:Math.round(1e5*Math.random()),subcat:!1};f[e]=t,x((0,r.Z)({},f))}}),[f]),y=c.useCallback((function(e){var t=f[e];t&&g.Z.addSubCategories([t]).then((function(e){e.forEach((function(e){f[e.title]=e})),x((0,r.Z)({},f))}))}),[f]);return c.useEffect((function(){t&&(t.current=p)}),[p,t]),c.useEffect((function(){null!==n&&void 0!==n&&n.length&&x(null===n||void 0===n?void 0:n.reduce((function(e,t){return e[t.title]=t,e}),{}))}),[n]),(0,j.jsxs)(s.Z,{elevation:0,children:[(0,j.jsx)(o.Z,{dense:!0,children:null===p||void 0===p?void 0:p.map((function(e,t){return(0,j.jsxs)(c.Fragment,{children:[(0,j.jsx)(b,{category:e,onRemove:k,onSubCategory:y}),(0,j.jsx)(h.Z,{})]},"cat"+t)}))}),(0,j.jsx)("br",{}),(0,j.jsx)(m,{onAdd:w,disabled:u})]})}}}]);
//# sourceMappingURL=778.40d564e4.chunk.js.map