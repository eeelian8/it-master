var calculadora = {

  resultado: 0,

  sumar(a = 0,b = 0) {

    this.resultado += a + b
  },

  restar(a = 0, b = 0){

    this.resultado -= a + b
  },

  obtenerResultado(){
    return this.resultado
  },
}

// ejectuar
calculadora.sumar (100)
calculadora.sumar (200)
calculadora.restar (50)


console.log(calculadora.obtenerResultado())

function nombreCompleto(primerNombre = '', segundoNombre = '', apellido = ''){

  var resultado = ''

  resultado = primerNombre

  if (segundoNombre != '') {
    resultado += ' ' + segundoNombre
  } 
 
  return resultado += ' ' + apellido
}

// ejecutar
nombreCompleto('Elian','','Leguizamon')
