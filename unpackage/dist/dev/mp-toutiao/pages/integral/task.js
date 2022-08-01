(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/integral/task"],{

/***/ 102:
/*!************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fintegral%2Ftask"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _task = _interopRequireDefault(__webpack_require__(/*! ./pages/integral/task.vue */ 103));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_task.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 103:
/*!*****************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/integral/task.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.vue?vue&type=template&id=86e89742& */ 104);
/* harmony import */ var _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.vue?vue&type=script&lang=js& */ 106);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.vue?vue&type=style&index=0&lang=scss& */ 108);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["render"],
  _task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/integral/task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/*!************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=template&id=86e89742& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=template&id=86e89742& */ 105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_86e89742___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 105:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=template&id=86e89742& ***!
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
    uNavbar: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 421))
    },
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

/***/ 106:
/*!******************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=script&lang=js& */ 107);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userIntegral: 0,
      signIntegral: 0,
      inviteIntegral: 0,
      adIntegral: 0,
      chargeShow: false,
      cashShow: false,
      loadShow: true
      //adUnitId: '0'
    };
  },
  onLoad: function onLoad() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                _this.getConfig());case 2:
              _this.loadShow = false;case 3:case "end":return _context.stop();}}}, _callee);}))();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              _this2.getUser();case 1:case "end":return _context2.stop();}}}, _callee2);}))();
  },
  methods: _defineProperty({
    getUser: function getUser() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that, detail;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = _this3;_context3.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_map',
                    data: {
                      dbName: 'wx_user',
                      id: that.vuex_user._id } }));case 3:detail = _context3.sent;


                that.userIntegral = detail.result.integral;case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    getConfig: function getConfig() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, config;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this4;
                config = {};_context4.next = 4;return (
                  uniCloud.callFunction({
                    name: 'config_map',
                    data: {
                      keys: ['signIntegral', 'inviteIntegral', 'adIntegral', 'chargeShow', 'adUnitId'] } }));case 4:config = _context4.sent;


                if (config.result.success) {
                  that.signIntegral = parseInt(config.result.data[0]);
                  that.inviteIntegral = parseInt(config.result.data[1]);
                  that.adIntegral = parseInt(config.result.data[2]);
                  that.chargeShow = config.result.data[3];
                  that.adUnitId = config.result.data[4];
                }case 6:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    signClick: function signClick() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var that, sign;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = _this5;if (
                that.vuex_user) {_context5.next = 4;break;}
                that.loginShow = true;return _context5.abrupt("return");case 4:if (!


                that.isSign) {_context5.next = 6;break;}return _context5.abrupt("return");case 6:

                uni.showLoading({
                  mask: true,
                  title: '签到中...' });_context5.next = 9;return (

                  uniCloud.callFunction({
                    name: 'sign_add',
                    data: {
                      "userId": that.vuex_user._id } }));case 9:sign = _context5.sent;


                uni.hideLoading();
                if (sign.result.success) {
                  that.getUser();
                  that.signTitle = "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" + sign.result.integral + "</span>积分</p>";
                  that.signShow = true;
                  that.isSign = true;
                } else {
                  uni.showToast({
                    icon: 'none',
                    mask: true,
                    title: sign.result.msg,
                    duration: 1500 });

                }case 12:case "end":return _context5.stop();}}}, _callee5);}))();
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
          console.log('videoAd onError', err);
        });
        // 监听关闭
        videoAd.onClose(function (status) {
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
    charge: function charge() {
      uni.navigateTo({
        url: '/pages/integral/charge' });

    },
    cash: function cash() {
      uni.navigateTo({
        url: '/pages/integral/cash' });

    } }, "adClick", function adClick()
  {
    var videoAd = null;
    if (wx.createRewardedVideoAd) {
      // 加载激励视频广告
      videoAd = wx.createRewardedVideoAd({
        adUnitId: this.adUnitId });

      //捕捉错误
      videoAd.onError(function (err) {
        // 进行适当的提示
        console.log('videoAd onError', res);
      });
      // 监听关闭
      videoAd.onClose(function (status) {
        if (status && status.isEnded || status === undefined) {
          // 正常播放结束，下发奖励
          // continue you code
        } else {
            // 播放中途退出，进行提示
          }
      });
    }
  }),

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '我等风也等你，近听水无声~',
      path: '/pages/index/index?userId=' + this.vuex_user._id };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 108:
