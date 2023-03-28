let num=0
const incrementar = document.querySelector("#Incrementar")
const decrementar = document.querySelector("#decrementar")
const numero = document.querySelector("#numero")
numero.innerHTML = num
let suma = () =>{
    num++
    numero.innerHTML = num
} 
let resta = () =>{
    num--
    numero.innerHTML = num
} 
incrementar.addEventListener("click", suma)
decrementar.addEventListener("click", resta)