webpackJsonp([41],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\desain\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8618a96", Component.options)
  } else {
    hotAPI.reload("data-v-c8618a96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 257:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Index',
	data: function data() {
		return {
			url: '/dc/desain'
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'table': 'table/table', 'token': 'token', 'user': 'user/user' })),
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
		hapus: function hapus(id) {
			var self = this;
			self.$swal({
				title: "Apakah anda yakin menghapus Data Ini ?",
				text: "Data yang terhapus Selamanya",
				type: "warning",
				showCancelButton: true
			}).then(function (result) {
				if (result.value) {
					self.$http.delete(self.url + '/' + id, {
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

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "breadcrumb-line" },
      [
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
          _c("li", { staticClass: "active" }, [_vm._v("Desain")])
        ]),
        _vm._v(" "),
        _vm.user.status == "marketing"
          ? _c(
              "router-link",
              {
                staticClass: "btn btn-success btn-xs pull-right",
                attrs: { to: { name: "desain-tambah" } }
              },
              [_vm._v("Tambah")]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.table, function(item) {
        return _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-6" }, [
          _c("div", { staticClass: "block" }, [
            _c("div", { staticClass: "thumbnail" }, [
              _vm.user.status == "marketing"
                ? _c(
                    "div",
                    {
                      staticStyle: {
                        position: "absolute",
                        right: "20px",
                        top: "20px"
                      }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.hapus(item.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "icon-remove" })]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("img", { attrs: { src: item.gambar, alt: "" } }),
              _vm._v(" "),
              _c("div", { staticClass: "caption text-center" }, [
                _c("h6", [
                  _vm._v("menyukai : " + _vm._s(item.like_count) + " "),
                  _c("br"),
                  _vm._v(" tidak menyukai : " + _vm._s(item.dislike_count)),
                  _c("small", [
                    _vm._v("Dibuat oleh: " + _vm._s(item.desainable.nama))
                  ])
                ])
              ])
            ])
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8618a96", module.exports)
  }
}

/***/ })

});