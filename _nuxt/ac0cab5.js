(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(e,r,t){"use strict";t.r(r);var d={props:{type:{type:String,required:!0},imageUrl:{type:String,required:!1,default:null},backgroundSize:{type:String,required:!1,default:"cover"},iframeUrl:{type:String,required:!1,default:null}},data:function(){return{itemLoaded:!1}}},l=t(12),component=Object(l.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return"repository"===e.type?t("div",{staticClass:"p-4 space-y-1 bg-gray-100 rounded-md hover:bg-gray-200 dark:hover:bg-opacity-80 dark:bg-gray-800 dark:hover:bg-gray-800"},[t("div",{staticClass:"w-7/12 h-4 bg-gray-300 rounded-md dark:bg-gray-700 animate-pulse"}),e._v(" "),e._m(0)]):"image"===e.type&&e.imageUrl?t("div",{class:{"bg-gray-100 dark:bg-gray-700 animate-pulse":!1===e.itemLoaded},style:{background:!0===e.itemLoaded?"url('"+e.imageUrl+"') no-repeat center":"",backgroundSize:!0===e.itemLoaded?e.backgroundSize:""}},[t("img",{staticClass:"invisible",attrs:{src:e.imageUrl,draggable:"false",alt:"image",width:"100%",height:"100%"},on:{load:function(r){e.itemLoaded=!0}}})]):"iframe"===e.type&&e.iframeUrl?t("div",{class:{"h-56 w-full":!0,"bg-gray-100 dark:bg-gray-800 rounded animate-pulse":!1===e.itemLoaded}},[t("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===e.itemLoaded},attrs:{src:e.iframeUrl},on:{load:function(r){e.itemLoaded=!0}}})]):e._e()}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"space-y-px animate-pulse"},[t("div",{staticClass:"w-full h-3 bg-gray-300 rounded-md dark:bg-gray-700"}),e._v(" "),t("div",{staticClass:"w-11/12 h-3 bg-gray-300 rounded-md dark:bg-gray-700"}),e._v(" "),t("div",{staticClass:"w-4/12 h-3 bg-gray-300 rounded-md dark:bg-gray-700"})])}],!1,null,null,null);r.default=component.exports}}]);