<template>
    <div>
        <h3>Aulas</h3>
        <ul>
            <li v-for="aula in aulas" :key="aula.id">
                <p>{{ aula.nome }}</p>
                <p>{{ aula.duracao }} horas</p> | <button @click="COMPLETAR_AULA(aula)">Finalizar</button>
                
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Aulas',
    data () {
        return {
            aulas: [
                {
                    nome: "HTML e CSS",
                    duracao: 15
                },
                {
                    nome: "JavaScript",
                    duracao: 30
                },
                {
                    nome: "UX Design",
                    duracao: 20
                }
            ]
        }
    },
    methods: {
        ...mapMutations(['COMPLETAR_AULA'])
    }
}
</script>

<style>
li {
    list-style: none;
}
</style>
