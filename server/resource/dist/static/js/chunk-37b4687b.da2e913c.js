(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b4687b"],{"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d8e8"),i=n("4bf8"),c=n("79e5"),u=[].sort,a=[1,2,3];r(r.P+r.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!n("2f21")(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},c478:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),c=n("32e9"),u=n("84f2"),a=n("41a0"),s=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",m="keys",v="values",h=function(){return this};t.exports=function(t,e,n,y,b,g,x){a(n,e,y);var _,S,T,w=function(t){if(!p&&t in C)return C[t];switch(t){case m:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",j=b==v,L=!1,C=t.prototype,P=C[l]||C[d]||b&&C[b],I=P||w(b),k=b?j?w("entries"):I:void 0,M="Array"==e&&C.entries||P;if(M&&(T=f(M.call(new t)),T!==Object.prototype&&T.next&&(s(T,O,!0),r||"function"==typeof T[l]||c(T,l,h))),j&&P&&P.name!==v&&(L=!0,I=function(){return P.call(this)}),r&&!x||!p&&!L&&C[l]||c(C,l,I),u[e]=I,u[O]=h,b)if(_={values:j?I:w(v),keys:g?I:w(m),entries:k},x)for(S in _)S in C||i(C,S,_[S]);else o(o.P+o.F*(p||L),e,_);return _}},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,c=i(e),u=c.length,a=0;while(u>a)r.f(t,n=c[a++],e[n]);return t}},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),c=n("ca5a")("src"),u=n("fa5b"),a="toString",s=(""+u).split(a);n("8378").inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var a="function"==typeof n;a&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(a&&(i(n,c)||o(n,c,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:u?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[c]||u.call(this)})},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),c=n("613b")("IE_PROTO"),u=function(){},a="prototype",s=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",c=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),s=t.F;while(r--)delete s[a][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[a]=r(t),n=new u,u[a]=null,n[c]=t):n=s(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,c="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};u.store=r},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),c={};n("32e9")(c,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},4242:function(t,e,n){"use strict";var r=n("5fae"),o=n.n(r);o.a},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",function(){return function(t){return o(r(t))}})},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"46e3":function(t,e,n){},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d8e8"),i=n("4bf8"),c=n("79e5"),u=[].sort,a=[1,2,3];r(r.P+r.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!n("2f21")(u)),"Array",{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),c=n("2aba"),u=n("9b43"),a="prototype",s=function(t,e,n){var f,l,p,d,m=t&s.F,v=t&s.G,h=t&s.S,y=t&s.P,b=t&s.B,g=v?r:h?r[e]||(r[e]={}):(r[e]||{})[a],x=v?o:o[e]||(o[e]={}),_=x[a]||(x[a]={});for(f in v&&(n=e),n)l=!m&&g&&void 0!==g[f],p=(l?g:n)[f],d=b&&l?u(p,r):y&&"function"==typeof p?u(Function.call,p):p,g&&c(g,f,p,t&s.U),x[f]!=p&&i(x,f,d),y&&_[f]!=p&&(_[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},"5fae":function(t,e,n){},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in o||n("9e1e")&&r(o,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),c=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"8bbf":function(t,e){t.exports=n("2b0e")},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),c=n("7726"),u=n("32e9"),a=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(d),v=0;v<m.length;v++){var h,y=m[v],b=d[y],g=c[y],x=g&&g.prototype;if(x&&(x[f]||u(x,f,p),x[l]||u(x,l,y),a[y]=p,b))for(h in r)x[h]||i(x,h,r[h],!0)}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){while(s>f)if(u=a[f++],u!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),c=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),c=n("613b")("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)n!=c&&r(u,n)&&s.push(n);while(e.length>a)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},ef0c:function(t,e,n){"use strict";var r=n("46e3"),o=n.n(r);o.a},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));n("7f7f");var o=n("8bbf"),i=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"timeline"},[t.hasItems?n("div",{staticClass:"wrapper-timeline"},t._l(t.dataTimeline,function(e,r){return n("div",{key:r,class:t.wrapperItemClass(r)},[n("div",{staticClass:"section-year"},[t.hasYear(e)?n("p",{staticClass:"year"},[t._v(" "+t._s(t.getYear(e))+" ")]):t._e()]),n("TimelineItem",{attrs:{"item-timeline":e,"date-locale":t.dateLocale,"color-dots":t.colorDots}})],1)}),0):n("p",[t._v(t._s(t.messageWhenNoItems))])])},u=[],a=(n("55dd"),n("cadf"),n("456d"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"timeline-item"},[n("div",{staticClass:"item"},[n("span",{staticClass:"dot",style:t.getBackgroundColour(t.itemTimeline.color)}),n("h3",{staticClass:"date-item"},[t._v(t._s(t.getFormattedDate(t.itemTimeline)))]),n("h4",{staticClass:"title-item",domProps:{innerHTML:t._s(t.itemTimeline.title)}}),n("p",{staticClass:"description-item",domProps:{innerHTML:t._s(t.itemTimeline.description)}})])])}),s=[],f={name:"TimelineItem",props:{itemTimeline:{type:Object,default:function(){return{}}},colorDots:{type:String,default:"#2da1bf"},dateLocale:{type:String,default:""}},methods:{getBackgroundColour:function(t){return"background:".concat(t||this.colorDots)},getFormattedDate:function(t){var e=this.dateLocale||navigator.language,n=t.from.toLocaleDateString(e,{month:"long"});if(t.showDayAndMonth){var r=t.from.getDate();return"".concat(r,". ").concat(n)}return n}}},l=f;n("ef0c");function p(t,e,n,r,o,i,c,u){var a,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,e){return a.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}var d=p(l,a,s,!1,null,"c255c6be",null),m=d.exports,v={name:"Timeline",components:{TimelineItem:m},props:{timelineItems:{type:Array,default:function(){return[]}},messageWhenNoItems:{type:String,default:""},colorDots:{type:String,default:"#2da1bf"},uniqueTimeline:{type:Boolean,default:!1},uniqueYear:{type:Boolean,default:!1},order:{type:String,default:""},dateLocale:{type:String,default:""}},computed:{hasItems:function(){return!!this.timelineItems.length},dataTimeline:function(){return"desc"===this.order?this.orderItems(this.timelineItems,"desc"):"asc"===this.order?this.orderItems(this.timelineItems,"asc"):this.timelineItems}},methods:{wrapperItemClass:function(t){var e=this.checkYearTimelineItem(t),n=this.uniqueYear&&e&&void 0!==this.order;return{"wrapper-item":!0,"unique-timeline":this.uniqueTimeline||n}},checkYearTimelineItem:function(t){var e=this.dataTimeline[t-1],n=this.dataTimeline[t+1],r=this.dataTimeline[t];if(!e||!n)return!1;var o=this.getYear(e),i=this.getYear(n),c=this.getYear(r);return o===c&&c===i||c===i},getYear:function(t){return t.from.getFullYear()},hasYear:function(t){return t.hasOwnProperty("from")&&void 0!==t.from},getTimelineItemsAssembled:function(t){var e=[];return t.forEach(function(t){var n=t.from.getTime();if(e[n])return e[n].push(t);e[n]=[t]}),e},orderItems:function(t,e){var n=this.getTimelineItemsAssembled(t),r=Object.keys(n),o=r.sort(function(t,n){return"desc"===e?n-t:t-n});return o.map(function(t){return n[t]}).flat()}}},h=v,y=(n("4242"),p(h,c,u,!1,null,"7a83eb0d",null)),b=y.exports;i.a.component(b.name,b);var g=b;e["default"]=g}})}}]);