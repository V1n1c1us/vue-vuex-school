<template>
  <div id="app">
    <ul>
      <h2>Livros</h2>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        {{ livro.nome }}
      </li>
    </ul>
    <ul>
      <h2>Livros Lidos</h2>
      <li v-for="livro in livrosLidos(true)" :key="livro.nome">
        {{ livro.nome }}
      </li>
    </ul>
    {{ $store.state.acao }}
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Curso from './components/Curso'
import Aluno from './components/Aluno'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Curso,
    Aluno
  },
  computed: {
    ...mapGetters(['livrosLidos'])
  },
  created() {
    this.$store.dispatch('puxarAcao')
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
