const app = Vue.createApp({
    data() {
        return {
            personas: [
                { nombre: "Juan", mensajes: [] },
                { nombre: "Ana", mensajes: [] },
                { nombre: "Pedro", mensajes: [] },
                { nombre: "María", mensajes: [] }
              ]
        }
    },
    methods: {
        enviarMensaje(e) {
            this.personas.forEach(element => {
                if (element.nombre == e.para) {
                    element.mensajes = e
                }
            });
            this.$children.forEach( element => { 
                element.personas = this.personas
            })
        }
  
    }
})
app.component('personaje', {
    props: ['nombre', 'personas'],
    data() {
        return {
            mensajes: [],
        };
      },
    template: `
    <div style="max.width=400px; width=80%; display: flex; flex-direction:column; align-items:center;justify-content:center; margin: 25px ">
        <h1>{{this.nombre}}</h1>
        <div class="mb-3">
            <label for="Select" class="form-label">Enviar mensaje</label>
            <select id="Select" class="form-select">
                <option v-for="(item, index) in personas">{{item.nombre}}</option>
            </select>
            <input type="text" id="TextInput" class="form-control mr-3">
            <button type="button" class="btn btn-primary" @click='enviar()'>Primary</button>
      </div>
      <div>
        <h2>Lista de mensajes</h2>
        <div v-for="(item, index) in mensajes">
            <p> recibiste un mensaje de {{item.de}} </p>
            <p> dice: {{item.mensaje}} </p>
        </div>
      </div>
     
    </div>
    `,
    computed : {
        mensajes(){
            this.personas.forEach(element => {
                if (element.nombre == this.nombre) {
                    this.mensajes = element.mensjaes
                }
            });
            console.log("computando!!");
        }
    },
    methods: {
        enviar() {
            const mensaje = document.querySelector("#TextInput").value
            const para = document.querySelector("#Select").value
            const de = this.nombre
            const e = {mensaje, para, de}
            console.log(this.personas);
            this.$emit('mensaje', e)
        }
    }
})

app.mount('#app')