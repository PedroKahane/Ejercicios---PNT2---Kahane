const app = Vue.createApp({
    data() {
        return {
            personajes: []
        }
      },
      methods:{
      },
      created: async function () {
        const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');
        console.log(resultado);           
        this.personajes = await resultado.json();
        console.log(this.personajes);
    }
});
app.component('personaje', {
    data(){
        return {}
    },
    template: `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="{{this.foto}}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{this.nombre}}, {{this.apellido}}</h5>
    </div>
  </div>
    
    `,
    props:['nombre', 'apellido', 'foto'],
})

app.mount('#app')