import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
    addPackage(state, payload) {
      state.packages.unshift(payload)
    }
  },
  actions: {
    addPackage({ commit }, payload) {
      commit('addPackage', payload)
    }
  },
  getters: {
    getPackages(state) {
      return state.packages
    }
  }
})
