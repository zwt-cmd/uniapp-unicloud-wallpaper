(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/system/config/configList"],{

/***/ 228:
/*!*************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fsystem%2Fconfig%2FconfigList"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _configList = _interopRequireDefault(__webpack_require__(/*! ./pages/system/config/configList.vue */ 229));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_configList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 229:
/*!****************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configList.vue?vue&type=template&id=5ea525f4& */ 230);
/* harmony import */ var _configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configList.vue?vue&type=script&lang=js& */ 232);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configList.vue?vue&type=style&index=0&lang=scss& */ 234);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/system/config/configList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 230:
/*!***********************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=template&id=5ea525f4& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./configList.vue?vue&type=template&id=5ea525f4& */ 231);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_template_id_5ea525f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 231:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=template&id=5ea525f4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uSwitch: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-switch/u-switch */ "uview-ui/components/u-switch/u-switch").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-switch/u-switch.vue */ 516))
    },
    uModal: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 523))
    },
    uInput: function() {
      return Promise.all(/*! import() | uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-input/u-input.vue */ 474))
    },
    uActionSheet: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-action-sheet/u-action-sheet */ "uview-ui/components/u-action-sheet/u-action-sheet").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-action-sheet/u-action-sheet.vue */ 442))
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

/***/ 232:
/*!*****************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./configList.vue?vue&type=script&lang=js& */ 233);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      sheetList: [{
        text: '编辑' },
      {
        text: '删除' }],

      configId: '-1',
      sheetShow: false,
      configList: [],
      // 无数据
      noData: false,
      // 分页
      editShow: false,
      config: {
        name: '',
        key: '',
        val: '' } };


  },
  onLoad: function onLoad() {
    this.getConfigList();
  },
  methods: {
    getConfigList: function getConfigList() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that, list;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                that = _this;_context.next = 3;return (

                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_config",
                      pageIndex: 1,
                      pageSize: 100 } }));case 3:list = _context.sent;



                if (list.result.hasMore) that.loadStatus = 'loadmore';else
                that.loadStatus = 'nomore';

                that.configList = list.result.data;

                if (that.configList.length == 0) that.noData = true;else
                that.noData = false;case 7:case "end":return _context.stop();}}}, _callee);}))();
    },
    sheetClick: function sheetClick(id, index) {
      this.configId = id;
      this.config.name = this.configList[index].name;
      this.config.key = this.configList[index].key;
      this.config.val = this.configList[index].val;
      this.sheetShow = true;
    },
    addClick: function addClick() {
      this.config = {
        name: '',
        key: '',
        val: '' };

      this.configId = '-1';
      this.editShow = true;
    },
    sheetChange: function sheetChange(index) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                that = _this2;

                if (that.sheetList[index].text === '编辑') {
                  that.editShow = true;
                } else if (that.sheetList[index].text === '删除') {
                  uni.showModal({
                    title: '删除提示',
                    content: '确定删除当前配置吗？',
                    confirmText: '删除',
                    confirmColor: '#fcc600',
                    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {var query;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!
                                res.confirm) {_context2.next = 7;break;}
                                uni.showLoading({
                                  mask: true,
                                  title: '删除中...' });_context2.next = 4;return (

                                  uniCloud.callFunction({
                                    name: 'query_del',
                                    data: {
                                      dbName: 'wx_config',
                                      filter: {
                                        '_id': that.configId } } }));case 4:query = _context2.sent;



                                if (query.result.success) {
                                  that.getConfigList();
                                }
                                uni.showToast({
                                  icon: 'none',
                                  title: query.result.msg,
                                  mask: true,
                                  duration: 1000 });case 7:case "end":return _context2.stop();}}}, _callee2);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });




                }case 2:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    editChange: function editChange() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, query;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this3;if (
                that.config.name) {_context4.next = 6;break;}
                that.$u.toast("请填写配置的说明");return _context4.abrupt("return");case 6:if (

                that.config.name) {_context4.next = 11;break;}
                that.$u.toast("请填写配置的键");return _context4.abrupt("return");case 11:if (

                that.config.name) {_context4.next = 16;break;}
                that.$u.toast("请填写配置的值");return _context4.abrupt("return");case 16:


                uni.showLoading({
                  mask: true,
                  title: '正在拼命加载中...' });

                if (that.config.val == 'true') that.config.val = true;else
                if (that.config.val == 'false') that.config.val = false;_context4.next = 20;return (
                  uniCloud.callFunction({
                    name: 'query_edit',
                    data: {
                      dbName: "wx_config",
                      filter: {
                        '_id': that.configId },

                      upData: that.config,
                      addData: that.config } }));case 20:query = _context4.sent;


                if (query.result.success) {
                  that.getConfigList();
                }
                uni.showToast({
                  icon: 'none',
                  title: query.result.msg,
                  mask: true,
                  duration: 1000 });case 23:


                that.editShow = false;case 24:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    switchChange: function switchChange(id, index) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var query;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                _this4.configId = id;
                _this4.config.name = _this4.configList[index].name;
                _this4.config.key = _this4.configList[index].key;
                _this4.config.val = _this4.configList[index].val;
                uni.showLoading({
                  mask: true,
                  title: '正在拼命加载中...' });

                if (_this4.config.val == 'true') _this4.config.val = true;else
                if (_this4.config.val == 'false') _this4.config.val = false;_context5.next = 8;return (
                  uniCloud.callFunction({
                    name: 'query_edit',
                    data: {
                      dbName: "wx_config",
                      filter: {
                        '_id': _this4.configId },

                      upData: _this4.config } }));case 8:query = _context5.sent;


                if (!query.result.success) {
                  _this4.configList[index].val = !_this4.configList[index].val;
                }
                uni.showToast({
                  icon: 'none',
                  title: query.result.msg,
                  mask: true,
                  duration: 1000 });case 11:case "end":return _context5.stop();}}}, _callee5);}))();

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 234:
/*!**************************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./configList.vue?vue&type=style&index=0&lang=scss& */ 235);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_configList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 235:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/config/configList.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[228,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vY29uZmlnL2NvbmZpZ0xpc3QudnVlP2NiNzIiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvc3lzdGVtL2NvbmZpZy9jb25maWdMaXN0LnZ1ZT9mYTkyIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3N5c3RlbS9jb25maWcvY29uZmlnTGlzdC52dWU/MjE4NiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vY29uZmlnL2NvbmZpZ0xpc3QudnVlPzFlMDEiLCJ1bmktYXBwOi8vL3BhZ2VzL3N5c3RlbS9jb25maWcvY29uZmlnTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvc3lzdGVtL2NvbmZpZy9jb25maWdMaXN0LnZ1ZT9kMTAxIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3N5c3RlbS9jb25maWcvY29uZmlnTGlzdC52dWU/NzFlOSJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTtBQUNBO0FBQ0EsK0csNkZBRm1CQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkM7QUFHbkJDLFVBQVUsQ0FBQ0MsbUJBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVIO0FBQ3ZIO0FBQzhEO0FBQ0w7QUFDYzs7O0FBR3ZFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbU5BRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLDZNQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0EsYUFBYSxtUUFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsdVBBRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFpeEIsQ0FBZ0IsK3dCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNERyeUI7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQSxrQkFEQSxFQUZBLENBREE7O0FBTUEsb0JBTkE7QUFPQSxzQkFQQTtBQVFBLG9CQVJBO0FBU0E7QUFDQSxtQkFWQTtBQVdBO0FBQ0EscUJBWkE7QUFhQTtBQUNBLGdCQURBO0FBRUEsZUFGQTtBQUdBLGVBSEEsRUFiQTs7O0FBbUJBLEdBckJBO0FBc0JBLFFBdEJBLG9CQXNCQTtBQUNBO0FBQ0EsR0F4QkE7QUF5QkE7QUFDQSxpQkFEQSwyQkFDQTtBQUNBLG9CQURBLEdBQ0EsS0FEQTs7QUFHQTtBQUNBLHNDQURBO0FBRUE7QUFDQSx5Q0FEQTtBQUVBLGtDQUZBO0FBR0EsbUNBSEEsRUFGQSxHQUhBLFNBR0EsSUFIQTs7OztBQVlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQ0FsQkE7QUFtQkEsS0FwQkE7QUFxQkEsY0FyQkEsc0JBcUJBLEVBckJBLEVBcUJBLEtBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0JBO0FBNEJBLFlBNUJBLHNCQTRCQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxlQUZBO0FBR0EsZUFIQTs7QUFLQTtBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsZUFyQ0EsdUJBcUNBLEtBckNBLEVBcUNBO0FBQ0Esb0JBREEsR0FDQSxNQURBOztBQUdBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLHlDQUZBO0FBR0EscUNBSEE7QUFJQSwyQ0FKQTtBQUtBO0FBQ0EsMkNBREE7QUFFQTtBQUNBLDRDQURBO0FBRUEsaURBRkEsSUFGQTs7QUFNQTtBQUNBLHFEQURBO0FBRUE7QUFDQSx5REFEQTtBQUVBO0FBQ0EsNERBREEsRUFGQSxFQUZBLEdBTkEsU0FNQSxLQU5BOzs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FEQTtBQUVBLHlEQUZBO0FBR0EsNENBSEE7QUFJQSxnREFKQSxJQWxCQSw2SUFMQTs7Ozs7QUFnQ0EsaUJBdENBO0FBdUNBLEtBNUVBO0FBNkVBLGNBN0VBLHdCQTZFQTtBQUNBLG9CQURBLEdBQ0EsTUFEQTtBQUVBLGdDQUZBO0FBR0EsMENBSEE7O0FBS0EsZ0NBTEE7QUFNQSx5Q0FOQTs7QUFRQSxnQ0FSQTtBQVNBLHlDQVRBOzs7QUFZQTtBQUNBLDRCQURBO0FBRUEscUNBRkE7O0FBSUE7QUFDQSx3RUFqQkE7QUFrQkE7QUFDQSxzQ0FEQTtBQUVBO0FBQ0EseUNBREE7QUFFQTtBQUNBLDRDQURBLEVBRkE7O0FBS0EseUNBTEE7QUFNQSwwQ0FOQSxFQUZBLEdBbEJBLFVBa0JBLEtBbEJBOzs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLHlDQUZBO0FBR0EsNEJBSEE7QUFJQSxnQ0FKQSxJQWhDQTs7O0FBdUNBLHNDQXZDQTtBQXdDQSxLQXJIQTtBQXNIQSxnQkF0SEEsd0JBc0hBLEVBdEhBLEVBc0hBLEtBdEhBLEVBc0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEscUNBRkE7O0FBSUE7QUFDQSw0RUFWQTtBQVdBO0FBQ0Esc0NBREE7QUFFQTtBQUNBLHlDQURBO0FBRUE7QUFDQSw4Q0FEQSxFQUZBOztBQUtBLDJDQUxBLEVBRkEsR0FYQSxTQVdBLEtBWEE7OztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEseUNBRkE7QUFHQSw0QkFIQTtBQUlBLGdDQUpBLElBeEJBOztBQThCQSxLQXBKQSxFQXpCQSxFOzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQW84QyxDQUFnQiwwM0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F4OUM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJwYWdlcy9zeXN0ZW0vY29uZmlnL2NvbmZpZ0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9zeXN0ZW0vY29uZmlnL2NvbmZpZ0xpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY29uZmlnTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWVhNTI1ZjQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb25maWdMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29uZmlnTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3N5c3RlbS9jb25maWcvY29uZmlnTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbmZpZ0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlYTUyNWY0JlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdVN3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2l0Y2gvdS1zd2l0Y2hcIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LXN3aXRjaC91LXN3aXRjaC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdU1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LW1vZGFsL3UtbW9kYWxcIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LW1vZGFsL3UtbW9kYWwudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVJbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pbnB1dC91LWlucHV0XCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pbnB1dC91LWlucHV0LnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1QWN0aW9uU2hlZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ1dmlldy11aS9jb21wb25lbnRzL3UtYWN0aW9uLXNoZWV0L3UtYWN0aW9uLXNoZWV0XCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1hY3Rpb24tc2hlZXQvdS1hY3Rpb24tc2hlZXQudnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NvbmZpZ0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY29uZmlnTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgIHYtaWY9XCJ2dWV4X3VzZXIuc3lzdGVtID09IDFcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMjAgdS1wLXItMjBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWIgdS1tLXQtMjBcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY29uZmlnTGlzdFwiIDprZXk9XCJpbmRleFwiIHYtaWY9XCJpdGVtLmtleSAhPSAnYWNjZXNzX3Rva2VuJ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1wLWwtMzAgdS1wLXItMzAgdS1wLXQtMzAgdS1wLWItMzAgYm9yZGVyLWJvdHRvbSB1LWZsZXggdS1yb3ctYmV0d2VlblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5uYW1lfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInllc1wiPnt7aXRlbS5rZXl9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZvbnQtMTIgdS10aXBzLWNvbG9yIHUtcC1sLTMwIHUtcC1yLTMwIHUtcC10LTE1IHUtcC1iLTE1IHUtZmxleCB1LXJvdy1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwid2lkdGg6IDgwJTtcIj7lvZPliY3vvJp7e2l0ZW0udmFsfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHYtaWY9XCJpdGVtLnZhbCA9PT0gdHJ1ZSB8fCBpdGVtLnZhbCA9PT0gZmFsc2VcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dS1zd2l0Y2ggdi1tb2RlbD1cIml0ZW0udmFsXCIgc2l6ZT1cIjI4XCIgYWN0aXZlLWNvbG9yPVwiI2YxYzkyOVwiIGluYWN0aXZlLWNvbG9yPVwiI0Y4RjhGOFwiIEBjaGFuZ2U9XCJzd2l0Y2hDaGFuZ2UoaXRlbS5faWQsIGluZGV4KVwiPjwvdS1zd2l0Y2g+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIiB2LWVsc2UgQGNsaWNrPVwic2hlZXRDbGljayhpdGVtLl9pZCwgaW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXAtci0xMFwiPuaTjeS9nDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFycm9yLXJpZ2h0XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwibm9EYXRhXCJcclxuXHRcdGNsYXNzPVwidS1mbGV4IHUtZmxleC1jb2wgdS1jb2wtY2VudGVyXCJcclxuXHRcdHN0eWxlPVwid2lkdGg6IDEwMHZ3O2hlaWdodDogNTB2aDtwYWRkaW5nLXRvcDogMjAwcnB4O1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiAzMDBycHg7aGVpZ2h0OiAzMDBycHg7XCIgc3JjPVwiL3N0YXRpYy9ub2RhdGEucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtdGlwcy1jb2xvciB1LWZvbnQtMTIgdS1wLXQtMzBcIj5cclxuXHRcdFx0XHTmsqHmnInmlbDmja7lk6Z+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJhZGRcIiBAY2xpY2s9XCJhZGRDbGlja1wiPlxyXG5cdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pY29uL2FkZC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwic2FmZS1hcmVhLWluc2V0LWJvdHRvbVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiaGVpZ2h0OiAxMHB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHUtbW9kYWwgdi1tb2RlbD1cImVkaXRTaG93XCIgdGl0bGU9XCLphY3nva5cIiA6c2hvdy1jYW5jZWwtYnV0dG9uPVwidHJ1ZVwiIGNvbmZpcm0tdGV4dD1cIuS/neWtmFwiIGNvbmZpcm0tY29sb3I9XCIjZmNjNjAwXCIgY29udGVudD1cImNvbnRlbnRcIiA6YXN5bmMtY2xvc2U9XCJ0cnVlXCIgIEBjb25maXJtPVwiZWRpdENoYW5nZVwiIG5lZ2F0aXZlLXRvcD1cIjI4MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtcC00MFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB2LW1vZGVsPVwiY29uZmlnLm5hbWVcIiA6Ym9yZGVyPVwidHJ1ZVwiIGJvcmRlci1jb2xvcj1cIiNGN0Y3RjdcIiA6Y2xlYXJhYmxlPVwiZmFsc2VcIiA6aGVpZ2h0PVwiODBcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIuWhq+WGmemFjee9rueahOivtOaYjlwiLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cInUtcC10LTE1XCI+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB2LW1vZGVsPVwiY29uZmlnLmtleVwiIDpib3JkZXI9XCJ0cnVlXCIgYm9yZGVyLWNvbG9yPVwiI0Y3RjdGN1wiIDpjbGVhcmFibGU9XCJmYWxzZVwiIDpoZWlnaHQ9XCI4MFwiIGRpc2FibGVkIHBsYWNlaG9sZGVyPVwi5aGr5YaZ6YWN572u55qE6ZSuXCIvPlxyXG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXAtdC0xNVwiPlxyXG5cdFx0XHRcdFx0PHUtaW5wdXQgdi1tb2RlbD1cImNvbmZpZy52YWxcIiA6Ym9yZGVyPVwidHJ1ZVwiIGJvcmRlci1jb2xvcj1cIiNGN0Y3RjdcIiA6Y2xlYXJhYmxlPVwiZmFsc2VcIiA6aGVpZ2h0PVwiODBcIiBwbGFjZWhvbGRlcj1cIuWhq+WGmemFjee9rueahOWAvFwiLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdS1tb2RhbD5cclxuXHRcdFxyXG5cdFx0PHUtYWN0aW9uLXNoZWV0IDpsaXN0PVwic2hlZXRMaXN0XCIgOnNhZmUtYXJlYS1pbnNldC1ib3R0b209XCJ0cnVlXCIgdi1tb2RlbD1cInNoZWV0U2hvd1wiIEBjbGljaz1cInNoZWV0Q2hhbmdlXCI+PC91LWFjdGlvbi1zaGVldD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2hlZXRMaXN0OiBbe1xyXG5cdFx0XHRcdFx0dGV4dDogJ+e8lui+kScsXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0dGV4dDogJ+WIoOmZpCcgXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0Y29uZmlnSWQ6ICctMScsXHJcblx0XHRcdFx0c2hlZXRTaG93OiBmYWxzZSxcclxuXHRcdFx0XHRjb25maWdMaXN0OiBbXSxcclxuXHRcdFx0XHQvLyDml6DmlbDmja5cclxuXHRcdFx0XHRub0RhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdC8vIOWIhumhtVxyXG5cdFx0XHRcdGVkaXRTaG93OiBmYWxzZSxcclxuXHRcdFx0XHRjb25maWc6IHtcclxuXHRcdFx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0a2V5OiAnJyxcclxuXHRcdFx0XHRcdHZhbDogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0Q29uZmlnTGlzdCgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhc3luYyBnZXRDb25maWdMaXN0KCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGxpc3QgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0bmFtZTogJ3F1ZXJ5X2xpc3QnLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRkYk5hbWU6IFwid3hfY29uZmlnXCIsXHJcblx0XHRcdFx0XHRcdHBhZ2VJbmRleDogMSxcclxuXHRcdFx0XHRcdFx0cGFnZVNpemU6IDEwMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGxpc3QucmVzdWx0Lmhhc01vcmUpIHRoYXQubG9hZFN0YXR1cyA9ICdsb2FkbW9yZSdcclxuXHRcdFx0XHRlbHNlIHRoYXQubG9hZFN0YXR1cyA9ICdub21vcmUnXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5jb25maWdMaXN0ID0gbGlzdC5yZXN1bHQuZGF0YVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHRoYXQuY29uZmlnTGlzdC5sZW5ndGggPT0gMCkgdGhhdC5ub0RhdGEgPSB0cnVlXHJcblx0XHRcdFx0ZWxzZSB0aGF0Lm5vRGF0YSA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoZWV0Q2xpY2sgKGlkLCBpbmRleCl7XHJcblx0XHRcdFx0dGhpcy5jb25maWdJZCA9IGlkXHJcblx0XHRcdFx0dGhpcy5jb25maWcubmFtZSA9IHRoaXMuY29uZmlnTGlzdFtpbmRleF0ubmFtZVxyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmtleSA9IHRoaXMuY29uZmlnTGlzdFtpbmRleF0ua2V5XHJcblx0XHRcdFx0dGhpcy5jb25maWcudmFsID0gdGhpcy5jb25maWdMaXN0W2luZGV4XS52YWxcclxuXHRcdFx0XHR0aGlzLnNoZWV0U2hvdyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkQ2xpY2soKXtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IHtcclxuXHRcdFx0XHRcdG5hbWU6ICcnLFxyXG5cdFx0XHRcdFx0a2V5OiAnJyxcclxuXHRcdFx0XHRcdHZhbDogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jb25maWdJZCA9ICctMSdcclxuXHRcdFx0XHR0aGlzLmVkaXRTaG93ID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBzaGVldENoYW5nZShpbmRleCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodGhhdC5zaGVldExpc3RbaW5kZXhdLnRleHQgPT09ICfnvJbovpEnKXtcclxuXHRcdFx0XHRcdHRoYXQuZWRpdFNob3cgPSB0cnVlXHJcblx0XHRcdFx0fWVsc2UgaWYodGhhdC5zaGVldExpc3RbaW5kZXhdLnRleHQgPT09ICfliKDpmaQnKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0ICAgIHRpdGxlOiAn5Yig6Zmk5o+Q56S6JyxcclxuXHRcdFx0XHRcdCAgICBjb250ZW50OiAn56Gu5a6a5Yig6Zmk5b2T5YmN6YWN572u5ZCX77yfJyxcclxuXHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfliKDpmaQnLFxyXG5cdFx0XHRcdFx0XHRjb25maXJtQ29sb3I6ICcjZmNjNjAwJyxcclxuXHRcdFx0XHRcdCAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIFx0dGl0bGU6ICfliKDpmaTkuK0uLi4nXHJcblx0XHRcdFx0XHQgICAgICAgICAgICB9KVxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIFx0bmFtZTogJ3F1ZXJ5X2RlbCcsXHJcblx0XHRcdFx0XHQgICAgICAgICAgICBcdGRhdGE6IHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIFx0XHRkYk5hbWU6ICd3eF9jb25maWcnLFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHRcdGZpbHRlcjoge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHRcdFx0J19pZCc6IHRoYXQuY29uZmlnSWQsXHJcblx0XHRcdFx0XHQgICAgICAgICAgICBcdFx0fVxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHR9LFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgfSlcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIGlmKHF1ZXJ5LnJlc3VsdC5zdWNjZXNzKXtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIFx0dGhhdC5nZXRDb25maWdMaXN0KClcclxuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdCAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHQgICAgICAgICAgICBcdHRpdGxlOiBxdWVyeS5yZXN1bHQubXNnLFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgXHRkdXJhdGlvbjogMTAwMFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgfSlcclxuXHRcdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBlZGl0Q2hhbmdlKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdFx0aWYoIXRoYXQuY29uZmlnLm5hbWUpe1xyXG5cdFx0XHRcdFx0dGhhdC4kdS50b2FzdChcIuivt+Whq+WGmemFjee9rueahOivtOaYjlwiKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9ZWxzZSBpZighdGhhdC5jb25maWcubmFtZSl7XHJcblx0XHRcdFx0XHR0aGF0LiR1LnRvYXN0KFwi6K+35aGr5YaZ6YWN572u55qE6ZSuXCIpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1lbHNlIGlmKCF0aGF0LmNvbmZpZy5uYW1lKXtcclxuXHRcdFx0XHRcdHRoYXQuJHUudG9hc3QoXCLor7floavlhpnphY3nva7nmoTlgLxcIik7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOaLvOWRveWKoOi9veS4rS4uLidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZih0aGF0LmNvbmZpZy52YWwgPT0gJ3RydWUnKSB0aGF0LmNvbmZpZy52YWwgPSB0cnVlXHJcblx0XHRcdFx0XHRlbHNlIGlmKHRoYXQuY29uZmlnLnZhbCA9PSAnZmFsc2UnKSB0aGF0LmNvbmZpZy52YWwgPSBmYWxzZVxyXG5cdFx0XHRcdFx0bGV0IHF1ZXJ5ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ3F1ZXJ5X2VkaXQnLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0ZGJOYW1lOiBcInd4X2NvbmZpZ1wiLFxyXG5cdFx0XHRcdFx0XHRcdGZpbHRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0J19pZCc6IHRoYXQuY29uZmlnSWRcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHVwRGF0YTogdGhhdC5jb25maWcsXHJcblx0XHRcdFx0XHRcdFx0YWRkRGF0YTogdGhhdC5jb25maWcsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYocXVlcnkucmVzdWx0LnN1Y2Nlc3Mpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldENvbmZpZ0xpc3QoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHF1ZXJ5LnJlc3VsdC5tc2csXHJcblx0XHRcdFx0XHRcdG1hc2s6IHRydWUsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0LmVkaXRTaG93ID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgc3dpdGNoQ2hhbmdlKGlkLCBpbmRleCl7XHJcblx0XHRcdFx0dGhpcy5jb25maWdJZCA9IGlkXHJcblx0XHRcdFx0dGhpcy5jb25maWcubmFtZSA9IHRoaXMuY29uZmlnTGlzdFtpbmRleF0ubmFtZVxyXG5cdFx0XHRcdHRoaXMuY29uZmlnLmtleSA9IHRoaXMuY29uZmlnTGlzdFtpbmRleF0ua2V5XHJcblx0XHRcdFx0dGhpcy5jb25maWcudmFsID0gdGhpcy5jb25maWdMaXN0W2luZGV4XS52YWxcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo5ou85ZG95Yqg6L295LitLi4uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYodGhpcy5jb25maWcudmFsID09ICd0cnVlJykgdGhpcy5jb25maWcudmFsID0gdHJ1ZVxyXG5cdFx0XHRcdGVsc2UgaWYodGhpcy5jb25maWcudmFsID09ICdmYWxzZScpIHRoaXMuY29uZmlnLnZhbCA9IGZhbHNlXHJcblx0XHRcdFx0bGV0IHF1ZXJ5ID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRcdG5hbWU6ICdxdWVyeV9lZGl0JyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZGJOYW1lOiBcInd4X2NvbmZpZ1wiLFxyXG5cdFx0XHRcdFx0XHRmaWx0ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHQnX2lkJzogdGhpcy5jb25maWdJZFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR1cERhdGE6IHRoaXMuY29uZmlnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0aWYoIXF1ZXJ5LnJlc3VsdC5zdWNjZXNzKXtcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlnTGlzdFtpbmRleF0udmFsID0gIXRoaXMuY29uZmlnTGlzdFtpbmRleF0udmFsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0dGl0bGU6IHF1ZXJ5LnJlc3VsdC5tc2csXHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdHBhZ2V7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG5cdH1cclxuXHQudGFie1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4O1xyXG5cdH1cclxuXHQuYXJyb3ItcmlnaHR7XHJcblx0XHR3aWR0aDogMTVycHg7XHJcblx0XHRoZWlnaHQ6IDE1cnB4O1xyXG5cdFx0Ym9yZGVyLXRvcDogM3JweCBzb2xpZCAjYTlhY2IzO1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAzcnB4IHNvbGlkICNhOWFjYjM7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0fVxyXG5cdC5ib3JkZXItYm90dG9te1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXJweCBzb2xpZCAjRjNGNEY2O1xyXG5cdH1cclxuXHQueWVze1xyXG5cdFx0Y29sb3I6ICMxOUJFNkI7XHJcblx0fVxyXG5cdC50aXRsZXtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1NTA7XHJcblx0fVxyXG5cdC5hZGR7XHJcblx0XHRhbmltYXRpb246IHRpYW9iaWcgMS41cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAxNDBycHg7XHJcblx0XHRyaWdodDogMzBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMjBycHg7XHJcblx0XHR3aWR0aDogOTBycHg7XHJcblx0XHRoZWlnaHQ6IDkwcnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDFweCA4cHggI0M4QzhDODtcclxuXHRcdGltYWdle1xyXG5cdFx0XHR3aWR0aDogOTBycHg7XHJcblx0XHRcdGhlaWdodDogOTBycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdEBrZXlmcmFtZXMgdGlhb2JpZyB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC45Mik7XHJcblx0XHR9XHJcblx0XHQyNSUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG5cdFx0fVxyXG5cdFx0NTAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcclxuXHRcdH1cclxuXHRcdDc1JSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcblx0XHR9XHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk0KTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb25maWdMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jb25maWdMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTU1Mjk2NjU4MzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==