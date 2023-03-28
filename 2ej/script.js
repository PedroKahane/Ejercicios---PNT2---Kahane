let vector = []
const parrafo = document.querySelector("#vector")
const agregar = document.querySelector("#agregar")
const mostrar = document.querySelector("#mostrar")
const ordenar = document.querySelector("#ordenar")
const submit = document.querySelector("#submit")



let agregarfunction = () => {
    vector.push(Math.floor(Math.random() * 10))
}

let mostrarfunction = () => {
    parrafo.innerHTML = vector
}

let ordenarfunction = () => {
    vector = vector.sort();
}
let chequearfunction = () => {
    const fondo = document.querySelector("#fondo")
    let numero = parseInt(document.getElementById("numero").value)
    let incluye = vector.includes(numero)
    if(incluye){
        fondo.style.backgroundColor = '#A90404';
        fondo.style.color = '#fff';
    } else{
        fondo.style.backgroundColor = '#FFFFFF';
        fondo.style.color = '#000';
    }
}

submit.addEventListener("click", chequearfunction)
agregar.addEventListener("click", agregarfunction)
mostrar.addEventListener("click", mostrarfunction)
ordenar.addEventListener("click", ordenarfunction)