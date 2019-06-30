<template>
    <div>
        <h3>Aluno</h3>
        {{ aulaFinalizada }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Aluno',
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState(['aulaFinalizada'])
    }
}
</script>

