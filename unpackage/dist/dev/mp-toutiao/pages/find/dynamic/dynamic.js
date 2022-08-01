(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/find/dynamic/dynamic"],{

/***/ 319:
/*!*********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Ffind%2Fdynamic%2Fdynamic"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _dynamic = _interopRequireDefault(__webpack_require__(/*! ./pages/find/dynamic/dynamic.vue */ 320));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_dynamic.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 320:
/*!************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic.vue?vue&type=template&id=53cedd92& */ 321);
/* harmony import */ var _dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic.vue?vue&type=script&lang=js& */ 323);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic.vue?vue&type=style&index=0&lang=css& */ 327);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/find/dynamic/dynamic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 321:
/*!*******************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=template&id=53cedd92& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dynamic.vue?vue&type=template&id=53cedd92& */ 322);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_template_id_53cedd92___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 322:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=template&id=53cedd92& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 379))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 323:
/*!*************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dynamic.vue?vue&type=script&lang=js& */ 324);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 324:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var e,
t = __webpack_require__(/*! ../../utils/api.js */ 325),
a = "",
app = getApp();var u8Ad = function u8Ad() {__webpack_require__.e(/*! require.ensure | components/u8AD/u8AD */ "components/u8AD/u8AD").then((function () {return resolve(__webpack_require__(/*! ../../../components/u8AD/u8AD */ 530));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  data: function data() {
    return {
      videos: [],
      tabHidden: !0,
      refreshStatus: !1,
      scrollTop: 0,
      u8ad: {
        adData: {},
        ad: {
          banner: "banner",
          insert: "insert",
          fixed: "fixed" } } };



  },

  components: {
    u8Ad: u8Ad },

  props: {},
  onLoad: function onLoad() {
    a = "";
    var o = this;
    uni.showLoading({
      title: "正在拼命加载中..." }),
    t.getConfig(function () {
      o.setData({
        tabHidden: app.globalData.isShenHe }),
      e = 1, app.globalData.isShenHe ? (a = "情侣壁纸", o.getTabVideo()) : o.getRecommendVideo();
    });
    getApp();
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: "精选高清手机壁纸，动态壁纸，头像",
      path: "pages/find/dynamic/dynamic" };

  },
  onShareTimeline: function onShareTimeline() {
    return {
      title: "精选高清手机壁纸，动态壁纸，头像" };

  },
  methods: {
    fh: function fh() {
      uni.navigateBack();
    },
    getRecommendVideo: function getRecommendVideo() {
      var a = this,
      i = this.videos;
      t.getRecommendVideo(e, function (t) {
        1 == e && (i = [], a.setData({
          scrollTop: 0 }));

        for (var o = 0; o < t.length; o++) {"1" != t[o].is_ads && i.push(t[o]);}
        a.setData({
          videos: i,
          refreshStatus: !1 }),
        uni.stopPullDownRefresh(), uni.hideLoading();
      }, function (e) {
        uni.stopPullDownRefresh(), uni.hideLoading();
      });
    },
    getTabVideo: function getTabVideo() {
      var i = this,
      o = this.videos;
      console.log("tag=" + a), t.getTabVideo(e, a, function (t) {
        1 == e && (o = [], i.setData({
          scrollTop: 0 }));

        for (var a = 0; a < t.length; a++) {"1" != t[a].is_ads && o.push(t[a]);}
        i.setData({
          videos: o,
          refreshStatus: !1 }),
        uni.stopPullDownRefresh(), uni.hideLoading();
      }, function (e) {
        uni.stopPullDownRefresh(), uni.hideLoading();
      });
    },
    preview: function preview(e) {
      var t = e.currentTarget.dataset.url;
      uni.navigateTo({
        url: "../../dynamicdetail/dynamicdetail?url=" + encodeURIComponent(t) });

    },


    searchTap: function searchTap(e) {
      uni.navigateTo({
        url: "../../searchvideo/searchvideo" });

    },
    dayTap: function dayTap(t) {
      uni.showLoading({
        title: "正在拼命加载中..." }),
      a = "每日精选", e = 1, this.getTabVideo();
    },
    chaoQingTap: function chaoQingTap(t) {
      uni.showLoading({
        title: "正在拼命加载中..." }),
      a = "60帧超清", e = 1, this.getTabVideo();
    },
    QLTap: function QLTap(t) {
      uni.showLoading({
        title: "正在拼命加载中..." }),
      a = "情侣壁纸", e = 1, this.getTabVideo();
    },
    sx: function sx(t) {
      a = "每日精选",
      e = 1,
      this.getTabVideo(),
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300 });

    },
    backTop: function backTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300 });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 327:
