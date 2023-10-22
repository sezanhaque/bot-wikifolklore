"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{3941:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4554),i=n(4294),r=n(5527),s=n(890),o=n(1087),l=n(2419),c=n(2359),u=n(7122),d=n(2216),x=n(914),f=n(1355),h=n(184);function Z(e){var t=e.user,n=[];return f.Z.hasAccess(t.rights,f.Z.RIGHTS.TASK)&&n.push((0,h.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,h.jsx)("legend",{children:"List Generation"}),(0,h.jsxs)(i.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/task/create",children:[(0,h.jsx)(l.Z,{})," \xa0 Add Task"]}),(0,h.jsxs)(i.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/task",children:[(0,h.jsx)(c.Z,{})," \xa0 List Tasks"]})]},"task")),f.Z.hasAccess(t.rights,f.Z.RIGHTS.TOPIC)&&n.push((0,h.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,h.jsx)("legend",{children:"Topic Management"}),(0,h.jsxs)(i.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/topic/create",children:[(0,h.jsx)(l.Z,{})," \xa0 Create New Topic"]}),(0,h.jsxs)(i.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/topic",children:[(0,h.jsx)(c.Z,{})," \xa0 See All Topics"]})]},"topic")),f.Z.hasAccess(t.rights,f.Z.RIGHTS.STATS)&&n.push((0,h.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",p:1,alignItems:"center",justifyContent:"center"},component:"fieldset",children:[(0,h.jsx)("legend",{children:"User Management"}),(0,h.jsxs)(i.Z,{variant:"contained",color:"primary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/setting",children:[(0,h.jsx)(u.Z,{})," \xa0 Settings"]}),(0,h.jsxs)(i.Z,{variant:"contained",color:"secondary",size:"small",sx:{padding:1,m:1},component:o.rU,to:"/tuktukbot/user",children:[(0,h.jsx)(d.Z,{})," \xa0 See All Users"]})]},"user")),(0,h.jsxs)(r.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:[(0,h.jsx)(s.Z,{variant:"title",component:"h2",sx:{textAlign:"center",m:2},children:"Welcome to TukTuk"}),(0,h.jsx)(s.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:"This is a tool to help you manage your tasks and topics."}),(0,h.jsx)("hr",{}),n,(0,h.jsx)(x.Z,{})]})}},1448:function(e,t,n){var a=n(9439),i=n(5527),r=n(4294),s=n(165),o=n(1355),l=n(2791),c=n(914),u=n(184);t.Z=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),n=(t[0],t[1],(0,l.useCallback)((function(e){window.confirm("\n        Are you want to hide your username from all the records?\n        This action is irreversible and it would:\n        - Hide your username from all the records\n        - Keep your central ID intact\n        - log you out from now. You need to login again to continue\n        ")&&o.Z.updateMe({username:"Hidden"}).then((function(e){fetch("/user/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){window.location.href="/user/login"}))}))}),[]));return(0,u.jsxs)(i.Z,{sx:{height:"100%",width:"100%",m:0,border:0,outline:0,position:"absolute"},children:[(0,u.jsxs)(r.Z,{variant:"contained",color:"error",size:"small",sx:{padding:1,m:1},onClick:n,children:[(0,u.jsx)(s.Z,{})," \xa0 Hide my username"]}),(0,u.jsx)(c.Z,{})]})}},5187:function(e,t,n){var a=n(3433),i=n(9439),r=n(6691),s=n(2359),o=n(4294),l=n(7621),c=n(9504),u=n(9585),d=n(2791),x=n(9498),f=n(4554),h=n(6125),Z=n(1131),g=n(2885),m=n(8096),j=n(4925),p=n(8406),v=n(3786),k=n(3239),b=n(1355),y=n(914),C=n(184);t.Z=function(){for(var e=d.useRef([]),t=(0,d.useState)([]),n=(0,i.Z)(t,2),S=n[0],w=n[1],T=(0,d.useState)(null),A=(0,i.Z)(T,2),W=(A[0],A[1]),z=(0,d.useState)(!1),R=(0,i.Z)(z,2),I=R[0],N=R[1],D=(0,d.useState)("folklore"),L=(0,i.Z)(D,2),U=L[0],_=(L[1],(0,d.useState)("BD")),O=(0,i.Z)(_,2),E=O[0],M=O[1],P=(0,d.useState)(""),G=(0,i.Z)(P,2),H=G[0],F=G[1],B=(0,d.useState)(!0),J=(0,i.Z)(B,2),K=J[0],$=J[1],V=(0,d.useState)(!1),Y=(0,i.Z)(V,2),q=Y[0],Q=Y[1],X=(0,d.useState)(!1),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],ae=(0,d.useState)([]),ie=(0,i.Z)(ae,2),re=ie[0],se=ie[1],oe=(0,d.useState)(null),le=(0,i.Z)(oe,2),ce=le[0],ue=le[1],de=d.useRef(!1),xe=[],fe=0,he=Object.entries(b.Z.languages);fe<he.length;fe++){var Ze=(0,i.Z)(he[fe],2),ge=Ze[0],me=Ze[1];xe.push({id:ge,label:me})}xe.sort((function(e,t){return e.label.localeCompare(t.label)})),(0,d.useEffect)((function(){b.Z.fetchCountries(U).then((function(e){w((0,a.Z)(e))}))}),[U]),(0,d.useEffect)((function(){E&&U&&(N(!0),Q(!0),b.Z.getCategories({country:E,topic:U}).then((function(e){N(!1),se(e)})).finally((function(e){N(!1),Q(!1)})))}),[E,U]);var je=(0,d.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;null!==t&&void 0!==t&&t.length&&(H?(ne(!1),E&&t&&U&&(N(!0),ue(null),b.Z.submitTask({target_wiki:H,country:E,categories:t,topic_id:U,task_data:t}).then((function(e){var t=null===e||void 0===e?void 0:e.id;W(t),N(!1),$(!1),ue((0,C.jsx)(x.Z,{Server:b.Z,taskID:t,statusRef:de,setDisabled:N,targetLanguage:H}))})))):ne(!0))}),[H]);return(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(u.Z,{title:"Add Task",action:(0,C.jsxs)(o.Z,{variant:"contained",color:"success",onClick:je,disabled:I,size:"small",children:[(0,C.jsx)(s.Z,{})," Generate"]})}),(0,C.jsxs)(c.Z,{children:[(0,C.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"left",flexDirection:"row"},children:[(0,C.jsxs)(m.Z,{sx:{width:300},size:"small",children:[(0,C.jsx)(j.Z,{children:"Country"}),(0,C.jsx)(p.Z,{fullWidth:!0,disabled:I,value:E,label:"Country",onChange:function(e){return e.target.value&&M(e.target.value)},children:S.map((function(e){return(0,C.jsx)(v.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,C.jsxs)(m.Z,{sx:{width:300,ml:.5},size:"small",children:[(0,C.jsx)(j.Z,{children:"Target Wiki"}),(0,C.jsx)(p.Z,{fullWidth:!0,disabled:I,error:te,value:H,label:"Target Wiki",onChange:function(e){return e.target.value&&F(e.target.value)},children:xe.map((function(e){return(0,C.jsx)(v.Z,{value:e.id,children:e.label},e.id)}))})]}),(0,C.jsx)(o.Z,{variant:"contained",disabled:I,onClick:function(e){return $(!K)},size:"small",sx:{padding:1},children:K?(0,C.jsx)(g.Z,{}):(0,C.jsx)(Z.Z,{})})]}),(0,C.jsx)(h.Z,{in:K,children:q?(0,C.jsx)(k.Z,{}):(0,C.jsx)(r.Z,{disabled:I,categoryListRef:e,Server:b.Z,initialCategories:re})}),ce,(0,C.jsx)(y.Z,{})]})]})}},2211:function(e,t,n){n.a(e,(async function(e,a){try{var i=n(1413),r=n(4165),s=n(5861),o=n(9439),l=n(4294),c=n(7621),u=n(9504),d=n(9585),x=n(2791),f=(n(9498),n(4554)),h=n(3239),Z=n(1072),g=n(7),m=n(2460),j=n(1637),p=n(1355),v=n(3518),k=n(1087),b=n(2419),y=n(914),C=n(184),S=await p.Z.getCountryMap(),w=function(){var e=(0,x.useState)(null),t=(0,o.Z)(e,2),n=t[0],a=t[1],i=(0,x.useState)(0),r=(0,o.Z)(i,2),s=(r[0],r[1]),l=(0,x.useState)(0),c=(0,o.Z)(l,2),u=c[0],d=c[1],Z=(0,x.useState)(0),g=(0,o.Z)(Z,2),m=g[0],j=g[1],v=(0,x.useState)(!1),k=(0,o.Z)(v,2),b=k[0],y=k[1];return(0,x.useEffect)((function(){y(!0),p.Z.getMe().then((function(e){a(e.username),d(e.task_count),s(e.id),j(e.article_count)})).finally((function(){y(!1)}))}),[]),b?(0,C.jsx)(h.Z,{}):(0,C.jsxs)(f.Z,{children:[(0,C.jsxs)("h2",{children:["Welcome, ",n]}),(0,C.jsxs)("h3",{children:["Task Count : ",u]}),(0,C.jsxs)("h3",{children:["Total Article Count : ",m]})]})},T=function(e){var t=e.id,n=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.exportResult(t,"csv");case 2:n=e.sent,(a=document.createElement("a")).href=URL.createObjectURL(new Blob([n],{type:"text/csv"})),a.download="result.csv",a.click();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,C.jsx)(l.Z,{variant:"contained",color:"primary",onClick:n,children:(0,C.jsx)(v.Z,{})})},A=[{field:"id",headerName:"ID",maxWidth:70,flex:1},{field:"status",headerName:"Status",maxWidth:100,flex:1},{field:"topic_id",headerName:"Topic",flex:1},{field:"country",headerName:"Country",flex:1},{field:"category_count",headerName:"Category",maxWidth:100,flex:1},{field:"article_count",headerName:"Article",maxWidth:100,flex:1},{field:"download",headerName:"Download",renderCell:function(e){return e.value}}],W=function(){var e=(0,x.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],r=(0,x.useState)(!1),s=(0,o.Z)(r,2),l=s[0],c=s[1],u=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"medium"});return(0,x.useEffect)((function(){c(!0),p.Z.getTasks().then((function(e){a(e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{country:S[e.country]||e.country,created_at:u.format(new Date(e.created_at)),download:"done"==e.status&&(0,C.jsx)(T,{id:e.id})})})))})).finally((function(){c(!1)}))}),[]),(0,C.jsx)(Z._$,{rows:n,columns:A,initialState:{pagination:{paginationModel:{pageSize:10}}},sx:{"& .MuiDataGrid-row":{cursor:"pointer",color:"white"},"& .Mui-hovered":{color:"black"},"& .Mui-selected":{color:"black"},"& .task-done":{backgroundColor:g.Z[800],color:"white"},"& .task-done:hover":{backgroundColor:g.Z[600],color:"white"},"& .task-pending":{backgroundColor:j.Z[300],color:"black"},"& .task-failed":{backgroundColor:m.Z[300]}},rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0,rowSelection:!1,getRowClassName:function(e){return"task-".concat(e.row.status," .task")},loading:l})};t.Z=function(){var e=function(){return(0,C.jsx)(k.rU,{to:"/tuktukbot/task/create",children:(0,C.jsxs)(l.Z,{variant:"contained",color:"success",children:[(0,C.jsx)(b.Z,{})," New List"]})})};return(0,C.jsxs)(c.Z,{children:[(0,C.jsx)(d.Z,{action:(0,C.jsx)(e,{})}),(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(w,{}),(0,C.jsx)(W,{}),(0,C.jsx)(y.Z,{})]})]})},a()}catch(z){a(z)}}),1)},9778:function(e,t,n){n.a(e,(async function(e,a){try{n.r(t);var i=n(7689),r=n(2791),s=n(5187),o=n(2211),l=n(1448),c=n(3941),u=n(1355),d=n(184),x=e([o]);o=(x.then?(await x)():x)[0];var f=(0,r.lazy)((function(){return n.e(490).then(n.bind(n,7490))})),h=(0,r.lazy)((function(){return n.e(477).then(n.bind(n,7477))})),Z=(0,r.lazy)((function(){return n.e(984).then(n.bind(n,984))})),g=(0,r.lazy)((function(){return n.e(123).then(n.bind(n,3123))})),m=(0,r.lazy)((function(){return Promise.all([n.e(384),n.e(560)]).then(n.bind(n,3560))}));u.Z.init();t.default=function(e){var t=e.user,n=(0,d.jsxs)(i.AW,{path:"topic/*",children:[(0,d.jsx)(i.AW,{path:"create",element:(0,d.jsx)(f,{})}),(0,d.jsx)(i.AW,{path:"edit",element:(0,d.jsx)(h,{})}),(0,d.jsx)(i.AW,{path:"*",element:(0,d.jsx)(Z,{})})]}),a=(0,d.jsxs)(i.AW,{path:"user/*",children:[(0,d.jsx)(i.AW,{path:"edit",element:(0,d.jsx)(m,{user:t})}),(0,d.jsx)(i.AW,{path:"*",element:(0,d.jsx)(g,{user:t})})]});return(0,d.jsxs)(i.Z5,{children:[u.Z.hasAccess(t.rights,u.Z.RIGHTS.TOPIC)&&n,u.Z.hasAccess(t.rights,u.Z.RIGHTS.GRANT)&&a,(0,d.jsxs)(i.AW,{path:"task/*",children:[(0,d.jsx)(i.AW,{path:"create",element:(0,d.jsx)(s.Z,{})}),(0,d.jsx)(i.AW,{path:"*",element:(0,d.jsx)(o.Z,{})})]}),(0,d.jsx)(i.AW,{path:"setting",element:(0,d.jsx)(l.Z,{})}),(0,d.jsx)(i.AW,{path:"*",element:(0,d.jsx)(c.Z,{user:t})})]})},a()}catch(j){a(j)}}))},9498:function(e,t,n){var a=n(4165),i=n(5861),r=n(9439),s=n(3239),o=n(4294),l=n(2791),c=n(2419),u=n(7391),d=n(4554),x=n(3518),f=n(1292),h=n(7621),Z=n(9585),g=n(9504),m=n(6125),j=n(258),p=n(1355),v=n(5289),k=n(5661),b=n(9157),y=n(7123),C=n(890),S=n(1072),w=n(184),T=function(e){var t=e.open,n=e.onClose,a=e.englishTitle,i=e.suggestedTargetTitle,s=e.languageCode,c=e.action,d=l.useState(i),x=(0,r.Z)(d,2),f=x[0],h=x[1];(0,l.useEffect)((function(){h(i)}),[i]);var Z={title:"",targetURL:"",buttonName:""};return"translate"==c?(Z.title="Translate",Z.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=Special:ContentTranslation&campaign=fnf&from=en&page=").concat(a,"&to=").concat(s,"&targettitle=").concat(f),Z.buttonName="Translate"):(Z.title="Create",Z.targetURL="https://".concat(s,".wikipedia.org/w/index.php?title=").concat(f,"&campaign=fnf&from=en&page=").concat(a,"&to=").concat(f,"&action=edit"),Z.buttonName="Create"),(0,w.jsxs)(v.Z,{open:t,onClose:n,children:[(0,w.jsx)(k.Z,{children:Z.title}),(0,w.jsxs)(b.Z,{children:[(0,w.jsx)(C.Z,{variant:"body1",gutterBottom:!0,children:(0,w.jsxs)("b",{children:["English : ",(0,w.jsx)("a",{href:"https://en.wikipedia.org/wiki/"+a,target:"_blank",style:{textDecoration:"none"},children:a})]})}),(0,w.jsx)(u.Z,{id:"outlined-multiline-static",label:"Target Title",multiline:!0,value:f,fullWidth:!0,onChange:function(e){return h(e.target.value)},sx:{mt:1}})]}),(0,w.jsxs)(y.Z,{children:[(0,w.jsx)(o.Z,{sx:{mr:1},onClick:function(){return n(null)},color:"secondary",variant:"contained",size:"small",children:"Cancel"}),(0,w.jsx)(o.Z,{color:"primary",variant:"contained",component:"a",size:"small",href:Z.targetURL,target:"_blank",autoFocus:!0,children:Z.buttonName})]})]})},A=[{field:"id",headerName:"ID",maxWidth:70,flex:1,hideable:!1},{field:"action",headerName:"Action",flex:1,minWidth:150,hideable:!1,renderCell:function(e){return e.value}},{field:"title",headerName:"Title",flex:1,hideable:!1,minWidth:300},{field:"target",headerName:"Target",flex:1,minWidth:300}],W=function(e){var t=e.data,n=e.targetLanguage,a=e.taskID,i=l.useState(null),s=(0,r.Z)(i,2),u=s[0],d=s[1],x=l.useState(!1),f=(0,r.Z)(x,2),h=f[0],Z=f[1],g=l.useState(""),m=(0,r.Z)(g,2),p=m[0],v=m[1],k=l.useState(""),b=(0,r.Z)(k,2),y=b[0],C=b[1],W=function(e){d(e.currentTarget.dataset.action),v(e.currentTarget.dataset.src),C(e.currentTarget.dataset.target),Z(!0)},z=(0,l.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e,t){return{id:t+1,title:null===e||void 0===e?void 0:e.title,wikidata:null===e||void 0===e?void 0:e.wikidata,target:null===e||void 0===e?void 0:e.target,action:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o.Z,{variant:"contained",color:"primary",size:"small","data-action":"create","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:W,children:(0,w.jsx)(c.Z,{})}),(0,w.jsx)(o.Z,{variant:"contained",sx:{ml:1},color:"primary",size:"small","data-action":"translate","data-src":null===e||void 0===e?void 0:e.title,"data-target":null===e||void 0===e?void 0:e.target,onClick:W,children:(0,w.jsx)(j.Z,{})})]})}}))}),[t,a]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(T,{open:h,action:u,onClose:function(){return Z(!1)},suggestedTargetTitle:y,englishTitle:p,languageCode:n}),(0,w.jsx)(S._$,{rows:z,columns:A,pageSize:50,rowsPerPageOptions:[50],checkboxSelection:!1,disableSelectionOnClick:!0,initialState:{pagination:{paginationModel:{pageSize:25}}},sx:{width:"100%"}})]})},z=function(e){var t=e.data;return(0,w.jsx)(u.Z,{id:"outlined-multiline-static",label:null,multiline:!0,rows:4,value:t,fullWidth:!0,onClick:function(e){return e.target.select()}})};t.Z=function(e){var t=e.taskID,n=e.statusRef,c=e.setDisabled,u=e.targetLanguage,j=l.useState([]),v=(0,r.Z)(j,2),k=v[0],b=v[1],y=l.useState(""),C=(0,r.Z)(y,2),S=C[0],T=C[1],A=l.useState(!1),R=(0,r.Z)(A,2),I=R[0],N=R[1],D=l.useState(null),L=(0,r.Z)(D,2),U=L[0],_=L[1],O=l.useState(null),E=(0,r.Z)(O,2),M=(E[0],E[1]),P=l.useState(0),G=(0,r.Z)(P,2),H=G[0],F=G[1],B=l.useState(0),J=(0,r.Z)(B,2),K=J[0],$=J[1],V=l.useState(""),Y=(0,r.Z)(V,2),q=Y[0],Q=Y[1],X=l.useState(0),ee=(0,r.Z)(X,2),te=ee[0],ne=ee[1],ae=l.useState(!1),ie=(0,r.Z)(ae,2),re=ie[0],se=ie[1];n.current=re;var oe=(0,l.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getTask(t);case 2:"pending"!=(n=e.sent).status?(se(!1),c(!1),F(0),"done"==n.status?ue():"failed"==n.status&&alert("Task Failed")):(se(!0),c(!0),F(setTimeout(oe,1e3)),b([])),$(n.article_count),Q(n.last_category),ne(n.category_count);case 7:case"end":return e.stop()}}),e)}))),[t]),le=(0,l.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e,t){var n=document.createElement("a");n.download="results-".concat(e,".csv"),n.href=URL.createObjectURL(new Blob([t],{type:"application/csv"})),n.click(),n.remove()},U){e.next=7;break}return e.next=4,p.Z.exportResult(t,"csv");case 4:return i=e.sent,_(i),e.abrupt("return",n(t,i));case 7:return e.abrupt("return",n(t,U));case 9:case"end":return e.stop()}}),e)}))),[t]),ce=(0,l.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=4;break}N(!1),e.next=13;break;case 4:if(S){e.next=12;break}return e.next=7,p.Z.exportResult(t,"wikitext");case 7:n=e.sent,N(!0),T(n),e.next=13;break;case 12:N(!0);case 13:case"end":return e.stop()}}),e)}))),[t,I]),ue=(0,l.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.exportResult(t,"json");case 2:n=e.sent,b(n),M(JSON.stringify(n));case 5:case"end":return e.stop()}}),e)}))),[t]);l.useEffect((function(){return oe(),function(){clearTimeout(H),F(0)}}),[t,oe]);var de=(0,w.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center","& > *":{m:1}},children:[(0,w.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:ce,disabled:re,size:"small",sx:{mr:1},children:[(0,w.jsx)(f.Z,{})," Wiki"]}),(0,w.jsxs)(o.Z,{variant:"contained",color:"primary",onClick:le,disabled:re,size:"small",children:[(0,w.jsx)(x.Z,{})," CSV"]})]}),xe=(0,w.jsxs)(d.Z,{sx:{fontSize:"16px"},children:["Article count : ",K,(0,w.jsx)("br",{}),"Processed Count : ",te,(0,w.jsx)("br",{}),"Last Category: ",q,(0,w.jsx)("br",{})]});return(0,w.jsxs)(h.Z,{sx:{m:"5px"},children:[(0,w.jsx)(Z.Z,{action:de,title:xe}),(0,w.jsx)(g.Z,{children:re?(0,w.jsx)(s.Z,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m.Z,{in:I,children:(0,w.jsx)(z,{data:S})}),k&&(0,w.jsx)(W,{data:k,targetLanguage:u,taskID:t})]})})]})}},6691:function(e,t,n){var a=n(1413),i=n(9439),r=n(5527),s=n(570),o=n(4294),l=n(493),c=n(2791),u=n(5712),d=n(2419),x=n(7391),f=n(5021),h=n(9900),Z=n(7247),g=n(4721),m=n(4554),j=n(1355),p=n(184),v=function(e){var t=e.category,n=e.onRemove,a=e.onSubCategory;return(0,p.jsxs)(f.ZP,{children:[(0,p.jsx)(h.Z,{sx:{padding:"5px"},primary:null===t||void 0===t?void 0:t.title}),(0,p.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return a(null===t||void 0===t?void 0:t.id)},children:(0,p.jsx)(s.Z,{})}),(0,p.jsx)(o.Z,{size:"small",variant:"outlined",color:"error",onClick:function(e){return n(null===t||void 0===t?void 0:t.id)},children:(0,p.jsx)(Z.Z,{})})]})},k=function(e){var t=e.onAdd,n=e.disabled,r=c.useState(!1),s=(0,i.Z)(r,2),l=s[0],f=s[1],h=c.useState([]),Z=(0,i.Z)(h,2),g=Z[0],v=Z[1],k=c.useState(""),b=(0,i.Z)(k,2),y=b[0],C=b[1],S=c.useCallback(j.Z.searchCategory(v,f),[]),w=c.useCallback((function(e){var n=g.find((function(e){return e.title===y}));n&&(t(n),C(""))}),[g,y]);return(0,p.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",height:"100%"},children:[(0,p.jsx)(u.Z,{id:"new-category",options:g,disabled:n,size:"small",clearOnBlur:!0,clearOnEscape:!0,loading:l,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.title)||""},sx:{width:"100%",maxWidth:"400px",marginRight:"10px",marginLeft:"10px"},renderInput:function(e){return(0,p.jsx)(x.Z,(0,a.Z)((0,a.Z)({},e),{},{disabled:n,onInput:S,onSelect:function(e){return C(e.target.value)},label:"Add Category"}))}}),(0,p.jsx)(o.Z,{disabled:n,variant:"contained",color:"success",onClick:w,children:(0,p.jsx)(d.Z,{})})]})};t.Z=function(e){var t=e.categoryListRef,n=e.initialCategories,s=e.disabled,o=void 0!==s&&s,u=c.useState({}),d=(0,i.Z)(u,2),x=d[0],f=d[1],h=c.useMemo((function(){return Object.values(x)}),[x]),Z=c.useCallback((function(e){e&&x[e]&&(delete x[e],f((0,a.Z)({},x)))}),[x]),m=c.useCallback((function(e){e&&(x[e.id]||(x[e.id]=e,f((0,a.Z)({},x))))}),[x]),b=c.useCallback((function(e){console.log("onSubCategory",e);var t=x[e];t&&j.Z.addSubCategories([t]).then((function(e){e.forEach((function(e){x[e.id]=e})),f((0,a.Z)({},x))}))}),[x]);return c.useEffect((function(){t&&(t.current=h)}),[h,t]),c.useEffect((function(){null!==n&&void 0!==n&&n.length&&f(null===n||void 0===n?void 0:n.reduce((function(e,t){return e[t.id]=t,e}),{}))}),[n]),(0,p.jsxs)(r.Z,{elevation:0,children:[(0,p.jsx)(l.Z,{dense:!0,children:null===h||void 0===h?void 0:h.map((function(e,t){return(0,p.jsxs)(c.Fragment,{children:[(0,p.jsx)(v,{category:e,onRemove:Z,onSubCategory:b}),(0,p.jsx)(g.Z,{})]},"cat"+t)}))}),(0,p.jsx)("br",{}),(0,p.jsx)(k,{onAdd:m,disabled:o})]})}}}]);
//# sourceMappingURL=778.a2a12bef.chunk.js.map