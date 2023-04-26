<script>
    export default {
        data() {
        return {
            personajes: [],
        }
    },
        created: async function () {
        const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10');         
        this.personajes = await resultado.json();
        console.log(this.personajes);
    },    
    }
   
</script>
<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    function navegar(id)
    {
        router.push(
            {path : '/personaje/' + id}
        );
    }
</script>
<template>
    <table>
        <tr v-for="(item, index) in personajes">
            <td>{{ index + 1}}</td>
            <td>{{ item.name }}</td>
            <td><button type="button"
                @click="navegar(item.id)" 
                class="btn btn-danger">Ver</button></td>
        </tr>
    </table>
</template>
<style scoped>
</style>