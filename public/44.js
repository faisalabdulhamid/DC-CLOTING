webpackJsonp([44],{

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(270)
/* template */
var __vue_template__ = __webpack_require__(271)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\client\\components\\user-page\\produk-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-217bfca2", Component.options)
  } else {
    hotAPI.reload("data-v-217bfca2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Produk-List',
	props: ['gambar', 'harga', 'produk']
});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-sm-4 col-md-3 col-xs-12" }, [
    _c("div", { staticClass: "item-" }, [
      _c("div", { staticClass: "item--product" }, [
        _c("a", [
          _c("div", { staticClass: "item--product-image" }, [
            _c("img", {
              staticClass: "img img-circle img-responsive",
              attrs: { src: _vm.gambar }
            })
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "item--product-title" }, [
            _vm._v(_vm._s(_vm.harga))
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "item--product-subtitle" }, [
            _vm._v(_vm._s(_vm.produk))
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-217bfca2", module.exports)
  }
}

/***/ })

});