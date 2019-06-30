import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulaFinalizada: [],
    acao: null,
    livros: [
      {
        nome: 'O Senhor dos Anéis',
        lido: true
      },
      {
        nome: 'Harry Potter',
        lido: true
      },
      {
        nome: 'As Crônicas de Gelo e Fogo',
        lido: false
      }
    ]
  },
  getters: {
    livrosLidos: state => lido => state.livros.filter(livro => livro.lido === lido)  
  },
  mutations: {
    COMPLETAR_AULA(state,payload){
      state.aulaFinalizada.push(payload);
    },
    UPDATE_ACAO(state, payload){
      state.acao = payload
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload)
    },
    puxarAcao(context){
      fetch('https://economia.awesomeapi.com.br/json/list/USD-BRL/30')
        .then(r => r.json())
        .then(respostaJSON => {
          context.commit('UPDATE_ACAO', respostaJSON)
        })
    }
  }
})
