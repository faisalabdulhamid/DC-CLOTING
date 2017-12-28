import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import oauth from './plugins/oauth'
import user from './plugins/user'
import table from './plugins/table'
import loading from './plugins/loading'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        oauth: oauth,
        user: user,
        table: table,
        loading: loading
    },
    strict: debug,
  	// middlewares: debug ? [createLogger()] : []
});