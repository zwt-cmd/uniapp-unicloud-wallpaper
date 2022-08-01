(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/center/center"],{

/***/ 56:
/*!************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fcenter%2Fcenter"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _center = _interopRequireDefault(__webpack_require__(/*! ./pages/center/center.vue */ 57));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_center.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 57:
/*!*****************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/center/center.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./center.vue?vue&type=template&id=2fc1a426&scoped=true& */ 58);
/* harmony import */ var _center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./center.vue?vue&type=script&lang=js& */ 60);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./center.vue?vue&type=style&index=0&id=2fc1a426&lang=scss&scoped=true& */ 62);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fc1a426",
  null,
  false,
  _center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/center/center.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/*!************************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=template&id=2fc1a426&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./center.vue?vue&type=template&id=2fc1a426&scoped=true& */ 59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_template_id_2fc1a426_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 59:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=template&id=2fc1a426&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 60:
/*!******************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./center.vue?vue&type=script&lang=js& */ 61);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//

var menuButtonInfo = {};
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)

menuButtonInfo = uni.getMenuButtonBoundingClientRect();var fooBar = function fooBar() {__webpack_require__.e(/*! require.ensure | components/fooBar/fooBar */ "components/fooBar/fooBar").then((function () {return resolve(__webpack_require__(/*! @/components/fooBar/fooBar.vue */ 407));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



{
  components: {
    fooBar: fooBar },

  data: function data() {
    return {
      menuButtonInfo: menuButtonInfo,
      loadShow: true,
      // 分类页数据
      zodiacList: [],
      categoryList: [],
      reviewed: true };

  },
  onLoad: function onLoad() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              _this.reviewed = uni.getStorageSync('boolean');
              // uni.hideTabBar()
              that = _this;_context.next = 4;return (
                that.getZodiacList());case 4:_context.next = 6;return (
                that.getCateList());case 6:
              that.loadShow = false;case 7:case "end":return _context.stop();}}}, _callee);}))();
  },

  methods: {
    toIndex: function toIndex(index) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = _this2;
                if (index == 0) {
                  uni.switchTab({
                    url: '/pages/index/index' });

                } else if (index == 2) {
                  uni.switchTab({
                    url: '/pages/find/find' });

                } else if (index == 3) {
                  uni.switchTab({
                    url: '/pages/user/user' });

                }case 2:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    // 搜索
    search: function search() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                uni.navigateTo({
                  url: '/pages/search/search' });case 1:case "end":return _context3.stop();}}}, _callee3);}))();

    },
    // 分类
    getZodiacList: function getZodiacList() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, list;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this3;_context4.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_tags",
                      order: {
                        "name": 'time',
                        "type": "asc" },

                      pageIndex: 1,
                      pageSize: 10 } }));case 3:list = _context4.sent;


                that.zodiacList = list.result.data;case 5:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    getCateList: function getCateList() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var that, list;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = _this4;_context5.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_category",
                      pageIndex: 1,
                      pageSize: 20,
                      order: {
                        name: 'sort',
                        type: 'desc' } } }));case 3:list = _context5.sent;



                that.categoryList = list.result.data;case 5:case "end":return _context5.stop();}}}, _callee5);}))();
    },
    listClick: function listClick(type, pid, id, item) {
      console.log('item.start', item.start);
      if (item.start !== undefined) {
        console.log('11');
        uni.navigateTo({
          url: '/pages/detail/video?type=' + type + '&pid=' + pid + '&id=' + id });

      } else {
        uni.navigateTo({
          url: '/pages/list/list?type=' + type + '&pid=' + pid + '&id=' + id });

      }

    },
    onShareAppMessage: function onShareAppMessage(res) {
      return {
        title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
        path: '/pages/center/center?userId=' + this.vuex_user._id };

    },
    onShareTimeline: function onShareTimeline(res) {
      return {
        title: '精选手机壁纸、动漫二次元壁纸、明星创意潮图、抖音网红壁纸~',
        path: '/pages/center/center' };

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"]))

/***/ }),

