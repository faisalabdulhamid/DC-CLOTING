webpackJsonp([42],{173:function(t,a,e){var s=e(174);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(38)("ca9d2f70",s,!0)},174:function(t,a,e){(t.exports=e(37)(void 0)).push([t.i,".actions{width:90px}",""])},175:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(12),n=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t};a.default={name:"Index",data:function(){return{url:"/api/dc/kategori"}},computed:n({},Object(s.c)({table:"table/table",token:"token"})),methods:n({},Object(s.b)({setTableVuex:"table/setTable",showLoad:"showLoading",hideLoading:"hideLoading"}),{setTable:function(){var t=this;t.showLoad(),t.$http.get(""+t.url,{headers:{Authorization:"Bearer "+t.token}}).then(function(a){t.setTableVuex(a.data).then(function(){t.hideLoading()})}).catch(function(a){401===a.status&&setTimeout(function(){t.setTable()},1e3)})},next:function(){this.url=this.table.next_page_url,this.setTable()},prev:function(){this.url=this.table.prev_page_url,this.setTable()},hapus:function(t){var a=this;a.$swal({title:"Apakah anda yakin menghapus Data Ini ?",text:"Data yang terhapus Selamanya",type:"warning",showCancelButton:!0}).then(function(e){e.value&&a.$http.delete(a.url+"/"+t,{headers:{Authorization:"Bearer "+a.token}}).then(function(t){a.$swal({text:t.data.message,type:"success",timer:5e3}).then(function(){a.setTable()})}).catch(function(e){401===e.status&&setTimeout(function(){a.hapus(t)},1e3)})})}}),beforeMount:function(){this.setTable()}}},176:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0,!1,!1),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[t._m(1,!1,!1),t._v(" "),e("router-link",{staticClass:"btn btn-success btn-sm pull-right",attrs:{to:{name:"kategori-tambah"}}},[t._v("Tambah")])],1),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-bordered"},[t._m(2,!1,!1),t._v(" "),e("tbody",t._l(t.table.data,function(a){return e("tr",[e("td",[t._v(t._s(a.kategori))]),t._v(" "),e("td",[e("div",{staticClass:"btn-group btn-group-sm pull-right"},[t._m(3,!0,!1),t._v(" "),e("ul",{staticClass:"dropdown-menu icons-right"},[e("li",[e("router-link",{attrs:{to:{name:"kategori-edit",params:{id:a.id}}}},[e("i",{staticClass:"icon-pencil3"}),t._v(" Ubah")])],1),t._v(" "),e("li",[e("a",{on:{click:function(e){e.stopPropagation(),t.hapus(a.id)}}},[e("i",{staticClass:"icon-user-minus"}),t._v(" Hapus")])])])])])])})),t._v(" "),null!=t.table.next_page_url||null!=t.table.prev_page_url?e("tfoot",[e("tr",[e("td",{attrs:{colspan:"4"}},[e("div",{staticClass:"btn-group btn-group-xs"},[e("a",{staticClass:"btn btn-icon btn-info",attrs:{disabled:null===t.table.prev_page_url},on:{click:t.prev}},[e("i",{staticClass:"icon-arrow-left"})]),t._v(" "),e("a",{staticClass:"btn btn-icon btn-info",attrs:{disabled:null===t.table.next_page_url},on:{click:t.next}},[e("i",{staticClass:"icon-arrow-right2"})])])])])]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"breadcrumb-line"},[a("ul",{staticClass:"breadcrumb"},[a("li",[this._v("Kategori")]),this._v(" "),a("li",{staticClass:"active"},[this._v("Data Kategori")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h6",{staticClass:"panel-title"},[a("i",{staticClass:"icon-users"}),this._v(" Data Kategori")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Kategori")]),this._v(" "),a("th",{staticClass:"actions"},[this._v("#")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-sm btn-info dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[this._v(" Action"),a("span",{staticClass:"caret"})])}]}},302:function(t,a,e){var s=e(11)(e(175),e(176),!1,function(t){e(173)},null,null);t.exports=s.exports}});