/*!***************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=style&index=0&lang=scss& */ 109);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 109:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/integral/task.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[102,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9pbnRlZ3JhbC90YXNrLnZ1ZT82YmM4Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ludGVncmFsL3Rhc2sudnVlPzAyNzAiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvaW50ZWdyYWwvdGFzay52dWU/YzNmNyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9pbnRlZ3JhbC90YXNrLnZ1ZT82YWIzIiwidW5pLWFwcDovLy9wYWdlcy9pbnRlZ3JhbC90YXNrLnZ1ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9pbnRlZ3JhbC90YXNrLnZ1ZT85NTA4Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ludGVncmFsL3Rhc2sudnVlPzRkMjEiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLDhGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQ2pIO0FBQ3dEO0FBQ0w7QUFDYzs7O0FBR2pFO0FBQ2tNO0FBQ2xNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbU5BRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHVNQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBNHZCLENBQWdCLHl3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwRGh4QjtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEscUJBRkE7QUFHQSx1QkFIQTtBQUlBLG1CQUpBO0FBS0EsdUJBTEE7QUFNQSxxQkFOQTtBQU9BO0FBQ0E7QUFSQTtBQVVBLEdBWkE7QUFhQSxRQWJBLG9CQWFBO0FBQ0EsaUNBREE7QUFFQSxxQ0FGQTtBQUdBLEdBaEJBO0FBaUJBLFFBakJBLG9CQWlCQTtBQUNBLCtCQURBO0FBRUEsR0FuQkE7QUFvQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0Esb0JBREEsR0FDQSxNQURBO0FBRUE7QUFDQSxxQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSw0Q0FGQSxFQUZBLEdBRkEsU0FFQSxNQUZBOzs7QUFTQSwyREFUQTtBQVVBLEtBWEE7QUFZQSxhQVpBLHVCQVlBO0FBQ0Esb0JBREEsR0FDQSxNQURBO0FBRUEsc0JBRkEsR0FFQSxFQUZBO0FBR0E7QUFDQSxzQ0FEQTtBQUVBO0FBQ0Esc0dBREEsRUFGQSxHQUhBLFNBR0EsTUFIQTs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBZkE7QUFnQkEsS0E1QkE7QUE2QkEsYUE3QkEsdUJBNkJBO0FBQ0Esb0JBREEsR0FDQSxNQURBO0FBRUEsOEJBRkE7QUFHQSxzQ0FIQTs7O0FBTUEsMkJBTkE7O0FBUUE7QUFDQSw0QkFEQTtBQUVBLGlDQUZBLElBUkE7O0FBWUE7QUFDQSxvQ0FEQTtBQUVBO0FBQ0Esa0RBREEsRUFGQSxHQVpBLFNBWUEsSUFaQTs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUxBLE1BS0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsOEJBRkE7QUFHQSwwQ0FIQTtBQUlBLGtDQUpBOztBQU1BLGlCQS9CQTtBQWdDQSxLQTdEQTtBQThEQSxXQTlEQSxxQkE4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBM0VBO0FBNEVBLFVBNUVBLG9CQTRFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7QUFXQTtBQUNBLEtBNUdBO0FBNkdBLFVBN0dBLG9CQTZHQTtBQUNBO0FBQ0EscUNBREE7O0FBR0EsS0FqSEE7QUFrSEEsUUFsSEEsa0JBa0hBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQSxLQXRIQTtBQXVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxPQVBBO0FBUUE7QUFDQSxHQTdJQSxDQXBCQTs7QUFtS0EsbUJBbktBLDZCQW1LQSxHQW5LQSxFQW1LQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSw2REFGQTs7QUFJQSxHQXhLQSxFOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQW02QyxDQUFnQixvM0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F2N0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9pbnRlZ3JhbC90YXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvaW50ZWdyYWwvdGFzay52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90YXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NmU4OTc0MiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YXNrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW50ZWdyYWwvdGFzay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2ZTg5NzQyJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdU5hdmJhcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1uYXZiYXIvdS1uYXZiYXJcIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LW5hdmJhci91LW5hdmJhci52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJcIiB2LXNob3c9XCIhbG9hZFNob3dcIj5cclxuXHRcdFx0PHUtbmF2YmFyIDppcy1iYWNrPVwidHJ1ZVwiIHRpdGxlPVwi56ev5YiG5Lu75YqhXCIgdGl0bGUtd2lkdGg9XCIzMjVcIiB0aXRsZS1jb2xvcj1cIiMzMzMzMzNcIiB0aXRsZS1zaXplPVwiMjhcIiA6Ym9yZGVyLWJvdHRvbT1cImZhbHNlXCI+PC91LW5hdmJhcj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gdS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXIgdS1wLXQtMjBcIj48aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ljb24vamluYmkucG5nXCI+PC9pbWFnZT48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrYXBpYW4gdS1mbGV4LWNvbCB1LXJvdy1jZW50ZXIgdS1jb2wtY2VudGVyIHUtcC10LTMwXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInByaWNlXCI+e3sgdXNlckludGVncmFsIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzaHVvbSB1LWZvbnQtMTIgdS10aXBzLWNvbG9yIHUtcC10LTEwXCI+5b2T5YmN5Y+v55So56ev5YiGPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTQwIHUtcC1yLTQwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTggdS1tLXQtODAgdS1tLWItMzAgdGl0bGVcIj7np6/liIbku7vliqE8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzYWZlLWFyZWEtaW5zZXQtYm90dG9tXCI+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1mbGV4IHUtcm93LWJldHdlZW4gdS1jb2wtY2VudGVyIGJvcmRlci1ib3R0b20gdS1wLXQtMzAgdS1wLWItMzBcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdCB1LWNvbC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gdS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIj48dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vdXNlcjIucG5nXCIgc2l6ZT1cIjQ2XCI+PC91LWljb24+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjAgdS1wLXQtMTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+5q+P5pel562+5YiwPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTIgdS1saWdodC1jb2xvclwiPit7eyBzaWduSW50ZWdyYWwgfX3np6/liIYv5aSpPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIGhvdmVyLWNsYXNzPVwiaG92ZXItY2xhc3NcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiIEBjbGljaz1cInNpZ25DbGlja1wiPuWOu+etvuWIsDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiIHUtZmxleCB1LXJvdy1iZXR3ZWVuIHUtY29sLWNlbnRlciBib3JkZXItYm90dG9tIHUtcC10LTMwIHUtcC1iLTMwXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnQgdS1jb2wtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uIHUtZmxleCB1LXJvdy1jZW50ZXIgdS1jb2wtY2VudGVyXCI+PHUtaWNvbiBuYW1lPVwiL3N0YXRpYy9pY29uL3VzZXIxLnBuZ1wiIHNpemU9XCI0NlwiPjwvdS1pY29uPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwIHUtcC10LTEwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPumCgOivt+WlveWPizwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mb250LTEyIHUtbGlnaHQtY29sb3JcIj4re3sgaW52aXRlSW50ZWdyYWwgfX3np6/liIYv5L2NPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIGhvdmVyLWNsYXNzPVwiaG92ZXItY2xhc3NcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiPlxyXG5cdFx0XHRcdFx0XHRcdOWOu+mCgOivt1xyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwic2hhcmVcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7bGVmdDogMDt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7b3BhY2l0eTogMDtcIj48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1mbGV4IHUtcm93LWJldHdlZW4gdS1jb2wtY2VudGVyIGJvcmRlci1ib3R0b20gdS1wLXQtMzAgdS1wLWItMzBcIiB2LWlmPVwiYWRVbml0SWRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdCB1LWNvbC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gdS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIj48dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vdmlkZW8ucG5nXCIgc2l6ZT1cIjQ2XCI+PC91LWljb24+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjAgdS1wLXQtMTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+55yL5bm/5ZGKPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTIgdS1saWdodC1jb2xvclwiPit7eyBhZEludGVncmFsIH1956ev5YiGL+asoTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIiBob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzXCIgaG92ZXItc3RheS10aW1lPVwiNTBcIiBAY2xpY2s9XCJhZENsaWNrXCI+5Y676KeC55yLPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTIgdS1saWdodC1jb2xvciB1LXRleHQtY2VudGVyIHUtcC10LTQwXCI+5pu05aSa5Lu75Yqh5pWs6K+35pyf5b6Ffjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGFkIHVuaXQtaWQ9XCJhZHVuaXQtODA2NzAyZGU4MDRhOTIxZFwiIGFkLXR5cGU9XCJ2aWRlb1wiIGFkLXRoZW1lPVwid2hpdGVcIj48L2FkPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmdfcGFnZVwiIHYtc2hvdz1cImxvYWRTaG93XCI+PGltYWdlIHNyYz1cIi9zdGF0aWMvbG9hZGluZy9sb2FkaW5nLmdpZlwiPjwvaW1hZ2U+PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dXNlckludGVncmFsOiAwLFxyXG5cdFx0XHRzaWduSW50ZWdyYWw6IDAsXHJcblx0XHRcdGludml0ZUludGVncmFsOiAwLFxyXG5cdFx0XHRhZEludGVncmFsOiAwLFxyXG5cdFx0XHRjaGFyZ2VTaG93OiBmYWxzZSxcclxuXHRcdFx0Y2FzaFNob3c6IGZhbHNlLFxyXG5cdFx0XHRsb2FkU2hvdzogdHJ1ZSxcclxuXHRcdFx0Ly9hZFVuaXRJZDogJzAnXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0YXN5bmMgb25Mb2FkKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRDb25maWcoKTtcclxuXHRcdHRoaXMubG9hZFNob3cgPSBmYWxzZTtcclxuXHR9LFxyXG5cdGFzeW5jIG9uU2hvdygpIHtcclxuXHRcdHRoaXMuZ2V0VXNlcigpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0YXN5bmMgZ2V0VXNlcigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRsZXQgZGV0YWlsID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRuYW1lOiAncXVlcnlfbWFwJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRkYk5hbWU6ICd3eF91c2VyJyxcclxuXHRcdFx0XHRcdGlkOiB0aGF0LnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGF0LnVzZXJJbnRlZ3JhbCA9IGRldGFpbC5yZXN1bHQuaW50ZWdyYWw7XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgZ2V0Q29uZmlnKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdGxldCBjb25maWcgPSB7fTtcclxuXHRcdFx0Y29uZmlnID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRuYW1lOiAnY29uZmlnX21hcCcsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0a2V5czogWydzaWduSW50ZWdyYWwnLCAnaW52aXRlSW50ZWdyYWwnLCAnYWRJbnRlZ3JhbCcsICdjaGFyZ2VTaG93JywgJ2FkVW5pdElkJ11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAoY29uZmlnLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0dGhhdC5zaWduSW50ZWdyYWwgPSBwYXJzZUludChjb25maWcucmVzdWx0LmRhdGFbMF0pXHJcblx0XHRcdFx0dGhhdC5pbnZpdGVJbnRlZ3JhbCA9IHBhcnNlSW50KGNvbmZpZy5yZXN1bHQuZGF0YVsxXSlcclxuXHRcdFx0XHR0aGF0LmFkSW50ZWdyYWwgPSBwYXJzZUludChjb25maWcucmVzdWx0LmRhdGFbMl0pXHJcblx0XHRcdFx0dGhhdC5jaGFyZ2VTaG93ID0gY29uZmlnLnJlc3VsdC5kYXRhWzNdXHJcblx0XHRcdFx0dGhhdC5hZFVuaXRJZCA9IGNvbmZpZy5yZXN1bHQuZGF0YVs0XVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHRhc3luYyBzaWduQ2xpY2soKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZighdGhhdC52dWV4X3VzZXIpe1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYodGhhdC5pc1NpZ24pIHJldHVyblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfnrb7liLDkuK0uLi4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRsZXQgc2lnbiA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAnc2lnbl9hZGQnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcInVzZXJJZFwiOiB0aGF0LnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdGlmKHNpZ24ucmVzdWx0LnN1Y2Nlc3Mpe1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRVc2VyKClcclxuXHRcdFx0XHRcdHRoYXQuc2lnblRpdGxlID0gXCI8cCBzdHlsZT0nZm9udC13ZWlnaHQ6IDU1MDtmb250LXNpemU6IDE2cHg7Jz7nrb7liLDmiJDlip88L3A+PHAgc3R5bGU9J3BhZGRpbmctdG9wOiAxMHB4Oyc+6I635b6XPHNwYW4gY2xhc3M9J251bSc+XCIrc2lnbi5yZXN1bHQuaW50ZWdyYWwrXCI8L3NwYW4+56ev5YiGPC9wPlwiXHJcblx0XHRcdFx0XHR0aGF0LnNpZ25TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0dGhhdC5pc1NpZ24gPSB0cnVlXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogc2lnbi5yZXN1bHQubXNnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkQ2xpY2soKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRpZighdGhhdC52dWV4X3VzZXIpe1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHZpZGVvQWQpIHtcclxuXHRcdFx0XHRcdHZpZGVvQWQuc2hvdygpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0XHQvLyDlpLHotKXph43or5VcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5bm/5ZGK5ouJ5Y675aSx6LSlXCIpXHJcblx0XHRcdFx0XHR2aWRlb0FkLmxvYWQoKS50aGVuKCgpID0+IHZpZGVvQWQuc2hvdygpKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkTG9hZCgpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmICh3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQpIHtcclxuXHRcdFx0XHRcdC8vIOWKoOi9vea/gOWKseinhumikeW5v+WRilxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVFRXHJcblx0XHRcdFx0XHR2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuXHRcdFx0XHRcdFx0YWRVbml0SWQ6IFwie3sgcXFleGNpdGF0aW9uIH19XCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHR2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuXHRcdFx0XHRcdFx0YWRVbml0SWQ6IFwiYWR1bml0LTRlMDAwYWMzNDkzNTBiMWRcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8v5o2V5o2J6ZSZ6K+vXHJcblx0XHRcdFx0XHR2aWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g6L+b6KGM6YCC5b2T55qE5o+Q56S6XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2aWRlb0FkIG9uRXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyDnm5HlkKzlhbPpl61cclxuXHRcdFx0XHRcdHZpZGVvQWQub25DbG9zZShzdGF0dXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoKHN0YXR1cyAmJiBzdGF0dXMuaXNFbmRlZCkgfHwgc3RhdHVzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzkuIvlj5HlpZblirFcclxuXHRcdFx0XHRcdFx0XHRpZih0aGF0LnZ1ZXhfdXNlcil7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnVzZXJJbnRlZ3JhbCgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOi/m+ihjOaPkOekulxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfkuK3pgJTpgIDlh7onKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRjaGFyZ2UoKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHR1cmw6ICcvcGFnZXMvaW50ZWdyYWwvY2hhcmdlJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjYXNoKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2ludGVncmFsL2Nhc2gnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGFkQ2xpY2soKSB7XHJcblx0XHRcdHZhciB2aWRlb0FkID0gbnVsbDtcclxuXHRcdFx0aWYgKHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCkge1xyXG5cdFx0XHRcdC8vIOWKoOi9vea/gOWKseinhumikeW5v+WRilxyXG5cdFx0XHRcdHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0YWRVbml0SWQ6IHRoaXMuYWRVbml0SWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvL+aNleaNiemUmeivr1xyXG5cdFx0XHRcdHZpZGVvQWQub25FcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6L+b6KGM6YCC5b2T55qE5o+Q56S6XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmlkZW9BZCBvbkVycm9yJywgcmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyDnm5HlkKzlhbPpl61cclxuXHRcdFx0XHR2aWRlb0FkLm9uQ2xvc2Uoc3RhdHVzID0+IHtcclxuXHRcdFx0XHRcdGlmICgoc3RhdHVzICYmIHN0YXR1cy5pc0VuZGVkKSB8fCBzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHQvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzkuIvlj5HlpZblirFcclxuXHRcdFx0XHRcdFx0Ly8gY29udGludWUgeW91IGNvZGVcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOi/m+ihjOaPkOekulxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRpdGxlOiAn5oiR562J6aOO5Lmf562J5L2g77yM6L+R5ZCs5rC05peg5aOwficsXHJcblx0XHRcdHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXg/dXNlcklkPScgKyB0aGlzLnZ1ZXhfdXNlci5faWRcclxuXHRcdH07XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4udG9wIHtcclxuXHRpbWFnZSB7XHJcblx0XHR3aWR0aDogMTIwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMjBycHg7XHJcblx0fVxyXG5cdC5rYXBpYW4ge1xyXG5cdFx0aGVpZ2h0OiAyNDBycHg7XHJcblx0XHRtYXJnaW46IC02MHJweCA0MHJweCAwIDQwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzZjYjNmZiwgIzg2NmJmMSk7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM2cnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDEwcHggMjBweCAjYTJiZWZmO1xyXG5cdFx0LnByaWNlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0fVxyXG5cdFx0LnNodW9tIHtcclxuXHRcdFx0Y29sb3I6ICNlNWU1ZTU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi50aXRsZSB7XHJcblx0Ym9yZGVyLWxlZnQ6IDZycHggc29saWQgIzY0OGFmMTtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzNHJweDtcclxuXHRjb2xvcjogIzgwODA4MDtcclxufVxyXG4udGFiIHtcclxuXHQuaWNvbiB7XHJcblx0XHR3aWR0aDogODBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogODBycHg7XHJcblx0fVxyXG5cdC5idG4ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmNmYzQ0LCAjZjhjOTNjKTtcclxuXHRcdHBhZGRpbmc6IDdweCAxNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHR9XHJcblx0LmhvdmVyLWNsYXNzIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHR9XHJcbn1cclxuLnRhYjpudGgtY2hpbGQoMSkgLmljb24ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1ZDU1MywgI2YwYjM0Nyk7XHJcbn1cclxuLnRhYjpudGgtY2hpbGQoMikgLmljb24ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg0ZDc4NywgIzVmYmI5Mik7XHJcbn1cclxuLnRhYjpudGgtY2hpbGQoMykgLmljb24ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZjYjNmZiwgIzU0NzZmMSk7XHJcbn1cclxuLnRhYjpudGgtY2hpbGQoNCkgLmljb24ge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZhN2EwOSwgI2VlNjAwMCk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTU1Mjk2NjU1NzdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==