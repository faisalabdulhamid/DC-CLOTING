webpackJsonp([7],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(101)
/* template */
var __vue_template__ = __webpack_require__(102)
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
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

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
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 101:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 102:
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
              _c("span", [_vm._v("Web Developer")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "popup dropdown-menu dropdown-menu-right" }, [
          _c("div", { staticClass: "thumbnail" }, [
            _vm._m(0, false, false),
            _vm._v(" "),
            _c("div", { staticClass: "caption text-center" }, [
              _c("h6", [
                _vm._v(_vm._s(_vm.user.nama) + " "),
                _c("small", [_vm._v("Front end developer")])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(1, false, false)
        ])
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
        _c(
          "li",
          { class: { active: _vm.menuName == "kuesioner" } },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "kuesioner-index", params: { id: "" } } }
              },
              [
                _c("span", [_vm._v("Kuesioner")]),
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
          { class: { active: _vm.menuName == "provinsi" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "provinsi-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Provinsi")]),
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
        ),
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
        _c(
          "li",
          { class: { active: _vm.menuName == "kategori" } },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "kategori-index", params: { id: "" } } } },
              [
                _c("span", [_vm._v("Kategori")]),
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
              { attrs: { to: { name: "desain", params: { id: "" } } } },
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
        _c("li", [
          _c("a", { staticClass: "expand", attrs: { href: "#" } }, [
            _c("span", [_vm._v(_vm._s(_vm.menuName))]),
            _vm._v(" "),
            _c("i", { staticClass: "icon-coin" })
          ]),
          _vm._v(" "),
          _vm._m(2, false, false)
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
    return _c("div", { staticClass: "thumb" }, [
      _c("img", { attrs: { alt: "", src: "#" } }),
      _vm._v(" "),
      _c("div", { staticClass: "thumb-options" }, [
        _c("span", [
          _c(
            "a",
            { staticClass: "btn btn-icon btn-success", attrs: { href: "#" } },
            [_c("i", { staticClass: "icon-pencil" })]
          ),
          _c(
            "a",
            { staticClass: "btn btn-icon btn-success", attrs: { href: "#" } },
            [_c("i", { staticClass: "icon-remove" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-group" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("i", { staticClass: "icon-pencil3 text-muted" }),
        _vm._v(" My posts "),
        _c("span", { staticClass: "label label-success" }, [_vm._v("289")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("i", { staticClass: "icon-people text-muted" }),
        _vm._v(" Users online "),
        _c("span", { staticClass: "label label-danger" }, [_vm._v("892")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("i", { staticClass: "icon-stats2 text-muted" }),
        _vm._v(" Reports "),
        _c("span", { staticClass: "label label-primary" }, [_vm._v("92")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("i", { staticClass: "icon-stack text-muted" }),
        _vm._v(" Balance\n            "),
        _c("h5", { staticClass: "pull-right text-danger" }, [_vm._v("$45.389")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("a", { attrs: { href: "invoice.html" } }, [
          _vm._v("Invoice template")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "invoice_list.html" } }, [
          _vm._v("Invoice list")
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
    require("vue-hot-reload-api")      .rerender("data-v-3ac5a43e", module.exports)
  }
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("aea54cec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3832ff04\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./content.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3832ff04\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./content.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 107:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: "Content",
	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'user': 'user/user' })),
	components: {
		'sidebar-vue': __webpack_require__(100),
		'footer-vue': __webpack_require__(16)
	},
	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		getUsers: 'user/setUser',
		showLoad: 'showLoading',
		hideLoading: 'hideLoading'
	})),
	created: function created() {
		var self = this;
		self.showLoad();
		self.getUsers().then(function () {
			self.hideLoading();
		}).catch(function (err) {
			if (err.status == 401) {
				setTimeout(function () {
					self.getUsers();
				}, 1000);
			}
		});
	}
});

/***/ }),

/***/ 108:
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
          _vm._m(0, false, false),
          _vm._v(" "),
          _vm._m(1, false, false),
          _vm._v(" "),
          _c("div", { staticClass: "panel panel-default" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _vm._m(2, false, false),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-default", on: { click: _vm.showLoad } },
                [_c("i", { staticClass: "icon-plus" })]
              )
            ]),
            _vm._v(" "),
            _vm._m(3, false, false)
          ]),
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
        _c("h3", [
          _vm._v("Dashboard "),
          _c("small", [_vm._v("Welcome Eugene. 12 hours since last visit")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "breadcrumb-line" }, [
      _c("ul", { staticClass: "breadcrumb" }, [
        _c("li", [
          _c("a", { attrs: { href: "index.html" } }, [_vm._v("Home")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "panel-title" }, [
      _c("i", { staticClass: "icon-table2" }),
      _vm._v(" Striped & bordered table")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-striped table-bordered" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("#")]),
            _vm._v(" "),
            _c("th", [_vm._v("First Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Last Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Username")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("Mark")]),
            _vm._v(" "),
            _c("td", [_vm._v("Otto")]),
            _vm._v(" "),
            _c("td", [_vm._v("@mdo")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("2")]),
            _vm._v(" "),
            _c("td", [_vm._v("Jacob")]),
            _vm._v(" "),
            _c("td", [_vm._v("Thornton")]),
            _vm._v(" "),
            _c("td", [_vm._v("@fat")])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("3")]),
            _vm._v(" "),
            _c("td", [_vm._v("Larry")]),
            _vm._v(" "),
            _c("td", [_vm._v("the Bird")]),
            _vm._v(" "),
            _c("td", [_vm._v("@twitter")])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3832ff04", module.exports)
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(49)
/* template */
var __vue_template__ = __webpack_require__(50)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

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
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("62f7e8c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d2f899b4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./footer.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d2f899b4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 49:
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

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0, false, false)
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(107)
/* template */
var __vue_template__ = __webpack_require__(108)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3832ff04", Component.options)
  } else {
    hotAPI.reload("data-v-3832ff04", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});