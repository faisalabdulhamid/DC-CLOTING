'use strict'

window._ = require('lodash');

try {
    // window.$ = window.jQuery = require('jquery');
    // require('bootstrap-sass');
    
    window.Vue = require('vue');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import VueRouter from 'vue-router'
import router from './router/router.js'
import store from './store/index.js'

Vue.use(VueRouter)

const swal = require('sweetalert2')
const swalPlugin = {}
swalPlugin.install = function(Vue){
	Vue.prototype.$swal = swal
}
Vue.use(swalPlugin)
var _http = axios.create({
    baseURL: ``
});
_http.interceptors.response.use((response) => {
    if (response.status == 201) {
        swal(response.data.title, response.data.message, "success")
    }
    return response;
}, function (error) {
    if (error.response.status === 422) {
    	var contentHtml = '';
        Object.keys(error.response.data.errors).forEach((key) => {
          contentHtml +=  '<p class="text-danger">'+error.response.data.errors[key][0]+'</p>'
        })
        
        swal({
          title: 'Data Tidak Sesuai',
          html: contentHtml,
          type: 'error',
          timer: 5000,
        })	
    }else{
    	swal('', error.response.data.message, "error")
    }
    return Promise.reject(error.response);
})
Vue.prototype.$http = _http
Vue.config.productionTip = false

import VueSession from 'vue-session'
Vue.use(VueSession)

import App from './App'

new Vue({
	el: '#root',
    store,
    router,
    template: '<app/>',
    components: { App },
})