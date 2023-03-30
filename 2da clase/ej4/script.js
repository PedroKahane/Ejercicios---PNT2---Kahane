const array = []

let agregarString = () => {
    let string = document.querySelector("#string").value.toUpperCase()
    if(string != "" && string != undefined) {
        let arrayDIV = document.querySelector("#Array") 
        array.push(string)
        console.log(array);
        let strings = document.querySelectorAll("h4");
        strings.forEach(element => {
            element.remove()
        })
        array.map(element => {
            const h4 = document.createElement("h4");
            h4.innerHTML = element
            arrayDIV.appendChild(h4) 
        })
    }
}