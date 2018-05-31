const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const state = {
	isLoggedIn: !!localStorage.getItem("login_user"),
	isLoggedInAdmin: !!localStorage.getItem("login_admin"),
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
	loginAdmin({ commit }, payload) {
		commit(LOGIN); // show spinner
		return new Promise((resolve) => {
			setTimeout(() => {
				localStorage.setItem("login_admin", payload.access_token)
				commit(LOGIN_SUCCESS)
				resolve()
			}, 1000)
		})
	},
	logoutAdmin({ commit }) {
		localStorage.removeItem("login_admin");
		commit(LOGOUT);
	},
	login({ commit }, payload) {
		commit(LOGIN); // show spinner
		return new Promise((resolve) => {
			setTimeout(() => {
				localStorage.setItem("login_user", payload.api_token)
				commit(LOGIN_SUCCESS)
				resolve()
			}, 1000)
		})
	},
	logout({ commit }) {
		localStorage.removeItem("login_user");
		localStorage.removeItem("login_admin");
		commit(LOGOUT);
		location.reload()
	}
}

const getters = {
	isLoggedIn: state => {
		return state.isLoggedIn
	},
	isLoggedAdmin: state => {
		return state.isLoggedInAdmin
	},
	tokenAdmin: state => {
		return localStorage.getItem('login_admin')
	},
	token: state => {
		return localStorage.getItem('login_user')
	}
}

export default {
	// namespaced: true,
	state,
	mutations,
	actions,
	getters
}