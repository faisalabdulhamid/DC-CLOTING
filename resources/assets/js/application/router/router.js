'use strict'
import VueRouter from 'vue-router'
import configRouter from './routes.js'
import store from './../store/index'

const router = new VueRouter({
	// mode: 'history',
    routes: configRouter()
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.Auth)) {
		if (!store.state.oauth.isLoggedIn) {//true == islogin
			next({name: 'login'})
		}else{
			next()
		}
	}
	else{
		next()
	}
})

// router.afterEach((to, from) => {
// 	if (to.matched.some(record => record.meta.udahLogin)) {
// 		if (checkLogin()) {
// 			console.log(to)
// 		}
// 	}
// })

export default router;