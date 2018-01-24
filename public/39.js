webpackJsonp([39],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(267)
/* template */
var __vue_template__ = __webpack_require__(268)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\transaksi\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f7b3ffb", Component.options)
  } else {
    hotAPI.reload("data-v-1f7b3ffb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 267:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: "Tambah",
	data: function data() {
		return {
			data: {
				pelangga: '',
				tanggal: '',
				pesanan: [{ 'produk_id': '', 'harga': 0, qty: 1 }]
			},
			produk: [],
			pelanggan: []
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'token': 'token' }), {
		total_bayar: function total_bayar() {
			_.sumBy(this.data.pesanan, _.partial(_.sumBy, this.data.pesanan.qty));
		}
	}),
	methods: {
		add: function add() {
			this.data.pesanan.push({
				'produk_id': '',
				'harga': 0,
				'qty': 1
			});
		},
		remove: function remove(idx) {
			if (this.data.pesanan.length > 1) {
				this.data.pesanan.splice(idx, 1);
			}
		},
		handleChange: function handleChange(event, idx) {
			var harga = _.find(this.produk, function (obj) {
				return obj.id == event.target.value;
			}).harga;
			this.data.pesanan[idx].harga = harga;
		},
		getProduk: function getProduk() {
			var _this = this;

			this.$http.get('/api/dc/produk?all=true', {
				headers: {
					Authorization: 'Bearer ' + this.token
				}
			}).then(function (res) {
				Vue.set(_this.$data, 'produk', res.data);
			});
		},
		getPelanggan: function getPelanggan() {
			var _this2 = this;

			this.$http.get('/api/dc/pelanggan?all=true', {
				headers: {
					Authorization: 'Bearer ' + this.token
				}
			}).then(function (res) {
				Vue.set(_this2.$data, 'pelanggan', res.data);
			});
		},
		simpan: function simpan() {
			var self = this;
			self.$http.post('/api/dc/transaksi', self.data, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				self.$swal({
					text: res.data.message,
					type: 'success',
					timer: 5000
				}).then(function () {
					self.$router.push({ name: 'transaksi-index' });
				});
			}).catch(function (error) {
				if (error.status === 401) {
					setTimeout(function () {
						self.simpan();
					}, 1000);
				}
			});
		}
	},
	created: function created() {
		this.getProduk();
		this.getPelanggan();
	}
});

/***/ }),

/***/ 268:
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
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "transaksi-index" } } }, [
              _vm._v("transaksi")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Tambah transaksi")])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-default" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            staticClass: "form-horizontal",
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.simpan($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "control-label col-md-2 text-right",
                  attrs: { for: "pelanggan" }
                },
                [_vm._v("Pelanggan")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.pelanggan,
                        expression: "data.pelanggan"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "pelanggan" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.data,
                          "pelanggan",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.pelanggan, function(item) {
                    return _c("option", { domProps: { value: item.id } }, [
                      _vm._v(_vm._s(item.nama))
                    ])
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "control-label col-md-2 text-right",
                  attrs: { for: "tanggal" }
                },
                [_vm._v("Tanggal")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.tanggal,
                      expression: "data.tanggal"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "tanggal" },
                  domProps: { value: _vm.data.tanggal },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "tanggal", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                {
                  staticClass: "control-label col-md-2 text-right",
                  attrs: { for: "total_bayar" }
                },
                [_vm._v("Total Bayar")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", id: "total_bayar", readonly: "" },
                  domProps: { value: _vm.total_bayar }
                })
              ])
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-bordered" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.data.pesanan, function(item, idx) {
                  return _c("tr", [
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item.produk_id,
                              expression: "item.produk_id"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  item,
                                  "produk_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                _vm.handleChange($event, idx)
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.produk, function(it) {
                          return _c("option", { domProps: { value: it.id } }, [
                            _vm._v(_vm._s(it.nama))
                          ])
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.harga,
                            expression: "item.harga"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: item.harga },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(item, "harga", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: item.qty,
                            expression: "item.qty"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: item.qty },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(item, "qty", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: item.harga * item.qty }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "btn-group btn-group-sm" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-default",
                            on: { click: _vm.add }
                          },
                          [_c("i", { staticClass: "icon-plus" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-default",
                            on: {
                              click: function($event) {
                                _vm.remove(idx)
                              }
                            }
                          },
                          [_c("i", { staticClass: "icon-minus" })]
                        )
                      ])
                    ])
                  ])
                })
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c("td", { attrs: { colspan: "3" } }),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.total_bayar }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(2)
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
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h6", { staticClass: "panel-title" }, [
        _c("i", { staticClass: "icon-users" }),
        _vm._v(" Tambah transaksi")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Produk")]),
        _vm._v(" "),
        _c("th", [_vm._v("Harga")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "80px" } }, [_vm._v("Qty")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "120px" } }, [_vm._v("#")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-actions text-right" }, [
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Simpan")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f7b3ffb", module.exports)
  }
}

/***/ })

});