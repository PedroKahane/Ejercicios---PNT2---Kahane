function horaActual()
{
    let date = new Date()
    var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();
return `${hour}:${minutes}:${seconds}:`;
}

function correr (numero) {
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve("Corredor " + numero + " termino!")
        },Math.floor(Math.random() * (10000 - 3000 + 1) + 3000))
    })
}

async function corredores()
{
    const corredor = correr(1).then(resultado => {
        console.log(horaActual() + resultado);
    })
    const corredor2 = correr(2).then(resultado => {
        console.log(horaActual() + resultado);
    })
    const corredor3 = correr(3).then(resultado => {
        console.log(horaActual() + resultado);
    })
    await Promise.all([corredor, corredor2, corredor3]); 
}

corredores()