(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-761b984c","chunk-2d21a844","chunk-2d0b9e22","chunk-2d0aa631","chunk-2d0a3741","chunk-2d0e9955"],{"01f0":function(t,e,r){t.exports=r.p+"static/img/video.09ec4416.png"},1194:function(t,e,r){t.exports=r.p+"static/img/logo_login.7918108b.png"},"359c":function(t,e,r){t.exports=r.p+"static/img/github.5d298198.png"},"3d01":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-layout-wrapper",attrs:{id:"userLayout"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"main"},[r("el-form",{ref:"registerForm",attrs:{model:t.registerForm,rules:t.rules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.registerForm.username,callback:function(e){t.$set(t.registerForm,"username",e)},expression:"registerForm.username"}},[r("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"suffix"},slot:"suffix"})])],1),t._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"lock"===t.lock?"password":"text",placeholder:"请输入密码"},model:{value:t.registerForm.password,callback:function(e){t.$set(t.registerForm,"password",e)},expression:"registerForm.password"}},[r("i",{class:"el-input__icon el-icon-"+t.lock,attrs:{slot:"suffix"},on:{click:t.changeLock},slot:"suffix"})])],1),t._v(" "),r("el-form-item",{staticStyle:{position:"relative"},attrs:{prop:"rePassword"}},[r("el-input",{attrs:{type:"lock"===t.lock?"password":"text",placeholder:"请再次输入密码"},model:{value:t.registerForm.rePassword,callback:function(e){t.$set(t.registerForm,"rePassword",e)},expression:"registerForm.rePassword"}},[r("i",{class:"el-input__icon el-icon-"+t.lock,attrs:{slot:"suffix"},on:{click:t.changeLock},slot:"suffix"})])],1),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("注 册")])],1)],1)],1),t._v(" "),t._m(1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{staticClass:"desc"},[s("img",{staticClass:"logo_login",attrs:{src:r("1194"),alt:""}})]),t._v(" "),s("div",{staticClass:"header"},[s("a",{attrs:{href:"/"}},[s("span",{staticClass:"title"},[t._v("Gin-Vue-Admin")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"links"},[s("a",{attrs:{href:"http://doc.henrongyi.top/"}},[s("img",{staticClass:"link-icon",attrs:{src:r("bc9f")}})]),t._v(" "),s("a",{attrs:{href:"https://www.yuque.com/flipped-aurora/"}},[s("img",{staticClass:"link-icon",attrs:{src:r("8dc6")}})]),t._v(" "),s("a",{attrs:{href:"https://github.com/flipped-aurora/gin-vue-admin"}},[s("img",{staticClass:"link-icon",attrs:{src:r("359c")}})]),t._v(" "),s("a",{attrs:{href:"https://space.bilibili.com/322210472"}},[s("img",{staticClass:"link-icon",attrs:{src:r("01f0")}})])]),t._v(" "),s("div",{staticClass:"copyright"},[t._v("\n        Copyright © 2020 💖flipped-aurora\n      ")])])}],n=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),a=r("bd86"),o=r("2f62"),c=r("c24f");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var p={name:"Register",data:function(){var t=this,e=function(e,r,s){if(r!=t.registerForm.password)return s(new Error("两次密码不同"));s()},r=function(t,e,r){if(e.length<5||e.length>12)return r(new Error("请输入正确的用户名"));r()},s=function(t,e,r){if(e.length<6||e.length>12)return r(new Error("请输入正确的密码"));r()};return{lock:"lock",registerForm:{username:"",password:"",rePassword:""},rules:{username:[{validator:r,trigger:"blur"}],password:[{validator:s,trigger:"blur"}],rePassword:[{validator:e,trigger:"blur"}]}}},methods:u({},Object(o["b"])("user",["LoginIn"]),{submitForm:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$refs.registerForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return t.next=3,Object(c["register"])(e.registerForm);case 3:s=t.sent,0==s.code&&(e.$message({type:"success",message:"注册成功",showClose:!0}),e.$router.push({name:"login"})),t.next=9;break;case 7:return e.$message({type:"error",message:"请正确填写注册信息",showClose:!0}),t.abrupt("return",!1);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),changeLock:function(){"lock"===this.lock?this.lock="unlock":this.lock="lock"}})},f=p,m=(r("bcb8"),r("2877")),d=Object(m["a"])(f,s,i,!1,null,"382cb266",null);e["default"]=d.exports},"8dc6":function(t,e,r){t.exports=r.p+"static/img/yuque.5236e459.png"},"9aff":function(t,e,r){},bc9f:function(t,e,r){t.exports=r.p+"static/img/docs.20eecda0.png"},bcb8:function(t,e,r){"use strict";var s=r("9aff"),i=r.n(s);i.a}}]);