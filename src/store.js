import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulaFinalizada: []
  },
  mutations: {
    COMPLETAR_AULA(state,payload){
      state.aulaFinalizada.push(payload);
    }
  },
  actions: {

  }
})
