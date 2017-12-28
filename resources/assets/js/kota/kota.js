require('./../bootstrap');
import {base_url, api_token} from './../config/env.config'

window.Vue = require('vue');

const _http = axios.create({
  	baseURL: base_url+'api/kota',
  	headers: {
  		Authorization : `Bearer ${api_token}`
  	}
});

Vue.prototype.$http = _http
Vue.config.productionTip = false

import App from './components/App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

const swal = require('sweetalert2')
const swalPlugin = {}
swalPlugin.install = function(Vue){
	Vue.prototype.$swal = swal
}
Vue.use(swalPlugin)

const app = new Vue({
    el: '#root',
    template: '<app></app>',
    components: { App },
    router
});
