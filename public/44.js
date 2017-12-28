webpackJsonp([44],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("21cd29b6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-befcc8a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-befcc8a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n.actions {\n  width: 90px;\n}\n", ""]);

// exports


/***/ }),

/***/ 209:
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
//
//
//
//
//
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
			url: '/api/produk'
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'table': 'table/table', 'token': 'token' })),
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		setTableVuex: 'table/setTable',
		showLoad: 'showLoading',
		hideLoading: 'hideLoading'
	}), {
		setTable: function setTable() {
			var self = this;
			self.showLoad();
			self.$http.get('' + self.url, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				self.setTableVuex(res.data).then(function () {
					self.hideLoading();
				});
			}).catch(function (error) {
				if (error.status === 401) {
					setTimeout(function () {
						self.setTable();
					}, 1000);
				}
			});
		},
		next: function next() {
			this.url = this.table.next_page_url;
			this.setTable();
		},
		prev: function prev() {
			this.url = this.table.prev_page_url;
			this.setTable();
		},
		hapus: function hapus(id) {
			var self = this;
			self.$swal({
				title: "Apakah anda yakin menghapus Data Ini ?",
				text: "Data yang terhapus Selamanya",
				type: "warning",
				showCancelButton: true
			}).then(function (result) {
				if (result.value) {
					self.$http.delete('/api/produk/' + id, {
						headers: {
							Authorization: 'Bearer ' + self.token
						}
					}).then(function (res) {
						self.$swal({
							text: res.data.message,
							type: "success",
							timer: 5000
						}).then(function () {
							self.setTable();
						});
					}).catch(function (error) {
						if (error.status === 401) {
							setTimeout(function () {
								self.hapus(id);
							}, 1000);
						}
					});
				}
			});
		}
	}),
	beforeMount: function beforeMount() {
		this.setTable();
	}
});

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0, false, false),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        { staticClass: "panel-heading" },
        [
          _vm._m(1, false, false),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success btn-sm pull-right",
              attrs: { to: { name: "produk-tambah" } }
            },
            [_vm._v("Tambah")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c("table", { staticClass: "table table-striped table-bordered" }, [
          _vm._m(2, false, false),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.table.data, function(item) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(item.kode))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.nama))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.harga))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "div",
                    { staticClass: "btn-group btn-group-sm pull-right" },
                    [
                      _vm._m(3, true, false),
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
                                    name: "produk-edit",
                                    params: { id: item.id }
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "icon-pencil3" }),
                                _vm._v(" Ubah")
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "produk-show",
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
                        ),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.hapus(item.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "icon-user-minus" }),
                              _vm._v(" Hapus")
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            })
          ),
          _vm._v(" "),
          _vm.table.next_page_url != null || _vm.table.prev_page_url != null
            ? _c("tfoot", [
                _c("tr", [
                  _c("td", { attrs: { colspan: "4" } }, [
                    _c("div", { staticClass: "btn-group btn-group-xs" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-info",
                          attrs: { disabled: _vm.table.prev_page_url === null },
                          on: { click: _vm.prev }
                        },
                        [_c("i", { staticClass: "icon-arrow-left" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-info",
                          attrs: { disabled: _vm.table.next_page_url === null },
                          on: { click: _vm.next }
                        },
                        [_c("i", { staticClass: "icon-arrow-right2" })]
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
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
    return _c("div", { staticClass: "breadcrumb-line" }, [
      _c("ul", { staticClass: "breadcrumb" }, [
        _c("li", [_vm._v("Produk")]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Data Produk")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "panel-title" }, [
      _c("i", { staticClass: "icon-users" }),
      _vm._v(" Data Produk")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Kode")]),
        _vm._v(" "),
        _c("th", [_vm._v("Produk")]),
        _vm._v(" "),
        _c("th", [_vm._v("Harga")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-befcc8a4", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(207)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(209)
/* template */
var __vue_template__ = __webpack_require__(210)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\application\\components\\produk\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-befcc8a4", Component.options)
  } else {
    hotAPI.reload("data-v-befcc8a4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});