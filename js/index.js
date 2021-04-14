// DATOS  
// Variables y/o Constantes
// Tipo de dato y dato

// Tipo de dato = Undefined
var nombre 

// Tipo de dato = String (Cadena de texto)
var nombre = 'Elian'
var apellido = 'Leguizamon'

// Concatenar
var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

var cantidadDeLetras = nombreCompleto.length
console.log(cantidadDeLetras)

// Tipo de dato = Number 
var edad = 18
var altura = 1.78

// Tipo de dato = Boolean (false, true)
var esExtranjero = false
var esMayorDeEdad = true

var esMayorDeEdad = edad > 17

// Logica / Condicionales 
if (esExtranjero == true) {
  console.log('Bienvenido a nuestro pais')
} else {
  console.log('Hola Compatriota')
}

if (esMayorDeEdad) {
  console.log('Puedes acceder al sitio')
} else {
  console.log('Te redirigiremos a otra pagina')
}

// Eventos

var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false

if (mostrarMensaje) {
  cartelCookie.style.display = 'none'
} 

aceptar.addEventListener('click', function () {
  cartelCookie.style.display = 'none'
})

// Envio de email
var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function() {
  botonDeEnviar.parentElement.remove()
  let parrafo = document.createElement('p')
  parrafo.innerHTML = "Hemos recibido la suscripcion"

  document.querySelector('#footer').appendChild

})
