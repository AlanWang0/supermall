(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d2163ab":"76e7c3e6","chunk-2d230a62":"0598f1f9","chunk-4a549f01":"14e723b6","chunk-7ad0bb72":"057c7602","chunk-c15c3a00":"48546872"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-4a549f01":1,"chunk-7ad0bb72":1,"chunk-c15c3a00":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d2163ab":"31d6cfe0","chunk-2d230a62":"31d6cfe0","chunk-4a549f01":"c55a7b6b","chunk-7ad0bb72":"01030a07","chunk-c15c3a00":"5fa42384"}[t]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},3522:function(t,e,n){},3704:function(t,e,n){},"544e":function(t,e,n){"use strict";var r=n("ae4b"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("MainTabBar",{staticClass:"MainTabBar"})],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MainTabBar"},[r("TabBar",[r("TabBarItem",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("b508"),alt:""},slot:"item-active-icon"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("TabBarItem",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("a5ef"),alt:""},slot:"item-active-icon"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("TabBarItem",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("c3f8"),alt:""},slot:"item-active-icon"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("TabBarItem",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-active-icon",src:n("d151"),alt:""},slot:"item-active-icon"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,p=(n("7bf3"),n("2877")),m=Object(p["a"])(f,s,u,!1,null,null,null),d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-active-icon")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,y=(n("6721"),Object(p["a"])(g,h,v,!1,null,null,null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:d,TabBarItem:k}},_=x,T=(n("544e"),Object(p["a"])(_,o,c,!1,null,null,null)),w=T.exports,B={name:"App",components:{MainTabBar:w}},O=B,j=(n("034f"),Object(p["a"])(O,a,i,!1,null,null,null)),C=j.exports,E=(n("d3b7"),n("3f11")),P=function(){return Promise.all([n.e("chunk-2d230a62"),n.e("chunk-4a549f01")]).then(n.bind(null,"b3d7"))},S=function(){return Promise.all([n.e("chunk-2d230a62"),n.e("chunk-7ad0bb72")]).then(n.bind(null,"bb51"))},A=function(){return n.e("chunk-2d2163ab").then(n.bind(null,"c228"))},M=function(){return Promise.all([n.e("chunk-2d230a62"),n.e("chunk-c15c3a00")]).then(n.bind(null,"3b42"))};r["a"].use(E["a"]);var $=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:S},{path:"/cart",component:A},{path:"/profile",component:M}],I=new E["a"]({routes:$,mode:"history"}),L=I;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(C)},router:L}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},6721:function(t,e,n){"use strict";var r=n("3704"),a=n.n(r);a.a},"7bf3":function(t,e,n){"use strict";var r=n("3522"),a=n.n(r);a.a},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},ae4b:function(t,e,n){},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.628de252.js.map