/*!*********************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./dynamic.vue?vue&type=style&index=0&lang=css& */ 328);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_dynamic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 328:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/dynamic/dynamic.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[319,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWU/NzcwZiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWU/MTFkMiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWU/YmI0NiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWU/ODE4MCIsInVuaS1hcHA6Ly8vcGFnZXMvZmluZC9keW5hbWljL2R5bmFtaWMudnVlIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvZHluYW1pYy9keW5hbWljLnZ1ZT8zZGI5Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvZHluYW1pYy9keW5hbWljLnZ1ZT8yMWVmIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSx3Ryw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxnQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUNhOzs7QUFHbkU7QUFDcU07QUFDck0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1TUFFTjtBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQTh3QixDQUFnQiw0d0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VFbHlCO0FBQ0Esc0RBREE7QUFFQSxNQUZBO0FBR0EsY0FIQSxDOztBQUtBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBLHVCQUhBO0FBSUEsa0JBSkE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFDQSwwQkFEQTtBQUVBLDBCQUZBO0FBR0Esd0JBSEEsRUFGQSxFQUxBOzs7O0FBY0EsR0FoQkE7O0FBa0JBO0FBQ0EsY0FEQSxFQWxCQTs7QUFxQkEsV0FyQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLFdBRkEsRUFFQSwrRUFGQTtBQUdBLEtBSkEsQ0FGQTtBQU9BO0FBQ0EsR0FqQ0E7QUFrQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsd0NBRkE7O0FBSUEsR0F2Q0E7QUF3Q0E7QUFDQTtBQUNBLCtCQURBOztBQUdBLEdBNUNBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBQ0Esc0JBREE7O0FBR0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsMkJBRkE7QUFHQSxpQ0FIQSxFQUdBLGlCQUhBO0FBSUEsT0FUQSxFQVNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FuQkE7QUFvQkE7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBLHNCQURBOztBQUdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLDJCQUZBO0FBR0EsaUNBSEEsRUFHQSxpQkFIQTtBQUlBLE9BVEEsRUFTQTtBQUNBO0FBQ0EsT0FYQTtBQVlBLEtBbkNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBLDZFQURBOztBQUdBLEtBekNBOzs7QUE0Q0E7QUFDQTtBQUNBLDRDQURBOztBQUdBLEtBaERBO0FBaURBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLGdCQUZBLEVBRUEsS0FGQSxFQUVBLGtCQUZBO0FBR0EsS0FyREE7QUFzREE7QUFDQTtBQUNBLDJCQURBO0FBRUEsaUJBRkEsRUFFQSxLQUZBLEVBRUEsa0JBRkE7QUFHQSxLQTFEQTtBQTJEQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxnQkFGQSxFQUVBLEtBRkEsRUFFQSxrQkFGQTtBQUdBLEtBL0RBO0FBZ0VBO0FBQ0E7QUFDQSxXQURBO0FBRUEsd0JBRkE7QUFHQTtBQUNBLG9CQURBO0FBRUEscUJBRkEsR0FIQTs7QUFPQSxLQXhFQTtBQXlFQSxXQXpFQSxxQkF5RUE7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkE7O0FBSUEsS0E5RUEsRUE3Q0EsRTs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFxbUMsQ0FBZ0IsK2pDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBem5DO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZmluZC9keW5hbWljL2R5bmFtaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9keW5hbWljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2NlZGQ5MiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2R5bmFtaWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9keW5hbWljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9keW5hbWljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pYy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2R5bmFtaWMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzY2VkZDkyJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9keW5hbWljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2R5bmFtaWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG48dmlldz5cclxuXHQ8dmlldyBjbGFzcz1cInRhYi1jb250YWluZXJcIiA6aGlkZGVuPVwidGFiSGlkZGVuXCI+XHJcblx0ICAgIDx2aWV3IEB0YXA9XCJzZWFyY2hUYXBcIiBjbGFzcz1cInRhYi1pdGVtXCI+XHJcblx0ICAgICAgICA8dmlldyBjbGFzcz1cImltZy1jb250YWluZXIxXCI+XHJcblx0ICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaXRlbV9zZWFyY2gucG5nXCI+PC9pbWFnZT5cclxuXHQgICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgIDx0ZXh0PuaQnOe0ojwvdGV4dD5cclxuXHQgICAgPC92aWV3PlxyXG5cdCAgICA8dmlldyBAdGFwPVwiZGF5VGFwXCIgY2xhc3M9XCJ0YWItaXRlbVwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJpbWctY29udGFpbmVyMlwiPlxyXG5cdCAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2l0ZW1faG90LnBuZ1wiPjwvaW1hZ2U+XHJcblx0ICAgICAgICA8L3ZpZXc+XHJcblx0ICAgICAgICA8dGV4dD7mr4/ml6Xnsr7pgIk8L3RleHQ+XHJcblx0ICAgIDwvdmlldz5cclxuXHQgICAgPHZpZXcgQHRhcD1cImNoYW9RaW5nVGFwXCIgY2xhc3M9XCJ0YWItaXRlbVwiPlxyXG5cdCAgICAgICAgPHZpZXcgY2xhc3M9XCJpbWctY29udGFpbmVyM1wiPlxyXG5cdCAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2l0ZW1fc2l4dHkucG5nXCI+PC9pbWFnZT5cclxuXHQgICAgICAgIDwvdmlldz5cclxuXHQgICAgICAgIDx0ZXh0PjYw5bin6LaF5riFPC90ZXh0PlxyXG5cdCAgICA8L3ZpZXc+XHJcblx0ICAgIDx2aWV3IEB0YXA9XCJRTFRhcFwiIGNsYXNzPVwidGFiLWl0ZW1cIj5cclxuXHQgICAgICAgIDx2aWV3IGNsYXNzPVwiaW1nLWNvbnRhaW5lcjRcIj5cclxuXHQgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9pdGVtX2NvdXBsZS5wbmdcIj48L2ltYWdlPlxyXG5cdCAgICAgICAgPC92aWV3PlxyXG5cdCAgICAgICAgPHRleHQ+5oOF5L6j5aOB57q4PC90ZXh0PlxyXG5cdCAgICA8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48c2Nyb2xsLXZpZXcgPlxyXG4gICAgPHZpZXcgQHRhcD1cInByZXZpZXdcIiBjbGFzcz1cImdyaWQtaXRlbVwiIDpkYXRhLXVybD1cIml0ZW0udmlkZW9fcHJldmlld191cmxcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdmlkZW9zXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJnXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInBob3RvXCIgbW9kZT1cImFzcGVjdEZpbGxcIiA6c3JjPVwiaXRlbS50aHVtYl9pbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY291bnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaXZcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9wbGF5X251bS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY291bnRcIj57e2l0ZW0ucGxheV9udW19fTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC9zY3JvbGwtdmlldz5cclxuXHJcbjx2aWV3IGNsYXNzPVwidThfZml4ZWRcIj5cclxuICAgIDx1OC1hZCA6YWREYXRhPVwidThhZC5hZERhdGFcIiBAYWRsb2FkPVwidThhZExvYWRcIiBAY2xpY2s9XCJ1OGFkQ2xpY2tcIiBAY2xvc2U9XCJ1OGFkQ2xvc2VcIiBjbGFzcz1cInU4X2NvbXBvbmVudFwiIDpkYXRhLWlkPVwidThhZC5hZC5maXhlZFwiPjwvdTgtYWQ+XHJcbjwvdmlldz5cclxuPGJsb2NrIHYtaWY9XCIhbG9hZEZsYWdcIj5cclxuICAgICAgPHZpZXcgOmNsYXNzPVwiWydib3R0b20nLGNzc1RyYW4/J2Nsb3NlQ3NzJzonb3BlbkNzcyddXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJuYXYtYm94XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hdi10YWJcIj5cclxuICAgICAgICAgICAgPHUtaWNvbiB2dWUtaWQ9XCIzZGIxNjUyMC01XCIgbmFtZT1cIi9zdGF0aWMvaWNvbi9iYWNrLnBuZ1wiIDpzaXplPVwiNDRcIiBAX19sPVwiX19sXCI+PC91LWljb24+XHJcbiAgICAgICAgICAgIDx0ZXh0Pui/lOWbnjwvdGV4dD48YnV0dG9uIEB0YXA9XCJmaFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO1wiIG9wZW4tdHlwZT1cIm5hdmlnYXRlQmFja1wiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG5cdFx0ICA8dmlldyBjbGFzcz1cIm5hdi10YWJcIj5cclxuXHRcdCAgICA8dS1pY29uIHZ1ZS1pZD1cIjNkYjE2NTIwLTVcIiBuYW1lPVwiL3N0YXRpYy9pbWFnZXMvYmFja3RvcC5wbmdcIiA6c2l6ZT1cIjQ0XCIgQF9fbD1cIl9fbFwiPjwvdS1pY29uPlxyXG5cdFx0ICAgIDx0ZXh0PumhtumDqDwvdGV4dD48YnV0dG9uIEBjbGljaz1cImJhY2tUb3BcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6MDtcIiBvcGVuLXR5cGU9XCJuYXZpZ2F0ZUJhY2tcIj48L2J1dHRvbj5cclxuXHRcdCAgPC92aWV3PlxyXG5cdFx0ICA8dmlldyBjbGFzcz1cIm5hdi10YWJcIj5cclxuXHRcdCAgICA8dS1pY29uIHZ1ZS1pZD1cIjNkYjE2NTIwLTVcIiBuYW1lPVwiL3N0YXRpYy9pbWFnZXMvc2h1YXhpbi5wbmdcIiA6c2l6ZT1cIjQ0XCIgQF9fbD1cIl9fbFwiPjwvdS1pY29uPlxyXG5cdFx0ICAgIDx0ZXh0PuWIt+aWsDwvdGV4dD48YnV0dG9uIEB0YXA9XCJzeFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO1wiIG9wZW4tdHlwZT1cIm5hdmlnYXRlQmFja1wiPjwvYnV0dG9uPlxyXG5cdFx0ICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hdi10YWJcIj5cclxuICAgICAgICAgICAgPHUtaWNvbiB2dWUtaWQ9XCIzZGIxNjUyMC01XCIgbmFtZT1cIi9zdGF0aWMvaWNvbi9zaGFyZXMucG5nXCIgOnNpemU9XCI0NFwiIEBfX2w9XCJfX2xcIj48L3UtaWNvbj5cclxuICAgICAgICAgICAgPHRleHQ+5YiG5LqrPC90ZXh0PjxidXR0b24gc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7XCIgb3Blbi10eXBlPVwic2hhcmVcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuPC9ibG9jaz5cclxuPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIGUsXHJcbiAgICB0ID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL2FwaS5qc1wiKSxcclxuICAgIGEgPSBcIlwiLFxyXG4gICAgYXBwID0gZ2V0QXBwKCk7XHJcbmltcG9ydCB1OEFkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3U4QUQvdThBRFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZpZGVvczogW10sXHJcbiAgICAgIHRhYkhpZGRlbjogITAsXHJcbiAgICAgIHJlZnJlc2hTdGF0dXM6ICExLFxyXG4gICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgIHU4YWQ6IHtcclxuICAgICAgICBhZERhdGE6IHt9LFxyXG4gICAgICAgIGFkOiB7XHJcbiAgICAgICAgICBiYW5uZXI6IFwiYmFubmVyXCIsXHJcbiAgICAgICAgICBpbnNlcnQ6IFwiaW5zZXJ0XCIsXHJcbiAgICAgICAgICBmaXhlZDogXCJmaXhlZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIHU4QWRcclxuICB9LFxyXG4gIHByb3BzOiB7fSxcclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGEgPSBcIlwiO1xyXG4gICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6IFwi5q2j5Zyo5ou85ZG95Yqg6L295LitLi4uXCJcclxuICAgIH0pLCB0LmdldENvbmZpZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG8uc2V0RGF0YSh7XHJcbiAgICAgICAgdGFiSGlkZGVuOiBhcHAuZ2xvYmFsRGF0YS5pc1NoZW5IZVxyXG4gICAgICB9KSwgZSA9IDEsIGFwcC5nbG9iYWxEYXRhLmlzU2hlbkhlID8gKGEgPSBcIuaDheS+o+Wjgee6uFwiLCBvLmdldFRhYlZpZGVvKCkpIDogby5nZXRSZWNvbW1lbmRWaWRlbygpO1xyXG4gICAgfSk7XHJcbiAgICBnZXRBcHAoKTtcclxuICB9LFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogXCLnsr7pgInpq5jmuIXmiYvmnLrlo4HnurjvvIzliqjmgIHlo4HnurjvvIzlpLTlg49cIixcclxuICAgICAgcGF0aDogXCJwYWdlcy9maW5kL2R5bmFtaWMvZHluYW1pY1wiXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgb25TaGFyZVRpbWVsaW5lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogXCLnsr7pgInpq5jmuIXmiYvmnLrlo4HnurjvvIzliqjmgIHlo4HnurjvvIzlpLTlg49cIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuXHQgIGZoOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHQgIH0sXHJcbiAgICBnZXRSZWNvbW1lbmRWaWRlbzogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYSA9IHRoaXMsXHJcbiAgICAgICAgICBpID0gdGhpcy52aWRlb3M7XHJcbiAgICAgIHQuZ2V0UmVjb21tZW5kVmlkZW8oZSwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAxID09IGUgJiYgKGkgPSBbXSwgYS5zZXREYXRhKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHQubGVuZ3RoOyBvKyspIFwiMVwiICE9IHRbb10uaXNfYWRzICYmIGkucHVzaCh0W29dKTtcclxuICAgICAgICBhLnNldERhdGEoe1xyXG4gICAgICAgICAgdmlkZW9zOiBpLFxyXG4gICAgICAgICAgcmVmcmVzaFN0YXR1czogITFcclxuICAgICAgICB9KSwgdW5pLnN0b3BQdWxsRG93blJlZnJlc2goKSwgdW5pLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdW5pLnN0b3BQdWxsRG93blJlZnJlc2goKSwgdW5pLmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFRhYlZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBpID0gdGhpcyxcclxuICAgICAgICAgIG8gPSB0aGlzLnZpZGVvcztcclxuICAgICAgY29uc29sZS5sb2coXCJ0YWc9XCIgKyBhKSwgdC5nZXRUYWJWaWRlbyhlLCBhLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIDEgPT0gZSAmJiAobyA9IFtdLCBpLnNldERhdGEoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdC5sZW5ndGg7IGErKykgXCIxXCIgIT0gdFthXS5pc19hZHMgJiYgby5wdXNoKHRbYV0pO1xyXG4gICAgICAgIGkuc2V0RGF0YSh7XHJcbiAgICAgICAgICB2aWRlb3M6IG8sXHJcbiAgICAgICAgICByZWZyZXNoU3RhdHVzOiAhMVxyXG4gICAgICAgIH0pLCB1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpLCB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpLCB1bmkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJldmlldzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7XHJcbiAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiLi4vLi4vZHluYW1pY2RldGFpbC9keW5hbWljZGV0YWlsP3VybD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0KVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgc2VhcmNoVGFwOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBcIi4uLy4uL3NlYXJjaHZpZGVvL3NlYXJjaHZpZGVvXCJcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGF5VGFwOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiBcIuato+WcqOaLvOWRveWKoOi9veS4rS4uLlwiXHJcbiAgICAgIH0pLCBhID0gXCLmr4/ml6Xnsr7pgIlcIiwgZSA9IDEsIHRoaXMuZ2V0VGFiVmlkZW8oKTtcclxuICAgIH0sXHJcbiAgICBjaGFvUWluZ1RhcDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogXCLmraPlnKjmi7zlkb3liqDovb3kuK0uLi5cIlxyXG4gICAgICB9KSwgYSA9IFwiNjDluKfotoXmuIVcIiwgZSA9IDEsIHRoaXMuZ2V0VGFiVmlkZW8oKTtcclxuICAgIH0sXHJcbiAgICBRTFRhcDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogXCLmraPlnKjmi7zlkb3liqDovb3kuK0uLi5cIlxyXG4gICAgICB9KSwgYSA9IFwi5oOF5L6j5aOB57q4XCIsIGUgPSAxLCB0aGlzLmdldFRhYlZpZGVvKCk7XHJcbiAgICB9LFxyXG5cdHN4OiBmdW5jdGlvbiAodCkge1xyXG5cdCAgYSA9IFwi5q+P5pel57K+6YCJXCIsIFxyXG5cdCAgZSA9IDEsIFxyXG5cdCAgdGhpcy5nZXRUYWJWaWRlbygpLFxyXG5cdCAgdW5pLnBhZ2VTY3JvbGxUbyh7XHJcblx0ICBcdHNjcm9sbFRvcDogMCxcclxuXHQgIFx0ZHVyYXRpb246IDMwMFxyXG5cdCAgfSk7XHJcblx0fSxcclxuXHRiYWNrVG9wKCl7XHJcblx0XHR1bmkucGFnZVNjcm9sbFRvKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAwLFxyXG5cdFx0XHRkdXJhdGlvbjogMzAwXHJcblx0XHR9KTtcclxuXHR9LFxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLnNjcm9sbC1ib2R5IHtcclxuICAgIGhlaWdodDogODglO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHJweDtcclxufVxyXG5cclxuLnRhYi1jb250YWluZXIsLnRhYi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGFiLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDI1cnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDRycHg7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBiMmFhO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lcjEsLmltZy1jb250YWluZXIyIHtcclxuICAgIHdpZHRoOiA4MHJweDtcclxuICAgIGhlaWdodDogODBycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyMywuaW1nLWNvbnRhaW5lcjQge1xyXG4gICAgd2lkdGg6IDgwcnB4O1xyXG4gICAgaGVpZ2h0OiA4MHJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lcjQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogNTBycHg7XHJcbiAgICBoZWlnaHQ6IDUwcnB4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIHdpZHRoOiA0NXJweDtcclxuICAgIGhlaWdodDogNDVycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBycHg7XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxMHJweCAwIDEwcnB4IDIwcnB4O1xyXG4gICAgd2lkdGg6IDQ2JTtcclxuICAgIGhlaWdodDogNTYwcnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5nLC5waG90byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBob3RvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmluZm8sLnBob3RvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvdHRvbTogMTBycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzAwMDtcclxufVxyXG5cclxuLmNvdW50LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5pdiB7XHJcbiAgICB3aWR0aDogNDBycHg7XHJcbiAgICBoZWlnaHQ6IDQwcnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmFkQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogNCU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHdpZHRoOiA5MiU7XHJcblx0XHRoZWlnaHQ6IDUycHg7XHJcblx0XHRib3gtc2hhZG93OiAwIDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0OXB4O1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cclxuXHQubmF2LXRhYiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNTJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjRDhEOEQ4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0Lm5hdi1ib3gge1xyXG5cdFx0LyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdC5vcGVuQ3NzIHtcclxuXHRcdGFuaW1hdGlvbi1uYW1lOiBvcGVuTGluZWFyO1xyXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRcdGJvdHRvbTogNDBweDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgb3BlbkxpbmVhciB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MnB4KTtcclxuXHRcdH1cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jbG9zZUNzcyB7XHJcblx0XHRhbmltYXRpb24tbmFtZTogY2xvc2VMaW5lYXI7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XHJcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG5cdFx0Ym90dG9tOiAtNTJweDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgY2xvc2VMaW5lYXIge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTkycHgpO1xyXG5cdFx0fVxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQudS1pbmRpY2F0b3ItaXRlbS1udW1iZXIge1xyXG5cdFx0cGFkZGluZzogNnJweCAxNnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2R5bmFtaWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2R5bmFtaWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU1NTI5NjY0MTA5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=