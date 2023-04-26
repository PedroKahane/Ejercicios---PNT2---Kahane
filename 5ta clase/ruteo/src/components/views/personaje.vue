<script>
import {useRoute} from 'vue-router'
    export default {
        data() {
        return {
            personaje: [],
            idLocation: null,
        }
        },
        created: async function () {     
        const route = useRoute()
        const id = route.params.id.toString()
        const resultado = await fetch('https://rickandmortyapi.com/api/character/' + id);        
        this.personaje = await resultado.json();
        const locacion = await this.personaje.location.url
        const idArray = locacion.split("/");
        this.locationId = idArray.pop();
        console.log(this.locationId);
        },
        methods: {
        getLocationId() {
        
        },
    },
    }
   
</script>

<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    function navegar(id)
    {
        router.push(
            {path : '/location/' + id}
        );
    }
</script>



<template>
    <div class="d-flex justify-content-center mb-3">
        <div class="card text-center" style="width: 100%; max-width: 450px;">
            <img class="card-img-top" :src="personaje.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Nombre: {{personaje.name}}</h5>
                <h5 class="card-title">Estatus: {{personaje.status}}</h5>
                <h5 class="card-title">Especie: {{personaje.species}}</h5>
                <button type="button"
                @click="navegar(this.locationId)" >
                    <h5 class="card-title">Locación: {{personaje.location.name}}</h5>
                </button>
                
                <h5 class="card-title">Origen: {{personaje.origin.name}}</h5>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
</style>