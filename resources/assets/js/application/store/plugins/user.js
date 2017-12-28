const SET_USER = "SET_USER";
const USER_SUCCESS = "USER_SUCCESS";
const SET_USER_NULL = "SET_USER_NULL";

const state = {
	user: {}
}

const mutations = {
	[SET_USER] (state) {
		state.pending = true
    },
    [USER_SUCCESS] (state, payload) {
		state.user = payload
		state.pending = false
    },
	[SET_USER_NULL] (state) {
		state.user = {}
    },
}

const actions = {
	setUser({ commit }) {
		commit(SET_USER);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				axios.get('/api/user', {
					headers:{
						Authorization: `Bearer ${localStorage.getItem('_token_oauth')}`
					}
				}).then(res => {
					commit(USER_SUCCESS, res.data)
					resolve()
				}).catch(err => {
					reject(err.response)
				})
			}, 1000)
		})
	},
	setUserNull({commit}){
		commit(SET_USER_NULL)
	}
}

const getters = {
	user: state => {
		return state.user
	},
	nama: state => {
		return state.user.nama
	}
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}