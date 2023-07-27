//Nodos capturados
const input = document.querySelector("input")
const boton = document.querySelector("button")
const contenedor = document.querySelector(".contenedor")

function comentar () {
    console.log (input.value)
    contenedor.innerHTML = `<p>${input.value}</p>`
    input.value = ""
    //capturar el valor de input
    //escuchar el valor fr click
    //añadir el valor de input al contenedor
}