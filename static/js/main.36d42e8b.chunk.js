(this["webpackJsonpgithub-react"]=this["webpackJsonpgithub-react"]||[]).push([[0],{339:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(51),c=a(28),s=a(13),i=a.n(s),l=a(19),u=a(55),d=a(182),b=a(56).RequestError;console.log("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");var p=new d.a({auth:"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"});p.auth(),console.log(p.auth());var j={searchOrganizations:function(e){return Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",e&&p.request("GET /search/users",{q:"type:org ".concat(e),per_page:10,page:1}));case 4:t.prev=4,t.t0=t.catch(0),new b(t.t0);case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))()},searchRepositories:function(e){return Object(l.a)(i.a.mark((function t(){var a,n,o,r,c,s,l,u,d,j,m,f,h,g,O;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.org,n=void 0===a?"":a,o=e.name,r=void 0===o?"":o,c=e.min,s=void 0===c?0:c,l=e.max,u=void 0===l?0:l,d=e.page,j=void 0===d?1:d,m=e.sort,f=void 0===m?"name":m,h=e.order,g=void 0===h?"asc":h,O=null,s&&u?O=" stars:".concat(s,"..").concat(u):s?O=" stars:>=".concat(s):u&&(O=" stars:<=".concat(u)),"stargazers_count"===f&&(f="stars"),t.prev=4,t.next=7,p.request("GET /search/repositories",{q:"org:".concat(n," ").concat(r).concat(O||""),sort:f,order:g,page:j,per_page:10});case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(4),new b(t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})))()},getIssues:function(e){return Object(l.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.org,a=e.repo,n=e.state,t.prev=1,t.next=4,p.request("GET /search/issues",{q:"repo:".concat(a," state:").concat(n),per_page:100,page:1});case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),new b(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},m=Object(u.b)("organization/fetchList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.searchOrganizations(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(u.b)("repostory/fetchList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.searchRepositories(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(u.b)("repostory/fetchIssueList",function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],t.forEach((function(e){["open","closed"].forEach((function(t){a.push(j.getIssues({repo:e.full_name,state:t}))}))})),e.next=4,Promise.all(a);case 4:return n=e.sent,e.abrupt("return",t.map((function(e,t){return{repo:e.name,open_issues:n[2*t].data.total_count,closed_issues:n[2*t+1].data.total_count}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(u.c)({name:"organization",initialState:{list:[],selected:"",serviceStatus:"idle",loadingStack:{},repositories:[],totalCount:0},reducers:{resetOrganization:function(e){e.selected="",e.serviceStatus="idle",e.repositories=[],e.totalCount=0},selectOrganization:function(e,t){e.repositories=[],e.selected=t.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.loadingStack.searchOrganizations=!0})).addCase(m.fulfilled,(function(e,t){e.serviceStatus="idle",e.list=t.payload.items.map((function(e){return{id:e.login,name:e.login}})),e.loadingStack.searchOrganizations=!1})).addCase(m.rejected,(function(e){e.loadingStack.searchOrganizations=!1})).addCase(f.pending,(function(e){e.loadingStack.searchRepositories=!0,e.serviceStatus="loading"})).addCase(f.fulfilled,(function(e,t){e.serviceStatus="idle",e.loadingStack.searchRepositories=!1,e.repositories=t.payload.items,e.totalCount=t.payload.total_count})).addCase(h.pending,(function(e){e.loadingStack.getIssues=!0,e.serviceStatus="loading"})).addCase(h.fulfilled,(function(e,t){e.serviceStatus="idle",e.loadingStack.getIssues=!1})).addCase(f.rejected,(function(e){e.loadingStack.getIssues=!1}))}}),O=g.actions,x=O.resetOrganization,v=(O.receiveOrganizations,O.selectOrganization),y=function(e){var t;return null===(t=e.organization)||void 0===t?void 0:t.selected},w=function(e){return e.organization.list},N=function(e){return e.organization.repositories},C=function(e){return e.organization.loadingStack},k=function(e){return e.organization.totalCount},S=g.reducer,z=Object(u.a)({reducer:{organization:S}}),T=a(24),_=a(9),F=a(72),E=a(2),V=function(e){var t=e.id,a=void 0===t?"textField":t,n=e.value,o=void 0===n?"":n,r=e.label,c=void 0===r?"":r,s=e.placeholder,i=void 0===s?"":s,l=e.showTooltip,u=void 0!==l&&l,d=e.loading,b=void 0!==d&&d,p=e.onChange,j=void 0===p?function(){}:p,m=e.onKeyPress,f=void 0===m?function(){}:m,h=e.onClick,g=void 0===h?function(){}:h,O=e.className,x=void 0===O?"":O;return Object(E.jsxs)("div",{children:[c&&Object(E.jsx)("p",{className:"mb-1 font-semibold ".concat(x),children:c}),Object(E.jsx)("input",{id:a,name:a,autoComplete:"off",value:o,onChange:function(e){return j(e.target.value)},type:"text",className:"border border-solid border-2 border-primary p-2.5 text-md w-80 tablet:w-50 h-10 ".concat(x),placeholder:i,"data-tip":!0,"data-for":"".concat(a,"Tip"),onKeyDown:f,onKeyPress:f,onClick:g,"data-test":"textfield-input"}),u&&Object(E.jsx)(F.a,{id:"".concat(a,"Tip"),place:"bottom",effect:"solid",backgroundColor:"#555456",arrowColor:"transparent",className:"bg-gray border-2xl shadow-header","data-test":"textfield-tooltip",children:"The result you were looking for could not be found"}),b&&Object(E.jsx)("div",{className:"absolute w-auto inset-y-0 top-2",style:{right:"40px"},children:Object(E.jsx)("div",{className:"loader","data-test":"textfield-loader"})})]})},q=function(e){var t=e.id,a=void 0===t?"range":t,o=e.value,r=void 0===o?{min:0,max:0}:o,c=e.label,s=void 0===c?"":c,i=e.onChange,l=void 0===i?function(){}:i,u=e.className,d=void 0===u?"":u,b=Object(n.useState)(!1),p=Object(_.a)(b,2),j=p[0],m=p[1],f=function(e,t){e&&t&&Number(e)>=Number(t)?m(!0):(m(!1),l({min:e,max:t}))};return Object(n.useEffect)((function(){F.a.rebuild()})),Object(E.jsxs)("div",{className:d,children:[s?Object(E.jsx)("p",{className:"mb-1 font-semibold",children:s}):Object(E.jsx)(E.Fragment,{}),Object(E.jsxs)("div",{id:"".concat(a),"data-tip":!0,"data-for":"".concat(a,"Tip"),"data-test":"range-component",children:[Object(E.jsx)("input",{id:"".concat(a,"Min"),autoComplete:"off",defaultValue:r.min,onChange:function(e){return f(e.target.value,r.max)},placeholder:"Min",type:"number",min:"0",max:"999999",className:"border p-2.5 text-md w-20 h-10 mr-5 ".concat(d," ").concat(j?"border-danger active:border-danger":"border-primary "),"data-test":"min-input"}),Object(E.jsx)("input",{id:"".concat(a,"Max"),autoComplete:"off",defaultValue:r.max,onChange:function(e){return f(r.min,e.target.value)},placeholder:"Max",type:"number",min:"0",max:"999999",className:"border p-2.5 text-md w-20 h-10 ".concat(d," ").concat(j?"border-danger":"border-primary "),"data-test":"max-input"})]}),j&&Object(E.jsx)(F.a,{id:"".concat(a,"Tip"),place:"bottom",effect:"solid",backgroundColor:"#555456",arrowColor:"transparent",className:"bg-gray border-2xl shadow-header",type:"error","data-test":"range-tooltip",children:"Conflicting min and max values"})]})},D=function(e){var t=e.id,a=void 0===t?"autocomplete":t,o=e.data,r=void 0===o?[]:o,c=e.placeholder,s=void 0===c?"":c,i=e.value,l=void 0===i?"":i,u=e.loading,d=void 0!==u&&u,b=e.className,p=void 0===b?"":b,j=e.onSelect,m=void 0===j?function(){}:j,f=e.onChange,h=void 0===f?function(){}:f,g=Object(n.useState)(!0),O=Object(_.a)(g,2),x=O[0],v=O[1],y=Object(n.useState)(0),w=Object(_.a)(y,2),N=w[0],C=w[1],k=function(e){m(e||r[N].name),v(!1),C(0)};return Object(E.jsxs)("div",{className:"relative w-80","data-test":"autocomplete-component",children:[Object(E.jsx)(V,{id:a,value:l,onChange:function(e){h(e),v(!0)},onClick:function(){return v(!x)},placeholder:s,onKeyPress:function(e){0===e.charCode&&13===e.keyCode&&r.length>0?k():38===e.keyCode&&N>0&&"ArrowUp"===e.code?C(N-1):40===e.keyCode&&N<r.length-1&&"ArrowDown"===e.code&&C(N+1)},showTooltip:l&&0===r.length,loading:d,className:"border ".concat(p),"data-test":"autocomplete-input"}),r.length>0&&x&&Object(E.jsx)("ul",{className:"bg-white p-0 list-none min-w-80 absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-80 mt-2","data-test":"autocomplete-list",children:r.map((function(e,t){return Object(E.jsx)("li",{className:"h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto ".concat(N===t?"bg-blue-light":""),children:Object(E.jsx)("button",{"data-test":"autocomplete-list-item-".concat(t),className:"bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none",onClick:function(){return k(e.name)},children:e.name},e.id)},e.id)}))})]})},L=a(164),P=a.n(L),R=function(e){var t=e.list,a=void 0===t?[]:t,n=e.columns,o=void 0===n?{}:n,r=e.loading,c=void 0!==r&&r,s=e.sort,i=e.order,l=e.handlePageClick,u=e.pageCount,d=e.sorting;return Object(E.jsxs)("div",{children:[Object(E.jsxs)("table",{className:"my-5 table-auto flex-col w-full",children:[Object(E.jsx)("thead",{className:"border-b-2",children:Object(E.jsx)("tr",{children:Object.keys(o).map((function(e,t){return Object(E.jsxs)("th",{scope:"col",className:"px-2.5 py-2 ".concat(0===t?"text-left":"text-center"),onClick:function(){return d(e)},children:[Object(E.jsx)("span",{className:"font-semibold",children:o[e]}),e===s&&Object(E.jsx)("i",{className:"ml-2 sm arrow ".concat("asc"===i?"up":"down")})]},e)}))})}),Object(E.jsx)("tbody",{className:"",children:a.length>0&&a.map((function(e,t){return Object(E.jsx)("tr",{className:"border border-solid border-primary",children:Object.keys(o).map((function(t,a){return Object(E.jsx)("td",{className:"px-2.5 py-2 whitespace-nowrap bg-white ".concat(0===a?"text-left":"text-center"),children:Object(E.jsx)("span",{className:"",children:e[t]})},"td-".concat(a))}))},"tr-".concat(t))}))})]}),Object(E.jsx)("div",{className:"w-full h-10 flex justify-center",children:c?Object(E.jsx)("span",{className:"loader"}):0===a.length?Object(E.jsx)("span",{className:"text-center",children:"No results"}):Object(E.jsx)(E.Fragment,{})}),u>0&&Object(E.jsx)(P.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",marginPagesDisplayed:2,pageRangeDisplayed:5,pageCount:u,onPageChange:function(e){l(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})},I=function(e){var t=e.value,a=e.options,o=void 0===a?[]:a,r=e.onChange,c=void 0===r?function(){}:r,s=Object(n.useState)(!1),i=Object(_.a)(s,2),l=i[0],u=i[1];return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"relative w-10 mx-0 my-4",children:[Object(E.jsxs)("button",{type:"button",className:"button w-64 h-10 bg-white border border-primary flex justify-between items-center px-2.5",onClick:function(){return u(!l)},"data-test":"dropdown-component",children:[t?Object(E.jsx)("span",{children:t.name}):Object(E.jsx)("span",{children:"Select an option"}),Object(E.jsx)("i",{className:"arrow ".concat(l?"up":"down")})]}),l&&Object(E.jsx)("ul",{className:"border border-primary bg-white p-0 list-none absolute top-auto left-0 m-o box-border max-h-56 z-10 overflow-y-auto w-64 mt-2","data-test":"dropdown-list",children:o.map((function(e,t){return Object(E.jsx)("li",{className:"h-10 box-border hover:bg-blue-light flex px-2.5 decoration-auto",children:Object(E.jsx)("button",{className:"bg-none border-none p-0 w-full text-left active:color-gray-dark active:outline-none",onClick:function(){return c(e),void u(!1)},"data-test":"dropdown-list-item-".concat(t),children:Object(E.jsx)("span",{children:e.name})},"button-".concat(e.id))},"li-".concat(e.id))}))})]})})},K=a(344),J=a(345),M=a(349),A=a(180),B=a(181),G=a(96),Q=a(81),X=a(184),Z=a(179),U=function(e){e.plotType;var t=e.data,a=e.loading;return Object(E.jsxs)(E.Fragment,{children:[a&&Object(E.jsx)("div",{className:"absolute flex justify-center items-center z-10 w-full h-full",children:Object(E.jsx)("span",{className:"loader"})}),Object(E.jsx)(K.a,{width:"100%",height:"100%",children:Object(E.jsxs)(J.a,{margin:{top:30,right:40,bottom:40,left:30},children:[Object(E.jsx)(M.a,{}),Object(E.jsx)(A.a,{type:"number",dataKey:"closed_issues",name:"closed issues",label:{value:"Closed issues",position:"insideBottomLeft",offset:-15}}),Object(E.jsx)(B.a,{type:"number",dataKey:"open_issues",name:"open issues",label:{value:"Open issues",angle:-90,position:"insideBottomLeft"}}),Object(E.jsx)(G.a,{type:"string",dataKey:"repository",name:"repo"}),Object(E.jsx)(Q.a,{cursor:{strokeDasharray:"3 3"}}),Object(E.jsx)(X.a,{data:t,fill:"#8884d8",children:t.map((function(e,t){return Object(E.jsx)(Z.a,{fill:e.color},"cell-".concat(t))}))})]})})]})},H=null,W=function(){var e=Object(T.b)(),t=Object(n.useState)(""),a=Object(_.a)(t,2),o=a[0],r=a[1],c=Object(T.c)(w),s=Object(T.c)(C);Object(n.useEffect)((function(){o&&(clearTimeout(H),H=setTimeout((function(){e(m(o))}),500))}),[o,e]);return Object(E.jsx)("header",{className:"bg-gray-dark p-2.5 shadow-header absolute w-full sticky top-0",children:Object(E.jsx)(D,{id:"search-organization",data:c,iconColor:"Turquoise",className:"h-10 w-80 p-2.5",placeholder:"Search organizations",value:o,onChange:function(e){return r(e)},onSelect:function(t){return function(t){r(t),e(x()),setTimeout((function(){e(v(t))}),0)}(t)},loading:s.searchOrganizations})})},Y={name:"Repository",open_issues_count:"Open issues",stargazers_count:"Stars"},$=null,ee=function(){var e=Object(T.b)(),t=Object(T.c)(C),a=Object(T.c)(N),o=Object(T.c)(k),r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],u=Object(n.useState)({min:0,max:0}),d=Object(_.a)(u,2),b=d[0],p=d[1],j=Object(n.useState)(1),m=Object(_.a)(j,2),h=m[0],g=m[1],O=Object(n.useState)(0),x=Object(_.a)(O,2),v=x[0],w=x[1],S=Object(n.useState)(""),z=Object(_.a)(S,2),F=z[0],D=z[1],L=Object(n.useState)("asc"),P=Object(_.a)(L,2),I=P[0],K=P[1];return Object(n.useEffect)((function(){(i||b.max||b.min||F)&&I&&(clearTimeout($),$=setTimeout((function(){var t;e((t=Object(c.a)(Object(c.a)({name:i},b),{},{page:h,sort:F,order:I}),function(e,a){var n=y(a());n&&e(f(Object(c.a)({org:n},t)))}))}),500))}),[i,b,h,F,I,e]),Object(n.useEffect)((function(){w(Math.ceil(o/10))}),[o]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"flex flex-wrap",children:[Object(E.jsx)(V,{id:"autoComplete",value:i,onChange:function(e){l(e)},className:"w-80 mr-10",placeholder:"Type to filter",label:"Filter repositories by name"}),Object(E.jsx)(q,{id:"range",value:b,onChange:function(e){p(e)},label:"Filter by number of stars"})]}),Object(E.jsx)(R,{list:a,columns:Y,loading:t.searchRepositories,totalRecords:a.length,pageCount:v,handlePageClick:function(e){return g(e+1)},sort:F,order:I,sorting:function(e){e===F?K("asc"===I?"desc":"asc"):(D(e),K("asc"))}})]})},te=[{id:"select",name:"Please choose"},{id:"scatterDot",name:"Scatter dot plot"},{id:"timeline",name:"Timeline plot"},{id:"visualize",name:"Visualize plot"}],ae=function(){var e=Object(T.b)(),t=Object(n.useState)(te[0]),a=Object(_.a)(t,2),o=a[0],r=a[1],c=Object(T.c)(N),s=Object(n.useState)([]),u=Object(_.a)(s,2),d=u[0],b=u[1],p=Object(n.useState)(!1),m=Object(_.a)(p,2),f=m[0],h=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c.length>0&&"scatterDot"===o.id)){e.next=15;break}return e.prev=1,h(!0),t=[],c.forEach((function(e){["open","closed"].forEach((function(a){t.push(j.getIssues({repo:e.full_name,state:a}))}))})),e.next=7,Promise.all(t);case 7:a=e.sent,n=c.map((function(e,t){var n=a[2*t].data.total_count,o=a[2*t+1].data.total_count,r=100*n/(n+o),c=null;return c=n<100?"#111111":r<10?"#00CC2D":r<25?"#FFD600":"#FF0000",{repository:e.name,open_issues:n.toString(),closed_issues:o.toString(),color:c}})),b(n),h(!1),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,o,e]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{children:Object(E.jsx)(I,{value:o,options:te,onChange:function(e){return r(e)}})}),Object(E.jsx)("div",{className:"h-80 relative",children:"scatterDot"===o.id?Object(E.jsx)(U,{plotType:o,data:d,loading:f}):Object(E.jsx)(E.Fragment,{})})]})},ne=function(){var e=Object(T.c)(y);return Object(E.jsx)("div",{className:"bg-gray h-full p-10","data-test":"container-component",children:e?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{className:"mb-5 font-semibold",children:e}),Object(E.jsxs)("div",{className:"grid grid-cols-1 laptop:grid-cols-2 gap-4",children:[Object(E.jsx)("div",{className:"row-span-1 laptop:pr-5",children:Object(E.jsx)(ee,{"data-test":"list-component"})}),Object(E.jsx)("div",{className:"row-span-1 laptop:pr-5",children:Object(E.jsx)(ae,{"data-test":"plots-component"})})]})]}):Object(E.jsx)("div",{className:"flex justify-center items-center h-full",children:Object(E.jsx)("h3",{className:"text-gray-light",children:"Search for an organization"})})})};var oe=function(){return Object(E.jsxs)("div",{className:"h-screen","data-test":"app-container",children:[Object(E.jsx)(W,{"data-test":"header-component"}),Object(E.jsx)(ne,{"data-test":"container-component"})]})};a(338),a(339);Object(r.render)(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(T.a,{store:z,children:Object(E.jsx)(oe,{})})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.36d42e8b.chunk.js.map