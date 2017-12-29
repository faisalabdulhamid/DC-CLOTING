webpackJsonp([45],{

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
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
Component.options.__file = "resources\\assets\\js\\client\\components\\user-page\\header-vue.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dc362e5", Component.options)
  } else {
    hotAPI.reload("data-v-4dc362e5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 294:
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
//
//
//
//
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
	name: 'Header-Vue'
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "navbar navbar-fixed-top" }, [
    _c("div", { staticClass: "header-nav" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "navbar-header" },
          [
            _vm._m(0, false, false),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "navbar-brand", attrs: { to: { name: "home" } } },
              [_vm._v("DC-CLOTHING")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "navbar-collapse collapse", attrs: { id: "navbar" } },
          [
            _c("ul", { staticClass: "nav navbar-nav" }, [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "home" } } }, [
                    _vm._v("Home")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "produk" } } }, [
                    _vm._v("Produk")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "kuesioner" } } }, [
                    _vm._v("Kuesioner")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "promosi" } } }, [
                    _vm._v("Promosi")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "desain" } } }, [
                    _vm._v("Desain")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "about" } } }, [
                    _vm._v("About")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { name: "contact" } } }, [
                    _vm._v("Contact")
                  ])
                ],
                1
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggle collapsed",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbar",
          "aria-expanded": "false",
          "aria-controls": "navbar"
        }
      },
      [
        _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" })
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4dc362e5", module.exports)
  }
}

/***/ })

});