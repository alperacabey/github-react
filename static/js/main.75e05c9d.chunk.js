(this["webpackJsonpgithub-react"]=this["webpackJsonpgithub-react"]||[]).push([[0],{339:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(51),r=a(28),s=a(13),i=a.n(s),l=a(19),u=a(55),d=a(182),b=a(56).RequestError;console.log("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");var p=new d.a({auth:"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"});p.auth(),console.log(p.auth());var j={searchOrganizations:function(e){return Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",e&&p.request("GET /search/users",{q:"type:org ".concat(e),per_page:10,page:1}));case 4:t.prev=4,t.t0=t.catch(0),new b(t.t0);case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))()},searchRepositories:function(e){return Object(l.a)(i.a.mark((function t(){var a,n,c,o,r,s,l,u,d,j,m,f,h,g,O;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.org,n=void 0===a?"":a,c=e.name,o=void 0===c?"":c,r=e.min,s=void 0===r?0:r,l=e.max,u=void 0===l?0:l,d=e.page,j=void 0===d?1:d,m=e.sort,f=void 0===m?"name":m,h=e.order,g=void 0===h?"asc":h,O=null,s&&u?O=" stars:".concat(s,"..").concat(u):s?O=" stars:>=".concat(s):u&&(O=" stars:<=".concat(u)),"stargazers_count"===f&&(f="stars"),t.prev=4,t.next=7,p.request("GET /search/repositories",{q:"org:".concat(n," ").concat(o).concat(O||""),sort:f,order:g,page:j,per_page:10});case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(4),new b(t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})))()},getIssues:function(e){return Object(l.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.org,a=e.repo,n=e.state,t.prev=1,t.next=4,p.request("GET /search/issues",{q:"repo:".concat(a," state:").concat(n),per_page:100,page:1});case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),new b(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},m=Object(u.b)("organization/fetchList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.searchOrganizations(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(u.b)("repostory/fetchList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.searchRepositories(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(u.b)("repostory/fetchIssueList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){["open","closed"].forEach((function(t){a.push(j.getIssues({repo:e.full_name,state:t}))}))})),e.next=4,Promise.all(a);case 4:return n=e.sent,e.abrupt("return",t.map((function(e,t){return{repo:e.name,open_issues:n[2*t].data.total_count,closed_issues:n[2*t+1].data.total_count}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(u.c)({name:"organization",initialState:{list:[],selected:"",serviceStatus:"idle",loadingStack:{},repositories:[],totalCount:0},reducers:{resetOrganization:function(e){e.selected="",e.serviceStatus="idle",e.repositories=[],e.totalCount=0},selectOrganization:function(e,t){e.repositories=[],e.selected=t.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.loadingStack.searchOrganizations=!0})).addCase(m.fulfilled,(function(e,t){e.serviceStatus="idle",e.list=t.payload.items.map((function(e){return{id:e.login,name:e.login}})),e.loadingStack.searchOrganizations=!1})).addCase(m.rejected,(function(e){e.loadingStack.searchOrganizations=!1})).addCase(f.pending,(function(e){e.loadingStack.searchRepositories=!0,e.serviceStatus="loading"})).addCase(f.fulfilled,(function(e,t){e.serviceStatus="idle",e.loadingStack.searchRepositories=!1,e.repositories=t.payload.items,e.totalCount=t.payload.total_count})).addCase(h.pending,(function(e){e.loadingStack.getIssues=!0,e.serviceStatus="loading"})).addCase(h.fulfilled,(function(e,t){e.serviceStatus="idle",e.loadingStack.getIssues=!1})).addCase(f.rejected,(function(e){e.loadingStack.getIssues=!1}))}}),O=g.actions,x=O.resetOrganization,v=(O.receiveOrganizations,O.selectOrganization),y=function(e){var t;return null===(t=e.organization)||void 0===t?void 0:t.selected},w=function(e){return e.organization.list},N=function(e){return e.organization.repositories},C=function(e){return e.organization.loadingStack},k=function(e){return e.organization.totalCount},S=g.reducer,z=Object(u.a)({reducer:{organization:S}}),_=a(24),T=a(9),E=a(72),F=a(2),D=function(e){var t=e.id,a=void 0===t?"textField":t,n=e.value,c=void 0===n?"":n,o=e.label,r=void 0===o?"":o,s=e.placeholder,i=void 0===s?"":s,l=e.showTooltip,u=void 0!==l&&l,d=e.loading,b=void 0!==d&&d,p=e.onChange,j=void 0===p?function(){}:p,m=e.onKeyPress,f=void 0===m?function(){}:m,h=e.onClick,g=void 0===h?function(){}:h,O=e.className,x=void 0===O?"":O;return Object(F.jsxs)("div",{children:[r&&Object(F.jsx)("p",{className:"mb-1 font-semibold ".concat(x),children:r}),Object(F.jsx)("input",{id:a,name:a,autoComplete:"off",value:c,onChange:function(e){return j(e.target.value)},type:"text",className:"border border-solid border-2 border-primary p-2.5 text-md w-80 tablet:w-50 h-10 ".concat(x),placeholder:i,"data-tip":!0,"data-for":"".concat(a,"Tip"),onKeyDown:f,onKeyPress:f,onClick:g,"data-test":"textfield-input"}),u&&Object(F.jsx)(E.a,{id:"".concat(a,"Tip"),place:"bottom",effect:"solid",backgroundColor:"#555456",arrowColor:"transparent",className:"bg-gray border-2xl shadow-header","data-test":"textfield-tooltip",children:"The result you were looking for could not be found"}),b&&Object(F.jsx)("div",{className:"absolute w-auto inset-y-0 top-2",style:{right:"40px"},children:Object(F.jsx)("div",{className:"loader","data-test":"textfield-loader"})})]})},P=function(e){var t=e.id,a=void 0===t?"range":t,c=e.value,o=void 0===c?{min:0,max:0}:c,r=e.label,s=void 0===r?"":r,i=e.onChange,l=void 0===i?function(){}:i,u=e.className,d=void 0===u?"":u,b=Object(n.useState)(!1),p=Object(T.a)(b,2),j=p[0],m=p[1],f=function(e,t){e&&t&&Number(e)>=Number(t)?m(!0):(m(!1),l({min:e,max:t}))};return Object(n.useEffect)((function(){E.a.rebuild()})),Object(F.jsxs)("div",{className:d,children:[s?Object(F.jsx)("p",{className:"mb-1 font-semibold",children:s}):Object(F.jsx)(F.Fragment,{}),Object(F.jsxs)("div",{id:"".concat(a),"data-tip":!0,"data-for":"".concat(a,"Tip"),"data-test":"range-component",children:[Object(F.jsx)("input",{id:"".concat(a,"Min"),autoComplete:"off",defaultValue:o.min,onChange:function(e){return f(e.target.value,o.max)},placeholder:"Min",type:"number",min:"0",max:"999999",className:"border p-2.5 text-md w-20 h-10 mr-5 ".concat(d," ").concat(j?"border-danger active:border-danger":"border-primary "),"data-test":"min-input"}),Object(F.jsx)("input",{id:"".concat(a,"Max"),autoComplete:"off",defaultValue:o.max,onChange:function(e){return f(o.min,e.target.value)},placeholder:"Max",type:"number",min:"0",max:"999999",className:"border p-2.5 text-md w-20 h-10 ".concat(d," ").concat(j?"border-danger":"border-primary "),"data-test":"max-input"})]}),j&&Object(F.jsx)(E.a,{id:"".concat(a,"Tip"),place:"bottom",effect:"solid",backgroundColor:"#555456",arrowColor:"transparent",className:"bg-gray border-2xl shadow-header",type:"error","data-test":"range-tooltip",children:"Conflicting min and max values"})]})},q=function(e){var t=e.id,a=void 0===t?"autocomplete":t,c=e.data,o=void 0===c?[]:c,r=e.placeholder,s=void 0===r?"":r,i=e.value,l=void 0===i?"":i,u=e.loading,d=void 0!==u&&u,b=e.className,p=void 0===b?"":b,j=e.onSelect,m=void 0===j?function(){}:j,f=e.onChange,h=void 0===f?function(){}:f,g=Object(n.useState)(!0),O=Object(T.a)(g,2),x=O[0],v=O[1],y=Object(n.useState)(0),w=Object(T.a)(y,2),N=w[0],C=w[1],k=function(e){m(e||o[N].name),v(!1),C(0)};return Object(F.jsxs)("div",{className:"relative w-80","data-test":"autocomplete-component",children:[Object(F.jsx)(D,{id:a,value:l,onChange:function(e){h(e),v(!0)},onClick:function(){return v(!x)},placeholder:s,onKeyPress:function(e){0===e.charCode&&13===e.keyCode&&o.length>0?k():38===e.keyCode&&N>0&&"ArrowUp"===e.code?C(N-1):40===e.keyCode&&N<o.length-1&&"ArrowDown"===e.code&&C(N+1)},showTooltip:l&&0===o.length,loading:d,className:"border ".concat(p),"data-test":"autocomplete-input"}),o.length>0&&x&&Object(F.jsx)("ul",{className:"bg-white p-0 list-none min-w-80 absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-80 mt-2","data-test":"autocomplete-list",children:o.map((function(e,t){return Object(F.jsx)("li",{className:"h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto ".concat(N===t?"bg-blue-light":""),children:Object(F.jsx)("button",{"data-test":"autocomplete-list-item-".concat(t),className:"bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none",onClick:function(){return k(e.name)},children:e.name},e.id)},e.id)}))})]})},L=a(164),R=a.n(L),I=function(e){var t=e.list,a=void 0===t?[]:t,n=e.columns,c=void 0===n?{}:n,o=e.loading,r=void 0!==o&&o,s=e.sort,i=e.order,l=e.handlePageClick,u=e.pageCount,d=e.sorting;return Object(F.jsxs)("div",{children:[Object(F.jsxs)("table",{className:"my-5 table-auto flex-col w-full",children:[Object(F.jsx)("thead",{className:"border-b-2",children:Object(F.jsx)("tr",{children:Object.keys(c).map((function(e,t){return Object(F.jsxs)("th",{scope:"col",className:"px-2.5 py-2 ".concat(0===t?"text-left":"text-center"),onClick:function(){return d(e)},children:[Object(F.jsx)("span",{className:"font-semibold",children:c[e]}),e===s&&Object(F.jsx)("i",{className:"ml-2 sm arrow ".concat("asc"===i?"up":"down")})]},e)}))})}),Object(F.jsx)("tbody",{className:"",children:a.length>0&&a.map((function(e,t){return Object(F.jsx)("tr",{className:"border border-solid border-primary",children:Object.keys(c).map((function(t,a){return Object(F.jsx)("td",{className:"px-2.5 py-2 whitespace-nowrap bg-white ".concat(0===a?"text-left":"text-center"),children:Object(F.jsx)("span",{className:"",children:e[t]})},"td-".concat(a))}))},"tr-".concat(t))}))})]}),Object(F.jsx)("div",{className:"w-full h-10 flex justify-center",children:r?Object(F.jsx)("span",{className:"loader"}):0===a.length?Object(F.jsx)("span",{className:"text-center",children:"No results"}):Object(F.jsx)(F.Fragment,{})}),u>0&&Object(F.jsx)(R.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",marginPagesDisplayed:2,pageRangeDisplayed:5,pageCount:u,onPageChange:function(e){l(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})},K=function(e){var t=e.value,a=e.options,c=void 0===a?[]:a,o=e.onChange,r=void 0===o?function(){}:o,s=Object(n.useState)(!1),i=Object(T.a)(s,2),l=i[0],u=i[1];return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"relative w-10 mx-0 my-4",children:[Object(F.jsxs)("button",{type:"button",className:"button w-64 h-10 bg-white border border-primary flex justify-between items-center px-2.5",onClick:function(){return u(!l)},"data-test":"dropdown-component",children:[t?Object(F.jsx)("span",{children:t.name}):Object(F.jsx)("span",{children:"Select an option"}),Object(F.jsx)("i",{className:"arrow ".concat(l?"up":"down")})]}),l&&Object(F.jsx)("ul",{className:"border border-primary bg-white p-0 list-none absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-64 mt-2","data-test":"dropdown-list",children:c.map((function(e,t){return Object(F.jsx)("li",{className:"h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto",children:Object(F.jsx)("button",{className:"bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none",onClick:function(){return r(e),void u(!1)},"data-test":"dropdown-list-item-".concat(t),children:Object(F.jsx)("span",{children:e.name})},"button-".concat(e.id))},"li-".concat(e.id))}))})]})})},V=a(344),M=a(345),B=a(349),G=a(180),A=a(181),J=a(96),X=a(81),Z=a(184),U=a(179),H=function(e){e.plotType;var t=e.data,a=e.loading;return Object(F.jsxs)(F.Fragment,{children:[a&&Object(F.jsx)("div",{className:"absolute flex justify-center items-center z-10 w-full h-full",children:Object(F.jsx)("span",{className:"loader"})}),Object(F.jsx)(V.a,{width:"100%",height:"100%",children:Object(F.jsxs)(M.a,{margin:{top:30,right:40,bottom:40,left:30},children:[Object(F.jsx)(B.a,{}),Object(F.jsx)(G.a,{type:"number",dataKey:"closed_issues",name:"closed issues",label:{value:"Closed issues",position:"insideBottomLeft",offset:-15}}),Object(F.jsx)(A.a,{type:"number",dataKey:"open_issues",name:"open issues",label:{value:"Open issues",angle:-90,position:"insideBottomLeft"}}),Object(F.jsx)(J.a,{type:"string",dataKey:"repository",name:"repo"}),Object(F.jsx)(X.a,{cursor:{strokeDasharray:"3 3"}}),Object(F.jsx)(Z.a,{data:t,fill:"#8884d8",children:t.map((function(e,t){return Object(F.jsx)(U.a,{fill:e.color},"cell-".concat(t))}))})]})})]})},Q=null,W=function(){var e=Object(_.b)(),t=Object(n.useState)(""),a=Object(T.a)(t,2),c=a[0],o=a[1],r=Object(_.c)(w),s=Object(_.c)(C);Object(n.useEffect)((function(){c&&(clearTimeout(Q),Q=setTimeout((function(){e(m(c))}),500))}),[c,e]);return Object(F.jsx)("header",{className:"bg-gray-dark p-2.5 shadow-header absolute w-full sticky top-0",children:Object(F.jsx)(q,{id:"search-organization",data:r,iconColor:"Turquoise",className:"h-10 w-80 p-2.5",placeholder:"Search organizations",value:c,onChange:function(e){return o(e)},onSelect:function(t){return function(t){o(t),e(x()),setTimeout((function(){e(v(t))}),0)}(t)},loading:s.searchOrganizations})})},Y={name:"Repository",open_issues_count:"Open issues",stargazers_count:"Stars"},$=null,ee=function(){var e=Object(_.b)(),t=Object(_.c)(C),a=Object(_.c)(N),c=Object(_.c)(k),o=Object(n.useState)(""),s=Object(T.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)({min:0,max:0}),d=Object(T.a)(u,2),b=d[0],p=d[1],j=Object(n.useState)(1),m=Object(T.a)(j,2),h=m[0],g=m[1],O=Object(n.useState)(0),x=Object(T.a)(O,2),v=x[0],w=x[1],S=Object(n.useState)(""),z=Object(T.a)(S,2),E=z[0],q=z[1],L=Object(n.useState)("asc"),R=Object(T.a)(L,2),K=R[0],V=R[1];return Object(n.useEffect)((function(){(i||b.max||b.min||E)&&K&&(clearTimeout($),$=setTimeout((function(){var t;e((t=Object(r.a)(Object(r.a)({name:i},b),{},{page:h,sort:E,order:K}),function(e,a){var n=y(a());n&&e(f(Object(r.a)({org:n},t)))}))}),500))}),[i,b,h,E,K,e]),Object(n.useEffect)((function(){w(Math.ceil(c/10))}),[c]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"flex flex-wrap",children:[Object(F.jsx)(D,{id:"autoComplete",value:i,onChange:function(e){l(e)},className:"w-80 mr-10",placeholder:"Type to filter",label:"Filter repositories by name"}),Object(F.jsx)(P,{id:"range",value:b,onChange:function(e){p(e)},label:"Filter by number of stars"})]}),Object(F.jsx)(I,{list:a,columns:Y,loading:t.searchRepositories,totalRecords:a.length,pageCount:v,handlePageClick:function(e){return g(e+1)},sort:E,order:K,sorting:function(e){e===E?V("asc"===K?"desc":"asc"):(q(e),V("asc"))}})]})},te=[{id:"select",name:"Please choose"},{id:"scatterDot",name:"Scatter dot plot"},{id:"timeline",name:"Timeline plot"},{id:"visualize",name:"Visualize plot"}],ae=function(){var e=Object(_.b)(),t=Object(n.useState)(te[0]),a=Object(T.a)(t,2),c=a[0],o=a[1],r=Object(_.c)(N),s=Object(n.useState)([]),u=Object(T.a)(s,2),d=u[0],b=u[1],p=Object(n.useState)(!1),m=Object(T.a)(p,2),f=m[0],h=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.length>0&&"scatterDot"===c.id)){e.next=15;break}return e.prev=1,h(!0),t=[],r.forEach((function(e){["open","closed"].forEach((function(a){t.push(j.getIssues({repo:e.full_name,state:a}))}))})),e.next=7,Promise.all(t);case 7:a=e.sent,n=r.map((function(e,t){var n=a[2*t].data.total_count,c=a[2*t+1].data.total_count,o=100*n/(n+c),r=null;return r=n<100?"#111111":o<10?"#00CC2D":o<25?"#FFD600":"#FF0000",{repository:e.name,open_issues:n.toString(),closed_issues:c.toString(),color:r}})),b(n),h(!1),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r,c,e]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{children:Object(F.jsx)(K,{value:c,options:te,onChange:function(e){return o(e)}})}),Object(F.jsx)("div",{className:"h-80 relative",children:"scatterDot"===c.id?Object(F.jsx)(H,{plotType:c,data:d,loading:f}):Object(F.jsx)(F.Fragment,{})})]})},ne=function(){var e=Object(_.c)(y);return Object(F.jsx)("div",{className:"bg-gray h-full p-10","data-test":"container-component",children:e?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{className:"mb-5 font-semibold",children:e}),Object(F.jsxs)("div",{className:"grid grid-cols-1 laptop:grid-cols-2 gap-4",children:[Object(F.jsx)("div",{className:"row-span-1 laptop:pr-5",children:Object(F.jsx)(ee,{"data-test":"list-component"})}),Object(F.jsx)("div",{className:"row-span-1 laptop:pr-5",children:Object(F.jsx)(ae,{"data-test":"plots-component"})})]})]}):Object(F.jsx)("div",{className:"flex justify-center items-center h-full",children:Object(F.jsx)("h3",{className:"text-gray-light",children:"Search for an organization"})})})};var ce=function(){return Object(F.jsxs)("div",{className:"h-screen","data-test":"app-container",children:[Object(F.jsx)(W,{"data-test":"header-component"}),Object(F.jsx)(ne,{"data-test":"container-component"})]})};a(338),a(339);Object(o.render)(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(_.a,{store:z,children:Object(F.jsx)(ce,{})})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.75e05c9d.chunk.js.map