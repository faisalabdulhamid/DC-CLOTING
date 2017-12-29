'use strict'

export default function routes() {
	return [
		{ name: 'home', path: '/', component: function (resolve) {
			require(['./../components/user-page/home.vue'], resolve)
		}},
		{ name: 'produk', path: '/produk', component: function (resolve) {
			require(['./../components/user-page/index.vue'], resolve)
		}},
		{ name: 'desain', path: '/desain', component: function (resolve) {
			require(['./../components/user-page/desain.vue'], resolve)
		}},
		{ name: 'desain-upload', path: '/upload-desain', component: function (resolve) {
			require(['./../components/user-page/uploadDesain.vue'], resolve)
		}},
		{ name: 'kuesioner', path: '/kuesioner', component: function (resolve) {
			require(['./../components/user-page/kuesioner.vue'], resolve)
		}},
		{ name: 'promosi', path: '/promosi', component: function (resolve) {
			require(['./../components/user-page/promosi.vue'], resolve)
		}},
		{ name: 'about', path: '/about', component: function (resolve) {
			require(['./../components/user-page/about.vue'], resolve)
		}},
		{ name: 'contact', path: '/contact', component: function (resolve) {
			require(['./../components/user-page/contact.vue'], resolve)
		}},
		{ name: 'not-found', path: '*', component: function (resolve) {
			require(['./../components/user-page/not-found.vue'], resolve)
		}},
	]
}