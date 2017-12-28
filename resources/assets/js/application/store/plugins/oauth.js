const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const state = {
	isLoggedIn: !!localStorage.getItem("_token_oauth")
}

const mutations = {
	[LOGIN] (state) {
		state.pending = true;
    },
    [LOGIN_SUCCESS] (state) {
		state.isLoggedIn = true
		state.pending = false
    },
    [LOGOUT](state) {
		state.isLoggedIn = false;
	}
}

const actions = {
	login({ commit }, payload) {
		commit(LOGIN); // show spinner
		return new Promise((resolve) => {
			setTimeout(() => {
				localStorage.setItem("_token_oauth", payload.access_token)
				commit(LOGIN_SUCCESS)
				resolve()
			}, 1000)
		})
	},
	logout({ commit }) {
		localStorage.removeItem("_token_oauth");
		commit(LOGOUT);
	}
}

const getters = {
	isLoggedIn: state => {
		return state.isLoggedIn
	},
	token: state => {
		return localStorage.getItem('_token_oauth')
	}
}

export default {
	// namespaced: true,
	state,
	mutations,
	actions,
	getters
}