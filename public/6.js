webpackJsonp([6],{169:function(t,s,e){var a=e(170);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(38)("4d890012",a,!0)},170:function(t,s,e){(t.exports=e(37)(void 0)).push([t.i,"",""])},171:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(12),i=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};s.default={name:"Kategori",data:function(){return{}},computed:i({},Object(a.c)({user:"user/user"})),components:{"sidebar-vue":e(60),"footer-vue":e(63)},methods:i({},Object(a.b)({getUsers:"user/setUser",showLoad:"showLoading",hideLoading:"hideLoading"})),created:function(){var t=this;t.showLoad(),t.getUsers().then(function(){t.hideLoading()}).catch(function(s){401===s.status&&setTimeout(function(){t.getUsers()},1e3)})}}},172:function(t,s){t.exports={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-container"},[s("sidebar-vue",{attrs:{user:this.user}}),this._v(" "),s("div",{staticClass:"page-content"},[this._m(0,!1,!1),this._v(" "),s("router-view"),this._v(" "),s("footer-vue")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-header"},[s("div",{staticClass:"page-title"},[s("h3",[this._v("Kategori")])])])}]}},301:function(t,s,e){var a=e(11)(e(171),e(172),!1,function(t){e(169)},null,null);t.exports=a.exports},60:function(t,s,e){var a=e(11)(e(61),e(62),!1,null,null,null);t.exports=a.exports},61:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e(12);s.default={name:"Sidebar",props:["user"],computed:{menuName:function(){return this.$store.state.route.meta.menu}}}},62:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar collapse"},[e("div",{staticClass:"sidebar-content"},[e("div",{staticClass:"user-menu dropdown"},[e("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[e("img",{attrs:{src:"#",alt:""}}),t._v(" "),e("div",{staticClass:"user-info"},[t._v(t._s(t.user.nama)),e("span",[t._v("Web Developer")])])]),t._v(" "),e("div",{staticClass:"popup dropdown-menu dropdown-menu-right"},[e("div",{staticClass:"thumbnail"},[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"caption text-center"},[e("h6",[t._v(t._s(t.user.nama)+" "),e("small",[t._v("Front end developer")])])])]),t._v(" "),t._m(1,!1,!1)])]),t._v(" "),e("ul",{staticClass:"navigation"},[e("li",{class:{active:"content"==t.menuName}},[e("router-link",{attrs:{to:{name:"content"}}},[e("span",[t._v("Dashboard")]),t._v(" "),e("i",{staticClass:"icon-screen2"})])],1),t._v(" "),e("li",{class:{active:"pegawai"==t.menuName}},[e("router-link",{attrs:{to:{name:"pegawai-index",params:{id:""}}}},[e("span",[t._v("Pegawai")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"kuesioner"==t.menuName}},[e("router-link",{attrs:{to:{name:"kuesioner-index",params:{id:""}}}},[e("span",[t._v("Kuesioner")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"provinsi"==t.menuName}},[e("router-link",{attrs:{to:{name:"provinsi-index",params:{id:""}}}},[e("span",[t._v("Provinsi")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"kota"==t.menuName}},[e("router-link",{attrs:{to:{name:"kota-index",params:{id:""}}}},[e("span",[t._v("Kota")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"pelanggan"==t.menuName}},[e("router-link",{attrs:{to:{name:"pelanggan-index",params:{id:""}}}},[e("span",[t._v("Pelanggan")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"kategori"==t.menuName}},[e("router-link",{attrs:{to:{name:"kategori-index",params:{id:""}}}},[e("span",[t._v("Kategori")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"produk"==t.menuName}},[e("router-link",{attrs:{to:{name:"produk-index",params:{id:""}}}},[e("span",[t._v("Produk")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"promosi"==t.menuName}},[e("router-link",{attrs:{to:{name:"promosi-index",params:{id:""}}}},[e("span",[t._v("Promosi")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"hasil-kuesioner"==t.menuName}},[e("router-link",{attrs:{to:{name:"hasil-kuesioner",params:{id:""}}}},[e("span",[t._v("Hasil Kuesioner")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",{class:{active:"desain"==t.menuName}},[e("router-link",{attrs:{to:{name:"desain-index",params:{id:""}}}},[e("span",[t._v("Desain")]),t._v(" "),e("i",{staticClass:"icon-users"})])],1),t._v(" "),e("li",[e("a",{staticClass:"expand",attrs:{href:"#"}},[e("span",[t._v(t._s(t.menuName))]),t._v(" "),e("i",{staticClass:"icon-coin"})]),t._v(" "),t._m(2,!1,!1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"thumb"},[s("img",{attrs:{alt:"",src:"#"}}),this._v(" "),s("div",{staticClass:"thumb-options"},[s("span",[s("a",{staticClass:"btn btn-icon btn-success",attrs:{href:"#"}},[s("i",{staticClass:"icon-pencil"})]),s("a",{staticClass:"btn btn-icon btn-success",attrs:{href:"#"}},[s("i",{staticClass:"icon-remove"})])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"icon-pencil3 text-muted"}),t._v(" My posts "),e("span",{staticClass:"label label-success"},[t._v("289")])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"icon-people text-muted"}),t._v(" Users online "),e("span",{staticClass:"label label-danger"},[t._v("892")])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"icon-stats2 text-muted"}),t._v(" Reports "),e("span",{staticClass:"label label-primary"},[t._v("92")])]),t._v(" "),e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"icon-stack text-muted"}),t._v(" Balance\n            "),e("h5",{staticClass:"pull-right text-danger"},[t._v("$45.389")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"invoice.html"}},[this._v("Invoice template")])]),this._v(" "),s("li",[s("a",{attrs:{href:"invoice_list.html"}},[this._v("Invoice list")])])])}]}},63:function(t,s,e){var a=e(11)(e(66),e(67),!1,function(t){e(64)},null,null);t.exports=a.exports},64:function(t,s,e){var a=e(65);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(38)("78989af2",a,!0)},65:function(t,s,e){(t.exports=e(37)(void 0)).push([t.i,"",""])},66:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Footer"}},67:function(t,s){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"footer clearfix"},[s("div",{staticClass:"pull-left"},[this._v("DC-Cloting © 2017. ")]),this._v(" "),s("div",{staticClass:"pull-right icons-group"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-screen2"})]),this._v(" "),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-balance"})]),this._v(" "),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-cog3"})])])])}]}}});