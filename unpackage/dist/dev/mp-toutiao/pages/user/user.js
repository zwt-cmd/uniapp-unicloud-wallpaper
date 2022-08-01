(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/user"],{

/***/ 64:
/*!********************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fuser%2Fuser"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/user/user.vue */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_user.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 65:
/*!*************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/user/user.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=80842834& */ 66);
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.vue?vue&type=style&index=0&lang=scss& */ 70);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/*!********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=template&id=80842834& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=template&id=80842834& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_template_id_80842834___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 67:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=template&id=80842834& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.loginShow = false
    }

    _vm.e1 = function($event) {
      _vm.signShow = false
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 68:
/*!**************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// 获取系统状态栏的高度
var menuButtonInfo = {};
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)

menuButtonInfo = uni.getMenuButtonBoundingClientRect();var fooBar = function fooBar() {__webpack_require__.e(/*! require.ensure | components/fooBar/fooBar */ "components/fooBar/fooBar").then((function () {return resolve(__webpack_require__(/*! @/components/fooBar/fooBar.vue */ 407));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var models = function models() {__webpack_require__.e(/*! require.ensure | components/model/model */ "components/model/model").then((function () {return resolve(__webpack_require__(/*! @/components/model/model.vue */ 414));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




{
  components: {
    fooBar: fooBar,
    models: models },

  data: function data() {
    return {
      menuButtonInfo: menuButtonInfo,
      loadShow: true,
      // 签到
      isSign: false,
      signShow: false,
      signTitle: '',
      signIntegral: 0,
      inviteIntegral: 0,
      adIntegral: 0,
      // 投稿菜单显示
      writeShow: false,
      // 登录弹窗
      loginShow: false };

  },
  onLoad: function onLoad() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              uni.hideTabBar();
              that = _this;_context.next = 4;return (
                that.getConfig());case 4:
              if (that.vuex_user) {
                that.getUser();
              }
              that.loadShow = false;
              that.adLoad();case 7:case "end":return _context.stop();}}}, _callee);}))();
  },
  onShow: function onShow() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              that = _this2;
              if (that.vuex_user) {
                that.getSign();
              }case 2:case "end":return _context2.stop();}}}, _callee2);}))();
  },
  methods: {
    toIndex: function toIndex(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = _this3;
                that.index = index;
                if (index == 0) {
                  uni.switchTab({
                    url: '/pages/index/index' });

                } else if (index == 1) {
                  uni.switchTab({
                    url: '/pages/center/center' });

                } else if (index == 2) {
                  uni.switchTab({
                    url: '/pages/find/find' });

                }case 3:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    loginClick: function loginClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
    },
    signClick: function signClick() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, sign;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this4;if (
                that.vuex_user) {_context4.next = 4;break;}
                that.loginShow = true;return _context4.abrupt("return");case 4:if (!


                that.isSign) {_context4.next = 6;break;}return _context4.abrupt("return");case 6:

                uni.showLoading({
                  mask: true,
                  title: '签到中...' });_context4.next = 9;return (

                  uniCloud.callFunction({
                    name: 'sign_add',
                    data: {
                      "userId": that.vuex_user._id } }));case 9:sign = _context4.sent;


                uni.hideLoading();
                if (sign.result.success) {
                  that.getUser();
                  that.signTitle =
                  "<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>" +
                  sign.result.integral + "</span>积分</p>";
                  that.signShow = true;
                  that.isSign = true;
                } else {
                  uni.showToast({
                    icon: 'none',
                    mask: true,
                    title: sign.result.msg,
                    duration: 1500 });

                }case 12:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    recordClick: function recordClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/integral/record' });

    },
    gonggaoClick: function gonggaoClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/about/gonggao' });

    },
    taskClick: function taskClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/integral/task' });

    },

    paihangClick: function paihangClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/list/list?type=ranking&pid=&id=hot' });

    },

    modelSave: function modelSave() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      this.modelShow = false;
    },
    collectClick: function collectClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/collect/collect' });

    },
    orderClick: function orderClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/order/order' });

    },
    writeClick: function writeClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/write/write' });

    },
    exitClick: function exitClick() {
      var that = this;
      uni.showModal({
        title: '温馨提示',
        content: '确定退出当前登录账户？',
        confirmText: '退出',
        confirmColor: '#fcc600',
        success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(res) {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                    if (res.confirm) {
                      that.$u.vuex('vuex_user', '');
                      that.isSign = false;
                    }case 1:case "end":return _context5.stop();}}}, _callee5);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });


    },
    cacheClick: function cacheClick() {
      var that = this;
      uni.showModal({
        title: '温馨提示',
        content: '清除缓存后请重新登录！',
        confirmText: '确定',
        confirmColor: '#fcc600',
        success: function () {var _success2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(res) {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                    if (res.confirm) {
                      that.$u.vuex('vuex_user', '');
                      that.isSign = false;
                    }case 1:case "end":return _context6.stop();}}}, _callee6);}));function success(_x2) {return _success2.apply(this, arguments);}return success;}() });


    },
    aboutClick: function aboutClick() {
      uni.navigateTo({
        url: '/pages/about/about' });

    },
    feedClick: function feedClick() {
      if (!this.vuex_user) {
        this.loginShow = true;
        return;
      }
      uni.navigateTo({
        url: '/pages/feed/feed' });

    },
    systemClick: function systemClick() {
      uni.navigateTo({
        url: '/pages/system/system' });

    },
    getUser: function getUser() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, detail;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                that = _this5;_context7.next = 3;return (
                  uniCloud.callFunction({
                    name: 'query_map',
                    data: {
                      dbName: "wx_user",
                      id: that.vuex_user._id } }));case 3:detail = _context7.sent;


                that.$u.vuex('vuex_user', detail.result);case 5:case "end":return _context7.stop();}}}, _callee7);}))();
    },
    // 我的
    getSign: function getSign() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var that, startTime, endTime, query;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                that = _this6;
                startTime = new Date(new Date().toLocaleDateString()).getTime();
                endTime = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;_context8.next = 5;return (
                  uniCloud.callFunction({
                    name: 'sign_flag',
                    data: {
                      dbName: 'wx_sign',
                      "userId": that.vuex_user._id,
                      "startTime": startTime,
                      "endTime": endTime } }));case 5:query = _context8.sent;


                if (query.result.success) that.isSign = true;else
                that.isSign = false;case 7:case "end":return _context8.stop();}}}, _callee8);}))();
    },
    getConfig: function getConfig() {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var that, config;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                that = _this7;_context9.next = 3;return (
                  uniCloud.callFunction({
                    name: 'config_map',
                    data: {
                      'keys': ['signIntegral', 'inviteIntegral', 'adIntegral', 'writeShow'] } }));case 3:config = _context9.sent;


                if (config.result.success) {
                  that.signIntegral = parseInt(config.result.data[0]);
                  that.inviteIntegral = parseInt(config.result.data[1]);
                  that.adIntegral = parseInt(config.result.data[2]);
                  that.writeShow = config.result.data[3];
                }case 5:case "end":return _context9.stop();}}}, _callee9);}))();
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
    userIntegral: function userIntegral() {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var that, data;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                that = _this8;
                uni.showLoading({
                  mask: true,
                  title: '正在拼命加载中...' });_context10.next = 4;return (

                  uniCloud.callFunction({
                    name: 'user_integral',
                    data: {
                      userId: that.vuex_user._id } }));case 4:data = _context10.sent;


                uni.hideLoading();
                if (data.result.success) {
                  that.getUser();
                  that.signTitle =
                  "<p style='font-weight: 550;font-size: 16px;'>观看成功</p><p style='padding-top: 10px;'>获得<span class='num'>" +
                  data.result.integral + "</span>积分</p>";
                  that.signShow = true;
                }case 7:case "end":return _context10.stop();}}}, _callee10);}))();
    },


    // 登录
    getUserInfo: function getUserInfo() {
      var that = this;

      tt.getUserProfile({
        force: true,
        success: function success(res) {
          console.log("getUserInfo \u8C03\u7528\u6210\u529F ".concat(res.userInfo));
        },
        fail: function fail(err) {
          console.log(err, "getUserInfo \u8C03\u7528\u5931\u8D25");
        } });































    },
    //已经授权，自动登录
    wxlogin: function wxlogin() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var that;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                that = _this9;
                uni.showLoading({
                  title: '登录中...' });











                uni.login({
                  provider: 'toutiao',
                  success: function success(loginRes) {
                    var code = loginRes.code;
                    that.wxloginres(code);
                  } });case 3:case "end":return _context11.stop();}}}, _callee11);}))();



    },
    //登录后提交服务器获取进一步信息
    wxloginres: function wxloginres(wxcode) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var that, userId, mptype, authorize;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                that = _this10;

                userId = uni.getStorageSync('userId');









                mptype = 'tt';_context12.next = 5;return (


                  uniCloud.callFunction({
                    name: 'user_authorize',
                    data: {
                      name: that.name,
                      avatar: that.avatar,
                      mptype: mptype,
                      code: wxcode,
                      userId: userId } }));case 5:authorize = _context12.sent;if (!


                authorize.result.success) {_context12.next = 15;break;}
                that.$u.vuex('vuex_user', authorize.result.data);
                that.getUser();_context12.next = 11;return (
                  that.getSign());case 11:
                uni.showToast({
                  icon: 'none',
                  mask: true,
                  title: '登录成功',
                  duration: 1500 });

                uni.removeStorageSync('userId');_context12.next = 16;break;case 15:

                uni.showToast({
                  icon: 'none',
                  mask: true,
                  title: authorize.result.msg,
                  duration: 1500 });case 16:


                that.loginShow = false;case 17:case "end":return _context12.stop();}}}, _callee12);}))();
    },
    getLoginShow: function getLoginShow() {
      var that = this;
      that.loginShow = true;
    } },

  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '我等风也等你，近听水无声~',
      path: '/pages/index/index?userId=' + this.vuex_user._id };

  },
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: '我等风也等你，近听水无声~',
      path: '/pages/index/index' };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 70:
/*!***********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user.vue?vue&type=style&index=0&lang=scss& */ 71);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/user/user.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[64,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3VzZXIvdXNlci52dWU/YmRlOCIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy91c2VyL3VzZXIudnVlPzdiM2EiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvdXNlci91c2VyLnZ1ZT8wY2E5IiwidW5pLWFwcDovLy9wYWdlcy91c2VyL3VzZXIudnVlIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3VzZXIvdXNlci52dWU/YmNhZiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy91c2VyL3VzZXIudnVlP2U5ZWEiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLHlGLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlIO0FBQ2pIO0FBQ3dEO0FBQ0w7QUFDYzs7O0FBR2pFO0FBQ2tNO0FBQ2xNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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RUE7QUFDQTtBQUNBO0FBQ0EsbUJBTEEsSUFmQTs7OztBQXdCQSxLQTFXQTtBQTJXQTtBQUNBLGNBNVdBLHNCQTRXQSxNQTVXQSxFQTRXQTtBQUNBLG9CQURBLEdBQ0EsT0FEQTs7QUFHQSxzQkFIQSxHQUdBLDRCQUhBOzs7Ozs7Ozs7O0FBYUEsOEJBYkE7OztBQWdCQTtBQUNBLDBDQURBO0FBRUE7QUFDQSxxQ0FEQTtBQUVBLHlDQUZBO0FBR0Esb0NBSEE7QUFJQSxrQ0FKQTtBQUtBLG9DQUxBLEVBRkEsR0FoQkEsU0FnQkEsU0FoQkE7OztBQTBCQSx3Q0ExQkE7QUEyQkE7QUFDQSwrQkE1QkE7QUE2QkEsZ0NBN0JBO0FBOEJBO0FBQ0EsOEJBREE7QUFFQSw0QkFGQTtBQUdBLCtCQUhBO0FBSUEsZ0NBSkE7O0FBTUEsZ0RBcENBOztBQXNDQTtBQUNBLDhCQURBO0FBRUEsNEJBRkE7QUFHQSw2Q0FIQTtBQUlBLGdDQUpBLElBdENBOzs7QUE2Q0EsdUNBN0NBO0FBOENBLEtBMVpBO0FBMlpBLGdCQTNaQSwwQkEyWkE7QUFDQTtBQUNBO0FBQ0EsS0E5WkEsRUF0Q0E7O0FBc2NBLG1CQXRjQSw2QkFzY0EsR0F0Y0EsRUFzY0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsNkRBRkE7O0FBSUEsR0EzY0E7QUE0Y0EsaUJBNWNBLDJCQTRjQSxHQTVjQSxFQTRjQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxnQ0FGQTs7QUFJQSxHQWpkQSxFOzs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQUE7QUFBQTtBQUFBO0FBQW02QyxDQUFnQixvM0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F2N0M7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy91c2VyL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy91c2VyL3VzZXIudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODA4NDI4MzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXIvdXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwODQyODM0JlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdUljb246IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb25cIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBfdm0ubG9naW5TaG93ID0gZmFsc2VcbiAgICB9XG5cbiAgICBfdm0uZTEgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIF92bS5zaWduU2hvdyA9IGZhbHNlXG4gICAgfVxuICB9XG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiIHYtc2hvdz1cIiFsb2FkU2hvd1wiPlxyXG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7bWFyZ2luVG9wOiBtZW51QnV0dG9uSW5mby50b3AgKyAobWVudUJ1dHRvbkluZm8uYm90dG9tIC0gbWVudUJ1dHRvbkluZm8udG9wKS8yKydweCd9XCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJzIHUtZmxleCB1LXJvdy1iZXR3ZWVuIHUtY29sLWNlbnRlciB1LXAtci00MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlciB1LXAtbC00MCB1LXAtci00MCB1LWZsZXggdS1yb3ctbGVmdCB1LWNvbC1jZW50ZXJcIiBAY2xpY2s9XCJsb2dpbkNsaWNrXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJhdmF0YXJcIiA6c3JjPVwidnVleF91c2VyP3Z1ZXhfdXNlci5hdmF0YXI6Jy4uLy4uL3N0YXRpYy9tYW4uanBnJ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibmFtZSB1LWZvbnQtMThcIj57e3Z1ZXhfdXNlcj92dWV4X3VzZXIubmFtZTon55m75b2VL+azqOWGjCd9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRyIHUtbGlnaHQtY29sb3IgdS1wLXQtMTAgdS1mb250LTEyXCI+5Lq655Sf5piv5LiA5Zy66ZSZ6L+H77yM5oS/5L2g5Yir6LmJ6LeO44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpdjNcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXYyXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGl2MVwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbi10b3A6IDMxMHJweDtcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiamlmZW4gdS1mbGV4IHUtcm93LWxlZnQgdS1wLWwtMzAgdS1wLXItMzAgdS1tLXQtNTBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYiB1LWZsZXgtY29sIHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXIgdS1wLXQtNDAgdS1wLWItNDAgYm9yZGVyLWJveFwiXHJcblx0XHRcdFx0XHRob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzXCIgaG92ZXItc3RheS10aW1lPVwiNTBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiB1LWZsZXggdS1yb3ctY2VudGVyIHUtY29sLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vdXNlcjEucG5nXCIgc2l6ZT1cIjUwXCI+PC91LWljb24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIHUtbWFpbi1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj7pgoDor7flpb3lj4s8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnQgdS1saWdodC1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj4re3tpbnZpdGVJbnRlZ3JhbH1956ev5YiGL+S9jTwvdmlldz5cclxuXHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwic2hhcmVcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDA7bGVmdDogMDt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7b3BhY2l0eTogMDtcIj48L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1mbGV4LWNvbCB1LXJvdy1jZW50ZXIgdS1jb2wtY2VudGVyIHUtcC10LTQwIHUtcC1iLTQwIGJvcmRlci1ib3hcIlxyXG5cdFx0XHRcdFx0aG92ZXItY2xhc3M9XCJob3Zlci1jbGFzc1wiIGhvdmVyLXN0YXktdGltZT1cIjUwXCIgQGNsaWNrPVwic2lnbkNsaWNrXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gdS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIiA6Y2xhc3M9XCJpc1NpZ24/J2ljb25zJzonJ1wiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vdXNlcjIucG5nXCIgc2l6ZT1cIjQ2XCI+PC91LWljb24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIHUtbWFpbi1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj7mr4/ml6Xnrb7liLA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnQgdS1saWdodC1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj4re3tzaWduSW50ZWdyYWx9feenr+WIhi/lpKk8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiIHUtZmxleC1jb2wgdS1yb3ctY2VudGVyIHUtY29sLWNlbnRlciB1LXAtdC00MCB1LXAtYi00MCBib3JkZXItYm94XCJcclxuXHRcdFx0XHRcdGhvdmVyLWNsYXNzPVwiaG92ZXItY2xhc3NcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiIEBjbGljaz1cImFkQ2xpY2tcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiB1LWZsZXggdS1yb3ctY2VudGVyIHUtY29sLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vdmlkZW8ucG5nXCIgc2l6ZT1cIjQ2XCI+PC91LWljb24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIHUtbWFpbi1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj7otZrlj5bnp6/liIY8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnQgdS1saWdodC1jb2xvciB1LXAtdC0xMCB1LWZvbnQtMTJcIj4re3thZEludGVncmFsfX3np6/liIYv5qyhPC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnUgdS1tLWwtNDAgdS1tLXItNDAgdS1tLXQtNDAgYm9yZGVyLWJveFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLTMwXCIgaG92ZXItY2xhc3M9XCJob3Zlci1jbGFzczFcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJyZWNvcmRDbGlja1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29uL2ppbmJpMS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwXCI+5oiR55qE56ev5YiGPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWxpZ2h0LWNvbG9yIHUtZm9udC0xMiB1LXAtci0xMFwiPnt7dnVleF91c2VyP3Z1ZXhfdXNlci5pbnRlZ3JhbDowfX3np6/liIY8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXJyb3ItcmlnaHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLTMwXCIgaG92ZXItY2xhc3M9XCJob3Zlci1jbGFzczFcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJ0YXNrQ2xpY2tcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbi9saXVoYWkxLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjBcIj7np6/liIbku7vliqE8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtbGlnaHQtY29sb3IgdS1mb250LTEyIHUtcC1yLTEwXCI+5Lu75Yqh6LWa56ev5YiGPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFycm9yLXJpZ2h0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnUgdS1tLWwtNDAgdS1tLXItNDAgdS1tLXQtNDAgYm9yZGVyLWJveFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLTMwIGJvcmRlci1ib3R0b21cIiBob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzMVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImNvbGxlY3RDbGlja1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29uL2NvbGxfYXJ0LnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjBcIj7miJHnmoTmlLbol488L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFycm9yLXJpZ2h0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1iZXR3ZWVuIHUtcC0zMCBib3JkZXItYm90dG9tXCIgaG92ZXItY2xhc3M9XCJob3Zlci1jbGFzczFcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJvcmRlckNsaWNrXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ljb24vZGluZ2Rhbi5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwXCI+5oiR55qE5LiL6L29PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcnJvci1yaWdodFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctYmV0d2VlbiB1LXAtMzBcIiBob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzMVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cIndyaXRlQ2xpY2tcIiB2LWlmPVwid3JpdGVTaG93XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ljb24vZmFidS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwXCI+5oiR55qE5oqV56i/PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWxpZ2h0LWNvbG9yIHUtZm9udC0xMiB1LXAtci0xMFwiPuaKleeov+i1muenr+WIhjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcnJvci1yaWdodFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51IHUtbS1sLTQwIHUtbS1yLTQwIHUtbS10LTQwIGJvcmRlci1ib3hcIj5cclxuXHRcdFx0XHQ8IS0tICNpZm5kZWYgTVAtUVEgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctYmV0d2VlbiB1LXAtMzAgYm9yZGVyLWJvdHRvbVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXHJcblx0XHRcdFx0XHRob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzMVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ljb24va2VmdS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtcC1sLTIwXCI+6IGU57O75a6i5pyNPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhcnJvci1yaWdodFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxidXR0b24gb3Blbi10eXBlPVwiY29udGFjdFwiXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDogMDtsZWZ0OiAwO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtvcGFjaXR5OiAwO1wiPjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdFx0PCEtLSBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1iZXR3ZWVuIHUtcC0zMCBib3JkZXItYm90dG9tXCIgaG92ZXItY2xhc3M9XCJob3Zlci1jbGFzczFcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiIEBjbGljaz1cImZlZWRDbGlja1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29uL2dvbmdnYW8ucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXAtbC0yMFwiPuaEj+ingeWPjemmiDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXJyb3ItcmlnaHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHJcblxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLTMwIGJvcmRlci1ib3R0b21cIiBob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzMVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImNhY2hlQ2xpY2tcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbi9xaW5nY2h1LnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjBcIj7muIXnkIbnvJPlrZg8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFycm9yLXJpZ2h0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctYmV0d2VlbiB1LXAtMzBcIiBob3Zlci1jbGFzcz1cImhvdmVyLWNsYXNzMVwiIGhvdmVyLXN0YXktdGltZT1cIjUwXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImFib3V0Q2xpY2tcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbi9ndWFueXUucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXAtbC0yMFwiPuWFs+S6juaIkeS7rDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYXJyb3ItcmlnaHRcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnUgdS1tLWwtNDAgdS1tLXItNDAgdS1tLXQtNDAgYm9yZGVyLWJveFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLTMwXCIgaG92ZXItY2xhc3M9XCJob3Zlci1jbGFzczFcIiBob3Zlci1zdGF5LXRpbWU9XCI1MFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJzeXN0ZW1DbGlja1wiIHYtaWY9XCJ2dWV4X3VzZXIuc3lzdGVtID09IDFcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaWNvbi9xaWFuYmFvLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjBcIj7nrqHnkIblkI7lj7A8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFycm9yLXJpZ2h0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxdWl0IHUtdGV4dC1jZW50ZXIgdS1wLXQtNDBcIiB2LWlmPVwidnVleF91c2VyXCIgQGNsaWNrPVwiZXhpdENsaWNrXCI+6YCA5Ye655m75b2VPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiaGVpZ2h0OiAxODBycHg7XCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nX3BhZ2VcIiB2LXNob3c9XCJsb2FkU2hvd1wiPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9sb2FkaW5nL2xvYWRpbmcuZ2lmXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdDxmb28tYmFyIEB0b0luZGV4PVwidG9JbmRleFwiIDpob21lPVwiM1wiPjwvZm9vLWJhcj5cclxuXHJcblx0XHQ8bW9kZWxzIHYtaWY9XCJsb2dpblNob3dcIiB0aXRsZT1cIuS4uuS6huabtOWlveS9k+mqjO+8jOW/q+WOu+aOiOadg+eZu+W9leWQp1wiIGJ0blRleHQ9XCLmjojmnYPnmbvlvZVcIiBAZ2V0VXNlckluZm89XCJnZXRVc2VySW5mb1wiXHJcblx0XHRcdEBjbG9zZT1cImxvZ2luU2hvdyA9IGZhbHNlXCI+PC9tb2RlbHM+XHJcblxyXG5cclxuXHRcdDxtb2RlbHMgdi1pZj1cInNpZ25TaG93XCIgOmF1dGhvcml6ZT1cImZhbHNlXCIgOnRpdGxlPVwic2lnblRpdGxlXCIgYnRuVGV4dD1cIuefpemBk+S6hlwiIGNsb3NlVGV4dD1cIiBcIlxyXG5cdFx0XHRAc2F2ZT1cInNpZ25TaG93ID0gZmFsc2VcIj48L21vZGVscz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGxldCB2aWRlb0FkID0gbnVsbDtcclxuXHQvLyDojrflj5bns7vnu5/nirbmgIHmoI/nmoTpq5jluqZcclxuXHRsZXQgbWVudUJ1dHRvbkluZm8gPSB7fTtcclxuXHQvLyDlpoLmnpzmmK/lsI/nqIvluo/vvIzojrflj5blj7PkuIrop5Log7blm4rnmoTlsLrlr7jkv6Hmga/vvIzpgb/lhY3lr7zoiKrmoI/lj7PkvqflhoXlrrnkuI7og7blm4rph43lj6Ao5pSv5LuY5a6d5bCP56iL5bqP6Z2e5pysQVBJ77yM5bCa5pyq5YW85a65KVxyXG5cdC8vICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtQkFJRFUgfHwgTVAtVE9VVElBTyB8fCBNUC1RUVxyXG5cdG1lbnVCdXR0b25JbmZvID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0aW1wb3J0IGZvb0JhciBmcm9tICdAL2NvbXBvbmVudHMvZm9vQmFyL2Zvb0Jhci52dWUnXHJcblx0aW1wb3J0IG1vZGVscyBmcm9tICdAL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Zm9vQmFyLFxyXG5cdFx0XHRtb2RlbHNcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1lbnVCdXR0b25JbmZvOiBtZW51QnV0dG9uSW5mbyxcclxuXHRcdFx0XHRsb2FkU2hvdzogdHJ1ZSxcclxuXHRcdFx0XHQvLyDnrb7liLBcclxuXHRcdFx0XHRpc1NpZ246IGZhbHNlLFxyXG5cdFx0XHRcdHNpZ25TaG93OiBmYWxzZSxcclxuXHRcdFx0XHRzaWduVGl0bGU6ICcnLFxyXG5cdFx0XHRcdHNpZ25JbnRlZ3JhbDogMCxcclxuXHRcdFx0XHRpbnZpdGVJbnRlZ3JhbDogMCxcclxuXHRcdFx0XHRhZEludGVncmFsOiAwLFxyXG5cdFx0XHRcdC8vIOaKleeov+iPnOWNleaYvuekulxyXG5cdFx0XHRcdHdyaXRlU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0Ly8g55m75b2V5by556qXXHJcblx0XHRcdFx0bG9naW5TaG93OiBmYWxzZSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIG9uTG9hZCgpIHtcclxuXHRcdFx0dW5pLmhpZGVUYWJCYXIoKVxyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0YXdhaXQgdGhhdC5nZXRDb25maWcoKVxyXG5cdFx0XHRpZiAodGhhdC52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHR0aGF0LmdldFVzZXIoKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoYXQubG9hZFNob3cgPSBmYWxzZVxyXG5cdFx0XHR0aGF0LmFkTG9hZCgpXHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgb25TaG93KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0aWYgKHRoYXQudnVleF91c2VyKSB7XHJcblx0XHRcdFx0dGhhdC5nZXRTaWduKClcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXN5bmMgdG9JbmRleChpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuaW5kZXggPSBpbmRleFxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuXHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvY2VudGVyL2NlbnRlcidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcblx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2ZpbmQvZmluZCdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsb2dpbkNsaWNrKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9naW5TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBzaWduQ2xpY2soKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGF0LnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoYXQuaXNTaWduKSByZXR1cm5cclxuXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+etvuWIsOS4rS4uLidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBzaWduID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdzaWduX2FkZCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFwidXNlcklkXCI6IHRoYXQudnVleF91c2VyLl9pZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0aWYgKHNpZ24ucmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdHRoYXQuZ2V0VXNlcigpXHJcblx0XHRcdFx0XHR0aGF0LnNpZ25UaXRsZSA9XHJcblx0XHRcdFx0XHRcdFwiPHAgc3R5bGU9J2ZvbnQtd2VpZ2h0OiA1NTA7Zm9udC1zaXplOiAxNnB4Oyc+562+5Yiw5oiQ5YqfPC9wPjxwIHN0eWxlPSdwYWRkaW5nLXRvcDogMTBweDsnPuiOt+W+lzxzcGFuIGNsYXNzPSdudW0nPlwiICtcclxuXHRcdFx0XHRcdFx0c2lnbi5yZXN1bHQuaW50ZWdyYWwgKyBcIjwvc3Bhbj7np6/liIY8L3A+XCJcclxuXHRcdFx0XHRcdHRoYXQuc2lnblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHR0aGF0LmlzU2lnbiA9IHRydWVcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHNpZ24ucmVzdWx0Lm1zZyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZWNvcmRDbGljaygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvaW50ZWdyYWwvcmVjb3JkJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdvbmdnYW9DbGljaygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvYWJvdXQvZ29uZ2dhbydcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXNrQ2xpY2soKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2ludGVncmFsL3Rhc2snXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHBhaWhhbmdDbGljaygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbGlzdC9saXN0P3R5cGU9cmFua2luZyZwaWQ9JmlkPWhvdCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bW9kZWxTYXZlKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9naW5TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubW9kZWxTaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sbGVjdENsaWNrKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9naW5TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9jb2xsZWN0L2NvbGxlY3QnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b3JkZXJDbGljaygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvb3JkZXIvb3JkZXInXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0d3JpdGVDbGljaygpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMudnVleF91c2VyKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ2luU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvd3JpdGUvd3JpdGUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXhpdENsaWNrKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG5cdFx0XHRcdFx0Y29udGVudDogJ+ehruWumumAgOWHuuW9k+WJjeeZu+W9lei0puaIt++8nycsXHJcblx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+mAgOWHuicsXHJcblx0XHRcdFx0XHRjb25maXJtQ29sb3I6ICcjZmNjNjAwJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LiR1LnZ1ZXgoJ3Z1ZXhfdXNlcicsICcnKVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaXNTaWduID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNhY2hlQ2xpY2soKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn5riF6Zmk57yT5a2Y5ZCO6K+36YeN5paw55m75b2V77yBJyxcclxuXHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcclxuXHRcdFx0XHRcdGNvbmZpcm1Db2xvcjogJyNmY2M2MDAnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuJHUudnVleCgndnVleF91c2VyJywgJycpXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5pc1NpZ24gPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YWJvdXRDbGljaygpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvYWJvdXQvYWJvdXQnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmVlZENsaWNrKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9naW5TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy9mZWVkL2ZlZWQnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c3lzdGVtQ2xpY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3N5c3RlbS9zeXN0ZW0nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZ2V0VXNlcigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgZGV0YWlsID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9tYXAnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IFwid3hfdXNlclwiLFxyXG5cdFx0XHRcdFx0XHRpZDogdGhhdC52dWV4X3VzZXIuX2lkXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhhdC4kdS52dWV4KCd2dWV4X3VzZXInLCBkZXRhaWwucmVzdWx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiJHnmoRcclxuXHRcdFx0YXN5bmMgZ2V0U2lnbigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKS5nZXRUaW1lKClcclxuXHRcdFx0XHRjb25zdCBlbmRUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCAtIDFcclxuXHRcdFx0XHRsZXQgcXVlcnkgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ3NpZ25fZmxhZycsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGRiTmFtZTogJ3d4X3NpZ24nLFxyXG5cdFx0XHRcdFx0XHRcInVzZXJJZFwiOiB0aGF0LnZ1ZXhfdXNlci5faWQsXHJcblx0XHRcdFx0XHRcdFwic3RhcnRUaW1lXCI6IHN0YXJ0VGltZSxcclxuXHRcdFx0XHRcdFx0XCJlbmRUaW1lXCI6IGVuZFRpbWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAocXVlcnkucmVzdWx0LnN1Y2Nlc3MpIHRoYXQuaXNTaWduID0gdHJ1ZVxyXG5cdFx0XHRcdGVsc2UgdGhhdC5pc1NpZ24gPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBnZXRDb25maWcoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGNvbmZpZyA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAnY29uZmlnX21hcCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdCdrZXlzJzogWydzaWduSW50ZWdyYWwnLCAnaW52aXRlSW50ZWdyYWwnLCAnYWRJbnRlZ3JhbCcsICd3cml0ZVNob3cnXVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmIChjb25maWcucmVzdWx0LnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdHRoYXQuc2lnbkludGVncmFsID0gcGFyc2VJbnQoY29uZmlnLnJlc3VsdC5kYXRhWzBdKVxyXG5cdFx0XHRcdFx0dGhhdC5pbnZpdGVJbnRlZ3JhbCA9IHBhcnNlSW50KGNvbmZpZy5yZXN1bHQuZGF0YVsxXSlcclxuXHRcdFx0XHRcdHRoYXQuYWRJbnRlZ3JhbCA9IHBhcnNlSW50KGNvbmZpZy5yZXN1bHQuZGF0YVsyXSlcclxuXHRcdFx0XHRcdHRoYXQud3JpdGVTaG93ID0gY29uZmlnLnJlc3VsdC5kYXRhWzNdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZENsaWNrKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmICghdGhhdC52dWV4X3VzZXIpIHtcclxuXHRcdFx0XHRcdHRoYXQubG9naW5TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh2aWRlb0FkKSB7XHJcblx0XHRcdFx0XHR2aWRlb0FkLnNob3coKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyDlpLHotKXph43or5VcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLlub/lkYrmi4nljrvlpLHotKVcIilcclxuXHRcdFx0XHRcdFx0dmlkZW9BZC5sb2FkKCkudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZExvYWQoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYgKHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCkge1xyXG5cdFx0XHRcdFx0Ly8g5Yqg6L295r+A5Yqx6KeG6aKR5bm/5ZGKXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtUVFcclxuXHRcdFx0XHRcdHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0XHRhZFVuaXRJZDogXCJ7eyBxcWV4Y2l0YXRpb24gfX1cIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdHZpZGVvQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0XHRhZFVuaXRJZDogXCJhZHVuaXQtNGUwMDBhYzM0OTM1MGIxZFwiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly/mjZXmjYnplJnor69cclxuXHRcdFx0XHRcdHZpZGVvQWQub25FcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyDov5vooYzpgILlvZPnmoTmj5DnpLpcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZpZGVvQWQgb25FcnJvcicsIGVycik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vIOebkeWQrOWFs+mXrVxyXG5cdFx0XHRcdFx0dmlkZW9BZC5vbkNsb3NlKHN0YXR1cyA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICgoc3RhdHVzICYmIHN0YXR1cy5pc0VuZGVkKSB8fCBzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOato+W4uOaSreaUvue7k+adn++8jOS4i+WPkeWlluWKsVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LnZ1ZXhfdXNlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC51c2VySW50ZWdyYWwoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzov5vooYzmj5DnpLpcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Lit6YCU6YCA5Ye6JylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyB1c2VySW50ZWdyYWwoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOaLvOWRveWKoOi9veS4rS4uLidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBkYXRhID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICd1c2VyX2ludGVncmFsJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB0aGF0LnZ1ZXhfdXNlci5faWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdGlmIChkYXRhLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHR0aGF0LmdldFVzZXIoKVxyXG5cdFx0XHRcdFx0dGhhdC5zaWduVGl0bGUgPVxyXG5cdFx0XHRcdFx0XHRcIjxwIHN0eWxlPSdmb250LXdlaWdodDogNTUwO2ZvbnQtc2l6ZTogMTZweDsnPuingueci+aIkOWKnzwvcD48cCBzdHlsZT0ncGFkZGluZy10b3A6IDEwcHg7Jz7ojrflvpc8c3BhbiBjbGFzcz0nbnVtJz5cIiArXHJcblx0XHRcdFx0XHRcdGRhdGEucmVzdWx0LmludGVncmFsICsgXCI8L3NwYW4+56ev5YiGPC9wPlwiXHJcblx0XHRcdFx0XHR0aGF0LnNpZ25TaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblxyXG5cdFx0XHQvLyDnmbvlvZVcclxuXHRcdFx0Z2V0VXNlckluZm8oKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHR0dC5nZXRVc2VyUHJvZmlsZSh7XHJcblx0XHRcdFx0XHRmb3JjZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5oiQ5YqfICR7cmVzLnVzZXJJbmZvfWApO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycixgZ2V0VXNlckluZm8g6LCD55So5aSx6LSlYCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHR1bmkuZ2V0VXNlclByb2ZpbGUoe1xyXG5cdFx0XHRcdFx0ZGVzYzogJ+S4quS6uueZu+W9le+8jOiusOW9leaVsOaNricsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWU7IC8v5pi156ewXHJcblx0XHRcdFx0XHRcdHRoYXQuYXZhdGFyID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybDsgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0dGhhdC53eGxvZ2luKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bnlKjmiLfkv6Hmga/lpLHotKVcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVFRXHJcblx0XHRcdFx0dW5pLmdldFVzZXJJbmZvKHtcclxuXHRcdFx0XHRcdC8vIOiOt+WPluS/oeaBr+aIkOWKn1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm5hbWUgPSByZXMudXNlckluZm8ubmlja05hbWU7IC8v5pi156ewXHJcblx0XHRcdFx0XHRcdHRoYXQuYXZhdGFyID0gcmVzLnVzZXJJbmZvLmF2YXRhclVybDsgLy/lpLTlg49cclxuXHRcdFx0XHRcdFx0dGhhdC53eGxvZ2luKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bnlKjmiLfkv6Hmga/lpLHotKVcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+W3sue7j+aOiOadg++8jOiHquWKqOeZu+W9lVxyXG5cdFx0XHRhc3luYyB3eGxvZ2luKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfnmbvlvZXkuK0uLi4nXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdHVuaS5sb2dpbih7XHJcblx0XHRcdFx0XHRwcm92aWRlcjogJ3dlaXhpbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihsb2dpblJlcykge1xyXG5cdFx0XHRcdFx0XHRsZXQgY29kZSA9IGxvZ2luUmVzLmNvZGU7XHJcblx0XHRcdFx0XHRcdHRoYXQud3hsb2dpbnJlcyhjb2RlKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHR1bmkubG9naW4oe1xyXG5cdFx0XHRcdFx0cHJvdmlkZXI6ICd0b3V0aWFvJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGxvZ2luUmVzKSB7XHJcblx0XHRcdFx0XHRcdGxldCBjb2RlID0gbG9naW5SZXMuY29kZTtcclxuXHRcdFx0XHRcdFx0dGhhdC53eGxvZ2lucmVzKGNvZGUpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v55m75b2V5ZCO5o+Q5Lqk5pyN5Yqh5Zmo6I635Y+W6L+b5LiA5q2l5L+h5oGvXHJcblx0XHRcdGFzeW5jIHd4bG9naW5yZXMod3hjb2RlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdFx0XHR2YXIgdXNlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySWQnKVxyXG5cclxuXHRcdFx0XHR2YXIgbXB0eXBlXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxyXG5cdFx0XHRcdG1wdHlwZSA9ICd3eCdcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtUVFcclxuXHRcdFx0XHRtcHR5cGUgPSAncXEnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHRtcHR5cGUgPSAndHQnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHRcdGxldCBhdXRob3JpemUgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ3VzZXJfYXV0aG9yaXplJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogdGhhdC5uYW1lLFxyXG5cdFx0XHRcdFx0XHRhdmF0YXI6IHRoYXQuYXZhdGFyLFxyXG5cdFx0XHRcdFx0XHRtcHR5cGU6IG1wdHlwZSxcclxuXHRcdFx0XHRcdFx0Y29kZTogd3hjb2RlLFxyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAoYXV0aG9yaXplLnJlc3VsdC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHR0aGF0LiR1LnZ1ZXgoJ3Z1ZXhfdXNlcicsIGF1dGhvcml6ZS5yZXN1bHQuZGF0YSlcclxuXHRcdFx0XHRcdHRoYXQuZ2V0VXNlcigpXHJcblx0XHRcdFx0XHRhd2FpdCB0aGF0LmdldFNpZ24oKVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfnmbvlvZXmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYygndXNlcklkJylcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGF1dGhvcml6ZS5yZXN1bHQubXNnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb2dpblNob3coKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0dGhhdC5sb2dpblNob3cgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0b25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICfmiJHnrYnpo47kuZ/nrYnkvaDvvIzov5HlkKzmsLTml6Dlo7B+JyxcclxuXHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4P3VzZXJJZD0nICsgdGhpcy52dWV4X3VzZXIuX2lkXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNoYXJlVGltZWxpbmUocmVzKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICfmiJHnrYnpo47kuZ/nrYnkvaDvvIzov5HlkKzmsLTml6Dlo7B+JyxcclxuXHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC51c2VycyB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHRcdGhlaWdodDogMzAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZiODIxIDAsICNmZmNkMzMgNDUlLCAjZmZkODMzKTtcclxuXHJcblx0XHQuZGl2MSB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDBweDtcclxuXHRcdH1cclxuXHJcblx0XHQuZGl2MiB7XHJcblx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdHdpZHRoOiA5MiU7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmZiMDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRcdGxlZnQ6IDQlO1xyXG5cdFx0XHRyaWdodDogNiU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmRpdjMge1xyXG5cdFx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0XHR3aWR0aDogODglO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmNTk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogMTBweDtcclxuXHRcdFx0bGVmdDogNiU7XHJcblx0XHRcdHJpZ2h0OiA4JTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQudXNlciB7XHJcblx0XHQuYXZhdGFyIHtcclxuXHRcdFx0d2lkdGg6IDExNnJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMTZycHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDExNnJweDtcclxuXHRcdH1cclxuXHJcblx0XHQubmFtZSB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHR9XHJcblxyXG5cdFx0LmFkZHIge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5qaWZlbiB7XHJcblx0XHQudGFiIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHR3aWR0aDogMjM0cnB4O1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcnB4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMTBycHg7XHJcblxyXG5cdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1NTA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5pY29uIHtcclxuXHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4MHJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC50YWI6bnRoLWNoaWxkKDEpIC5pY29uIHtcclxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzRDQ0U4NCwgIzRCQ0Q4NSwgIzQ5Q0Q4NCk7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRhYjpudGgtY2hpbGQoMikgLmljb24ge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZjBkMzVjLCAjRjBCMzQ3LCAjZjBkMzVjKTtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuXHRcdH1cclxuXHJcblx0XHQudGFiOm50aC1jaGlsZCgyKSAuaWNvbnMge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQobGVmdCB0b3AsICNkYWRhZGEsICNkYWRhZGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC50YWI6bnRoLWNoaWxkKDMpIC5pY29uIHtcclxuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzhjOTlkZSwgIzgzNkFGMCwgIzhjOTlkZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYm9yZGVyLWJveCB7XHJcblx0XHRib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMjMxLCAyMzEsIDIzMSwgMC42KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdH1cclxuXHJcblx0Lm1lbnUge1xyXG5cdFx0aW1hZ2Uge1xyXG5cdFx0XHR3aWR0aDogMzhycHg7XHJcblx0XHRcdGhlaWdodDogMzhycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYm9yZGVyLWJvdHRvbSB7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcnB4IHNvbGlkICNGNkY2RjY7XHJcblx0fVxyXG5cclxuXHQuaG92ZXItY2xhc3Mge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cdH1cclxuXHJcblx0LmhvdmVyLWNsYXNzMSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG5cdH1cclxuXHJcblx0LmFycm9yLXJpZ2h0IHtcclxuXHRcdHdpZHRoOiAxNXJweDtcclxuXHRcdGhlaWdodDogMTVycHg7XHJcblx0XHRib3JkZXItdG9wOiAzcnB4IHNvbGlkICNhOWFjYjM7XHJcblx0XHRib3JkZXItcmlnaHQ6IDNycHggc29saWQgI2E5YWNiMztcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcblxyXG5cdC5xdWl0IHtcclxuXHRcdGNvbG9yOiAjZmE2ODY4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU1NTMwNDgwNDE5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=