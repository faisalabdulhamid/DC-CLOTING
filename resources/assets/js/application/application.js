'use strict'

require('./config/bootsrap')
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

window.onload = function () {
	const app = new Vue({
	    template: '<app-vue/>',
	    components: {
	    	'app-vue': require('./components/app')
	    },
	    store,
	    router
	}).$mount('#root')
}
