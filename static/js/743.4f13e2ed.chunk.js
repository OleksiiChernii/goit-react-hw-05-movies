"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[743],{365:function(e,n,t){t.d(n,{e:function(){return d}});var r,i,u=t(168),o=t(87),a=t(444),c=a.ZP.ul(r||(r=(0,u.Z)(["\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),l=(0,a.ZP)(o.rU)(i||(i=(0,u.Z)(["\n  display: inline-block;\n  padding: 5px;\n  border-radius: 3px;\n  &:hover,\n  &:focus {\n    color: lightgrey;\n    background-color: rgb(10, 10, 10);\n  }\n"]))),s=t(184),d=function(e){var n=e.movieList;return(0,s.jsx)(c,{children:n.map((function(e){var n=e.id,t=e.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(l,{to:"/movies/".concat(n),children:t})},n)}))})}},743:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(439),i=t(791),u=t(87),o=t(689),a=t(525),c=t(365),l=t(184),s=function(e){var n=e.query,t=(0,u.lr)()[1],o=(0,i.useState)(null!==n&&void 0!==n?n:""),a=(0,r.Z)(o,2),c=a[0],s=a[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=(0,r.Z)(e.target,1)[0];t({movie_search:n.value})},children:[(0,l.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},d=function(){var e,n=(0,u.lr)(),t=(0,r.Z)(n,2),d=t[0],f=t[1],v=(0,i.useState)([]),h=(0,r.Z)(v,2),p=h[0],m=h[1],x=null!==(e=d.get("movie_search"))&&void 0!==e?e:"",g=(0,o.TH)();return(0,i.useEffect)((function(){if(!x)return f((function(e){return e.delete("movie_search")})),void m([]);(0,a.qF)(x).then(m)}),[x,f]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{query:x}),(0,l.jsx)(c.e,{movieList:p,state:g})]})}}}]);
//# sourceMappingURL=743.4f13e2ed.chunk.js.map