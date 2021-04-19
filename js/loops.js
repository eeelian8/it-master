//  Reemplazo dinamico del #items

var itemsDiv = document.querySelector('#items');
var links = [
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
  {
    img: 'https://placeimg.com/400/400/arch',
    p: 'Product Category One',
  },
]
for (var i = 0; i < links.length; i++) {
  itemsDiv.innerHTML += '<div class="item-product"><img src="' + links[i].img + '" alt="imagen" /><p><span>' + links[i].p + '</span></p></div>'
}

// Reemplazo dinamico del Second-Nav

var menuContainer = document.querySelector('.second-nav-links')
var menuLinks = [
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
  },
]
var links = [
  'home',
  'Nosotros',
  'Productos',
  'Contacto',
]
for (var i = 0; i < menuLinks.length; i++) {
  menuContainer.innerHTML += '<a href=""' + menuLinks[i].href + '>' + menuLinks[i].name + '</a>'
}