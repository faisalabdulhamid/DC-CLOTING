webpackJsonp([12],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(265)
/* template */
var __vue_template__ = __webpack_require__(266)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b16ef23"
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
Component.options.__file = "resources\\assets\\js\\application\\components\\transaksi\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b16ef23", Component.options)
  } else {
    hotAPI.reload("data-v-6b16ef23", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("f2c369ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b16ef23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b16ef23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.actions[data-v-6b16ef23] {\n  width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'Index',
	data: function data() {
		return {
			data: [],
			url: '/api/dc/transaksi'
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'table': 'table/table', 'token': 'token', 'user': 'user/user' })),
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		setTableVuex: 'table/setTable',
		showLoad: 'showLoading',
		hideLoading: 'hideLoading'
	}), {
		setTable: function setTable() {
			var _this = this;

			var self = this;
			self.showLoad();
			self.$http.get('' + self.url, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				Vue.set(_this.$data, 'data', res.data);
				_this.hideLoading();
			}).catch(function (error) {
				if (error.status === 401) {
					setTimeout(function () {
						self.setTable();
					}, 1000);
				}
			});
		}
	}),
	created: function created() {
		this.setTable();
	}
});

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "breadcrumb-line" }, [
      _c("ul", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "content" } } }, [
              _vm._v("Home")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Transaksi")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        { staticClass: "panel-heading" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success btn-sm pull-right",
              attrs: { to: { name: "transaksi-tambah" } }
            },
            [_vm._v("Tambah")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-striped table-bordered" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.data, function(item) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(item.tanggal))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.total_bayar))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    { staticClass: "btn-group btn-group-sm pull-right" },
                    [
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c("ul", { staticClass: "dropdown-menu icons-right" }, [
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "provinsi-edit",
                                    params: { id: item.id }
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-pencil3" }),
                                _vm._v(" Lihat")
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            })
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "panel-title" }, [
      _c("i", { staticClass: "icon-users" }),
      _vm._v(" Data Transaksi")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Tanggal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Bayar")]),
        _vm._v(" "),
        _c("th", { staticClass: "actions" }, [_vm._v("#")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-info dropdown-toggle",
        attrs: { "data-toggle": "dropdown" }
      },
      [_vm._v(" Action"), _c("span", { staticClass: "caret" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b16ef23", module.exports)
  }
}

/***/ })

});