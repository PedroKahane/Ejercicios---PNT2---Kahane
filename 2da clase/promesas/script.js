async function iniciarCarrera(){
    console.log("Inicio carrera!");
    const corredor1 = Correr("Pedro")
    const corredor2 = Correr("Juan")
    const corredor3 = Correr("Maria")
    const resultado = await Promise.all([corredor1,corredor2,corredor3])

    resultado.sort((a, b) => a.tiempo - b.tiempo)
    resultado.forEach((corredor, indice) =>{
        console.log("El corredor " + corredor.nombre + " llego en el puesto " + indice + " con tiempo: " + corredor.tiempo);
    } )
}

async function carreraLarga() {
    let lista = []
    console.log("Inicio carrera!");
    for(let i = 1; i <=  20 ; i++) {
        const corredor = Correr(i)
        lista.push(corredor)
    }
    const resultado = await Promise.all(lista)

    resultado.sort((a, b) => a.tiempo - b.tiempo)
    resultado.forEach((corredor, indice) =>{
        console.log("El corredor " + corredor.nombre + " llego en el puesto " + indice + " con tiempo: " + corredor.tiempo);
    } )
}

async function Correr(nombre) {
    const tiempo = getRandomInt(10,3)
    const corredor = {nombre, tiempo}
    return new Promise((resolve) => {
        setTimeout(() => resolve(corredor),  tiempo)
    })
}

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//iniciarCarrera()
carreraLarga()