(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],f=0,d=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16ccab49":"0cf435c0","chunk-2d22c862":"c3b84496","chunk-608133f9":"7d102bfe","chunk-60816752":"c182efad","chunk-6081cc52":"ef5d01aa","chunk-6081d1a5":"0b4b3c6b","chunk-6082f3f9":"cbd3f7b7","chunk-6084216f":"07136a2a","chunk-61a41b54":"94c1ccb3"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-16ccab49":1,"chunk-61a41b54":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-16ccab49":"5386e968","chunk-2d22c862":"31d6cfe0","chunk-608133f9":"31d6cfe0","chunk-60816752":"31d6cfe0","chunk-6081cc52":"31d6cfe0","chunk-6081d1a5":"31d6cfe0","chunk-6082f3f9":"31d6cfe0","chunk-6084216f":"31d6cfe0","chunk-61a41b54":"e4b20bc7"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),t(a)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var h=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"49f8":function(e,n,t){var r={"./en.json":"edd4"};function o(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="49f8"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],a={name:"App"},u=a,i=t("2877"),l=Object(i["a"])(u,o,c,!1,null,null,null),f=l.exports,d=(t("d3b7"),t("96cf"),t("1da1")),h=t("8c4f"),p=(t("4160"),t("ac1f"),t("466d"),t("159b"),t("ddb0"),t("a925"));function s(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t)}})),n}r["a"].use(p["a"]);var b=new p["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:s()});r["a"].use(h["a"]);var m=[{path:"/:locale",component:function(){return t.e("chunk-2d22c862").then(t.bind(null,"f431"))},beforeEnter:function(e,n,t){b.locale=e.params.locale,t()},children:[{path:"",name:"HelloWorld",component:function(){return t.e("chunk-16ccab49").then(t.bind(null,"fdab"))}},{path:"2",name:"HelloWorld2",component:function(){return t.e("chunk-61a41b54").then(t.bind(null,"d685"))}},{path:"index",name:"AlimeIndex",component:function(){return t.e("chunk-6082f3f9").then(t.bind(null,"5a9d"))}},{path:"about",name:"AlimeAbout",component:function(){return t.e("chunk-608133f9").then(t.bind(null,"1f02"))}},{path:"gallery",name:"AlimeGallery",component:function(){return t.e("chunk-6081cc52").then(t.bind(null,"40a5"))}},{path:"blog",name:"AlimeBlog",component:function(){return t.e("chunk-60816752").then(t.bind(null,"34d3"))}},{path:"single-blog",name:"AlimeSingleBlog",component:function(){return t.e("chunk-6084216f").then(t.bind(null,"94c5"))}},{path:"contact",name:"AlimeContact",component:function(){return t.e("chunk-6081d1a5").then(t.bind(null,"4304"))}}]},{path:"*",redirect:"/en"}],v=new h["a"]({mode:"history",routes:m});v.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var g=v;r["a"].config.productionTip=!1,new r["a"]({router:g,i18n:b,render:function(e){return e(f)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"message":"hello i18n !!"}')}});
//# sourceMappingURL=app.7da6c63a.js.map