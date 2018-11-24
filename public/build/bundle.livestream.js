(window.webpackJsonp=window.webpackJsonp||[]).push([["livestream"],{"./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./views/livestream/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./views/livestream/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t),t.default={data:function(){return{messageHistory:[],messageValue:null,socket:null}},watch:{messageHistory:function(){setTimeout(()=>{this.scrollDown()},10)}},methods:{logout:function(){this.$cookies.remove("authentication"),window.location.replace("/")},scrollDown:function(){var e=this.$refs.historyContainer;e.scrollTop=e.scrollHeight+100},sendMessage:function(){this.messageValue.length>0&&this.socket.emit("msg",this.messageValue)},currentUser(e){return e===this.user.id}},computed:{user:function(){return this.$root.user}},filters:{formatDateTime:function(e){return moment(e).format("DD/MM/YYYY HH:mm")}},mounted:function(){this.scrollDown(),this.socket=io.connect("http://localhost:4401"),this.socket.emit("auth",this.$cookies.get("authentication")),this.socket.on("msg",e=>{this.messageHistory.push(e),this.messageValue=null}),this.$http.get("/livestream/history").then(function(e){this.messageHistory=e.body},e=>{this.$root.toast(e.body,"red")})}}},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,s){(e.exports=s(/*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"\n.bordered-grey {\n    border: 1px solid grey !important;\n}\n.bordered {\n    border: 1px solid black !important;\n}\n.max-height {\n    min-height: 100%;\n}\n.messageContainer {\n    overflow-wrap: break-word;\n}\n#historyContainer {\n    height: 425px; \n    overflow-y: scroll;\n}\n#videoContainer {\n    width: 100%;\n    height: 500px;\n}\n",""])},"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,s){var n=s(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js!./index.vue?vue&type=style&index=0&lang=css& */"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css&");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=template&id=427f0604&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=template&id=427f0604& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,s){"use strict";s.r(t),s.d(t,"render",function(){return n}),s.d(t,"staticRenderFns",function(){return o});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{staticClass:"auth-fs-background",attrs:{"justify-center":""}},[s("v-flex",{attrs:{xs11:""}},[s("v-card",{staticClass:"mt-5"},[s("v-card-title",[s("h3",{staticClass:"headline mb-0"},[e._v("Livestream Chatroom")]),e._v(" "),s("v-btn",{attrs:{right:"",absolute:""},on:{click:e.logout}},[e._v("Logout")])],1),e._v(" "),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs8:""}},[s("v-card",{staticClass:"bordered"},[s("iframe",{attrs:{id:"videoContainer",src:"https://www.youtube.com/embed/XOacA3RYrXk?autoplay=1",allow:"autoplay"}})])],1),e._v(" "),s("v-flex",{staticClass:"pl-3 max-height",attrs:{xs4:""}},[s("v-card",{staticClass:"max-height bordered"},[s("v-card-text",{ref:"historyContainer",attrs:{id:"historyContainer"}},e._l(e.messageHistory,function(t){return s("v-flex",{key:t.id,attrs:{"offset-xs3":e.currentUser(t.user_id),xs9:!e.currentUser(t.user_id)}},[s("v-card",{staticClass:"mb-2 pa-2 bordered-grey messageContainer"},[s("v-card-text",{staticClass:"pa-0"},[e.currentUser(t.user_id)?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{left:""}},[s("small",[e._v(e._s(e._f("formatDateTime")(t.created_datetime)))])]),e._v(" "),s("v-flex",{staticClass:"text-xs-right",attrs:{right:""}},[s("small",[e._v(e._s(t.name))])])],1):s("v-layout",[s("v-flex",{attrs:{left:""}},[s("small",[e._v(e._s(t.name))])]),e._v(" "),s("v-flex",{staticClass:"text-xs-right",attrs:{right:""}},[s("small",[e._v(e._s(e._f("formatDateTime")(t.created_datetime)))])])],1),e._v(" "),s("v-divider",{staticClass:"pb-2"}),e._v(" "),s("div",{class:{"text-xs-right":e.currentUser(t.user_id)}},[e._v("\n                                                "+e._s(t.message)+"\n                                            ")])],1)],1)],1)})),e._v(" "),s("v-card-actions",[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{box:"",outline:"","append-icon":"send","hide-details":"","single-line":""},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.sendMessage(t):null},"click:append":e.sendMessage},model:{value:e.messageValue,callback:function(t){e.messageValue=t},expression:"messageValue"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[];n._withStripped=!0},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */function(e,t,s){"use strict";function n(e,t,s,n,o,r,i,a){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):o&&(d=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),d)if(l.functional){l._injectStyles=d;var u=l.render;l.render=function(e,t){return d.call(t),u(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,d):[d]}return{exports:e,options:l}}s.r(t),s.d(t,"default",function(){return n})},"./views/livestream/index.vue":
/*!************************************!*\
  !*** ./views/livestream/index.vue ***!
  \************************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! ./index.vue?vue&type=template&id=427f0604& */"./views/livestream/index.vue?vue&type=template&id=427f0604&"),o=s(/*! ./index.vue?vue&type=script&lang=js& */"./views/livestream/index.vue?vue&type=script&lang=js&"),r=(s(/*! ./index.vue?vue&type=style&index=0&lang=css& */"./views/livestream/index.vue?vue&type=style&index=0&lang=css&"),s(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(r.default)(o.default,n.render,n.staticRenderFns,!1,null,null,null);i.options.__file="views/livestream/index.vue",t.default=i.exports},"./views/livestream/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./views/livestream/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */function(e,t,s){"use strict";s.r(t);var n=s(/*! -!../../node_modules/cache-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */"./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./views/livestream/index.vue?vue&type=script&lang=js&");t.default=n.default},"./views/livestream/index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./views/livestream/index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */function(e,t,s){"use strict";s.r(t);var n=s(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js!./index.vue?vue&type=style&index=0&lang=css& */"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=style&index=0&lang=css&"),o=s.n(n);for(var r in n)"default"!==r&&function(e){s.d(t,e,function(){return n[e]})}(r);t.default=o.a},"./views/livestream/index.vue?vue&type=template&id=427f0604&":
/*!*******************************************************************!*\
  !*** ./views/livestream/index.vue?vue&type=template&id=427f0604& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,s){"use strict";s.r(t);var n=s(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js!./index.vue?vue&type=template&id=427f0604& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js!./views/livestream/index.vue?vue&type=template&id=427f0604&");s.d(t,"render",function(){return n.render}),s.d(t,"staticRenderFns",function(){return n.staticRenderFns})}}]);
//# sourceMappingURL=bundle.livestream.js.map