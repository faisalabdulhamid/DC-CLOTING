webpackJsonp([14],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("38b10582", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b12e387\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b12e387\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 163:
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


/* harmony default export */ __webpack_exports__["default"] = ({
	name: "Edit",
	props: ['id'],
	data: function data() {
		return {
			url: 'api/dc/provinsi',
			data: {
				provinsi: ''
			}
		};
	},

	computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({ 'token': 'token' })),
	methods: {
		getData: function getData() {
			var self = this;
			self.$http.get(self.url + '/' + self.id, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				Vue.set(self.$data, 'data', res.data);
			});
		},
		simpan: function simpan() {
			var self = this;
			self.$http.put(self.url + '/' + self.id, self.data, {
				headers: {
					Authorization: 'Bearer ' + self.token
				}
			}).then(function (res) {
				self.$swal({
					text: res.data.message,
					type: 'success',
					timer: 5000
				}).then(function () {
					self.$router.push({ name: 'provinsi-index' });
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
	beforeMount: function beforeMount() {
		this.getData();
	}
});

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "breadcrumb-line" }, [
      _c("ul", { staticClass: "breadcrumb" }, [
        _c("li", [_vm._v("Provinsi")]),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: { name: "provinsi-index" } } }, [
              _vm._v("Data Provinsi")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Ubah Provinsi")])
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
                  attrs: { for: "provinsi" }
                },
                [_vm._v("Provinsi")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-10" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.provinsi,
                      expression: "data.provinsi"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "provinsi" },
                  domProps: { value: _vm.data.provinsi },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "provinsi", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
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
        _vm._v(" Ubah Provinsi")
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
    require("vue-hot-reload-api")      .rerender("data-v-4b12e387", module.exports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(161)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(164)
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
Component.options.__file = "resources\\assets\\js\\application\\components\\provinsi\\edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b12e387", Component.options)
  } else {
    hotAPI.reload("data-v-4b12e387", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});