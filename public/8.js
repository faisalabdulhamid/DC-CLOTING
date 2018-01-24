webpackJsonp([8],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\transaksi\\transaksi.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-586c050e", Component.options)
  } else {
    hotAPI.reload("data-v-586c050e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ac5a43e", Component.options)
  } else {
    hotAPI.reload("data-v-3ac5a43e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Sidebar",
  props: ['user'],
  computed: {
    menuName: function menuName() {
      return this.$store.state.route.meta.menu;
    }
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sidebar collapse" }, [
    _c("div", { staticClass: "sidebar-content" }, [
      _c("div", { staticClass: "user-menu dropdown" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { href: "#", "data-toggle": "dropdown" }
          },
          [
            _c("img", { attrs: { src: "#", alt: "" } }),
            _vm._v(" "),
            _c("div", { staticClass: "user-info" }, [
              _vm._v(_vm._s(_vm.user.nama)),
              _c("span", [_vm._v(_vm._s(_vm.user.status))])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "navigation" }, [
        _c(
          "li",
          { class: { active: _vm.menuName == "content" } },
          [
            _c("router-link", { attrs: { to: { name: "content" } } }, [
              _c("span", [_vm._v("Dashboard")]),
              _vm._v(" "),
              _c("i", { staticClass: "icon-screen2" })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "pegawai" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "pegawai-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Pegawai")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.user.status == "marketing"
          ? _c(
              "li",
              { class: { active: _vm.menuName == "kuesioner" } },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "kuesioner-index", params: { id: "" } }
                    }
                  },
                  [
                    _c("span", [_vm._v("Kuesioner")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "icon-users" })
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.user.status == "marketing"
          ? _c(
              "li",
              { class: { active: _vm.menuName == "provinsi" } },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "provinsi-index", params: { id: "" } }
                    }
                  },
                  [
                    _c("span", [_vm._v("Provinsi")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "icon-users" })
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.user.status == "marketing"
          ? _c(
              "li",
              { class: { active: _vm.menuName == "kota" } },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "kota-index", params: { id: "" } } } },
                  [
                    _c("span", [_vm._v("Kota")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "icon-users" })
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "pelanggan" } },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "pelanggan-index", params: { id: "" } } }
              },
              [
                _c("span", [_vm._v("Pelanggan")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.user.status == "marketing"
          ? _c(
              "li",
              { class: { active: _vm.menuName == "kategori" } },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "kategori-index", params: { id: "" } }
                    }
                  },
                  [
                    _c("span", [_vm._v("Kategori")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "icon-users" })
                  ]
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "produk" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "produk-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Produk")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "promosi" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "promosi-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Promosi")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "hasil-kuesioner" } },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "hasil-kuesioner", params: { id: "" } } }
              },
              [
                _c("span", [_vm._v("Hasil Kuesioner")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "desain" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "desain-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Desain")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { class: { active: _vm.menuName == "transaksi" } },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "transaksi-index", params: { id: "" } } }
              },
              [
                _c("span", [_vm._v("Transaksi")]),
                _vm._v(" "),
                _c("i", { staticClass: "icon-users" })
              ]
            )
          ],
          1
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-3ac5a43e", module.exports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(111)
/* template */
var __vue_template__ = __webpack_require__(112)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d2f899b4", Component.options)
  } else {
    hotAPI.reload("data-v-d2f899b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 111:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'Footer'
});

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer clearfix" }, [
      _c("div", { staticClass: "pull-left" }, [_vm._v("DC-Cloting © 2017. ")]),
      _vm._v(" "),
      _c("div", { staticClass: "pull-right icons-group" }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "icon-screen2" })
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "icon-balance" })
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "icon-cog3" })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d2f899b4", module.exports)
  }
}

/***/ }),

/***/ 261:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: "Transaksi",
	data: function data() {
		return {
			// user: {}	
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'user': 'user/user' })),
	components: {
		'sidebar-vue': __webpack_require__(107),
		'footer-vue': __webpack_require__(110)
	},
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		getUsers: 'user/setUser',
		showLoad: 'showLoading',
		hideLoading: 'hideLoading'
	})),
	created: function created() {
		var self = this;
		self.showLoad();
		this.getUsers().then(function () {
			self.hideLoading();
		}).catch(function (err) {
			if (err.status === 401) {
				setTimeout(function () {
					self.getUsers();
				}, 1000);
			}
		});
	}
});

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-container" },
    [
      _c("sidebar-vue", { attrs: { user: _vm.user } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page-content" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("router-view"),
          _vm._v(" "),
          _c("footer-vue")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h3", [_vm._v("Data Transaksi")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-586c050e", module.exports)
  }
}

/***/ })

});