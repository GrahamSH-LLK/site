(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{244:function(n,e,t){var content=t(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("6e65523c",content,!0,{sourceMap:!1})},245:function(n,e,t){var content=t(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("12b41d7e",content,!0,{sourceMap:!1})},246:function(n,e,t){"use strict";t.r(e);var r=t(18),o=t(5),l=(t(24),{asyncData:function(n){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,o,l,c,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.$content,o=n.params,e.next=3,t("articles").sortBy("createdAt","asc").surround(o.slug).fetch();case 3:return l=e.sent,c=Object(r.a)(l,2),m=c[0],h=c[1],e.abrupt("return",{prev:m,next:h});case 8:case"end":return e.stop()}}),e)})))()}}),c=t(12),component=Object(c.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.prev?t("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:n.prev.slug}}}},[n._v("\n    "+n._s(n.prev.title)+"\n  ")]):n._e(),n._v(" "),n.next?t("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:n.next.slug}}}},[n._v("\n    "+n._s(n.next.title)+"\n  ")]):n._e()],1)}),[],!1,null,null,null);e.default=component.exports},253:function(n,e,t){"use strict";t(244)},254:function(n,e,t){var r=t(36),o=t(255),l=t(256),c=r((function(i){return i[1]})),m=o(l);c.push([n.i,".prose .list-none>li:before{\n  display:none\n}\n.icon.icon-link{\n  background-image:url("+m+');\n  display:inline-block;\n  width:20px;\n  height:20px;\n  background-size:20px 20px;\n  margin-right:5px;\n  visibility:hidden\n}\na:hover .icon.icon-link{\n  visibility:visible!important\n}\npre[class*=language-].line-numbers{\n  position:relative;\n  padding-left:3.8em;\n  counter-reset:linenumber\n}\npre[class*=language-].line-numbers>code{\n  position:relative;\n  white-space:inherit\n}\n.line-numbers .line-numbers-rows{\n  position:absolute;\n  pointer-events:none;\n  top:0;\n  font-size:100%;\n  left:-3.8em;\n  width:3em;\n  letter-spacing:-1px;\n  border-right:1px solid #999;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n.line-numbers-rows>span{\n  display:block;\n  counter-increment:linenumber\n}\n.line-numbers-rows>span:before{\n  content:counter(linenumber);\n  color:#999;\n  display:block;\n  padding-right:.8em;\n  text-align:right\n}\n.nuxt-content-highlight{\n  position:relative\n}\n.nuxt-content-highlight>.filename{\n  font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;\n  font-size:.875rem;\n  line-height:1.25rem;\n  line-height:1;\n  margin-top:.75rem;\n  margin-right:1rem;\n  position:absolute;\n  top:0;\n  right:0;\n  --tw-text-opacity:1;\n  color:rgba(243,244,246,var(--tw-text-opacity));\n  letter-spacing:-.025em;\n  z-index:2;\n  color:#000\n}\n.nuxt-content-highlight>.filename+pre[class*=language-]{\n  padding-top:2rem\n}',""]),n.exports=c},256:function(n,e,t){n.exports=t.p+"6c59b9907d19e9665455acbfcb710b53.svg"},257:function(n,e,t){"use strict";t(245)},258:function(n,e,t){var r=t(36)((function(i){return i[1]}));r.push([n.i,"article.prose{\n  max-width:80ch!important\n}",""]),n.exports=r},277:function(n,e,t){"use strict";t.r(e);var r=t(5),o=(t(24),t(251)),l=t.n(o),c=(t(252),{mounted:function(){l.a.highlightAll()},head:function(){return{title:"".concat(this.article.title," - Blog - GrahamSH")}},methods:{formatDate:function(n){return new Date(n).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.$content,r=n.params,e.next=3,t("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),m=(t(253),t(257),t(12)),component=Object(m.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("main",{staticClass:"container mx-auto px-4 mt-28 md:mt-16 min-h-screen"},[t("article",{staticClass:"prose"},[t("h1",[n._v(n._s(n.article.title))]),n._v(" "),t("p",[n._v(n._s(n.article.description))]),n._v(" "),t("p",[n._v("Post last updated: "+n._s(n.formatDate(n.article.updatedAt)))]),n._v(" "),t("nav",[t("h4",[n._v("Table of contents")]),n._v(" "),t("ul",{staticClass:"list-none"},n._l(n.article.toc,(function(link){return t("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth}},[t("NuxtLink",{attrs:{to:"#"+link.id}},[n._v(n._s(link.text))])],1)})),0)]),n._v(" "),t("nuxt-content",{attrs:{document:n.article}}),n._v(" "),t("script",{attrs:{src:"https://utteranc.es/client.js",repo:"grahamsh-llk/site","issue-term":"title",theme:"github-light",crossorigin:"anonymous",async:""}}),n._v(" "),t("NextPrev")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:t(122).default,NextPrev:t(246).default})}}]);