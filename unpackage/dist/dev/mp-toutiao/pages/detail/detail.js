(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 72:
/*!************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 73));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 73:
/*!*****************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4& */ 74);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=scss& */ 78);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/*!************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4& */ 75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 75:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      $event.stopPropagation()
      $event.preventDefault()
      _vm.a = false
    }

    _vm.e1 = function($event) {
      _vm.a = false
    }

    _vm.e2 = function($event) {
      _vm.loginShow = false
    }

    _vm.e3 = function($event) {
      _vm.downShow = false
    }

    _vm.e4 = function($event) {
      _vm.signShow = false
    }

    _vm.e5 = function($event) {
      _vm.adShow = false
    }

    _vm.e6 = function($event) {
      _vm.adShow = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 76:
/*!******************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 77);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
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

var videoAd = null;
var w = uni.getSystemInfoSync().windowWidth;
var h = uni.getSystemInfoSync().windowHeight;var models = function models() {__webpack_require__.e(/*! require.ensure | components/model/model */ "components/model/model").then((function () {return resolve(__webpack_require__(/*! @/components/model/model.vue */ 414));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =

{
  components: {
    models: models },

  data: function data() {
    return {
      loadFlag: true,
      loginShow: false,
      detail: {},
      time: '',
      date: '',

      adIntegral: 0,

      downShow: false,
      downIntegral: 0,
      downTitle: '',
      downBtn: '',
      adShow: false,

      isColl: false,
      isZan: false,
      zanStatus: true,
      collStatus: true,

      cssTran: false,
      indexCurrent: 1,
      activeCurrent: 0,

      signShow: false,
      signTitle: '',
      w: w,
      h: h };

  },
  onLoad: function onLoad(_ref)



  {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var id, index, images, that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:id = _ref.id, index = _ref.index, images = _ref.images;
              that = _this;_context.next = 4;return (
                that.getDate());case 4:
              that.indexCurrent = parseInt(index) + 1;
              that.activeCurrent = parseInt(index);if (!
              images) {_context.next = 13;break;}
              that.detail.images = JSON.parse(images);
              that.detail._id = id;_context.next = 11;return (
                that.addView(id));case 11:_context.next = 15;break;case 13:_context.next = 15;return (

                that.getDetail(id));case 15:_context.next = 17;return (


                that.getConfig());case 17:
              if (that.vuex_user) {
                that.getIsZan();
                that.getIsColl();
                that.getUser();
              }
              that.adLoad();
              that.loadFlag = false;case 20:case "end":return _context.stop();}}}, _callee);}))();
  },
  methods: {
    getDate: function getDate() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var t, e, o, a, n, i, s;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                t = new Date(),
                e = (t.getFullYear(), t.getMonth() + 1),
                o = t.getDate(),
                a = t.getHours(),
                n = t.getMinutes(),
                i = (t.getSeconds(), e + "月" + o + "日"),
                s = [a, n].map(_this2.formatNumber).join(":");
                console.log(i), console.log(s), _this2.setData({
                  date: i,
                  time: s });case 2:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    formatNumber: function formatNumber(t) {
      return (t = t.toString())[1] ? t : "0" + t;
    },
    getDetail: function getDetail(id) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that, detail;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = _this3;_context3.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_map',
                    data: {
                      dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
                      id: id } }));case 3:detail = _context3.sent;


                that.detail = detail.result;if (
                that.detail) {_context3.next = 9;break;}
                uni.showToast({
                  title: '壁纸不存在',
                  icon: 'none',
                  duration: 1500 });

                setTimeout(function () {
                  uni.navigateBack();
                }, 1500);return _context3.abrupt("return");case 9:


                that.addView(id);case 10:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    getConfig: function getConfig() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, config;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this4;_context4.next = 3;return (
                  uniCloud.callFunction({
                    name: 'config_map',
                    data: {
                      'keys': ['downIntegral', 'adIntegral'] } }));case 3:config = _context4.sent;


                if (config.result.success) {
                  that.downIntegral = parseInt(config.result.data[0]);
                  that.adIntegral = parseInt(config.result.data[1]);
                }case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    getIsZan: function getIsZan() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var that, count;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = _this5;_context5.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_count',
                    data: {
                      dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
                      filter: {
                        "_id": that.detail._id,
                        "zan.user_id": that.vuex_user._id } } }));case 3:count = _context5.sent;



                that.zanStatus = false;
                if (count.result > 0) that.isZan = true;case 6:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    getIsColl: function getIsColl() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var that, count;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                that = _this6;_context6.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_count',
                    data: {
                      dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
                      filter: {
                        "_id": that.detail._id,
                        "coll.user_id": that.vuex_user._id } } }));case 3:count = _context6.sent;



                that.collStatus = false;
                if (count.result > 0) that.isColl = true;case 6:case "end":return _context6.stop();}}}, _callee6);}))();
    },
    winClick: function winClick() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, integral, query, url, extension, fileName, _fileName;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                that = _this7;if (
                that.vuex_user) {_context7.next = 4;break;}
                that.loginShow = true;return _context7.abrupt("return");case 4:if (!(



                that.downIntegral > 0)) {_context7.next = 18;break;}
                integral = that.vuex_user.integral;if (!(
                integral < that.downIntegral)) {_context7.next = 10;break;}
                that.downShow = true;
                that.downTitle = "<p style='font-weight: 550;font-size: 16px;'>下载需要 " + that.downIntegral +
                " 积分</p><p style='padding-top: 10px;'>您当前仅有<span class='num'>" + integral +
                "</span>积分，无法下载当前作品，快去赚积分吧~</p>";return _context7.abrupt("return");case 10:



                uni.showLoading({
                  mask: true,
                  title: '保存中...' });_context7.next = 13;return (


                  uniCloud.callFunction({
                    name: 'place_order',
                    data: {
                      userId: that.vuex_user._id,
                      coverId: that.detail._id,
                      integral: that.downIntegral,
                      index: that.indexCurrent - 1 } }));case 13:query = _context7.sent;


                console.log('query', query);
                if (query.result.success) {
                  // 下载成功 请求用户积分
                  that.getUser();
                  // 获取图片信息
                  url = that.detail.images[that.indexCurrent - 1];
                  extension = url.substring(url.lastIndexOf('.') + 1);
                  fileName = new Date().valueOf();

                  uni.downloadFile({
                    url: url,
                    filePath: wx.env.USER_DATA_PATH + '/' + fileName + '.' + extension,
                    success: function success(res) {
                      var benUrl = res.filePath;
                      //图片保存到本地相册
                      uni.saveImageToPhotosAlbum({
                        filePath: benUrl,
                        //授权成功，保存图片
                        success: function success(data) {
                          uni.hideLoading();
                          that.adShow = true;
                        },
                        //授权失败
                        fail: function fail(err) {
                          if (err.errMsg) {
                            //重新授权弹框确认
                            uni.showModal({
                              title: '提示',
                              content: '无权限，请打开下载权限后再试！',
                              showCancel: false,
                              success: function success(res) {
                                if (res.confirm) {
                                  //重新授权弹框用户点击了确定
                                  uni.openSetting({
                                    //进入小程序授权设置页面
                                    success: function success(
                                    settingdata) {
                                      if (settingdata.
                                      authSetting[
                                      'scope.writePhotosAlbum'])
                                      {
                                        //用户打开了保存图片授权开关
                                        uni.saveImageToPhotosAlbum({
                                          filePath: benUrl,
                                          success: function success(
                                          data)
                                          {
                                            uni.hideLoading();
                                            that.adShow =
                                            true;
                                          } });

                                      } else {
                                        //用户未打开保存图片到相册的授权开关
                                        uni.showModal({
                                          title: '温馨提示',
                                          content: '授权失败，请稍后重新获取',
                                          showCancel: false });

                                      }
                                    } });

                                }
                              } });

                          }
                          uni.hideLoading();
                        } });

                    },
                    fail: function fail(error) {
                      console.log(error);
                    } });

                } else {
                  uni.showToast({
                    mask: true,
                    icon: 'none',
                    title: query.result.msg,
                    duration: 1000 });

                }_context7.next = 22;break;case 18:

                // 获取图片信息
                url = that.detail.images[that.indexCurrent - 1];
                extension = url.substring(url.lastIndexOf('.') + 1);
                _fileName = new Date().valueOf();

                uni.downloadFile({
                  url: url,
                  filePath: wx.env.USER_DATA_PATH + '/' + _fileName + '.' + extension,
                  success: function success(res) {
                    var benUrl = res.filePath;
                    //图片保存到本地相册
                    uni.saveImageToPhotosAlbum({
                      filePath: benUrl,
                      //授权成功，保存图片
                      success: function success(data) {
                        uni.hideLoading();
                        that.adShow = true;
                      },
                      //授权失败
                      fail: function fail(err) {
                        if (err.errMsg) {
                          //重新授权弹框确认
                          uni.showModal({
                            title: '提示',
                            content: '无权限，请打开下载权限后再试！',
                            showCancel: false,
                            success: function success(res) {
                              if (res.confirm) {
                                //重新授权弹框用户点击了确定
                                uni.openSetting({
                                  //进入小程序授权设置页面
                                  success: function success(settingdata) {
                                    if (settingdata.
                                    authSetting[
                                    'scope.writePhotosAlbum'])
                                    {
                                      //用户打开了保存图片授权开关
                                      uni.saveImageToPhotosAlbum({
                                        filePath: benUrl,
                                        success: function success(
                                        data)
                                        {
                                          uni.hideLoading();
                                          that.adShow =
                                          true;
                                        } });

                                    } else {
                                      //用户未打开保存图片到相册的授权开关
                                      uni.showModal({
                                        title: '温馨提示',
                                        content: '授权失败，请稍后重新获取',
                                        showCancel: false });

                                    }
                                  } });

                              }
                            } });

                        }
                        uni.hideLoading();
                      } });

                  },
                  fail: function fail(error) {
                    console.log(error);
                  } });case 22:case "end":return _context7.stop();}}}, _callee7);}))();


    },
    backClick: function backClick() {
      uni.navigateBack();
    },
    collectClick: function collectClick() {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var that, coll;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                that = _this8;if (
                that.vuex_user) {_context8.next = 4;break;}
                that.loginShow = true;return _context8.abrupt("return");case 4:if (!



                that.collStatus) {_context8.next = 7;break;}
                uni.showToast({
                  icon: 'none',
                  title: '太快啦，歇一会再试试',
                  mask: true,
                  duration: 1000 });return _context8.abrupt("return");case 7:



                that.collStatus = true;
                // 先显示  再请求 视觉上更适应
                that.isColl = !that.isColl;_context8.next = 11;return (

                  uniCloud.callFunction({
                    name: 'zan_and_coll',
                    data: {
                      dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
                      type: 'coll',
                      userId: that.vuex_user._id,
                      filter: {
                        "_id": that.detail._id,
                        "coll.user_id": that.vuex_user._id } } }));case 11:coll = _context8.sent;



                if (!coll.result.success) {
                  // 更新失败
                  uni.showToast({
                    mask: true,
                    icon: 'none',
                    title: coll.result.msg,
                    duration: 2000 });

                  that.isColl = !that.isColl;
                }
                setTimeout(function () {
                  that.collStatus = false;
                }, 5000);case 14:case "end":return _context8.stop();}}}, _callee8);}))();
    },
    zanClick: function zanClick(zan) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var that, timestamp, _zan;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                that = _this9;if (
                that.vuex_user) {_context9.next = 4;break;}
                that.loginShow = true;return _context9.abrupt("return");case 4:



                timestamp = new Date().getTime();if (!
                zan) {_context9.next = 9;break;}
                uni.showToast({
                  icon: 'none',
                  title: '你已经点过赞啦~',
                  mask: true,
                  duration: 1000 });_context9.next = 18;break;case 9:if (!


                that.zanStatus) {_context9.next = 12;break;}
                uni.showToast({
                  icon: 'none',
                  title: '太快啦，歇一会再试试',
                  mask: true,
                  duration: 1000 });return _context9.abrupt("return");case 12:



                that.zanStatus = true;
                // 先显示  再请求 视觉上更适应
                that.isZan = !that.isZan;_context9.next = 16;return (

                  uniCloud.callFunction({
                    name: 'zan_and_coll',
                    data: {
                      dbName: that.vuex_isShenHe ? "wx_cover_shenhe" : "wx_cover",
                      type: 'zan',
                      userId: that.vuex_user._id,
                      filter: {
                        "_id": that.detail._id,
                        "zan.user_id": that.vuex_user._id } } }));case 16:_zan = _context9.sent;



                if (!_zan.result.success) {
                  // 更新失败
                  uni.showToast({
                    mask: true,
                    icon: 'none',
                    title: _zan.result.msg,
                    duration: 2000 });

                  that.isZan = !that.isZan;
                }case 18:

                setTimeout(function () {
                  that.zanStatus = false;
                }, 5000);case 19:case "end":return _context9.stop();}}}, _callee9);}))();
    },
    cssClick: function cssClick() {
      this.cssTran = !this.cssTran;
    },
    swiperChange: function swiperChange(e) {
      this.indexCurrent = e.detail.current + 1;
    },
    addView: function addView(id) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var result;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return (
                  uniCloud.callFunction({
                    name: 'view_raise',
                    data: {
                      coverId: id } }));case 2:result = _context10.sent;case 3:case "end":return _context10.stop();}}}, _callee10);}))();


    },
    adClick: function adClick() {
      var that = this;
      if (!that.vuex_user) {
        that.loginShow = true;
        return;
      }
      if (videoAd) {
        videoAd.show().catch(function (err) {
          // 失败重试
          // console.log("广告拉去失败")
          videoAd.load().then(function () {return videoAd.show();});
        });
      }
    },
    adLoad: function adLoad() {
      var that = this;
      if (wx.createRewardedVideoAd) {
        // 加载激励视频广告










        //捕捉错误
        videoAd.onError(function (err) {
          // 进行适当的提示
          console.log('videoAd onError', res);
        });
        // 监听关闭
        videoAd.onClose(function (status) {
          that.downShow = false;
          if (status && status.isEnded || status === undefined) {
            // 正常播放结束，下发奖励
            if (that.vuex_user) {
              that.userIntegral();
            }
          } else {
            // 播放中途退出，进行提示
            console.log('中途退出');
          }
        });
      }
    },
    userIntegral: function userIntegral() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var that, data;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                that = _this10;
                uni.showLoading({
                  mask: true,
                  title: '正在拼命加载中...' });_context11.next = 4;return (

                  uniCloud.callFunction({
                    name: 'user_integral',
                    data: {
                      userId: that.vuex_user._id } }));case 4:data = _context11.sent;


                uni.hideLoading();
                if (data.result.success) {
                  that.getUser();
                  that.signTitle =
                  "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" +
                  data.result.integral + "</span>积分</p>";
                  that.signShow = true;
                }case 7:case "end":return _context11.stop();}}}, _callee11);}))();
    },
    getUser: function getUser() {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var that, detail;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                that = _this11;_context12.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_map',
                    data: {
                      dbName: "wx_user",
                      id: that.vuex_user._id } }));case 3:detail = _context12.sent;


                that.$u.vuex('vuex_user', detail.result);case 5:case "end":return _context12.stop();}}}, _callee12);}))();
    },


    // 登录
    getUserInfo: function getUserInfo() {
      var that = this;




























    },
    //已经授权，自动登录
    wxlogin: function wxlogin() {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var that;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                that = _this12;
                uni.showLoading({
                  title: '登录中...' });

                uni.login({
                  provider: 'weixin',
                  success: function success(loginRes) {
                    var code = loginRes.code;
                    that.wxloginres(code);
                  } });case 3:case "end":return _context13.stop();}}}, _callee13);}))();


    },
    //登录后提交服务器获取进一步信息
    wxloginres: function wxloginres(wxcode) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var that, userId, mptype, authorize;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:
                that = _this13;

                userId = uni.getStorageSync('userId');









                mptype = 'tt';_context14.next = 5;return (


                  uniCloud.callFunction({
                    name: 'user_authorize',
                    data: {
                      name: that.name,
                      avatar: that.avatar,
                      mptype: mptype,
                      code: wxcode,
                      userId: userId } }));case 5:authorize = _context14.sent;


                if (authorize.result.success) {
                  that.$u.vuex('vuex_user', authorize.result.data);
                  // 登陆成功  获取收藏点赞
                  that.getIsZan();
                  that.getIsColl();
                  uni.showToast({
                    icon: 'none',
                    mask: true,
                    title: '登录成功',
                    duration: 1500 });

                  uni.removeStorageSync('userId');
                } else {
                  uni.showToast({
                    icon: 'none',
                    mask: true,
                    title: authorize.result.msg,
                    duration: 1500 });

                }
                that.loginShow = false;case 8:case "end":return _context14.stop();}}}, _callee14);}))();
    } },

  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    setTimeout(function () {
      that.adShow = false;
    }, 2000);
    return {
      title: '送你一张超级好看的壁纸~',
      imageUrl: that.detail.images[that.indexCurrent - 1],
      path: '/pages/index/index?userId=' + that.vuex_user._id + '&detailId=' + that.detail._id + '&index=' + (
      that.indexCurrent - 1) };

  },
  onShareTimeline: function onShareTimeline(res) {
    return {

      title: '表，我的聊天背景都是在这找的~',
      path: '/pages/index/index',
      imageUrl:
      "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ed8ec0e-de90-4ed2-8830-c36512ae8fc0/793331ab-9a2a-4236-a7d4-1d19bdff6ae8.png" };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 78:
/*!***************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=scss& */ 79);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 79:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[72,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT8xZWZiIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzZkNjEiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/OWQ0YSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT9mZmQxIiwidW5pLWFwcDovLy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT8xN2U4Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2FlNTQiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLCtGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1IO0FBQ25IO0FBQzBEO0FBQ0w7QUFDYzs7O0FBR25FO0FBQ2tNO0FBQ2xNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsL2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlMTU5ZWI0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTE1OWViNCZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgaWYgKCFfdm0uX2lzTW91bnRlZCkge1xuICAgIF92bS5lMCA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgX3ZtLmEgPSBmYWxzZVxuICAgIH1cblxuICAgIF92bS5lMSA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgX3ZtLmEgPSBmYWxzZVxuICAgIH1cblxuICAgIF92bS5lMiA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgX3ZtLmxvZ2luU2hvdyA9IGZhbHNlXG4gICAgfVxuXG4gICAgX3ZtLmUzID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBfdm0uZG93blNob3cgPSBmYWxzZVxuICAgIH1cblxuICAgIF92bS5lNCA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgX3ZtLnNpZ25TaG93ID0gZmFsc2VcbiAgICB9XG5cbiAgICBfdm0uZTUgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIF92bS5hZFNob3cgPSBmYWxzZVxuICAgIH1cblxuICAgIF92bS5lNiA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgX3ZtLmFkU2hvdyA9IGZhbHNlXG4gICAgfVxuICB9XG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiYSA9IGZhbHNlXCIgQGNhdGNodG91Y2htb3ZlPVwiYSA9IGZhbHNlXCIgdi1zaG93PVwiIWxvYWRGbGFnXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJcIj5cclxuXHRcdFx0XHQ8c3dpcGVyIHN0eWxlPVwiaGVpZ2h0OiAxMDB2aDt3aWR0aDogMTAwdnc7XCIgOmNpcmN1bGFyPVwidHJ1ZVwiIEBjaGFuZ2U9XCJzd2lwZXJDaGFuZ2VcIlxyXG5cdFx0XHRcdFx0OmN1cnJlbnQ9XCJhY3RpdmVDdXJyZW50XCI+XHJcblx0XHRcdFx0XHQ8c3dpcGVyLWl0ZW0gdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZGV0YWlsLmltYWdlc1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cInZ1ZXhfY29tcHJlc3NQaWN0dXJlP2l0ZW0gKyAnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcXVhbGl0eSxxXzgwJzppdGVtXCIgQGNsaWNrPVwiY3NzQ2xpY2tcIiBzdHlsZT1cImhlaWdodDogMTAwdmg7d2lkdGg6IDEwMHZ3O2Rpc3BsYXk6IGZsZXg7XCJcclxuXHRcdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHRcdDwvc3dpcGVyPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZGF0ZS1jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpbWVcIj57e3RpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRhdGVcIj57e2RhdGV9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbVwiIDpjbGFzcz1cImNzc1RyYW4gPyAnY2xvc2VDc3MnIDogJ29wZW5Dc3MnXCIgdi1pZj1cIiFsb2FkRmxhZ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibnVtXCI+e3tpbmRleEN1cnJlbnR9fSAvIHt7ZGV0YWlsLmltYWdlcy5sZW5ndGh9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hdi1ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmF2LXRhYlwiIEBjbGljaz1cImJhY2tDbGlja1wiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vYmFjay5wbmdcIiA6c2l6ZT1cIjQ0XCI+PC91LWljb24+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pui/lOWbnjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmF2LXRhYlwiIEBjbGljaz1cImNvbGxlY3RDbGljaygpXCI+XHJcblx0XHRcdFx0XHRcdDx1LWljb24gOm5hbWU9XCJpc0NvbGw/Jy9zdGF0aWMvaWNvbi9jb2xsX2FydC5wbmcnOicvc3RhdGljL2ljb24vY29sbC5wbmcnXCIgOnNpemU9XCI0MFwiPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD57e2lzQ29sbD8n5bey5pS26JePJzon5pS26JePJ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuYXYtdGFiXCIgQGNsaWNrPVwid2luQ2xpY2soZGV0YWlsLl9pZClcIj5cclxuXHRcdFx0XHRcdFx0PHUtaWNvbiBuYW1lPVwiL3N0YXRpYy9pY29uL2R1aWh1YW4ucG5nXCIgOnNpemU9XCI0MlwiPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD7kuIvovb08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hdi10YWJcIiBAY2xpY2s9XCJ6YW5DbGljayhpc1phbilcIj5cclxuXHRcdFx0XHRcdFx0PHUtaWNvbiA6bmFtZT1cImlzWmFuPycvc3RhdGljL2ljb24vemFuX2FydC5wbmcnOicvc3RhdGljL2ljb24vemFuLnBuZydcIiA6c2l6ZT1cImlzWmFuPzQ4OjQyXCI+PC91LWljb24+XHJcblx0XHRcdFx0XHRcdDx0ZXh0Pnt7aXNaYW4/J+W3sueCuei1nic6J+eCuei1nid9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmF2LXRhYlwiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vc2hhcmVzLnBuZ1wiIDpzaXplPVwiNDRcIj48L3UtaWNvbj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+5YiG5LqrPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9wZW4tdHlwZT1cInNoYXJlXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO29wYWNpdHk6IDA7XCI+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gPHZpZXcgdi1pZj1cInRpcHNTaG93XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7d2lkdGg6IDEwMHZ3O2hlaWdodDogMTAwdmg7ei1pbmRleDogMTE7XCIgQGNsaWNrPVwidGlwc0NsaWNrXCI+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy90aXBzLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO2Rpc3BsYXk6IGZsZXg7XCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcclxuXHRcdFx0PG1vZGVscyB2LWlmPVwibG9naW5TaG93XCIgdGl0bGU9XCLkuLrkuobmm7Tlpb3kvZPpqozvvIzlv6vljrvmjojmnYPnmbvlvZXlkKdcIiBidG5UZXh0PVwi5o6I5p2D55m75b2VXCIgQGdldFVzZXJJbmZvPVwiZ2V0VXNlckluZm9cIiBAY2xvc2U9XCJsb2dpblNob3cgPSBmYWxzZVwiPjwvbW9kZWxzPlxyXG5cdFx0XHRcclxuXHRcdFx0PG1vZGVscyB2LWlmPVwiZG93blNob3dcIiA6dGl0bGU9XCJkb3duVGl0bGVcIiA6YnRuVGV4dD1cIifnnIvlub/lkYrpooYgJythZEludGVncmFsKycg56ev5YiGJ1wiIDphdXRob3JpemU9XCJmYWxzZVwiIEBjbG9zZT1cImRvd25TaG93ID0gZmFsc2VcIiBAc2F2ZT1cImFkQ2xpY2tcIj48L21vZGVscz5cclxuXHRcdFxyXG5cdFx0XHQ8bW9kZWxzIHYtaWY9XCJzaWduU2hvd1wiXHJcblx0XHRcdDphdXRob3JpemU9XCJmYWxzZVwiIFxyXG5cdFx0XHQ6dGl0bGU9XCJzaWduVGl0bGVcIlxyXG5cdFx0XHRidG5UZXh0PVwi55+l6YGT5LqGXCIgXHJcblx0XHRcdGNsb3NlVGV4dD1cIiBcIiBcclxuXHRcdFx0QHNhdmU9XCJzaWduU2hvdyA9IGZhbHNlXCI+PC9tb2RlbHM+XHJcblx0XHRcdFxyXG5cdFx0XHQ8bW9kZWxzIHYtc2hvdz1cImFkU2hvd1wiXHJcblx0XHRcdDphdXRob3JpemU9XCJmYWxzZVwiIFxyXG5cdFx0XHQ6YWQ9XCJ0cnVlXCIgXHJcblx0XHRcdHRpdGxlPVwi5bey5oiQ5Yqf5L+d5a2Y5Yiw55u45YaM77yM5Yir5b+Y5LqG5YiG5Lqr57uZ5pyL5Y+L5ZOm77yBXCJcclxuXHRcdFx0YnRuVGV4dD1cIuWIhuS6q+e7meWlveWPi1wiIFxyXG5cdFx0XHRjbG9zZVRleHQ9XCLmmoLml7bkuI3nlKhcIiBcclxuXHRcdFx0QHNhdmU9XCJhZFNob3cgPSBmYWxzZVwiXHJcblx0XHRcdEBjbG9zZT1cImFkU2hvdyA9IGZhbHNlXCI+PC9tb2RlbHM+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdfcGFnZVwiIHYtc2hvdz1cImxvYWRGbGFnXCI+PGltYWdlIHNyYz1cIi9zdGF0aWMvbG9hZGluZy9sb2FkaW5nLmdpZlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0bGV0IHZpZGVvQWQgPSBudWxsO1xyXG5cdHZhciB3ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGg7XHJcblx0dmFyIGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcblx0aW1wb3J0IG1vZGVscyBmcm9tICdAL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0bW9kZWxzXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsb2FkRmxhZzogdHJ1ZSxcclxuXHRcdFx0XHRsb2dpblNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdGRldGFpbDoge30sXHJcblx0XHRcdFx0dGltZTogJycsXHJcblx0XHRcdFx0ZGF0ZTogJycsXHJcblxyXG5cdFx0XHRcdGFkSW50ZWdyYWw6IDAsXHJcblxyXG5cdFx0XHRcdGRvd25TaG93OiBmYWxzZSxcclxuXHRcdFx0XHRkb3duSW50ZWdyYWw6IDAsXHJcblx0XHRcdFx0ZG93blRpdGxlOiAnJyxcclxuXHRcdFx0XHRkb3duQnRuOiAnJyxcclxuXHRcdFx0XHRhZFNob3c6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHRpc0NvbGw6IGZhbHNlLFxyXG5cdFx0XHRcdGlzWmFuOiBmYWxzZSxcclxuXHRcdFx0XHR6YW5TdGF0dXM6IHRydWUsXHJcblx0XHRcdFx0Y29sbFN0YXR1czogdHJ1ZSxcclxuXHJcblx0XHRcdFx0Y3NzVHJhbjogZmFsc2UsXHJcblx0XHRcdFx0aW5kZXhDdXJyZW50OiAxLFxyXG5cdFx0XHRcdGFjdGl2ZUN1cnJlbnQ6IDAsXHJcblxyXG5cdFx0XHRcdHNpZ25TaG93OiBmYWxzZSxcclxuXHRcdFx0XHRzaWduVGl0bGU6ICcnLFxyXG5cdFx0XHRcdHc6IHcsXHJcblx0XHRcdFx0aDogaCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIG9uTG9hZCh7XHJcblx0XHRcdGlkLFxyXG5cdFx0XHRpbmRleCxcclxuXHRcdFx0aW1hZ2VzXHJcblx0XHR9KSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRhd2FpdCB0aGF0LmdldERhdGUoKVxyXG5cdFx0XHR0aGF0LmluZGV4Q3VycmVudCA9IHBhcnNlSW50KGluZGV4KSArIDFcclxuXHRcdFx0dGhhdC5hY3RpdmVDdXJyZW50ID0gcGFyc2VJbnQoaW5kZXgpXHJcblx0XHRcdGlmIChpbWFnZXMpIHtcclxuXHRcdFx0XHR0aGF0LmRldGFpbC5pbWFnZXMgPSBKU09OLnBhcnNlKGltYWdlcylcclxuXHRcdFx0XHR0aGF0LmRldGFpbC5faWQgPSBpZFxyXG5cdFx0XHRcdGF3YWl0IHRoYXQuYWRkVmlldyhpZClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhd2FpdCB0aGF0LmdldERldGFpbChpZClcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0YXdhaXQgdGhhdC5nZXRDb25maWcoKVxyXG5cdFx0XHRpZiAodGhhdC52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHR0aGF0LmdldElzWmFuKClcclxuXHRcdFx0XHR0aGF0LmdldElzQ29sbCgpXHJcblx0XHRcdFx0dGhhdC5nZXRVc2VyKClcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGF0LmFkTG9hZCgpXHJcblx0XHRcdHRoYXQubG9hZEZsYWcgPSBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXN5bmMgZ2V0RGF0ZSgpe1xyXG5cdFx0XHRcdHZhciB0ID0gbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGUgPSAodC5nZXRGdWxsWWVhcigpLCB0LmdldE1vbnRoKCkgKyAxKSxcclxuXHRcdFx0XHRcdG8gPSB0LmdldERhdGUoKSxcclxuXHRcdFx0XHRcdGEgPSB0LmdldEhvdXJzKCksXHJcblx0XHRcdFx0XHRuID0gdC5nZXRNaW51dGVzKCksXHJcblx0XHRcdFx0XHRpID0gKHQuZ2V0U2Vjb25kcygpLCBlICsgXCLmnIhcIiArIG8gKyBcIuaXpVwiKSxcclxuXHRcdFx0XHRcdHMgPSBbYSwgbl0ubWFwKHRoaXMuZm9ybWF0TnVtYmVyKS5qb2luKFwiOlwiKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpKSwgY29uc29sZS5sb2cocyksIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRkYXRlOiBpLFxyXG5cdFx0XHRcdFx0dGltZTogc1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3JtYXROdW1iZXI6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHQgPSB0LnRvU3RyaW5nKCkpWzFdID8gdCA6IFwiMFwiICsgdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0RGV0YWlsKGlkKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRldGFpbCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAncXVlcnlfbWFwJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZGJOYW1lOiB0aGF0LnZ1ZXhfaXNTaGVuSGU/XCJ3eF9jb3Zlcl9zaGVuaGVcIjpcInd4X2NvdmVyXCIsXHJcblx0XHRcdFx0XHRcdGlkOiBpZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoYXQuZGV0YWlsID0gZGV0YWlsLnJlc3VsdFxyXG5cdFx0XHRcdGlmICghdGhhdC5kZXRhaWwpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+Wjgee6uOS4jeWtmOWcqCcsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdFx0XHR9LCAxNTAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYWRkVmlldyhpZClcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0Q29uZmlnKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBjb25maWcgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ2NvbmZpZ19tYXAnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHQna2V5cyc6IFsnZG93bkludGVncmFsJywgJ2FkSW50ZWdyYWwnXVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmIChjb25maWcucmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdHRoYXQuZG93bkludGVncmFsID0gcGFyc2VJbnQoY29uZmlnLnJlc3VsdC5kYXRhWzBdKVxyXG5cdFx0XHRcdFx0dGhhdC5hZEludGVncmFsID0gcGFyc2VJbnQoY29uZmlnLnJlc3VsdC5kYXRhWzFdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0SXNaYW4oKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzIFxyXG5cdFx0XHRcdGxldCBjb3VudCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAncXVlcnlfY291bnQnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IHRoYXQudnVleF9pc1NoZW5IZT9cInd4X2NvdmVyX3NoZW5oZVwiOlwid3hfY292ZXJcIixcclxuXHRcdFx0XHRcdFx0ZmlsdGVyOiB7XHJcblx0XHRcdFx0XHRcdFx0XCJfaWRcIjogdGhhdC5kZXRhaWwuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFwiemFuLnVzZXJfaWRcIjogdGhhdC52dWV4X3VzZXIuX2lkXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGF0LnphblN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0aWYgKGNvdW50LnJlc3VsdCA+IDApIHRoYXQuaXNaYW4gPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldElzQ29sbCgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMgXHJcblx0XHRcdFx0bGV0IGNvdW50ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9jb3VudCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGRiTmFtZTogdGhhdC52dWV4X2lzU2hlbkhlP1wid3hfY292ZXJfc2hlbmhlXCI6XCJ3eF9jb3ZlclwiLFxyXG5cdFx0XHRcdFx0XHRmaWx0ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRcIl9pZFwiOiB0aGF0LmRldGFpbC5faWQsXHJcblx0XHRcdFx0XHRcdFx0XCJjb2xsLnVzZXJfaWRcIjogdGhhdC52dWV4X3VzZXIuX2lkXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGF0LmNvbGxTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdGlmIChjb3VudC5yZXN1bHQgPiAwKSB0aGF0LmlzQ29sbCA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgd2luQ2xpY2soKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGF0LnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmRvd25JbnRlZ3JhbCA+IDApIHtcclxuXHRcdFx0XHRcdHZhciBpbnRlZ3JhbCA9IHRoYXQudnVleF91c2VyLmludGVncmFsXHJcblx0XHRcdFx0XHRpZiAoaW50ZWdyYWwgPCB0aGF0LmRvd25JbnRlZ3JhbCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmRvd25TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR0aGF0LmRvd25UaXRsZSA9IFwiPHAgc3R5bGU9J2ZvbnQtd2VpZ2h0OiA1NTA7Zm9udC1zaXplOiAxNnB4Oyc+5LiL6L296ZyA6KaBIFwiICsgdGhhdC5kb3duSW50ZWdyYWwgK1xyXG5cdFx0XHRcdFx0XHRcdFwiIOenr+WIhjwvcD48cCBzdHlsZT0ncGFkZGluZy10b3A6IDEwcHg7Jz7mgqjlvZPliY3ku4XmnIk8c3BhbiBjbGFzcz0nbnVtJz5cIiArIGludGVncmFsICtcclxuXHRcdFx0XHRcdFx0XHRcIjwvc3Bhbj7np6/liIbvvIzml6Dms5XkuIvovb3lvZPliY3kvZzlk4HvvIzlv6vljrvotZrnp6/liIblkKd+PC9wPlwiXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5L+d5a2Y5LitLi4uJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRsZXQgcXVlcnkgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAncGxhY2Vfb3JkZXInLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0dXNlcklkOiB0aGF0LnZ1ZXhfdXNlci5faWQsXHJcblx0XHRcdFx0XHRcdFx0Y292ZXJJZDogdGhhdC5kZXRhaWwuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdGludGVncmFsOiB0aGF0LmRvd25JbnRlZ3JhbCxcclxuXHRcdFx0XHRcdFx0XHRpbmRleDogdGhhdC5pbmRleEN1cnJlbnQgLSAxXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3F1ZXJ5JyxxdWVyeSlcclxuXHRcdFx0XHRcdGlmIChxdWVyeS5yZXN1bHQuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHQvLyDkuIvovb3miJDlip8g6K+35rGC55So5oi356ev5YiGXHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlcigpXHJcblx0XHRcdFx0XHRcdC8vIOiOt+WPluWbvueJh+S/oeaBr1xyXG5cdFx0XHRcdFx0XHR2YXIgdXJsID0gdGhhdC5kZXRhaWwuaW1hZ2VzW3RoYXQuaW5kZXhDdXJyZW50IC0gMV1cclxuXHRcdFx0XHRcdFx0dmFyIGV4dGVuc2lvbiA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcuJykgKyAxKVxyXG5cdFx0XHRcdFx0XHRsZXQgZmlsZU5hbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuXHJcblx0XHRcdFx0XHRcdHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiB3eC5lbnYuVVNFUl9EQVRBX1BBVEggKyAnLycgKyBmaWxlTmFtZSArICcuJyArIGV4dGVuc2lvbixcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgYmVuVXJsID0gcmVzLmZpbGVQYXRoXHJcblx0XHRcdFx0XHRcdFx0XHQvL+WbvueJh+S/neWtmOWIsOacrOWcsOebuOWGjFxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlUGF0aDogYmVuVXJsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL+aOiOadg+aIkOWKn++8jOS/neWtmOWbvueJh1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFkU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly/mjojmnYPlpLHotKVcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVyci5lcnJNc2cpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v6YeN5paw5o6I5p2D5by55qGG56Gu6K6kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5peg5p2D6ZmQ77yM6K+35omT5byA5LiL6L295p2D6ZmQ5ZCO5YaN6K+V77yBJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+mHjeaWsOaOiOadg+W8ueahhueUqOaIt+eCueWHu+S6huehruWumlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/ov5vlhaXlsI/nqIvluo/mjojmnYPorr7nva7pobXpnaJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChzZXR0aW5nZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmF1dGhTZXR0aW5nW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2NvcGUud3JpdGVQaG90b3NBbGJ1bSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/nlKjmiLfmiZPlvIDkuobkv53lrZjlm77niYfmjojmnYPlvIDlhbNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGJlblVybCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5hZFNob3cgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/nlKjmiLfmnKrmiZPlvIDkv53lrZjlm77niYfliLDnm7jlhoznmoTmjojmnYPlvIDlhbNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmjojmnYPlpLHotKXvvIzor7fnqI3lkI7ph43mlrDojrflj5YnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHF1ZXJ5LnJlc3VsdC5tc2csXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g6I635Y+W5Zu+54mH5L+h5oGvXHJcblx0XHRcdFx0XHR2YXIgdXJsID0gdGhhdC5kZXRhaWwuaW1hZ2VzW3RoYXQuaW5kZXhDdXJyZW50IC0gMV1cclxuXHRcdFx0XHRcdHZhciBleHRlbnNpb24gPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLicpICsgMSlcclxuXHRcdFx0XHRcdGxldCBmaWxlTmFtZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG5cclxuXHRcdFx0XHRcdHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRcdFx0ZmlsZVBhdGg6IHd4LmVudi5VU0VSX0RBVEFfUEFUSCArICcvJyArIGZpbGVOYW1lICsgJy4nICsgZXh0ZW5zaW9uLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGJlblVybCA9IHJlcy5maWxlUGF0aFxyXG5cdFx0XHRcdFx0XHRcdC8v5Zu+54mH5L+d5a2Y5Yiw5pys5Zyw55u45YaMXHJcblx0XHRcdFx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGJlblVybCxcclxuXHRcdFx0XHRcdFx0XHRcdC8v5o6I5p2D5oiQ5Yqf77yM5L+d5a2Y5Zu+54mHXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYWRTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdC8v5o6I5p2D5aSx6LSlXHJcblx0XHRcdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVyci5lcnJNc2cpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvL+mHjeaWsOaOiOadg+W8ueahhuehruiupFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aXoOadg+mZkO+8jOivt+aJk+W8gOS4i+i9veadg+mZkOWQjuWGjeivle+8gScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v6YeN5paw5o6I5p2D5by55qGG55So5oi354K55Ye75LqG56Gu5a6aXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v6L+b5YWl5bCP56iL5bqP5o6I5p2D6K6+572u6aG16Z2iXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHNldHRpbmdkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChzZXR0aW5nZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5hdXRoU2V0dGluZ1tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzY29wZS53cml0ZVBob3Rvc0FsYnVtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v55So5oi35omT5byA5LqG5L+d5a2Y5Zu+54mH5o6I5p2D5byA5YWzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGJlblVybCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFkU2hvdyA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v55So5oi35pyq5omT5byA5L+d5a2Y5Zu+54mH5Yiw55u45YaM55qE5o6I5p2D5byA5YWzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5o6I5p2D5aSx6LSl77yM6K+356iN5ZCO6YeN5paw6I635Y+WJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja0NsaWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjb2xsZWN0Q2xpY2soKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGF0LnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGF0LmNvbGxTdGF0dXMpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5aSq5b+r5ZWm77yM5q2H5LiA5Lya5YaN6K+V6K+VJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5jb2xsU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdC8vIOWFiOaYvuekuiAg5YaN6K+35rGCIOinhuinieS4iuabtOmAguW6lFxyXG5cdFx0XHRcdHRoYXQuaXNDb2xsID0gIXRoYXQuaXNDb2xsXHJcblxyXG5cdFx0XHRcdGxldCBjb2xsID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICd6YW5fYW5kX2NvbGwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IHRoYXQudnVleF9pc1NoZW5IZT9cInd4X2NvdmVyX3NoZW5oZVwiOlwid3hfY292ZXJcIixcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2NvbGwnLFxyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHRoYXQudnVleF91c2VyLl9pZCxcclxuXHRcdFx0XHRcdFx0ZmlsdGVyOiB7XHJcblx0XHRcdFx0XHRcdFx0XCJfaWRcIjogdGhhdC5kZXRhaWwuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFwiY29sbC51c2VyX2lkXCI6IHRoYXQudnVleF91c2VyLl9pZFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYgKCFjb2xsLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHQvLyDmm7TmlrDlpLHotKVcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBjb2xsLnJlc3VsdC5tc2csXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhhdC5pc0NvbGwgPSAhdGhhdC5pc0NvbGxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoYXQuY29sbFN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0fSwgNTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgemFuQ2xpY2soemFuKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGF0LnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG5cdFx0XHRcdGlmICh6YW4pIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5L2g5bey57uP54K56L+H6LWe5ZWmficsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC56YW5TdGF0dXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5aSq5b+r5ZWm77yM5q2H5LiA5Lya5YaN6K+V6K+VJyxcclxuXHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC56YW5TdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0XHQvLyDlhYjmmL7npLogIOWGjeivt+axgiDop4bop4nkuIrmm7TpgILlupRcclxuXHRcdFx0XHRcdHRoYXQuaXNaYW4gPSAhdGhhdC5pc1phblxyXG5cclxuXHRcdFx0XHRcdGxldCB6YW4gPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnemFuX2FuZF9jb2xsJyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGRiTmFtZTogdGhhdC52dWV4X2lzU2hlbkhlP1wid3hfY292ZXJfc2hlbmhlXCI6XCJ3eF9jb3ZlclwiLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd6YW4nLFxyXG5cdFx0XHRcdFx0XHRcdHVzZXJJZDogdGhhdC52dWV4X3VzZXIuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdGZpbHRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJfaWRcIjogdGhhdC5kZXRhaWwuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ6YW4udXNlcl9pZFwiOiB0aGF0LnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYgKCF6YW4ucmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0Ly8g5pu05paw5aSx6LSlXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiB6YW4ucmVzdWx0Lm1zZyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGF0LmlzWmFuID0gIXRoYXQuaXNaYW5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoYXQuemFuU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR9LCA1MDAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjc3NDbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLmNzc1RyYW4gPSAhdGhpcy5jc3NUcmFuXHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aXBlckNoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5pbmRleEN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50ICsgMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBhZGRWaWV3KGlkKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAndmlld19yYWlzZScsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGNvdmVySWQ6IGlkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRDbGljaygpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZiAoIXRoYXQudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGF0LmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmlkZW9BZCkge1xyXG5cdFx0XHRcdFx0dmlkZW9BZC5zaG93KCkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g5aSx6LSl6YeN6K+VXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5bm/5ZGK5ouJ5Y675aSx6LSlXCIpXHJcblx0XHRcdFx0XHRcdHZpZGVvQWQubG9hZCgpLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdGFkTG9hZCgpe1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0aWYgKHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCkge1xyXG5cdFx0XHRcdC8vIOWKoOi9vea/gOWKseinhumikeW5v+WRilxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1RUVxyXG5cdFx0XHRcdHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0YWRVbml0SWQ6IFwie3sgcXFleGNpdGF0aW9uIH19XCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0dmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcblx0XHRcdFx0XHRhZFVuaXRJZDogXCJhZHVuaXQtNGUwMDBhYzM0OTM1MGIxZFwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly/mjZXmjYnplJnor69cclxuXHRcdFx0XHR2aWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRcdC8vIOi/m+ihjOmAguW9k+eahOaPkOekulxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZpZGVvQWQgb25FcnJvcicsIHJlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8g55uR5ZCs5YWz6ZetXHJcblx0XHRcdFx0dmlkZW9BZC5vbkNsb3NlKHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LmRvd25TaG93ID0gZmFsc2VcclxuXHRcdFx0XHRcdGlmICgoc3RhdHVzICYmIHN0YXR1cy5pc0VuZGVkKSB8fCBzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHQvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzkuIvlj5HlpZblirFcclxuXHRcdFx0XHRcdFx0aWYodGhhdC52dWV4X3VzZXIpe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQudXNlckludGVncmFsKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8g5pKt5pS+5Lit6YCU6YCA5Ye677yM6L+b6KGM5o+Q56S6XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfkuK3pgJTpgIDlh7onKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRhc3luYyB1c2VySW50ZWdyYWwoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOaLvOWRveWKoOi9veS4rS4uLidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBkYXRhID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICd1c2VyX2ludGVncmFsJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB0aGF0LnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdGlmIChkYXRhLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXIoKVxyXG5cdFx0XHRcdFx0dGhhdC5zaWduVGl0bGUgPVxyXG5cdFx0XHRcdFx0XHRcIjxwIHN0eWxlPSdmb250LXdlaWdodDogNTUwO2ZvbnQtc2l6ZTogMTZweDsnPuingueci+aIkOWKnzwvcD48cCBzdHlsZT0ncGFkZGluZy10b3A6IDEwcHg7Jz7ojrflvpc8c3BhbiBjbGFzcz0nbnVtJz5cIiArXHJcblx0XHRcdFx0XHRcdGRhdGEucmVzdWx0LmludGVncmFsICsgXCI8L3NwYW4+56ev5YiGPC9wPlwiXHJcblx0XHRcdFx0XHR0aGF0LnNpZ25TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0VXNlcigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGV0YWlsID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9tYXAnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IFwid3hfdXNlclwiLFxyXG5cdFx0XHRcdFx0XHRpZDogdGhhdC52dWV4X3VzZXIuX2lkXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhhdC4kdS52dWV4KCd2dWV4X3VzZXInLCBkZXRhaWwucmVzdWx0KVxyXG5cdFx0XHR9LFxyXG5cclxuXHJcblx0XHRcdC8vIOeZu+W9lVxyXG5cdFx0XHRnZXRVc2VySW5mbygpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0dW5pLmdldFVzZXJQcm9maWxlKHtcclxuXHRcdFx0XHRcdGRlc2M6ICfkuKrkurrnmbvlvZXvvIzorrDlvZXmlbDmja4nLCAvLyDlo7DmmI7ojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lkI7nmoTnlKjpgJTvvIzlkI7nu63kvJrlsZXnpLrlnKjlvLnnqpfkuK3vvIzor7fosKjmhY7loavlhplcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0dGhhdC5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lOyAvL+aYteensFxyXG5cdFx0XHRcdFx0XHR0aGF0LmF2YXRhciA9IHJlcy51c2VySW5mby5hdmF0YXJVcmw7IC8v5aS05YOPXHJcblx0XHRcdFx0XHRcdHRoYXQud3hsb2dpbigpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1RUVxyXG5cdFx0XHRcdHVuaS5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0XHQvLyDojrflj5bkv6Hmga/miJDlip9cclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0dGhhdC5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lOyAvL+aYteensFxyXG5cdFx0XHRcdFx0XHR0aGF0LmF2YXRhciA9IHJlcy51c2VySW5mby5hdmF0YXJVcmw7IC8v5aS05YOPXHJcblx0XHRcdFx0XHRcdHRoYXQud3hsb2dpbigpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+W3sue7j+aOiOadg++8jOiHquWKqOeZu+W9lVxyXG5cdFx0XHRhc3luYyB3eGxvZ2luKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnmbvlvZXkuK0uLi4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLmxvZ2luKHtcclxuXHRcdFx0XHRcdHByb3ZpZGVyOiAnd2VpeGluJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGxvZ2luUmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBjb2RlID0gbG9naW5SZXMuY29kZTtcclxuXHRcdFx0XHRcdFx0dGhhdC53eGxvZ2lucmVzKGNvZGUpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v55m75b2V5ZCO5o+Q5Lqk5pyN5Yqh5Zmo6I635Y+W6L+b5LiA5q2l5L+h5oGvXHJcblx0XHRcdGFzeW5jIHd4bG9naW5yZXMod3hjb2RlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdFx0XHR2YXIgdXNlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySWQnKVxyXG5cclxuXHRcdFx0XHR2YXIgbXB0eXBlXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdG1wdHlwZSA9ICd3eCdcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtUVFcclxuXHRcdFx0XHRtcHR5cGUgPSAncXEnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHRtcHR5cGUgPSAndHQnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdGxldCBhdXRob3JpemUgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ3VzZXJfYXV0aG9yaXplJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogdGhhdC5uYW1lLFxyXG5cdFx0XHRcdFx0XHRhdmF0YXI6IHRoYXQuYXZhdGFyLFxyXG5cdFx0XHRcdFx0XHRtcHR5cGU6IG1wdHlwZSxcclxuXHRcdFx0XHRcdFx0Y29kZTogd3hjb2RlLFxyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAoYXV0aG9yaXplLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHR0aGF0LiR1LnZ1ZXgoJ3Z1ZXhfdXNlcicsIGF1dGhvcml6ZS5yZXN1bHQuZGF0YSlcclxuXHRcdFx0XHRcdC8vIOeZu+mZhuaIkOWKnyAg6I635Y+W5pS26JeP54K56LWeXHJcblx0XHRcdFx0XHR0aGF0LmdldElzWmFuKClcclxuXHRcdFx0XHRcdHRoYXQuZ2V0SXNDb2xsKClcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn55m75b2V5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VzZXJJZCcpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBhdXRob3JpemUucmVzdWx0Lm1zZyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQubG9naW5TaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5hZFNob3cgPSBmYWxzZVxyXG5cdFx0XHR9LCAyMDAwKVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAn6YCB5L2g5LiA5byg6LaF57qn5aW955yL55qE5aOB57q4ficsXHJcblx0XHRcdFx0aW1hZ2VVcmw6IHRoYXQuZGV0YWlsLmltYWdlc1t0aGF0LmluZGV4Q3VycmVudCAtIDFdLFxyXG5cdFx0XHRcdHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXg/dXNlcklkPScgKyB0aGF0LnZ1ZXhfdXNlci5faWQgKyAnJmRldGFpbElkPScgKyB0aGF0LmRldGFpbC5faWQgKyAnJmluZGV4PScgKyAoXHJcblx0XHRcdFx0XHR0aGF0LmluZGV4Q3VycmVudCAtIDEpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNoYXJlVGltZWxpbmUocmVzKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGl0bGU6ICfooajvvIzmiJHnmoTogYrlpKnog4zmma/pg73mmK/lnKjov5nmib7nmoR+JyxcclxuXHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4JyxcclxuXHRcdFx0XHRpbWFnZVVybDpcclxuXHRcdFx0XHQgIFwiaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS03ZWQ4ZWMwZS1kZTkwLTRlZDItODgzMC1jMzY1MTJhZThmYzAvNzkzMzMxYWItOWEyYS00MjM2LWE3ZDQtMWQxOWJkZmY2YWU4LnBuZ1wiLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LmJvdHRvbSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiA0JTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDkyJTtcclxuXHRcdGhlaWdodDogNTJweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjk0KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQ5cHg7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdG9wYWNpdHk6IDAuODtcclxuXHRcdC5udW17XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAtMjBycHg7XHJcblx0XHRcdHRvcDogLTcwcnB4O1xyXG5cdFx0XHRsZWZ0OiA0NCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxuXHRcdFx0Y29sb3I6ICNGRkY7XHJcblx0XHRcdHBhZGRpbmc6IDRycHggMjBycHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMzZweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5uYXYtdGFiIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA1MnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNEOEQ4RDg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubmF2LWJveCB7XHJcblx0XHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0Lm9wZW5Dc3Mge1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6IG9wZW5MaW5lYXI7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XHJcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG5cdFx0Ym90dG9tOiAzJTtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgb3BlbkxpbmVhciB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MnB4KTtcclxuXHRcdH1cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jbG9zZUNzcyB7XHJcblx0XHRhbmltYXRpb24tbmFtZTogY2xvc2VMaW5lYXI7XHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XHJcblx0XHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG5cdFx0Ym90dG9tOiAtNTJweDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgY2xvc2VMaW5lYXIge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTkycHgpO1xyXG5cdFx0fVxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQudS1pbmRpY2F0b3ItaXRlbS1udW1iZXIge1xyXG5cdFx0cGFkZGluZzogNnJweCAxNnJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcblx0fVxyXG5cdC5kYXRlLWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAxNTBycHg7XHJcblx0XHRvcGFjaXR5OiAuOTtcclxuXHR9XHJcblx0XHJcblx0LnRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAxMjBycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0XHJcblx0LmRhdGUge1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTU1Mjk2NjU1MzJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==