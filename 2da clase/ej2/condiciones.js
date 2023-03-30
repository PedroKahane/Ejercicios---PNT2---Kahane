const condiciones = [
    {condicion:"Debe haber pelota", valor:true},
    {condicion:"El equipo A tiene 11 jugadores", valor:false},
    {condicion:"El equipo B tiene 11 jugadores", valor:true},
    {condicion:"Todos los jugadores son mayores de 18", valor:false},
    {condicion:"Las condiciones climaticas son buenas", valor:true},
]

let  sePuedeJugar = () => {
    const cond = document.querySelector("#Condiciones")
    result = condiciones.filter(element => element.valor == false)
    if(result.length == 0){
        cond.innerHTML = '<h2 style="color:green">Se puede jugar el partido, se cumplen todas las condiciones</h2>';
    } else{
        cond.innerHTML= '<h2 style="color:red">No se puede jugar el partido, no se cumplen las siguientes condiciones: </h2>';
        result.map(element => {
            const h4 = document.createElement("h4");
            h4.innerHTML = element.condicion
            cond.appendChild(h4)
    })
    }
}

