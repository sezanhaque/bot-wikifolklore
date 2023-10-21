"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{1448:function(e,t,n){var r=n(1413),a=n(9439),i=n(7391),s=n(5527),o=n(4294),u=n(3766),c=n(165),l=n(6125),d=n(1355),f=n(2791),p=n(184);t.Z=function(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),n=t[0],h=(t[1],(0,f.useCallback)((function(e){window.confirm("\n        Are you want to hide your username from all the records?\n        This action is irreversible and it would:\n        - Hide your username from all the records\n        - Keep your central ID intact\n        - log you out from now. You need to login again to continue\n        ")&&d.Z.updateMe({username:"Hidden"}).then((function(e){fetch("/user/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){window.location.href="/user/login"}))}))}),[]));return(0,p.jsxs)(s.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:[(0,p.jsx)(l.Z,{in:!0,children:(0,p.jsx)(u.Z,{options:n,sx:{m:1},renderInput:function(e){return(0,p.jsx)(i.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Username"}))}})}),(0,p.jsxs)(o.Z,{variant:"contained",color:"error",size:"small",sx:{padding:1,m:1},onClick:h,children:[(0,p.jsx)(c.Z,{})," \xa0 Hide my username"]})]})}},5187:function(e,t,n){var r=n(3433),a=n(9439),i=n(6691),s=n(2359),o=n(4294),u=n(7621),c=n(9504),l=n(9585),d=n(2791),f=n(9498),p=n(4554),h=n(6125),x=n(1131),Z=n(2885),g=n(8096),v=n(4925),m=n(8406),b=n(3786),j=n(3239),k=n(1355),y=n(184);t.Z=function(){for(var e=d.useRef([]),t=(0,d.useState)([]),n=(0,a.Z)(t,2),w=n[0],S=n[1],C=(0,d.useState)(null),R=(0,a.Z)(C,2),L=(R[0],R[1]),T=(0,d.useState)(!1),U=(0,a.Z)(T,2),N=U[0],O=U[1],W=(0,d.useState)("folklore"),z=(0,a.Z)(W,2),A=z[0],E=(z[1],(0,d.useState)("BD")),I=(0,a.Z)(E,2),_=I[0],D=I[1],M=(0,d.useState)(""),P=(0,a.Z)(M,2),J=P[0],F=P[1],B=(0,d.useState)(!0),q=(0,a.Z)(B,2),H=q[0],G=q[1],$=(0,d.useState)(!1),K=(0,a.Z)($,2),V=K[0],Y=K[1],Q=(0,d.useState)(!1),X=(0,a.Z)(Q,2),ee=X[0],te=X[1],ne=(0,d.useState)([]),re=(0,a.Z)(ne,2),ae=re[0],ie=re[1],se=(0,d.useState)(null),oe=(0,a.Z)(se,2),ue=oe[0],ce=oe[1],le=d.useRef(!1),de=[],fe=0,pe=Object.entries(k.Z.languages);fe<pe.length;fe++){var he=(0,a.Z)(pe[fe],2),xe=he[0],Ze=he[1];de.push({id:xe,label:Ze})}de.sort((function(e,t){return e.label.localeCompare(t.label)})),(0,d.useEffect)((function(){k.Z.fetchCountries(A).then((function(e){S((0,r.Z)(e))}))}),[A]),(0,d.useEffect)((function(){_&&A&&(O(!0),Y(!0),k.Z.getCategories({country:_,topic:A}).then((function(e){O(!1),ie(e)})).finally((function(e){O(!1),Y(!1)})))}),[_,A]);var ge=(0,d.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;null!==t&&void 0!==t&&t.length&&(J?(te(!1),_&&t&&A&&(O(!0),ce(null),k.Z.submitTask({target_wiki:J,country:_,categories:t,topic_id:A,task_data:t}).then((function(e){var t=null===e||void 0===e?void 0:e.id;L(t),O(!1),G(!1),ce((0,y.jsx)(f.Z,{Server:k.Z,taskID:t,statusRef:le,setDisabled:O,targetLanguage:J}))})))):te(!0))}),[J]);return(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(l.Z,{title:"Add Task",action:(0,y.jsxs)(o.Z,{variant:"contained",color:"success",onClick:ge,disabled:N,size:"small",children:[(0,y.jsx)(s.Z,{})," Generate"]})}),(0,y.jsxs)(c.Z,{children:[(0,y.jsxs)(p.Z,{sx:{display:"flex",justifyContent:"left",flexDirection:"row"},children:[(0,y.jsxs)(g.Z,{sx:{width:300},size:"small",children:[(0,y.jsx)(v.Z,{children:"Country"}),(0,y.jsx)(m.Z,{fullWidth:!0,disabled:N,value:_,label:"Country",onChange:function(e){return e.target.value&&D(e.target.value)},children:w.map((function(e){return(0,y.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,y.jsxs)(g.Z,{sx:{width:300,ml:.5},size:"small",children:[(0,y.jsx)(v.Z,{children:"Target Wiki"}),(0,y.jsx)(m.Z,{fullWidth:!0,disabled:N,error:ee,value:J,label:"Target Wiki",onChange:function(e){return e.target.value&&F(e.target.value)},children:de.map((function(e){return(0,y.jsx)(b.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,y.jsx)(o.Z,{variant:"contained",disabled:N,onClick:function(e){return G(!H)},size:"small",sx:{padding:1},children:H?(0,y.jsx)(Z.Z,{}):(0,y.jsx)(x.Z,{})})]}),(0,y.jsx)(h.Z,{in:H,children:V?(0,y.jsx)(j.Z,{}):(0,y.jsx)(i.Z,{disabled:N,categoryListRef:e,Server:k.Z,initialCategories:ae})}),ue]})]})}},2211:function(e,t,n){n.a(e,(async function(e,r){try{var a=n(1413),i=n(4165),s=n(5861),o=n(9439),u=n(4294),c=n(7621),l=n(9504),d=n(9585),f=n(2791),p=(n(9498),n(4554)),h=n(3239),x=n(2368),Z=n(7),g=n(2460),v=n(1637),m=n(1355),b=n(3518),j=n(1087),k=n(2419),y=n(184),w=await m.Z.getCountryMap(),S=function(){var e=(0,f.useState)(null),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,f.useState)(0),i=(0,o.Z)(a,2),s=(i[0],i[1]),u=(0,f.useState)(0),c=(0,o.Z)(u,2),l=c[0],d=c[1],x=(0,f.useState)(0),Z=(0,o.Z)(x,2),g=Z[0],v=Z[1],b=(0,f.useState)(!1),j=(0,o.Z)(b,2),k=j[0],w=j[1];return(0,f.useEffect)((function(){w(!0),m.Z.getMe().then((function(e){r(e.username),d(e.task_count),s(e.id),v(e.article_count)})).finally((function(){w(!1)}))}),[]),k?(0,y.jsx)(h.Z,{}):(0,y.jsxs)(p.Z,{children:[(0,y.jsxs)("h2",{children:["Welcome, ",n]}),(0,y.jsxs)("h3",{children:["Task Count : ",l]}),(0,y.jsxs)("h3",{children:["Total Article Count : ",g]})]})},C=function(e){var t=e.id,n=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.exportResult(t,"csv");case 2:n=e.sent,(r=document.createElement("a")).href=URL.createObjectURL(new Blob([n],{type:"text/csv"})),r.download="result.csv",r.click();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsx)(u.Z,{variant:"contained",color:"primary",onClick:n,children:(0,y.jsx)(b.Z,{})})},R=[{field:"id",headerName:"ID",maxWidth:70,flex:1},{field:"status",headerName:"Status",maxWidth:100,flex:1},{field:"topic_id",headerName:"Topic",flex:1},{field:"country",headerName:"Country",flex:1},{field:"category_count",headerName:"Category",maxWidth:100,flex:1},{field:"article_count",headerName:"Article",maxWidth:100,flex:1},{field:"download",headerName:"Download",renderCell:function(e){return e.value}}],L=function(){var e=(0,f.useState)([]),t=(0,o.Z)(e,2),n=t[0],r=t[1],i=(0,f.useState)(!1),s=(0,o.Z)(i,2),u=s[0],c=s[1],l=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"medium"});return(0,f.useEffect)((function(){c(!0),m.Z.getTasks().then((function(e){r(e.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{country:w[e.country]||e.country,created_at:l.format(new Date(e.created_at)),download:"done"==e.status&&(0,y.jsx)(C,{id:e.id})})})))})).finally((function(){c(!1)}))}),[]),(0,y.jsx)(x._$,{rows:n,columns:R,initialState:{pagination:{paginationModel:{pageSize:10}}},sx:{"& .MuiDataGrid-row":{cursor:"pointer",color:"white"},"& .Mui-hovered":{color:"black"},"& .Mui-selected":{color:"black"},"& .task-done":{backgroundColor:Z.Z[800],color:"white"},"& .task-done:hover":{backgroundColor:Z.Z[600],color:"white"},"& .task-pending":{backgroundColor:v.Z[300],color:"black"},"& .task-failed":{backgroundColor:g.Z[300]}},rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,rowSelection:!1,getRowClassName:function(e){return"task-".concat(e.row.status," .task")},loading:u})};t.Z=function(){var e=function(){return(0,y.jsx)(j.rU,{to:"create",children:(0,y.jsxs)(u.Z,{variant:"contained",color:"success",children:[(0,y.jsx)(k.Z,{})," New"]})})};return(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(d.Z,{action:(0,y.jsx)(e,{})}),(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(S,{}),(0,y.jsx)(L,{})]})]})},r()}catch(T){r(T)}}),1)},1355:function(e,t,n){var r=n(7762),a=n(4165),i=n(5861),s=n(5671),o=n(3144),u="tk-lang",c="tk-country",l=function(){function e(){(0,s.Z)(this,e)}return(0,o.Z)(e,null,[{key:"init",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.languages&&e.countries){t.next=20;break}if(localStorage.getItem(u)&&localStorage.getItem(c)){t.next=18;break}return t.t0=localStorage,t.t1=c,t.t2=JSON,t.next=7,fetch("/api/country").then((function(e){return e.json()})).then((function(e){return e.data}));case 7:return t.t3=t.sent,t.t4=t.t2.stringify.call(t.t2,t.t3),t.t0.setItem.call(t.t0,t.t1,t.t4),t.t5=localStorage,t.t6=u,t.t7=JSON,t.next=15,fetch("/api/language").then((function(e){return e.json()})).then((function(e){return e.data}));case 15:t.t8=t.sent,t.t9=t.t7.stringify.call(t.t7,t.t8),t.t5.setItem.call(t.t5,t.t6,t.t9);case 18:e.languages=JSON.parse(localStorage.getItem(u)||"{}"),e.countries=JSON.parse(localStorage.getItem(c)||"{}");case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addSubCategories",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var i,s,o,u,c,l,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=[],s=(0,r.Z)(n),t.prev=2,s.s();case 4:if((o=s.n()).done){t.next=18;break}return u=o.value,console.info("Adding subcategories for",u.title),c=new URL("api/subcat/"+u.title,e.baseURL),t.next=10,fetch(c.toString());case 10:return l=t.sent,t.next=13,l.json();case 13:d=t.sent,i=i.concat(d.data),u.subcat=!1;case 16:t.next=4;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),s.e(t.t0);case 23:return t.prev=23,s.f(),t.finish(23);case 26:return t.abrupt("return",i);case 27:case"end":return t.stop()}}),t,null,[[2,20,23,26]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCategories",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.country,i=n.topic,s=new URL("api/topic/".concat(i.split("/")[0],"/").concat(r,"/categories"),e.baseURL),t.next=4,fetch(s.toString());case 4:return o=t.sent,t.next=7,o.json();case 7:if(!(u=t.sent).success){t.next=12;break}return t.abrupt("return",u.data);case 12:return console.log("Error",u.data),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"submitTask",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchCountries",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,u;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n+"/country",e.baseURL),t.next=3,fetch(r.toString());case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=13;break}return o=s.data,u=o.map((function(e){return{id:e.id.split("/")[1],label:e.title}})),t.abrupt("return",u);case 13:return console.log("Error",s.data),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"exportResult",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o,u=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"json",i=new URL("api/task/".concat(n,"/export/")+r,e.baseURL),t.next=4,fetch(i.toString());case 4:return s=t.sent,t.next=7,s.json();case 7:return o=t.sent,t.abrupt("return",o.data);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTask",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/task/"+n,e.baseURL),t.next=3,fetch(r.toString());case 3:return i=t.sent,t.next=6,i.json();case 6:if(!(s=t.sent).success){t.next=11;break}return t.abrupt("return",s.data);case 11:return console.log("Error",s.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTasks",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/task",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getMe",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/user/me",e.baseURL),t.next=3,fetch(n.toString());case 3:return r=t.sent,t.next=6,r.json();case 6:if(!(i=t.sent).success){t.next=11;break}return t.abrupt("return",i.data);case 11:return console.log("Error",i.data),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCountryMap",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var n,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new URL("api/country",e.baseURL),t.next=3,fetch(n).then((function(e){return e.json()}));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"searchCategory",value:function(e,t){var n="",r=!1;function s(){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)((0,a.Z)().mark((function i(){var s,o,u,c,l;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=n){a.next=2;break}return a.abrupt("return",e([]));case 2:return s=new URL("https://en.wikipedia.org/w/api.php"),o=new URLSearchParams({action:"query",format:"json",list:"prefixsearch",formatversion:"2",pssearch:n,pslimit:"10",psnamespace:"14",origin:"*"}),s.search=o.toString(),a.next=7,fetch(s.toString());case 7:return u=a.sent,a.next=10,u.json();case 10:return c=a.sent,l=c.query.prefixsearch.map((function(e){return{id:e.pageid,title:e.title}})),r=!1,t(!1),a.abrupt("return",e(l));case 15:case"end":return a.stop()}}),i)})))).apply(this,arguments)}return function(e){var a;t(!0),n=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value,0==r?(r=!0,setTimeout(s,1e3)):console.log("Already queued")}}},{key:"createTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic",e.baseURL),t.next=3,fetch(r.toString(),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:return i=t.sent,console.log(i),t.abrupt("return",i.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URL("api/topic/"+n,e.baseURL),t.next=3,fetch(r.toString()).then((function(e){return e.json()}));case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateTopic",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.id,i=n.categories,s=new URL("api/topic/"+r,e.baseURL),t.next=4,fetch(s.toString(),{method:"POST",body:JSON.stringify({categories:i}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateMe",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(n){var r,i,s,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.username,i=n.rights,s=new URL("api/user/me",e.baseURL),t.next=4,fetch(s.toString(),{method:"POST",body:JSON.stringify({username:r,rights:i}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}();l.baseURL=new URL(window.location.origin),l.languages=null,l.countries=null,t.Z=l},9778:function(e,t,n){n.a(e,(async function(e,r){try{n.r(t);var a=n(7689),i=n(2791),s=n(5187),o=n(2211),u=n(1448),c=n(1355),l=n(184),d=e([o]);o=(d.then?(await d)():d)[0];var f=(0,i.lazy)((function(){return n.e(490).then(n.bind(n,7490))})),p=(0,i.lazy)((function(){return n.e(477).then(n.bind(n,7477))})),h=(0,i.lazy)((function(){return n.e(984).then(n.bind(n,984))}));c.Z.init();t.default=function(){var e=h,t=(0,l.jsxs)(a.AW,{path:"/topic/*",children:[(0,l.jsx)(a.AW,{path:"create",element:(0,l.jsx)(f,{})}),(0,l.jsx)(a.AW,{path:"edit",element:(0,l.jsx)(p,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(h,{})})]});return(0,l.jsxs)(a.Z5,{children:[t,(0,l.jsxs)(a.AW,{path:"task/*",children:[(0,l.jsx)(a.AW,{path:"create",element:(0,l.jsx)(s.Z,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(o.Z,{})})]}),(0,l.jsx)(a.AW,{path:"/setting",element:(0,l.jsx)(u.Z,{})}),(0,l.jsx)(a.AW,{path:"*",element:(0,l.jsx)(e,{})})]})},r()}catch(x){r(x)}}))},9498:function(e,t,n){var r=n(4165),a=n(5861),i=n(9439),s=n(3239),o=n(4294),u=n(2791),c=n(2419),l=n(7391),d=n(4554),f=n(3518),p=n(1292),h=n(7621),x=n(9585),Z=n(9504),g=n(6125),v=n(258),m=n(1355),b=n(5289),j=n(5661),k=n(9157),y=n(7123),w=n(890),S=n(2368),C=n(184),R=function(e){var t=e.open,n=e.onClose,r=e.englishTitle,a=e.suggestedTargetTitle,s=e.languageCode,c=e.action,d=u.useState(a),f=(0,i.Z)(d,2),p=f[0],h=f[1];(0,u.useEffect)((function(){h(a)}),[a]);var x={title:"",targetURL:"",buttonName:""};return"translate"==c?(x.title="Translate",x.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=Special:ContentTranslation&campaign=fnf&from=en&page=").concat(r,"&to=").concat(s,"&targettitle=").concat(p),x.buttonName="Translate"):(x.title="Create",x.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=").concat(p,"&campaign=fnf&from=en&page=").concat(r,"&to=").concat(p,"&action=edit"),x.buttonName="Create"),(0,C.jsxs)(b.Z,{open:t,onClose:n,children:[(0,C.jsx)(j.Z,{children:x.title}),(0,C.jsxs)(k.Z,{children:[(0,C.jsx)(w.Z,{variant:"body1",gutterBottom:!0,children:(0,C.jsxs)("b",{children:["English : ",(0,C.jsx)("a",{href:"https://en.wikipedia.org/wiki/"+r,target:"_blank",style:{textDecoration:"none"},children:r})]})}),(0,C.jsx)(l.Z,{id:"outlined-multiline-static",label:"Target Title",multiline:!0,value:p,fullWidth:!0,onChange:function(e){return h(e.target.value)},sx:{mt:1}})]}),(0,C.jsxs)(y.Z,{children:[(0,C.jsx)(o.Z,{sx:{mr:1},onClick:function(){return n(null)},color:"secondary",variant:"contained",size:"small",children:"Cancel"}),(0,C.jsx)(o.Z,{color:"primary",variant:"contained",component:"a",size:"small",href:x.targetURL,target:"_blank",autoFocus:!0,children:x.buttonName})]})]})},L=[{field:"id",headerName:"ID",maxWidth:70,flex:1,hideable:!1},{field:"title",headerName:"Title",flex:1,hideable:!1,minWidth:300},{field:"target",headerName:"Target",flex:1,minWidth:300},{field:"action",headerName:"Action",flex:1,minWidth:150,hideable:!1,renderCell:function(e){return e.value}}],T=function(e){var t=e.data,n=e.targetLanguage,r=u.useState(null),a=(0,i.Z)(r,2),s=a[0],l=a[1],d=u.useState(!1),f=(0,i.Z)(d,2),p=f[0],h=f[1],x=u.useState(""),Z=(0,i.Z)(x,2),g=Z[0],m=Z[1],b=u.useState(""),j=(0,i.Z)(b,2),k=j[0],y=j[1],w=function(e){l(e.currentTarget.dataset.action),m(e.currentTarget.dataset.src),y(e.currentTarget.dataset.target),h(!0)},T=(0,u.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e,t){return{id:t+1,title:null===e||void 0===e?void 0:e.title,wikidata:null===e||void 0===e?void 0:e.wikidata,target:null===e||void 0===e?void 0:e.target,action:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.Z,{variant:"contained",color:"primary",size:"small","data-action":"create","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:w,children:(0,C.jsx)(c.Z,{})}),(0,C.jsx)(o.Z,{variant:"contained",sx:{ml:1},color:"primary",size:"small","data-action":"translate","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:w,children:(0,C.jsx)(v.Z,{})})]})}}))}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(R,{open:p,action:s,onClose:function(){return h(!1)},suggestedTargetTitle:k,englishTitle:g,languageCode:n}),(0,C.jsx)(S._$,{rows:T,columns:L,pageSize:50,rowsPerPageOptions:[50],checkboxSelection:!1,disableSelectionOnClick:!0,initialState:{pagination:{paginationModel:{pageSize:25}}},sx:{width:"100%"}})]})},U=function(e){var t=e.data;return(0,C.jsx)(l.Z,{id:"outlined-multiline-static",label:null,multiline:!0,rows:4,value:t,fullWidth:!0,onClick:function(e){return e.target.select()}})};t.Z=function(e){var t=e.taskID,n=e.statusRef,c=e.setDisabled,l=e.targetLanguage,v=u.useState([]),b=(0,i.Z)(v,2),j=b[0],k=b[1],y=u.useState(""),w=(0,i.Z)(y,2),S=w[0],R=w[1],L=u.useState(!1),N=(0,i.Z)(L,2),O=N[0],W=N[1],z=u.useState(null),A=(0,i.Z)(z,2),E=A[0],I=A[1],_=u.useState(null),D=(0,i.Z)(_,2),M=(D[0],D[1]),P=u.useState(0),J=(0,i.Z)(P,2),F=J[0],B=J[1],q=u.useState(0),H=(0,i.Z)(q,2),G=H[0],$=H[1],K=u.useState(""),V=(0,i.Z)(K,2),Y=V[0],Q=V[1],X=u.useState(0),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],re=u.useState(!1),ae=(0,i.Z)(re,2),ie=ae[0],se=ae[1];n.current=ie;var oe=(0,u.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.getTask(t);case 2:"pending"!=(n=e.sent).status?(se(!1),c(!1),B(0),"done"==n.status?le():"failed"==n.status&&alert("Task Failed")):(se(!0),c(!0),B(setTimeout(oe,1e3))),$(n.article_count),Q(n.last_category),ne(n.category_count);case 7:case"end":return e.stop()}}),e)}))),[t]),ue=(0,u.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,t){var n=document.createElement("a");n.download="results-".concat(e,".csv"),n.href=URL.createObjectURL(new Blob([t],{type:"application/csv"})),n.click(),n.remove()},E){e.next=7;break}return e.next=4,m.Z.exportResult(t,"csv");case 4:return a=e.sent,I(a),e.abrupt("return",n(t,a));case 7:return e.abrupt("return",n(t,E));case 9:case"end":return e.stop()}}),e)}))),[t]),ce=(0,u.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=4;break}W(!1),e.next=13;break;case 4:if(S){e.next=12;break}return e.next=7,m.Z.exportResult(t,"wikitext");case 7:n=e.sent,W(!0),R(n),e.next=13;break;case 12:W(!0);case 13:case"end":return e.stop()}}),e)}))),[t,O]),le=(0,u.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.exportResult(t,"json");case 2:n=e.sent,k(n),M(JSON.stringify(n));case 5:case"end":return e.stop()}}),e)}))),[t]);u.useEffect((function(){return oe(),function(){clearTimeout(F),B(0)}}),[t,oe]);var de=(0,C.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center","& > *":{m:1}},children:[(0,C.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:ce,disabled:ie,size:"small",sx:{mr:1},children:[(0,C.jsx)(p.Z,{})," Wiki"]}),(0,C.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:ue,disabled:ie,size:"small",children:[(0,C.jsx)(f.Z,{})," CSV"]})]}),fe=(0,C.jsxs)(d.Z,{sx:{fontSize:"16px"},children:["Article count : ",G,(0,C.jsx)("br",{}),"Processed Count : ",te,(0,C.jsx)("br",{}),"Last Category: ",Y,(0,C.jsx)("br",{})]});return(0,C.jsxs)(h.Z,{sx:{m:"5px"},children:[(0,C.jsx)(x.Z,{action:de,title:fe}),(0,C.jsx)(Z.Z,{children:ie?(0,C.jsx)(s.Z,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.Z,{in:O,children:(0,C.jsx)(U,{data:S})}),(null===j||void 0===j?void 0:j.length)>0&&(0,C.jsx)(T,{data:j,targetLanguage:l})]})})]})}},6691:function(e,t,n){var r=n(1413),a=n(9439),i=n(5527),s=n(570),o=n(4294),u=n(493),c=n(2791),l=n(3766),d=n(2419),f=n(7391),p=n(5021),h=n(9900),x=n(7247),Z=n(4721),g=n(4554),v=n(1355),m=n(184),b=function(e){var t=e.category,n=e.onRemove,r=e.onSubCategory;return(0,m.jsxs)(p.ZP,{children:[(0,m.jsx)(h.Z,{sx:{padding:"5px"},primary:null===t||void 0===t?void 0:t.title}),(0,m.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return r(null===t||void 0===t?void 0:t.id)},children:(0,m.jsx)(s.Z,{})}),(0,m.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return n(null===t||void 0===t?void 0:t.id)},children:(0,m.jsx)(x.Z,{})})]})},j=function(e){var t=e.onAdd,n=e.disabled,i=c.useState(!1),s=(0,a.Z)(i,2),u=s[0],p=s[1],h=c.useState([]),x=(0,a.Z)(h,2),Z=x[0],b=x[1],j=c.useState(""),k=(0,a.Z)(j,2),y=k[0],w=k[1],S=c.useCallback(v.Z.searchCategory(b,p),[]),C=c.useCallback((function(e){var n=Z.find((function(e){return e.title===y}));n&&(t(n),w(""))}),[Z,y]);return(0,m.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%"},children:[(0,m.jsx)(l.Z,{id:"new-category",options:Z,disabled:n,size:"small",clearOnBlur:!0,clearOnEscape:!0,loading:u,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},sx:{width:"100%",maxWidth:"400px",marginRight:"10px",marginLeft:"10px"},renderInput:function(e){return(0,m.jsx)(f.Z,(0,r.Z)((0,r.Z)({},e),{},{disabled:n,onInput:S,onSelect:function(e){return w(e.target.value)},label:"Add Category"}))}}),(0,m.jsx)(o.Z,{disabled:n,variant:"contained",color:"success",onClick:C,children:(0,m.jsx)(d.Z,{})})]})};t.Z=function(e){var t=e.categoryListRef,n=e.initialCategories,s=e.disabled,o=void 0!==s&&s,l=c.useState({}),d=(0,a.Z)(l,2),f=d[0],p=d[1],h=c.useMemo((function(){return Object.values(f)}),[f]),x=c.useCallback((function(e){e&&f[e]&&(delete f[e],p((0,r.Z)({},f)))}),[f]),g=c.useCallback((function(e){e&&(f[e.id]||(f[e.id]=e,p((0,r.Z)({},f))))}),[f]),k=c.useCallback((function(e){console.log("onSubCategory",e);var t=f[e];t&&v.Z.addSubCategories([t]).then((function(e){e.forEach((function(e){f[e.id]=e})),p((0,r.Z)({},f))}))}),[f]);return c.useEffect((function(){t&&(t.current=h)}),[h,t]),c.useEffect((function(){null!==n&&void 0!==n&&n.length&&p(null===n||void 0===n?void 0:n.reduce((function(e,t){return e[t.id]=t,e}),{}))}),[n]),(0,m.jsxs)(i.Z,{elevation:0,children:[(0,m.jsx)(u.Z,{dense:!0,children:null===h||void 0===h?void 0:h.map((function(e,t){return(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(b,{category:e,onRemove:x,onSubCategory:k}),(0,m.jsx)(Z.Z,{})]},"cat"+t)}))}),(0,m.jsx)("br",{}),(0,m.jsx)(j,{onAdd:g,disabled:o})]})}}}]);
//# sourceMappingURL=778.271420ea.chunk.js.map