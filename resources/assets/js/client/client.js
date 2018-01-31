require('./../bootstrap');
window.Vue = require('vue');

import router from './router/router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSession from 'vue-session'
Vue.use(VueSession)

const swal = require('sweetalert2')
const swalPlugin = {}
swalPlugin.install = function(Vue){
	Vue.prototype.$swal = swal
}
Vue.use(swalPlugin)
var _http = axios.create({
    baseURL: `/client`
});
_http.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error.response.status === 422) {
    	var contentHtml = '';
        Object.keys(error.response.data.errors).forEach((key) => {
          contentHtml +=  '<p class="text-danger">'+error.response.data.errors[key][0]+'</p>'
        })
        
        swal({
          title: error.response.data.message,
          html: contentHtml,
          type: 'error',
          timer: 5000,
        })	
    }else{
    	swal(error.response.statusText, error.response.data.message, "error")
    }
    return Promise.reject(error.response);
})
Vue.prototype.$http = _http
Vue.config.productionTip = false


const app = new Vue({
    el: '#vue-wrapper',
    template: '<App-Vue></App-Vue>',
    components: {
    	'App-Vue': function (resolve) {
    		require(['./components/App'], resolve)
    	}
    },
    router
});
