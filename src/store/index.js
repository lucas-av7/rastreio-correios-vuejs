import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getPackages(state) {
      return state.packages
    }
  }
})
