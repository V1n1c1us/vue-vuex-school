<template>
  <div id="app">
    <Aluno/>
    <Curso/>
  </div>
</template>

<script>
import Curso from './components/Curso'
import Aluno from './components/Aluno'

export default {
  name: 'app',
  components: {
    Curso,
    Aluno
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
