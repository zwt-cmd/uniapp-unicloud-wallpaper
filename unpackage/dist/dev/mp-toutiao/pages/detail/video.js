(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/video"],{

/***/ 80:
/*!***********************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fdetail%2Fvideo"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _video = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/video.vue */ 81));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_video.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 81:
/*!****************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/video.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.vue?vue&type=template&id=db1e4094& */ 82);
/* harmony import */ var _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.vue?vue&type=script&lang=js& */ 84);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.vue?vue&type=style&index=0&lang=scss& */ 86);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/*!***********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=template&id=db1e4094& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=template&id=db1e4094& */ 83);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_template_id_db1e4094___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 83:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=template&id=db1e4094& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uNavbar: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 421))
    },
    uLoadmore: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-loadmore/u-loadmore */ "uview-ui/components/u-loadmore/u-loadmore").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-loadmore/u-loadmore.vue */ 400))
    },
    uSkeleton: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-skeleton/u-skeleton */ "uview-ui/components/u-skeleton/u-skeleton").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-skeleton/u-skeleton.vue */ 428))
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

/***/ 84:
/*!*****************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=script&lang=js& */ 85);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
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
var _default =
{
  data: function data() {
    return {
      noData: false,
      skeletonLoad: true,
      title: '',
      modelType: '',
      modelPid: 0,
      modelId: 0,
      navbarTop: 0,
      coverList: [{ images: ['https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png',
        'https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png'] }],
      categoryList: [],
      pageIndex: 0,
      loadStatus: 'loadmore',
      // 滚动的位置
      rolldistance: '',

      adFlag: true,
      backShow: false };

  },
  onLoad: function onLoad(_ref) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var type, pid, id, that, query;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:type = _ref.type, pid = _ref.pid, id = _ref.id;
              that = _this;
              that.modelType = type;
              that.modelPid = pid;
              that.modelId = id;
              if (type == 'ranking') {
                that.title = '排行榜';
              } else if (type == 'category') {
                that.title = '分类';
                that.getCategory();
              } else if (type == 'search') {
                that.title = id;
              } else if (type == 'tags') {
                that.title = id;
              }_context.next = 8;return (
                that.getList(type, id, 2));case 8:
              query = uni.createSelectorQuery().in(that);
              query.select(".query").boundingClientRect(function (res) {
                that.navbarTop = res.top;
              }).exec();

              setTimeout(function () {
                that.skeletonLoad = false;
              }, 200);case 11:case "end":return _context.stop();}}}, _callee);}))();
  },
  methods: {
    detail: function detail(id, index, images) {
      var str = JSON.stringify(images);
      uni.navigateTo({
        url: '/pages/detail/detail?id=' + id + '&index=' + index + '&images=' + str });

    },
    cateClick: function cateClick(e, f, t) {
      var that = this;
      if (f != that.modelId) {

        if (t) that.rolldistance = t;

        that.noData = false;
        that.modelId = f;
        that.getList(e, f, 1);
      }
    },
    getList: function getList(type, value, on) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that, newList, list, filter, order;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = _this2;

                newList = that.coverList;
                // 点击切换菜单 回复初始状态
                if (on == 1) {
                  that.coverList = [];
                  newList = [];
                  that.pageIndex = 0;
                }

                that.pageIndex = that.pageIndex + 1;
                that.loadStatus = 'loading';

                list = {};if (!(
                type == 'search')) {_context2.next = 12;break;}_context2.next = 9;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_cover",
                      search: value,
                      pageIndex: that.pageIndex,
                      pageSize: 5 } }));case 9:list = _context2.sent;_context2.next = 32;break;case 12:if (!(


                type == 'ranking')) {_context2.next = 20;break;}
                filter = { "status": 1 }, order = {};
                if (value == 'hot') order = { "name": "view", "type": "desc" };else
                if (value == 'zan') order = { "name": "zan", "type": "desc" };else
                if (value == 'coll') order = { "name": "coll", "type": "desc" };_context2.next = 17;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_cover",
                      filter: filter,
                      order: order,
                      pageIndex: that.pageIndex,
                      pageSize: 5 } }));case 17:list = _context2.sent;_context2.next = 32;break;case 20:if (!(


                type == 'category')) {_context2.next = 28;break;}
                filter = { "status": 1 }, order = { "name": "time", "type": "desc" };
                if (value == -1) order = { "name": "time", "type": "desc" };else
                if (value == -2) order = { "name": "view", "type": "desc" };else
                filter = { "category_id": value, "status": 1 };_context2.next = 25;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_cover",
                      filter: filter,
                      order: order,
                      pageIndex: that.pageIndex,
                      pageSize: 5 } }));case 25:list = _context2.sent;_context2.next = 32;break;case 28:if (!(


                type == 'tags')) {_context2.next = 32;break;}_context2.next = 31;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_cover",
                      tags: value,
                      pageIndex: that.pageIndex,
                      pageSize: 5 } }));case 31:list = _context2.sent;case 32:



                if (list.result.hasMore) that.loadStatus = 'loadmore';else
                that.loadStatus = 'nomore';

                // 第一次进入页面  清除占位数据
                if (on == 2) {
                  newList = [];
                }
                newList = newList.concat(list.result.data);
                that.coverList = newList;

                if (that.coverList.length == 0) that.noData = true;else
                that.noData = false;case 37:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    getCategory: function getCategory() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that, list;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = _this3;_context3.next = 3;return (

                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_category",
                      order: {
                        name: 'sort',
                        type: 'desc' },

                      pageIndex: 1,
                      pageSize: 20 } }));case 3:list = _context3.sent;


                that.categoryList = list.result.data;
                that.rolldistance = 'akun' + (parseInt(that.modelPid) + 2);
                console.log(that.rolldistance);case 7:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    adLoad: function adLoad() {
      this.adFlag = true;
    },
    adError: function adError(err) {
      this.adFlag = false;
    },
    adClose: function adClose() {
      this.adFlag = false;
    },
    search: function search() {
      uni.navigateTo({
        url: '/pages/search/search' });

    },
    backTop: function backTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300 });

    } },

  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop > 1000) {
      this.backShow = true;
    } else {
      this.backShow = false;
    }
  },
  onReachBottom: function onReachBottom() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              that = _this4;if (!(
              that.loadStatus == 'nomore')) {_context4.next = 3;break;}return _context4.abrupt("return");case 3:_context4.next = 5;return (
                that.getList(that.modelType, that.modelId));case 5:case "end":return _context4.stop();}}}, _callee4);}))();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"]))

