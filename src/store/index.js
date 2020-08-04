import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    errors: []
  },
  mutations: {
    addPackage(state, payload) {
      state.packages.unshift(payload)
    },
    addError(state, payload) {
      state.errors.unshift(payload)
    },
    closeError(state, payload) {
      state.errors.splice(payload, 1)
    }
  },
  actions: {
    addPackage({ commit, state }, payload ) {
      payload.id = payload.id.toUpperCase()
      const duplicate = state.packages.filter(item => {
        return item.id === payload.id
      })
      if(duplicate.length == 0) {
        commit('addPackage', payload)
      } else {
        commit('addError', 'Código de rastreio já existe')
      }
    },
    closeError({ commit }, payload) {
      commit('closeError', payload)
    }
  },
  getters: {
    getPackages(state) {
      return state.packages
    },
    errors(state) {
      return state.errors
    }
  }
})
