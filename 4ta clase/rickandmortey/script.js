const app = Vue.createApp({
    data() {
        return {
            msg: "Lista de personajes de Rick and Mortey",
            cantidadTotal: 0,
            personajes: [],
        }
    },
    created: async function () {
        const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');
        console.log(resultado);           
        this.personajes = await resultado.json();
        console.log(this.personajes);
    },    
    methods:{
      actualizarClicks(e){
        console.log(this.cantidadTotal);
        this.cantidadTotal++
      }
    },
});
app.component('personaje', {
    data(){
        return {
          cantidad: 0
        }
    },
    template: `
    <div class="card text-center" style="width: 18rem;">
      <img class="card-img-top" :src="this.foto" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{this.nombre}}, {{this.genero}}</h5>
        <p>{{this.cantidad}} </p>
        <input type='button' class="btn btn-success align-middle" @click='personajeClick()' value="Click!">
      </div>
    </div>
    
    `,
    props:['nombre', 'genero', 'foto'],
    methods : {
      personajeClick() {
        this.cantidad++
        this.$emit('click-personaje', '')
      }
    }
})

app.mount('#app')