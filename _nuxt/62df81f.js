(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{320:function(t,e,n){},321:function(t,e,n){"use strict";n(320)},326:function(t,e,n){},327:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(321),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[n("unicon",{attrs:{name:"arrow-left",fill:"currentColor"}}),t._v(" "+t._s(t.prev.title)+"\n  ")],1):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+" "),n("unicon",{attrs:{name:"arrow-right",fill:"currentColor"}})],1):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n(326)},357:function(t,e,n){"use strict";n.r(e);var r=n(20),o=n(7),l=(n(26),n(28),n(39),n(331)),c=n.n(l),d=(n(332),{mounted:function(){c.a.highlightAll()},head:function(){return{title:"".concat(this.blog.title," - Blog - GrahamSH"),meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"og:description",name:"og:description",content:this.blog.description}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",o.slug).fetch();case 3:return l=e.sent,e.next=6,n("blog").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,d=Object(r.a)(c,2),f=d[0],v=d[1],e.abrupt("return",{blog:l,prev:f,next:v});case 11:case"end":return e.stop()}}),e)})))()}}),f=(n(333),n(9)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"prose-indigo prose"},[n("h1",[t._v(t._s(t.blog.title))]),t._v(" "),n("p",[t._v(t._s(t.blog.description))]),t._v(" "),n("p",[t._v("Post last updated: "+t._s(t.formatDate(t.blog.updatedAt)))]),t._v(" "),n("nav",[n("h4",[t._v("Table of contents")]),t._v(" "),n("ul",{staticClass:"list-none"},t._l(t.blog.toc,(function(link){return n("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),n("nuxt-content",{attrs:{document:t.blog}}),t._v(" "),n("NextPrev",{staticClass:"mt-8",attrs:{prev:t.prev,next:t.next}}),t._v(" "),n("script",{attrs:{src:"https://giscus.app/client.js","data-repo":"grahamsh-llk/site","data-repo-id":"MDEwOlJlcG9zaXRvcnkzMzEwNzc5NDA=","data-category-id":"MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyOTc4Nzgw","data-mapping":"title","data-theme":"light",crossorigin:"anonymous",async:""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:n(131).default,NextPrev:n(327).default})}}]);