const peliculas = [
    {id: 1, nombre: 'El señor de los anillos', año: 2002},
    {id: 2, nombre: 'El club de la pelea', año: 1999},
    {id: 3, nombre: 'Forrest Gump', año: 1994},
    {id: 4, nombre: 'Pulp Fiction', año: 1994},
    {id: 5, nombre: 'Batman: El caballero de la noche', año: 2008 }
]

let ordenarAscendente = () => {
    const pelis = document.querySelector("#peliculas")
    let peliculasOrdenatas = peliculas.sort((p1, p2) => (p1.nombre > p2.nombre) ? 1 : (p1.nombre < p2.nombre) ? -1 : 0);
    console.log(peliculasOrdenatas);
    let peliculasHTML = document.querySelectorAll("h4");
    peliculasHTML.forEach(element => {
        element.remove()
    })
    peliculasOrdenatas.map(element => {
        const h4 = document.createElement("h4");
        h4.innerHTML = element.nombre + " (" + element.año + ")"
        pelis.appendChild(h4) 
})
}
let ordenarDescendente = () => {
    const pelis = document.querySelector("#peliculas")
    let peliculasOrdenatas = peliculas.sort((p1, p2) => (p1.nombre > p2.nombre) ? -1 : (p1.nombre < p2.nombre) ? 1 : 0);
    console.log(peliculasOrdenatas);
    let peliculasHTML = document.querySelectorAll("h4");
    peliculasHTML.forEach(element => {
        element.remove()
    })
    peliculasOrdenatas.map(element => {
        const h4 = document.createElement("h4");
        h4.innerHTML = element.nombre + " (" + element.año + ")"
        pelis.appendChild(h4) 
})
}
let eliminarPorId = () => {
    const numero = parseInt(document.querySelector("#numero").value)
    peliculas.forEach(element => {
        if(element.id == numero) {
            peliculas.splice(peliculas.indexOf(element), 1)
        }
    })
 }