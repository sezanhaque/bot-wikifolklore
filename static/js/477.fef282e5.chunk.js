"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[477],{7477:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),i=r(9439),s=r(6691),c=r(2791),u=r(1355),o=r(4294),l=r(7621),d=r(9504),f=r(9585),x=r(7247),Z=r(4554),p=r(890),b=r(914),h=r(184);t.default=function(){var e=(0,c.useState)(""),t=(0,i.Z)(e,2),r=t[0],k=t[1],v=(0,c.useState)(""),j=(0,i.Z)(v,2),w=j[0],C=j[1],y=(0,c.useState)(0),g=(0,i.Z)(y,2),m=g[0],S=g[1],T=(0,c.useState)([]),D=(0,i.Z)(T,2),R=D[0],E=D[1],L=(0,c.useState)(!1),I=(0,i.Z)(L,2),P=I[0],U=I[1],W=(0,c.createRef)(null);(0,c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("id");e&&(k(e),u.Z.getTopic(e).then((function(e){C(u.Z.countries[e.country]),E(e.categories)})))}),[m]);var q=(0,c.useCallback)((0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:if(w){e.next=4;break}return e.abrupt("return");case 4:if(null!==(t=null===W||void 0===W?void 0:W.current)&&void 0!==t&&t.length){e.next=7;break}return e.abrupt("return");case 7:return U(!0),e.next=10,u.Z.updateTopic({id:r,country:w,categories:t});case 10:if(e.sent){e.next=13;break}return e.abrupt("return");case 13:S(m+1),U(!1);case 15:case"end":return e.stop()}}),e)}))),[r,w,W]),z=(0,c.useCallback)((0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u.Z.deleteTopic(r);case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:window.location.href="/tuktukbot/topics";case 8:case"end":return e.stop()}}),e)}))),[r]);return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(f.Z,{title:"Edit Topic",action:(0,h.jsxs)(o.Z,{variant:"contained",color:"error",onClick:z,disabled:P,children:[(0,h.jsx)(x.Z,{})," Delete"]})}),(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,h.jsxs)(p.Z,{variant:"subtitle",children:["Topic ID : ",r]}),(0,h.jsxs)(p.Z,{variant:"subtitle",children:["Country : ",w]})]}),(0,h.jsx)(s.Z,{categoryListRef:W,disabled:P,initialCategories:R}),(0,h.jsx)(Z.Z,{sx:{mt:5,maxWidth:300,display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,h.jsx)(o.Z,{variant:"contained",onClick:q,disabled:P,children:"Save"})}),(0,h.jsx)(b.Z,{})]})]})}}}]);
//# sourceMappingURL=477.fef282e5.chunk.js.map