/***/ }),

/***/ 86:
/*!**************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video.vue?vue&type=style&index=0&lang=scss& */ 87);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 87:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/video.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[80,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9kZXRhaWwvdmlkZW8udnVlP2FkMjciLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvZGV0YWlsL3ZpZGVvLnZ1ZT83MDA0Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2RldGFpbC92aWRlby52dWU/ZTM2ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9kZXRhaWwvdmlkZW8udnVlPzQzYTUiLCJ1bmktYXBwOi8vL3BhZ2VzL2RldGFpbC92aWRlby52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvZGV0YWlsL3ZpZGVvLnZ1ZT9mMjJmIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2RldGFpbC92aWRlby52dWU/NDFmNCJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTtBQUNBO0FBQ0EsNkYsNkZBRm1CQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkM7QUFHbkJDLFVBQVUsQ0FBQ0MsY0FBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDtBQUNjOzs7QUFHbEU7QUFDa007QUFDbE0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNB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ZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kZXRhaWwvdmlkZW8udnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRiMWU0MDk0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlkZW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdmlkZW8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvdmlkZW8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92aWRlby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGIxZTQwOTQmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1TmF2YmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LW5hdmJhci91LW5hdmJhclwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtbmF2YmFyL3UtbmF2YmFyLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1TG9hZG1vcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtbG9hZG1vcmUvdS1sb2FkbW9yZVwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtbG9hZG1vcmUvdS1sb2FkbW9yZS52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdVNrZWxldG9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LXNrZWxldG9uL3Utc2tlbGV0b25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LXNrZWxldG9uL3Utc2tlbGV0b24udnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZGVvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZGVvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx1LW5hdmJhclxyXG5cdFx0OmlzLWJhY2s9XCJ0cnVlXCIgXHJcblx0XHQ6dGl0bGU9XCJ0aXRsZVwiIFxyXG5cdFx0dGl0bGUtd2lkdGg9XCIzMjVcIiBcclxuXHRcdHRpdGxlLWNvbG9yPVwiIzMzMzMzM1wiIFxyXG5cdFx0dGl0bGUtc2l6ZT1cIjI4XCIgXHJcblx0XHQ6Ym9yZGVyLWJvdHRvbT1cImZhbHNlXCJcclxuXHRcdD48L3UtbmF2YmFyPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxdWVyeVwiPjwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVudSB1LW0tbC0zMCB1LW0tci0zMCB1LXAtYi0xNSB1LXAtdC0xNSB1LWZsZXggdS1yb3ctYXJvdW5kXCIgOnN0eWxlPVwie3RvcDogbmF2YmFyVG9wICsgJ3B4J31cIiB2LWlmPVwibW9kZWxUeXBlPT0ncmFua2luZydcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWdzXCIgOmNsYXNzPVwibW9kZWxJZD09J2hvdCc/J3RhZy1hY3RpdmUnOicnXCIgQGNsaWNrPVwiY2F0ZUNsaWNrKCdyYW5raW5nJywnaG90JylcIj7ng63pl6jmppw8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidGFnc1wiIDpjbGFzcz1cIm1vZGVsSWQ9PSd6YW4nPyd0YWctYWN0aXZlJzonJ1wiIEBjbGljaz1cImNhdGVDbGljaygncmFua2luZycsJ3phbicpXCI+54K56LWe5qacPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3NcIiA6Y2xhc3M9XCJtb2RlbElkPT0nY29sbCc/J3RhZy1hY3RpdmUnOicnXCIgQGNsaWNrPVwiY2F0ZUNsaWNrKCdyYW5raW5nJywnY29sbCcpXCI+5pS26JeP5qacPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC14IGNsYXNzPVwibWVudXNcIiA6c2Nyb2xsLWludG8tdmlldz1cInJvbGxkaXN0YW5jZVwiIDpzY3JvbGwtd2l0aC1hbmltYXRpb249XCJ0cnVlXCIgOnN0eWxlPVwie3RvcDogbmF2YmFyVG9wICsgJ3B4J31cIiB2LWlmPVwibW9kZWxUeXBlPT0nY2F0ZWdvcnknXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWItMTUgdS1wLXQtMTUgdS1mbGV4IHUtcm93LWxlZnRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIGlkPVwiYWt1bjFcIiBzdHlsZT1cInBhZGRpbmc6IDAgMTZycHg7XCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFnc1wiIGlkPVwiYWt1bjJcIiA6Y2xhc3M9XCItMT09bW9kZWxJZD8ndGFnLWFjdGl2ZSc6JydcIiBAY2xpY2s9XCJjYXRlQ2xpY2soJ2NhdGVnb3J5JywtMSwnYWt1bjEnKVwiPuacgOaWsDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3NcIiBpZD1cImFrdW4zXCIgOmNsYXNzPVwiLTI9PW1vZGVsSWQ/J3RhZy1hY3RpdmUnOicnXCIgQGNsaWNrPVwiY2F0ZUNsaWNrKCdjYXRlZ29yeScsLTIsJ2FrdW4xJylcIj7ng63pl6g8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWdzXCIgOmlkPVwiJ2FrdW4nKyhpbmRleCs0KVwiIDpjbGFzcz1cIml0ZW0uX2lkPT1tb2RlbElkPyd0YWctYWN0aXZlJzonJ1wiIEBjbGljaz1cImNhdGVDbGljaygnY2F0ZWdvcnknLGl0ZW0uX2lkLCdha3VuJysoaW5kZXgrMikpXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNhdGVnb3J5TGlzdFwiIDprZXk9XCJpbmRleFwiPnt7aXRlbS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cIndpZHRoOiA0MHJweDtcIj7jhaQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtc2tlbGV0b25cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51IHUtbS1sLTMwIHUtbS1yLTMwIHUtcC1iLTIwIHUtcC10LTIwIHUtZmxleCB1LXJvdy1hcm91bmRcIiB2LWlmPVwic2tlbGV0b25Mb2FkICYmIG1vZGVsVHlwZSE9J3NlYXJjaCcgJiYgbW9kZWxUeXBlIT0ndGFncydcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3MgdS1za2VsZXRvbi1jaXJjbGVcIj7mnIDmlrA8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWdzIHUtc2tlbGV0b24tY2lyY2xlXCI+5pyA5pawPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFncyB1LXNrZWxldG9uLWNpcmNsZVwiPuacgOaWsDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3MgdS1za2VsZXRvbi1jaXJjbGVcIj7mnIDmlrA8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogODBycHg7XCIgdi1pZj1cIm1vZGVsVHlwZSE9J3NlYXJjaCcgJiYgbW9kZWxUeXBlIT0ndGFncydcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdCB1LWZsZXgtd3JhcCB1LXAtbC00MCB1LXAtdC0yMFwiPlxyXG5cdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjb3Zlckxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW1fLCBpbmRleF8pIGluIGl0ZW0uaW1hZ2VzXCIgOmtleT1cImluZGV4X1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYiB1LWZsZXggdS1yb3ctY2VudGVyIHUtY29sLWNlbnRlclwiIHYtc2hvdz1cImFkRmxhZ1wiIHYtaWY9XCJpbmRleCAhPSAwICYmIGluZGV4JTIgPT09IDAgJiYgaW5kZXhfID09PSAwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YWQtY3VzdG9tIHVuaXQtaWQ9XCJhZHVuaXQtZWQ2NGRlMDdjODU5ODI4YVwiIEBsb2FkPVwiYWRMb2FkXCIgQGVycm9yPVwiYWRFcnJvclwiIEBjbG9zZT1cImFkQ2xvc2VcIj48L2FkLWN1c3RvbT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgTVAtUVEgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIiB2LXNob3c9XCJhZEZsYWdcIiB2LWlmPVwiaW5kZXggIT0gMCAmJiBpbmRleCUyID09PSAwICYmIGluZGV4XyA9PT0gMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGFkIHVuaXQtaWQ9XCI4NTk3Yjc1MzdmOGQxZjQ2ZDQ5NDQ4NDMwZWIzNDFiZFwiIHR5cGU9XCJibG9ja1wiIGJsb2NrLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBibG9jay1zaXplPVwiMlwiIEBsb2FkPVwiYWRMb2FkXCIgQGVycm9yPVwiYWRFcnJvclwiIEBjbG9zZT1cImFkQ2xvc2VcIj48L2FkPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYiB1LXNrZWxldG9uLWZpbGxldFwiIEBjbGljaz1cImRldGFpbChpdGVtLl9pZCwgaW5kZXhfLCBpdGVtLmltYWdlcylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbV8rJz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzYwMC9xdWFsaXR5LHFfODAnXCIgc3R5bGU9XCJ3aWR0aDogMjE1cnB4O2hlaWdodDogMzUwcnB4O1wiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWItMjBcIiBzdHlsZT1cIndpZHRoOiBjYWxjKDEwMCUgLSA0MHJweCk7XCIgdi1pZj1cImluZGV4ICE9IDAgJiYgaW5kZXggJSAyMCA9PT0gMFwiPjxhZCB1bml0LWlkPVwiYWR1bml0LWVkNjRkZTA3Yzg1OTgyOGFcIj48L2FkPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJub0RhdGFcIlxyXG5cdFx0XHRjbGFzcz1cInUtZmxleCB1LWZsZXgtY29sIHUtY29sLWNlbnRlclwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDEwMHZ3O2hlaWdodDogNTB2aDtwYWRkaW5nLXRvcDogMjAwcnB4O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiAzMDBycHg7aGVpZ2h0OiAzMDBycHg7XCIgc3JjPVwiL3N0YXRpYy9ub2RhdGEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXRpcHMtY29sb3IgdS1mb250LTEyIHUtcC10LTMwXCI+XHJcblx0XHRcdFx0XHTmsqHmnInmlbDmja7lk6Z+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiXCIgdi1pZj1cIiFub0RhdGFcIj5cclxuXHRcdFx0PHUtbG9hZG1vcmUgOnN0YXR1cz1cImxvYWRTdGF0dXNcIiA6Zm9udC1zaXplPVwiMjRcIiA6bWFyZ2luLXRvcD1cIjMwXCIgOm1hcmdpbi1ib3R0b209XCIzMFwiIGNvbG9yPVwiI0I4QjhCOFwiLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzYWZlLWFyZWEtaW5zZXQtYm90dG9tXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJoZWlnaHQ6IDFweDtcIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx1LXNrZWxldG9uIDpsb2FkaW5nPVwic2tlbGV0b25Mb2FkXCIgOmFuaW1hdGlvbj1cInRydWVcIiBiZ0NvbG9yPVwiI0ZGRlwiIGVsLWNvbG9yPVwiI0YzRjNGM1wiPjwvdS1za2VsZXRvbj5cclxuXHRcdFxyXG5cdFx0PHZpZXcgQGNsaWNrPVwiYmFja1RvcFwiIGNsYXNzPVwiYmFjayBiYWNrVG9wIHUtZmxleCB1LWZsZXgtY29sIHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIiA6Y2xhc3M9XCJiYWNrU2hvdz8nYmFja1RvcF9zaG93JzonYmFja1RvcF9oaWRlJ1wiPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9iYWNrdG9wLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDM2cnB4O2hlaWdodDogMzZycHg7XCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IEBjbGljaz1cInNlYXJjaFwiIGNsYXNzPVwiYmFjayBiYWNrU2VhcmNoIHUtZmxleCB1LWZsZXgtY29sIHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIiA6Y2xhc3M9XCJiYWNrU2hvdz8nYmFja1RvcF9zaG93JzonYmFja1RvcF9oaWRlJ1wiPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9zZWFyY2gucG5nXCIgc3R5bGU9XCJ3aWR0aDogMzBycHg7aGVpZ2h0OiAzMHJweDtcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRub0RhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdHNrZWxldG9uTG9hZDogdHJ1ZSxcclxuXHRcdFx0XHR0aXRsZTogJycsXHJcblx0XHRcdFx0bW9kZWxUeXBlOiAnJyxcclxuXHRcdFx0XHRtb2RlbFBpZDogMCxcclxuXHRcdFx0XHRtb2RlbElkOiAwLFxyXG5cdFx0XHRcdG5hdmJhclRvcDogMCxcclxuXHRcdFx0XHRjb3Zlckxpc3Q6IFt7aW1hZ2VzOiBbJ2h0dHBzOi8vc2VjcmVzLnd4cWNsb3VkLnFxLmNvbS8vdC93eF9mZWQvcmVkLWVudmVsb3BlLWNvdmVyLXBsYXRmb3JtL2Nhc2UyLzIvMS83MC5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgJ2h0dHBzOi8vc2VjcmVzLnd4cWNsb3VkLnFxLmNvbS8vdC93eF9mZWQvcmVkLWVudmVsb3BlLWNvdmVyLXBsYXRmb3JtL2Nhc2UyLzIvMS83MC5wbmcnXX1dLFxyXG5cdFx0XHRcdGNhdGVnb3J5TGlzdDogW10sXHJcblx0XHRcdFx0cGFnZUluZGV4OiAwLFxyXG5cdFx0XHRcdGxvYWRTdGF0dXM6ICdsb2FkbW9yZScsXHJcblx0XHRcdFx0Ly8g5rua5Yqo55qE5L2N572uXHJcblx0XHRcdFx0cm9sbGRpc3RhbmNlOiAnJyxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhZEZsYWc6IHRydWUsXHJcblx0XHRcdFx0YmFja1Nob3c6IGZhbHNlLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgb25Mb2FkKHt0eXBlLHBpZCxpZH0pIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdHRoYXQubW9kZWxUeXBlID0gdHlwZVxyXG5cdFx0XHR0aGF0Lm1vZGVsUGlkID0gcGlkXHJcblx0XHRcdHRoYXQubW9kZWxJZCA9IGlkXHJcblx0XHRcdGlmKHR5cGU9PSdyYW5raW5nJyl7XHJcblx0XHRcdFx0dGhhdC50aXRsZSA9ICfmjpLooYzmppwnXHJcblx0XHRcdH1lbHNlIGlmKHR5cGU9PSdjYXRlZ29yeScpe1xyXG5cdFx0XHRcdHRoYXQudGl0bGUgPSAn5YiG57G7J1xyXG5cdFx0XHRcdHRoYXQuZ2V0Q2F0ZWdvcnkoKVxyXG5cdFx0XHR9ZWxzZSBpZih0eXBlPT0nc2VhcmNoJyl7XHJcblx0XHRcdFx0dGhhdC50aXRsZSA9IGlkXHJcblx0XHRcdH1lbHNlIGlmKHR5cGU9PSd0YWdzJyl7XHJcblx0XHRcdFx0dGhhdC50aXRsZSA9IGlkXHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgdGhhdC5nZXRMaXN0KHR5cGUsIGlkLCAyKVxyXG5cdFx0XHRjb25zdCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuaW4odGhhdCk7XHJcblx0XHRcdHF1ZXJ5LnNlbGVjdChcIi5xdWVyeVwiKS5ib3VuZGluZ0NsaWVudFJlY3QocmVzID0+e1xyXG5cdFx0XHRcdHRoYXQubmF2YmFyVG9wID0gcmVzLnRvcFxyXG5cdFx0XHR9KS5leGVjKClcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoYXQuc2tlbGV0b25Mb2FkID0gZmFsc2U7XHJcblx0XHRcdH0sIDIwMClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRldGFpbChpZCxpbmRleCxpbWFnZXMpe1xyXG5cdFx0XHRcdHZhciBzdHIgPSBKU09OLnN0cmluZ2lmeShpbWFnZXMpXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWw/aWQ9JytpZCsnJmluZGV4PScraW5kZXgrJyZpbWFnZXM9JytzdHJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYXRlQ2xpY2soZSxmLHQpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmKGYgIT0gdGhhdC5tb2RlbElkKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYodCkgdGhhdC5yb2xsZGlzdGFuY2UgPSB0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQubm9EYXRhID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoYXQubW9kZWxJZCA9IGZcclxuXHRcdFx0XHRcdHRoYXQuZ2V0TGlzdChlLGYsMSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldExpc3QodHlwZSwgdmFsdWUsIG9uKXtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB0aGF0LmNvdmVyTGlzdFxyXG5cdFx0XHRcdC8vIOeCueWHu+WIh+aNouiPnOWNlSDlm57lpI3liJ3lp4vnirbmgIFcclxuXHRcdFx0XHRpZihvbiA9PSAxKXtcclxuXHRcdFx0XHRcdHRoYXQuY292ZXJMaXN0ID0gW11cclxuXHRcdFx0XHRcdG5ld0xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0dGhhdC5wYWdlSW5kZXggPSAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gdGhhdC5wYWdlSW5kZXggKyAxXHJcblx0XHRcdFx0dGhhdC5sb2FkU3RhdHVzID0gJ2xvYWRpbmcnXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFyIGxpc3QgPSB7fVxyXG5cdFx0XHRcdGlmKHR5cGUgPT0gJ3NlYXJjaCcpe1xyXG5cdFx0XHRcdFx0bGlzdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9saXN0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGRiTmFtZTogXCJ3eF9jb3ZlclwiLFxyXG5cdFx0XHRcdFx0XHRcdHNlYXJjaDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0cGFnZUluZGV4OiB0aGF0LnBhZ2VJbmRleCxcclxuXHRcdFx0XHRcdFx0XHRwYWdlU2l6ZTogNVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZih0eXBlID09ICdyYW5raW5nJyl7XHJcblx0XHRcdFx0XHR2YXIgZmlsdGVyID0ge1wic3RhdHVzXCI6IDF9LCBvcmRlciA9IHt9XHJcblx0XHRcdFx0XHRpZih2YWx1ZT09J2hvdCcpIG9yZGVyID0ge1wibmFtZVwiOiBcInZpZXdcIiwgXCJ0eXBlXCI6IFwiZGVzY1wifVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih2YWx1ZT09J3phbicpIG9yZGVyID0ge1wibmFtZVwiOiBcInphblwiLCBcInR5cGVcIjogXCJkZXNjXCJ9XHJcblx0XHRcdFx0XHRlbHNlIGlmKHZhbHVlPT0nY29sbCcpIG9yZGVyID0ge1wibmFtZVwiOiBcImNvbGxcIiwgXCJ0eXBlXCI6IFwiZGVzY1wifVxyXG5cdFx0XHRcdFx0bGlzdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9saXN0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGRiTmFtZTogXCJ3eF9jb3ZlclwiLFxyXG5cdFx0XHRcdFx0XHRcdGZpbHRlcjogZmlsdGVyLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyOiBvcmRlcixcclxuXHRcdFx0XHRcdFx0XHRwYWdlSW5kZXg6IHRoYXQucGFnZUluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplOiA1XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKHR5cGUgPT0gJ2NhdGVnb3J5Jyl7XHJcblx0XHRcdFx0XHR2YXIgZmlsdGVyID0ge1wic3RhdHVzXCI6IDF9LG9yZGVyID0ge1wibmFtZVwiOiBcInRpbWVcIiwgXCJ0eXBlXCI6IFwiZGVzY1wifVxyXG5cdFx0XHRcdFx0aWYodmFsdWUgPT0gLTEpIG9yZGVyID0ge1wibmFtZVwiOiBcInRpbWVcIiwgXCJ0eXBlXCI6IFwiZGVzY1wifVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih2YWx1ZSA9PSAtMikgb3JkZXIgPSB7XCJuYW1lXCI6IFwidmlld1wiLCBcInR5cGVcIjogXCJkZXNjXCJ9XHJcblx0XHRcdFx0XHRlbHNlIGZpbHRlciA9IHtcImNhdGVnb3J5X2lkXCI6IHZhbHVlLCBcInN0YXR1c1wiOiAxfVxyXG5cdFx0XHRcdFx0bGlzdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9saXN0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGRiTmFtZTogXCJ3eF9jb3ZlclwiLFxyXG5cdFx0XHRcdFx0XHRcdGZpbHRlcjogZmlsdGVyLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyOiBvcmRlcixcclxuXHRcdFx0XHRcdFx0XHRwYWdlSW5kZXg6IHRoYXQucGFnZUluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplOiA1XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKHR5cGUgPT0gJ3RhZ3MnKXtcclxuXHRcdFx0XHRcdGxpc3QgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAncXVlcnlfbGlzdCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRkYk5hbWU6IFwid3hfY292ZXJcIixcclxuXHRcdFx0XHRcdFx0XHR0YWdzOiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRwYWdlSW5kZXg6IHRoYXQucGFnZUluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTaXplOiA1XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihsaXN0LnJlc3VsdC5oYXNNb3JlKSB0aGF0LmxvYWRTdGF0dXMgPSAnbG9hZG1vcmUnXHJcblx0XHRcdFx0ZWxzZSB0aGF0LmxvYWRTdGF0dXMgPSAnbm9tb3JlJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOesrOS4gOasoei/m+WFpemhtemdoiAg5riF6Zmk5Y2g5L2N5pWw5o2uXHJcblx0XHRcdFx0aWYob24gPT0gMil7XHJcblx0XHRcdFx0XHRuZXdMaXN0ID0gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bmV3TGlzdCA9IG5ld0xpc3QuY29uY2F0KGxpc3QucmVzdWx0LmRhdGEpXHJcblx0XHRcdFx0dGhhdC5jb3Zlckxpc3QgPSBuZXdMaXN0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodGhhdC5jb3Zlckxpc3QubGVuZ3RoID09IDApIHRoYXQubm9EYXRhID0gdHJ1ZVxyXG5cdFx0XHRcdGVsc2UgdGhhdC5ub0RhdGEgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBnZXRDYXRlZ29yeSgpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgbGlzdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAncXVlcnlfbGlzdCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGRiTmFtZTogXCJ3eF9jYXRlZ29yeVwiLFxyXG5cdFx0XHRcdFx0XHRvcmRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICdzb3J0JyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZGVzYydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0cGFnZUluZGV4OiAxLFxyXG5cdFx0XHRcdFx0XHRwYWdlU2l6ZTogMjBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoYXQuY2F0ZWdvcnlMaXN0ID0gbGlzdC5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdHRoYXQucm9sbGRpc3RhbmNlID0gJ2FrdW4nKyhwYXJzZUludCh0aGF0Lm1vZGVsUGlkKSsyKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoYXQucm9sbGRpc3RhbmNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZExvYWQoKSB7XHJcblx0XHRcdFx0dGhpcy5hZEZsYWcgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGFkRXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0dGhpcy5hZEZsYWcgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZENsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuYWRGbGFnID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VhcmNoKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3NlYXJjaC9zZWFyY2gnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja1RvcCgpe1xyXG5cdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiAwLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdG9uUGFnZVNjcm9sbChlKSB7XHJcblx0XHRcdGlmKGUuc2Nyb2xsVG9wID4gMTAwMCl7XHJcblx0XHRcdFx0dGhpcy5iYWNrU2hvdyA9IHRydWVcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5iYWNrU2hvdyA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBvblJlYWNoQm90dG9tKCl7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0aWYodGhhdC5sb2FkU3RhdHVzID09ICdub21vcmUnKSByZXR1cm5cclxuXHRcdFx0YXdhaXQgdGhhdC5nZXRMaXN0KHRoYXQubW9kZWxUeXBlLHRoYXQubW9kZWxJZClcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5tZW51e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2MHJweCk7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC5tZW51c3tcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC50YWdze1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjZGODtcclxuXHRcdGNvbG9yOiAjOTA5Mzk5IDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHJweDtcclxuXHRcdHBhZGRpbmc6IDAgNDBycHg7XHJcblx0XHR3aGl0ZS1zcGFjZTpub3dyYXA7XHJcblx0fVxyXG5cdC50YWctYWN0aXZle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgI2ZjZmM0NCAsICNmOGM5M2MpO1xyXG5cdFx0Y29sb3I6ICMzMzMzMzM7XHJcblx0XHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2ZmZjhhYjtcclxuXHRcdGFuaW1hdGlvbjogdGlhb2JpZyAwLjhzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTtcclxuXHR9XHJcblx0QGtleWZyYW1lcyB0aWFvYmlnIHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuXHRcdH1cclxuXHRcdDI1JSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcblx0XHR9XHJcblx0XHQ1MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOTQpO1xyXG5cdFx0fVxyXG5cdFx0NzUlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuXHRcdH1cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQudGFie1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDIxNXJweDtcclxuXHRcdGhlaWdodDogMzUwcnB4OztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxNXJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cnB4O1xyXG5cdFx0aW1hZ2V7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdH1cclxuXHRcdC5hcnJheXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDE4cnB4O1xyXG5cdFx0XHRyaWdodDogMHJweDtcclxuXHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuXHRcdFx0cGFkZGluZzogMHJweCAxMnJweCAwIDE2cnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHJweCAwIDAgMjBycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmJhY2t7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogLTgwcnB4O1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0cGFkZGluZzogOHJweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG5cdFx0aW1hZ2V7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdFx0LnRleHR7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmJhY2tTZWFyY2h7XHJcblx0XHRib3R0b206IDIwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyMTIyMjM4NTtcclxuXHRcdC50ZXh0e1xyXG5cdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdH1cclxuXHR9XHJcblx0LmJhY2tUb3B7XHJcblx0XHRib3R0b206IDEwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmNGNjNDc7XHJcblx0XHQudGV4dHtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5iYWNrVG9wX3Nob3d7XHJcblx0XHRyaWdodDogMjBycHghaW1wb3J0YW50O1xyXG5cdH1cclxuXHQuYmFja1RvcF9oaWRle1xyXG5cdFx0cmlnaHQ6IC04MHJweCFpbXBvcnRhbnQ7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3ZpZGVvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92aWRlby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU1NTI5NjY1NjMyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=