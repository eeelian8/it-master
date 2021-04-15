// // array, arreglo, matriz, lista, vector

// // var nombre = [
// //   'Alejandro', 
// //   'Ezequiel',
// //   'Villafane',
// // ]

// // var mixto = [
// //   'Soy un string',
// //   11,
// //   null,
// //   true,
// // ]

// // console.log(mixto[0])
// // // console.log(mixto.length) para ver el total

// // mixto.push('nuevo dato')


// // // Iteraciones
// // // Desde - Hasta
// // // salto

// // for (var i = 0; i < 11; i++) {
// //   console.log(i)
// // }



// //  Array Asociativo
// var usuario = {
//   primerNombre : 'Elian',
//   apellido: 'Leguizamon',
  
// }

// //  usuario.(ejemplo)  usuario.primerNombre


var linksContainer = document.querySelector('.second-nav-links')
var links = [
  {
    href: '#home',
    name: 'Home',
  },
  {
    href: '#prodcutos',
    name: 'Productos',
  },
  {
    href: '#nosotros',
    name: 'Nosotros',
  },
  {
    href: '#Contacto',
    name: 'Contacto',
  }
]
var links = [
  'home',
  'Nosotros',
  'Productos',
  'Contacto',
]
for (var i = 0; i < links.length; i++) {
  linksContainer.innerHTML += '<a href=""' + links[i].href + '>' + links[i].name + '</a>'
}

// ------------------------------------------

var divContainer = document.querySelector('#items')
var divs = [
  {
    img:'https://placeimg.com/400/400/arch',
    p:'Product category one',
  }
]
for (var i = 0; i < divs.length; i++) {
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
  divContainer.innerHTML += '<div class="item-product">' + '<img src="' + divs[i].img + '"' + '>' + '<p><span>' + divs[i].p + '</span></p>' + '</div>'
}