"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[123],{3123:function(e,n,t){t.r(n);var i=t(9439),r=t(4294),a=t(2791),s=t(1286),c=t(3518),d=t(4554),o=t(1355),l=t(7621),u=t(9504),h=t(9585),f=t(1072),m=t(1087),x=t(184),j=[{field:"id",headerName:"ID",minWidth:100,flex:1},{field:"username",headerName:"Username",flex:1,minWidth:300},{field:"rights",headerName:"Rights",width:130,renderCell:function(e){return e.value}},{field:"action",headerName:"Action",width:130,renderCell:function(e){return e.value}},{field:"task_count",headerName:"Task Count",minWidth:130,flex:1},{field:"article_count",headerName:"Article Count",minWidth:130,flex:1},{field:"category_count",headerName:"Category Count",minWidth:130,flex:1}];n.default=function(e){var n=e.user,t=(0,a.useState)([]),Z=(0,i.Z)(t,2),k=Z[0],v=Z[1];(0,a.useState)((function(){o.Z.getUsers().then((function(e){v(e)}))}),[]);var g=(0,a.useMemo)((function(){return null===k||void 0===k?void 0:k.map((function(e){return{id:e.id,username:e.username,rights:e.rights,action:(0,x.jsx)(m.rU,{to:"/tuktukbot/user/edit?id=".concat(e.id),children:(0,x.jsx)(r.Z,{color:"secondary",variant:"contained",children:(0,x.jsx)(s.Z,{})})})}}))}),[k]),C=(0,a.useCallback)((function(){var e=JSON.stringify(k),n=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download="users.json",i.click()}));return!1===o.Z.hasAccess(n.rights,o.Z.RIGHTS.GRANT)?(0,x.jsx)("h1",{children:"Access Denied"}):(0,x.jsx)(d.Z,{children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(h.Z,{title:"List Users",action:(0,x.jsxs)(r.Z,{variant:"contained",onClick:C,children:[(0,x.jsx)(c.Z,{})," Download Stats"]})}),(0,x.jsx)(u.Z,{children:(0,x.jsx)(f._$,{rows:g,columns:j,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!1,disableSelectionOnClick:!0})})]})})}},1286:function(e,n,t){var i=t(4836);n.Z=void 0;var r=i(t(5649)),a=t(184),s=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=s}}]);
//# sourceMappingURL=123.90efe1cf.chunk.js.map