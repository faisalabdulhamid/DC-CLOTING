webpackJsonp([56],{

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
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
Component.options.__file = "resources\\assets\\js\\client\\components\\user-page\\desain-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-745e3470", Component.options)
  } else {
    hotAPI.reload("data-v-745e3470", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 304:
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
    name: 'Produk-List',
    props: {
        gambar: {
            default: 'img'
        },
        dibuat: {
            default: 'dibuat'
        },
        like: {
            default: 0
        },
        dislike: {
            default: 0
        },
        id: Number
    },
    methods: {
        handleLike: function handleLike() {
            this.$emit('like', this.id);
        },
        handleDislike: function handleDislike() {
            this.$emit('dislike', this.id);
        }
    }
});

/***/ }),

/***/ 305:
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
          _c("h6", [_vm._v("created by " + _vm._s(_vm.dibuat))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item--product-btn" }, [
          _c("div", { staticClass: "item--product-btn-pesan" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-default btn-block",
                on: { click: _vm.handleLike }
              },
              [
                _c("i", { staticClass: "fa fa-thumbs-o-up" }),
                _vm._v(" "),
                _c("span", { staticClass: "label label-warning pull-right" }, [
                  _vm._v(_vm._s(_vm.like))
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item--product-btn-whatsapp" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-default btn-block",
                on: { click: _vm.handleDislike }
              },
              [
                _c("i", { staticClass: "fa fa-thumbs-o-down" }),
                _vm._v(" "),
                _c("span", { staticClass: "label label-danger pull-right" }, [
                  _vm._v(_vm._s(_vm.dislike))
                ])
              ]
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-745e3470", module.exports)
  }
}

/***/ })

});