/***/ 62:
/*!***************************************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=style&index=0&id=2fc1a426&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./center.vue?vue&type=style&index=0&id=2fc1a426&lang=scss&scoped=true& */ 63);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_center_vue_vue_type_style_index_0_id_2fc1a426_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/center/center.vue?vue&type=style&index=0&id=2fc1a426&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[56,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9jZW50ZXIvY2VudGVyLnZ1ZT82ZTEzIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2NlbnRlci9jZW50ZXIudnVlPzIyNDYiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvY2VudGVyL2NlbnRlci52dWU/YWQ5YyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9jZW50ZXIvY2VudGVyLnZ1ZT8yYzI0IiwidW5pLWFwcDovLy9wYWdlcy9jZW50ZXIvY2VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9jZW50ZXIvY2VudGVyLnZ1ZT9hZTgwIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2NlbnRlci9jZW50ZXIudnVlPzhhODciXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLCtGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUNrTTtBQUNsTSxnQkFBZ0IsNE1BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVNQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBOHZCLENBQWdCLDJ3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEZseEI7QUFDQTs7QUFFQSx1RDs7OztBQUlBO0FBQ0E7QUFDQSxrQkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsb0JBRkE7QUFHQTtBQUNBLG9CQUpBO0FBS0Esc0JBTEE7QUFNQSxvQkFOQTs7QUFRQSxHQWJBO0FBY0EsUUFkQSxvQkFjQTtBQUNBO0FBQ0E7QUFDQSxrQkFIQSxHQUdBLEtBSEE7QUFJQSxvQ0FKQTtBQUtBLGtDQUxBO0FBTUEsb0NBTkE7QUFPQSxHQXJCQTs7QUF1QkE7QUFDQSxXQURBLG1CQUNBLEtBREEsRUFDQTtBQUNBLG9CQURBLEdBQ0EsTUFEQTtBQUVBO0FBQ0E7QUFDQSw2Q0FEQTs7QUFHQSxpQkFKQSxNQUlBO0FBQ0E7QUFDQSwyQ0FEQTs7QUFHQSxpQkFKQSxNQUlBO0FBQ0E7QUFDQSwyQ0FEQTs7QUFHQSxpQkFkQTtBQWVBLEtBaEJBO0FBaUJBO0FBQ0EsVUFsQkEsb0JBa0JBO0FBQ0E7QUFDQSw2Q0FEQSxJQURBOztBQUlBLEtBdEJBO0FBdUJBO0FBQ0EsaUJBeEJBLDJCQXdCQTtBQUNBLG9CQURBLEdBQ0EsTUFEQTtBQUVBO0FBQ0Esc0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUE7QUFDQSxzQ0FEQTtBQUVBLHFDQUZBLEVBRkE7O0FBTUEsa0NBTkE7QUFPQSxrQ0FQQSxFQUZBLEdBRkEsU0FFQSxJQUZBOzs7QUFjQSxtREFkQTtBQWVBLEtBdkNBO0FBd0NBLGVBeENBLHlCQXdDQTtBQUNBLG9CQURBLEdBQ0EsTUFEQTtBQUVBO0FBQ0Esc0NBREE7QUFFQTtBQUNBLDJDQURBO0FBRUEsa0NBRkE7QUFHQSxrQ0FIQTtBQUlBO0FBQ0Esb0NBREE7QUFFQSxvQ0FGQSxFQUpBLEVBRkEsR0FGQSxTQUVBLElBRkE7Ozs7QUFjQSxxREFkQTtBQWVBLEtBdkRBO0FBd0RBLGFBeERBLHFCQXdEQSxJQXhEQSxFQXdEQSxHQXhEQSxFQXdEQSxFQXhEQSxFQXdEQSxJQXhEQSxFQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBREE7O0FBR0EsT0FMQSxNQUtBO0FBQ0E7QUFDQSw0RUFEQTs7QUFHQTs7QUFFQSxLQXJFQTtBQXNFQSxxQkF0RUEsNkJBc0VBLEdBdEVBLEVBc0VBO0FBQ0E7QUFDQSw4Q0FEQTtBQUVBLGlFQUZBOztBQUlBLEtBM0VBO0FBNEVBLG1CQTVFQSwyQkE0RUEsR0E1RUEsRUE0RUE7QUFDQTtBQUNBLDhDQURBO0FBRUEsb0NBRkE7O0FBSUEsS0FqRkEsRUF2QkEsRTs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUFBO0FBQUE7QUFBQTtBQUE2N0MsQ0FBZ0IsODRDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBajlDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvY2VudGVyL2NlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NlbnRlci9jZW50ZXIudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2VudGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmMxYTQyNiZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NlbnRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NlbnRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2VudGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmYzFhNDI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZmMxYTQyNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jZW50ZXIvY2VudGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2VudGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmMxYTQyNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2VudGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NlbnRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiIHYtc2hvdz1cIiFsb2FkU2hvd1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInZ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIHUtZmxleCB1LXJvdy1sZWZ0IHUtcC1sLTQwXCIgOnN0eWxlPVwie21hcmdpblRvcDogbWVudUJ1dHRvbkluZm8udG9wKydweCd9XCJcclxuXHRcdFx0XHRcdHYtaWY9XCIhaG9tZVRvcCB8fCBzY3JvbGxUb3AgPD0gaG9tZVRvcCAtIChtZW51QnV0dG9uSW5mby50b3AgKyAzMCArIDE1KVwiPlxyXG5cdFx0XHRcdFx0PHRleHQ+PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHUtaWNvbiBjbGFzcz1cInUtcC1sLTE1IGZlbnhpYW5nXCIgbmFtZT1cIi9zdGF0aWMvaWNvbi9zaGFyZS5wbmdcIiBzaXplPVwiNDBcIj48L3UtaWNvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwic2hhcmVcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDIwcnB4O2xlZnQ6IDIwcnB4O3dpZHRoOiA1MHJweDtoZWlnaHQ6IDUwcnB4O29wYWNpdHk6IDA7XCI+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaCB1LWZsZXggdS1yb3ctbGVmdFwiIEBjbGljaz1cInNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vc2VhcmNoLnBuZ1wiIHNpemU9XCIzNlwiPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInUtcC1sLTE1XCI+5pCc57Si5L2g5oOz6KaB55qE5aOB57q4PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyB2LWVsc2U+XHJcblx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXggc3R5bGU9XCJoZWlnaHQ6IDEwMHJweDtcIiA6c2Nyb2xsLWludG8tdmlldz1cInJvbGxkaXN0YW5jZVwiXHJcblx0XHRcdFx0XHRcdDpzY3JvbGwtd2l0aC1hbmltYXRpb249XCJ0cnVlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnQgdS1wLXQtMjAgdS1wLWItMjBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIGlkPVwiYWt1bjFcIiBzdHlsZT1cInBhZGRpbmc6IDAgMTZycHg7XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2Nyb2xsLXZpZXctaXRlbSB0YWdzXCIgOmlkPVwiJ2FrdW4nKyhpbmRleCsxKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJjYXRlU3RhdGljPT1pdGVtLnR5cGU/J3RhZy1hY3RpdmUnOicnXCJcclxuXHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cImNhdGVDbGljayhpdGVtLnR5cGUsaXRlbS5tb3JlLCdha3VuJysoaW5kZXgrMikpXCJcclxuXHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNhdGVMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0ubmFtZX19XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJ3aWR0aDogNDBycHg7XCI+44WkPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpdjNcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXYyXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGl2MVwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIDpzdHlsZT1cInttYXJnaW5Ub3A6ICdjYWxjKCcrbWVudUJ1dHRvbkluZm8udG9wKydweCArIDcwcnB4ICsgNDVycHggKyAyNHJweCknfVwiPjwvdmlldz5cclxuXHRcdFx0PCEtLTx2aWV3IGNsYXNzPVwicmFua2luZyB1LXAtbC00MCB1LXAtdC0yMCB1LXAtci00MCB1LWZsZXggdS1yb3ctbGVmdFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiIHUtZmxleC1jb2wgdS1jb2wtY2VudGVyIHUtcm93LWNlbnRlclwiIGhvdmVyLWNsYXNzPVwiY2F0ZS1hY3RpdmVcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiIEBjbGljaz1cImxpc3RDbGljaygncmFua2luZycsJycsJ2hvdCcpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPueDremXqOamnDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mb250LTEwIHUtcC10LTEwIGVuZ1wiPkhvdCBkb3dubG9hZDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1mbGV4LWNvbCB1LWNvbC1jZW50ZXIgdS1yb3ctY2VudGVyXCIgaG92ZXItY2xhc3M9XCJjYXRlLWFjdGl2ZVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCIgQGNsaWNrPVwibGlzdENsaWNrKCdyYW5raW5nJywnJywnemFuJylcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+54K56LWe5qacPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTAgdS1wLXQtMTAgZW5nXCI+TGlrZSByYW5raW5nPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYiB1LWZsZXgtY29sIHUtY29sLWNlbnRlciB1LXJvdy1jZW50ZXJcIiBob3Zlci1jbGFzcz1cImNhdGUtYWN0aXZlXCIgaG92ZXItc3RheS10aW1lPVwiNTBcIiBAY2xpY2s9XCJsaXN0Q2xpY2soJ3JhbmtpbmcnLCcnLCdjb2xsJylcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+5pS26JeP5qacPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTAgdS1wLXQtMTAgZW5nXCI+Q29sbGVjdGlvbiByYW5raW5nPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8YWQtY3VzdG9tIHVuaXQtaWQ9XCJhZHVuaXQtOGFiYTM3MDJlYWE0ODA0ZlwiPjwvYWQtY3VzdG9tPi0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3MgdS1wLWwtNDAgdS1wLXQtNDAgdS1wLXItMzBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZm9udC0xOFwiPueDremXqOagh+etvjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1sZWZ0IHUtZmxleC13cmFwIHUtcC10LTMwXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhZ1wiIEBjbGljaz1cImxpc3RDbGljaygndGFncycsJycsaXRlbS5uYW1lKVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB6b2RpYWNMaXN0XCJcclxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWdzIHUtcC1sLTQwIHUtcC10LTQwIHUtcC1yLTMwXCI+XHJcblx0XHRcdFx0PGFkIHVuaXQtaWQ9XCJhZHVuaXQtYTdmNWI4YTJlZGQwYTU1MlwiPjwvYWQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlZ29yeSB1LXAtbC0zMCB1LXAtdC00MCB1LXAtci0zMFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mb250LTE4IHUtcC1sLTEwXCI+5aOB57q45YiG57G7PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnQgdS1mbGV4LXdyYXAgdS1wLXQtMzBcIj5cclxuXHRcdFx0XHRcdDwhLS0gIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlXCIgQGNsaWNrPVwibGlzdENsaWNrKCdjYXRlZ29yeScsaW5kZXgsaXRlbS5faWQsaXRlbSlcIiB2LWlmPVwiaW5kZXg9PTAgJiYgcmV2aWV3ZWRcIlxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2F0ZWdvcnlMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiXCIgOnNyYz1cIml0ZW0uaW1hZ2VcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dHNcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjYXRlXCIgQGNsaWNrPVwibGlzdENsaWNrKCdjYXRlZ29yeScsaW5kZXgsaXRlbS5faWQsaXRlbSlcIiB2LWlmPVwiaW5kZXg+MFwiXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXRlZ29yeUxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRzXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogMTgwcnB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZ19wYWdlXCIgdi1zaG93PVwibG9hZFNob3dcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvbG9hZGluZy9sb2FkaW5nLmdpZlwiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBAY2xpY2s9XCJzZWFyY2hcIiBjbGFzcz1cImJhY2sgYmFja1NlYXJjaCB1LWZsZXggdS1mbGV4LWNvbCB1LXJvdy1jZW50ZXIgdS1jb2wtY2VudGVyXCJcclxuXHRcdFx0OmNsYXNzPVwiYmFja1Nob3c/J2JhY2tUb3Bfc2hvdyc6J2JhY2tUb3BfaGlkZSdcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvc2VhcmNoLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDMwcnB4O2hlaWdodDogMzBycHg7XCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdDxmb28tYmFyIEB0b0luZGV4PVwidG9JbmRleFwiIDpob21lPVwiMVwiPjwvZm9vLWJhcj5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0bGV0IG1lbnVCdXR0b25JbmZvID0ge307XHJcblx0Ly8g5aaC5p6c5piv5bCP56iL5bqP77yM6I635Y+W5Y+z5LiK6KeS6IO25ZuK55qE5bC65a+45L+h5oGv77yM6YG/5YWN5a+86Iiq5qCP5Y+z5L6n5YaF5a655LiO6IO25ZuK6YeN5Y+gKOaUr+S7mOWuneWwj+eoi+W6j+mdnuacrEFQSe+8jOWwmuacquWFvOWuuSlcclxuXHQvLyAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLUJBSURVIHx8IE1QLVRPVVRJQU8gfHwgTVAtUVFcclxuXHRtZW51QnV0dG9uSW5mbyA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0Ly8gI2VuZGlmXHJcblxyXG5cdGltcG9ydCBmb29CYXIgZnJvbSAnQC9jb21wb25lbnRzL2Zvb0Jhci9mb29CYXIudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Zm9vQmFyXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRtZW51QnV0dG9uSW5mbzogbWVudUJ1dHRvbkluZm8sXHJcblx0XHRcdFx0bG9hZFNob3c6IHRydWUsXHJcblx0XHRcdFx0Ly8g5YiG57G76aG15pWw5o2uXHJcblx0XHRcdFx0em9kaWFjTGlzdDogW10sXHJcblx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBbXSxcclxuXHRcdFx0XHRyZXZpZXdlZDp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMucmV2aWV3ZWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2Jvb2xlYW4nKVxyXG5cdFx0XHQvLyB1bmkuaGlkZVRhYkJhcigpXHJcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRhd2FpdCB0aGF0LmdldFpvZGlhY0xpc3QoKVxyXG5cdFx0XHRhd2FpdCB0aGF0LmdldENhdGVMaXN0KClcclxuXHRcdFx0dGhhdC5sb2FkU2hvdyA9IGZhbHNlXHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXN5bmMgdG9JbmRleChpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuXHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvZmluZC9maW5kJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcclxuXHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdXNlci91c2VyJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaQnOe0olxyXG5cdFx0XHRhc3luYyBzZWFyY2goKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3NlYXJjaC9zZWFyY2gnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YiG57G7XHJcblx0XHRcdGFzeW5jIGdldFpvZGlhY0xpc3QoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGxpc3QgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ3F1ZXJ5X2xpc3QnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IFwid3hfdGFnc1wiLFxyXG5cdFx0XHRcdFx0XHRvcmRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiAndGltZScsXHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiYXNjXCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0cGFnZUluZGV4OiAxLFxyXG5cdFx0XHRcdFx0XHRwYWdlU2l6ZTogMTBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGF0LnpvZGlhY0xpc3QgPSBsaXN0LnJlc3VsdC5kYXRhXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldENhdGVMaXN0KCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBsaXN0ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9saXN0JyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZGJOYW1lOiBcInd4X2NhdGVnb3J5XCIsXHJcblx0XHRcdFx0XHRcdHBhZ2VJbmRleDogMSxcclxuXHRcdFx0XHRcdFx0cGFnZVNpemU6IDIwLFxyXG5cdFx0XHRcdFx0XHRvcmRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICdzb3J0JyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZGVzYydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhhdC5jYXRlZ29yeUxpc3QgPSBsaXN0LnJlc3VsdC5kYXRhXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpc3RDbGljayh0eXBlLCBwaWQsIGlkLCBpdGVtKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2l0ZW0uc3RhcnQnLCBpdGVtLnN0YXJ0KVxyXG5cdFx0XHRcdGlmIChpdGVtLnN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCcxMScpXHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9kZXRhaWwvdmlkZW8/dHlwZT0nICsgdHlwZSArICcmcGlkPScgKyBwaWQgKyAnJmlkPScgKyBpZFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbGlzdC9saXN0P3R5cGU9JyArIHR5cGUgKyAnJnBpZD0nICsgcGlkICsgJyZpZD0nICsgaWRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0b25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn57K+6YCJ5omL5py65aOB57q444CB5Yqo5ryr5LqM5qyh5YWD5aOB57q444CB5piO5pif5Yib5oSP5r2u5Zu+44CB5oqW6Z+z572R57qi5aOB57q4ficsXHJcblx0XHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2NlbnRlci9jZW50ZXI/dXNlcklkPScgKyB0aGlzLnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uU2hhcmVUaW1lbGluZShyZXMpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnsr7pgInmiYvmnLrlo4HnurjjgIHliqjmvKvkuozmrKHlhYPlo4HnurjjgIHmmI7mmJ/liJvmhI/mva7lm77jgIHmipbpn7PnvZHnuqLlo4Hnurh+JyxcclxuXHRcdFx0XHRcdHBhdGg6ICcvcGFnZXMvY2VudGVyL2NlbnRlcidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC52dG9wIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMHB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZiODIxIDAsICNmZmNkMzMgNDUlLCAjZmZkODMzKTtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdGhlaWdodDogMTUlO1xyXG5cclxuXHRcdC50aXRsZSB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0Y29sb3I6ICMzMDMwMzA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5mZW54aWFuZyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMjBycHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5zZWFyY2gge1xyXG5cdFx0XHR3aWR0aDogNTUlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjRjNGNEY1O1xyXG5cdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDIwcnB4IDIwcnB4IDIwcnB4IDIwcnB4O1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDIwcnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAxcHg7XHJcblxyXG5cdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRjb2xvcjogI2E2YTdhODtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuZGl2MSB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuZGl2MiB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdHdpZHRoOiA5MiU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmZiMDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRcdGxlZnQ6IDQlO1xyXG5cdFx0XHRyaWdodDogNiU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmRpdjMge1xyXG5cdFx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0XHR3aWR0aDogODglO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmNTk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMTBweDtcclxuXHRcdFx0bGVmdDogNiU7XHJcblx0XHRcdHJpZ2h0OiA4JTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5yYW5raW5nIHtcclxuXHRcdC50YWIge1xyXG5cdFx0XHR3aWR0aDogMjI1cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7XHJcblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuXHRcdFx0LmVuZyB7XHJcblx0XHRcdFx0Y29sb3I6ICNGNUY1RjU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQudGFiOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4YWNmYWYsICM1RkJCOTIsICM1RkJCOTIsICM4YWNmYWYpO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC50YWI6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2YwZDM1YywgI0YwQjM0NywgI0YwQjM0NywgI2YwZDM1Yyk7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRhYjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOGM5OWRlLCAjODM2QUYwLCAjODM2QUYwLCAjOGM5OWRlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC50YWdzIHtcclxuXHRcdC50YWcge1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGNUY2Rjg7XHJcblx0XHRcdGNvbG9yOiAjOTA5Mzk5O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdFx0XHR3aWR0aDogYXV0bztcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMnJweDtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkOWYyZmI7XHJcblx0XHRcdGNvbG9yOiAjMWFhOWZiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50YWc6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q5ZmNkYTtcclxuXHRcdFx0Y29sb3I6ICMzYWIxNGE7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRhZzpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2QwO1xyXG5cdFx0XHRjb2xvcjogI2Y2N2MyMztcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCg0KSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGNiZmY7XHJcblx0XHRcdGNvbG9yOiAjYTEyM2RiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50YWc6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2JiZjFmMjtcclxuXHRcdFx0Y29sb3I6ICMwNDgzOWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRhZzpudGgtY2hpbGQoNikge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZWRlO1xyXG5cdFx0XHRjb2xvcjogI2U4NGY0ZjtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCg3KSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkOWZjZGE7XHJcblx0XHRcdGNvbG9yOiAjM2FiMTRhO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50YWc6bnRoLWNoaWxkKDgpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q5ZjJmYjtcclxuXHRcdFx0Y29sb3I6ICMxYWE5ZmI7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRhZzpudGgtY2hpbGQoOSkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZWRlO1xyXG5cdFx0XHRjb2xvcjogI2U4NGY0ZjtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxMCkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhjYmZmO1xyXG5cdFx0XHRjb2xvcjogI2ExMjNkYjtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxMSkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2QwO1xyXG5cdFx0XHRjb2xvcjogI2Y2N2MyMztcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxMikge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJmMWYyO1xyXG5cdFx0XHRjb2xvcjogIzA0ODM5ZDtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxMykge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJmMWYyO1xyXG5cdFx0XHRjb2xvcjogIzNhYjE0YTtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxNCkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZWRlO1xyXG5cdFx0XHRjb2xvcjogI2U4NGY0ZjtcclxuXHRcdH1cclxuXHJcblx0XHQudGFnOm50aC1jaGlsZCgxNSkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmY2RhO1xyXG5cdFx0XHRjb2xvcjogIzNhYjE0YTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQuY2F0ZWdvcnkge1xyXG5cdFx0LmNhdGUge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblxyXG5cdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6IDMyNXJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnRleHRzIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0Ym90dG9tOiAyMHJweDtcclxuXHRcdFx0XHRsZWZ0OiAyMHJweDtcclxuXHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNhdGUtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2VudGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmYzFhNDI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jZW50ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZjMWE0MjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NTUyOTY2NTcwNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9