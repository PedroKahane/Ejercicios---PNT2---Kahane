<script>
import {useRoute} from 'vue-router'
    export default {
        data() {
        return {
            personaje: [],
        }
    },
        created: async function () {     
        const route = useRoute()
        const id = route.params.id.toString()
        const resultado = await fetch('https://rickandmortyapi.com/api/location/' + id);         
        this.personaje = await resultado.json();
        console.log(this.personaje);
    },    
    }
   
</script>


<template>
    <div class="d-flex justify-content-center mb-3">
        <div class="card text-center" style="width: 100%; max-width: 450px;">
            <div class="card-body">
                <h5 class="card-title">Nombre: {{personaje.name}}</h5>
                <h5 class="card-title">Tipo: {{personaje.type}}</h5>
                <h5 class="card-title">Dimensión: {{personaje.dimension}}</h5>
            </div>
        </div>
    </div>
      
</template>
<style scoped>
</style>