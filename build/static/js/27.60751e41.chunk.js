(this["webpackJsonpeyemark-frontend"]=this["webpackJsonpeyemark-frontend"]||[]).push([[27],{213:function(e){e.exports=JSON.parse('["Hospitals & Clinics","Maternity Clinic","Teaching Hospitals","Nursing Schools"]')},225:function(e,s,t){"use strict";t.d(s,"d",(function(){return j})),t.d(s,"e",(function(){return d})),t.d(s,"a",(function(){return m})),t.d(s,"b",(function(){return u})),t.d(s,"c",(function(){return h}));var c=t(19),i=t(0),a=t(59),r=t(11),n=t(213),l=t(1);function j(){var e=Object(i.useState)(!1),s=Object(c.a)(e,2),t=s[0],j=s[1],d=Object(a.a)().t;return Object(l.jsxs)("div",{className:"search flex items-center",children:[Object(l.jsx)("img",{src:r.M,alt:"search"}),Object(l.jsx)("input",{className:"search-input",placeholder:"".concat(d("categories:Search"),"...")}),Object(l.jsxs)("div",{className:"filters flex items-center justify-between",onClick:function(){return j(!t)},children:[Object(l.jsx)("img",{src:r.t,alt:"filter"}),Object(l.jsx)("p",{children:d("categories:Filter")})]}),t?Object(l.jsxs)("div",{className:"filter-box",children:[n.map((function(e,s){return Object(l.jsxs)("div",{className:"flex items-center filter",children:[Object(l.jsx)("input",{type:"checkbox",className:"mr-2"}),Object(l.jsx)("p",{children:e})]},s)})),Object(l.jsxs)("div",{className:"budget",children:[Object(l.jsxs)("p",{children:[d("categories:Budget")," - NGN"]}),Object(l.jsx)("input",{type:"range",className:"range"}),Object(l.jsxs)("div",{className:"inputs flex items-center justify-between",children:[Object(l.jsx)("input",{placeholder:"500,000"}),"-",Object(l.jsx)("input",{placeholder:"500,000,000"})]})]}),Object(l.jsxs)("div",{className:"buttons flex items-center justify-between",children:[Object(l.jsx)("button",{className:"clear",children:d("categories:Clear all")}),Object(l.jsx)("button",{className:"apply",children:d("categories:Apply")})]})]}):null]})}function d(e){var s=e.items,t=void 0===s?[]:s,c=Object(a.a)().t;return Object(l.jsxs)("div",{className:"sort flex items-center justify-between",children:[Object(l.jsx)("p",{className:"t",children:c("categories:Sort")}),Object(l.jsx)("div",{className:"flex items-center",children:t.map((function(e,s){return Object(l.jsx)("span",{className:"flex items-center justify-between",children:Object(l.jsx)("p",{children:e})},s)}))})]})}var o=t(13),b=t(63);function m(e){var s=e.image,t=e.title,c=e.description,i=e.insight,r=e.type,n=Object(a.a)().t;Object(o.h)().url;return Object(l.jsxs)("div",{onClick:function(){return b.a.push("/dashboard/categories/cats/".concat(r,"/1"))},className:"cat-card cat-card-01 flex",children:[Object(l.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(s,")")}}),Object(l.jsxs)("div",{className:"text",children:[t?Object(l.jsx)("p",{className:"title",children:t}):null,Object(l.jsx)("p",{className:"description",children:c}),Object(l.jsxs)("div",{className:"insights flex items-center",children:[Object(l.jsxs)("div",{className:"insight",children:[Object(l.jsx)("p",{className:"label",children:n("categories:ALLOCATED BUDGET")}),Object(l.jsxs)("p",{className:"value",children:[i.budget," NGN"]}),Object(l.jsx)("p",{className:"sub-label",children:n("categories:BASED ON 2019 BUDGET")})]}),Object(l.jsxs)("div",{className:"insight",children:[Object(l.jsx)("p",{className:"label",children:n("categories:ACTIVE PROJECTS")}),Object(l.jsx)("p",{className:"value",children:i.project}),Object(l.jsx)("p",{className:"sub-label",children:n("categories:ACCROSS 36 STATES & FCT")})]})]})]})]})}function u(e){var s=e.project_name,t=e.date,c=e.description,i=e.insight,n=Object(a.a)().t;return Object(l.jsxs)("div",{className:"cat-card cat-card-02",children:[Object(l.jsxs)("div",{className:"top-section flex items-center",children:[Object(l.jsx)("img",{src:r.J,className:"mr-3",alt:"project"}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("p",{className:"title",children:s}),Object(l.jsx)("p",{className:"date",children:t})]})]}),Object(l.jsx)("p",{className:"description",children:c}),Object(l.jsx)("a",{href:"#",className:"link",children:n("categories:View Project")}),Object(l.jsxs)("div",{className:"insights flex items-center justify-between",children:[Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsxs)("div",{className:"insight",children:[Object(l.jsx)("p",{className:"label",children:n("categories:ALLOCATED BUDGET")}),Object(l.jsxs)("p",{className:"value",children:[i.budget," NGN"]})]}),Object(l.jsxs)("div",{className:"insight",children:[Object(l.jsx)("p",{className:"label",children:n("categories:STATE")}),Object(l.jsx)("p",{className:"value",children:i.state})]}),Object(l.jsxs)("div",{className:"insight",children:[Object(l.jsx)("p",{className:"label",children:n("categories:PROJECT STATUS")}),Object(l.jsx)("p",{className:"value status",children:i.status})]})]}),Object(l.jsx)("button",{children:"Eyemark"})]})]})}function h(e){var s=e.icon,t=e.title,c=e.description,i=e.images,a=e.link,r=Object(o.h)().url;return Object(l.jsxs)("div",{onClick:function(){return b.a.push("".concat(r,"/").concat(a))},className:"cat-card cat-card-03 flex items-start justify-between",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsxs)("div",{className:"flex items-center",style:{marginBottom:"63px"},children:[Object(l.jsx)("img",{className:"mr-4",src:s,alt:t}),Object(l.jsx)("p",{className:"title",children:t})]}),Object(l.jsx)("p",{className:"description",children:c})]}),Object(l.jsx)("div",{className:"images",children:i.map((function(e,s){return Object(l.jsx)("img",{src:e,alt:t},s)}))})]})}},348:function(e,s,t){},652:function(e,s,t){"use strict";t.r(s),t.d(s,"Screen1",(function(){return d}));t(0);var c=t(188),i=t(59),a=(t(348),t(225)),r=t(205),n=t(11),l=[{title:"Sectors",link:"sectors",images:[r.h,r.i,r.j,r.k],description:"Sectors assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",icon:n.N},{title:"SDGs",link:"sdgs",images:[r.v,r.z,r.y,r.u],description:"SDGs assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",icon:n.L},{title:"Ministries",link:"ministries",images:[r.p,r.r,r.q,r.o],description:"Ministries assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",icon:n.C},{title:"States",link:"states",images:[r.B,r.D,r.C,r.A],description:"States assists our clients with any questions on the performance and durability of road materials and products. To this end we offer a wide array of services.",icon:n.ab}],j=t(1);function d(){var e=Object(i.a)().t;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.a,{children:Object(j.jsxs)("title",{children:["Eyemark - ",e("categories:Categories")]})}),Object(j.jsx)("div",{className:"navigation flex items-center",children:Object(j.jsx)("p",{children:e("categories:Categories")})}),Object(j.jsx)("div",{className:"screen1-categories",children:l.map((function(e,s){return Object(j.jsx)(a.c,{link:e.link,images:e.images,title:e.title,description:e.description,icon:e.icon},s)}))})]})}s.default=d}}]);
//# sourceMappingURL=27.60751e41.chunk.js.map