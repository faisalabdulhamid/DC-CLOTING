const SET_TABLE = "SET_TABLE";
const TABLE_SUCCESS = "TABLE_SUCCESS";
const SET_TABLE_NULL = "SET_TABLE_NULL";

const state = {
	table: {}
}

const mutations = {
	[SET_TABLE] (state) {
		state.pending = true;
    },
    [TABLE_SUCCESS] (state, payload) {
		state.table = payload
		state.pending = false
    },
    [SET_TABLE_NULL] (state) {
		state.table = {}
    },
}

const actions = {
	setTable({ commit }, payload) {
		commit(SET_TABLE); // show spinner
		return new Promise((resolve) => {
			setTimeout(() => {
				commit(TABLE_SUCCESS, payload)
				resolve()
			}, 1000)
		})
	},
	setTableNull({commit}){
		commit(SET_TABLE_NULL)
	}
}

const getters = {
	table: state => {
		return state.table
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}