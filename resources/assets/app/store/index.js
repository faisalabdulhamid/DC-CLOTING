'use strict'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
import oauth from './modules/oauth'
import user from './modules/user'
import table from './modules/table'
import loading from './modules/loading'

export default new Vuex.Store({
    modules:{
        oauth: oauth,
        user: user,
        table: table,
        loading: loading,
    },
    strict: debug,
  	// middlewares: debug ? [createLogger()] : []
});