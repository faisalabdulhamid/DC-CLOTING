webpackJsonp([42],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(12);
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: "LoginPage",
	data: function data() {
		return {
			data: {}
		};
	},

	methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
		setLogin: 'login'
	}), {
		login: function login() {
			var self = this;
			self.$http.post('/oauth/token', {
				"client_id": 2,
				"client_secret": "DC-Cloting",
				"grant_type": "password",
				"username": self.data.email,
				"password": self.data.password
			}).then(function (res) {
				self.setLogin(res.data).then(function () {
					setTimeout(function () {
						self.$router.push('/');
					}, 1000);
				});
			});
		}
	}),
	created: function created() {
		var self = this;
		if (self.$store.getters.isLoggedIn) {
			setTimeout(function () {
				self.$router.push('/');
			}, 10);
		}
	}
});

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-wrapper" }, [
    _c(
      "form",
      {
        attrs: { role: "form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.login($event)
          }
        }
      },
      [
        _vm._m(0, false, false),
        _vm._v(" "),
        _c("div", { staticClass: "well" }, [
          _c("div", { staticClass: "form-group has-feedback " }, [
            _c("label", [_vm._v("Email")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.email,
                  expression: "data.email"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "Email",
                name: "email",
                required: "",
                autofocus: ""
              },
              domProps: { value: _vm.data.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "icon-users form-control-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group has-feedback" }, [
            _c("label", [_vm._v("Password")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.password,
                  expression: "data.password"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "password",
                placeholder: "Password",
                name: "password",
                required: ""
              },
              domProps: { value: _vm.data.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("i", { staticClass: "icon-lock form-control-feedback" })
          ]),
          _vm._v(" "),
          _vm._m(1, false, false)
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "popup-header" }, [
      _c("span", { staticClass: "text-semibold" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-group pull-right" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { href: "#", "data-toggle": "dropdown" }
          },
          [_c("i", { staticClass: "icon-cogs" })]
        ),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "dropdown-menu icons-right dropdown-menu-right" },
          [
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "icon-info" }),
                _vm._v(" Forgot password?")
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row form-actions" }, [
      _c("div", { staticClass: "col-xs-6" }, [
        _c("div", { staticClass: "checkbox checkbox-success" }, [
          _c("label", [
            _c("input", {
              staticClass: "styled",
              attrs: { type: "checkbox", name: "remember" }
            }),
            _vm._v(" Remember Me\n\t\t\t\t\t")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-6" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-warning pull-right",
            attrs: { type: "submit" }
          },
          [_c("i", { staticClass: "icon-menu2" }), _vm._v(" Login")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fa624aa4", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(122)
/* template */
var __vue_template__ = __webpack_require__(123)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa624aa4", Component.options)
  } else {
    hotAPI.reload("data-v-fa624aa4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});