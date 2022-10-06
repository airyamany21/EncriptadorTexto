/* ComentarCodígoParaComentario: Shift + Alt + A;
Comentar-DescomentarCodígoEnLinea: Ctrl + K + C - Ctrl + K + U ;*/
const inputTexto = document.querySelector('.input-texto'); // Trae el texto del HTML al mundo JavaScript
const mensaje = document.querySelector('.mensaje'); // constante para usar de html al javascript
document.getElementById('textarea1').addEventListener('input', (e) => {
  let value = e.target.value;
  //admite solo minusculas y numeros, los caracteres especiales los quita.
  e.target.value = value.replace(/[^a-z\d0-9]/g, '');
});
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
function btnEncriptar() {
  // funcion boton encriptar
  if (!document.getElementsByClassName('input-texto')[0].value == '') {
    // Si el textarea esta vacio
    mensaje.style.backgroundImage = 'none'; //no muestra imagen
    document.getElementById('mensajetext1').style.visibility = 'hidden'; // no muestra elemento
    document.getElementById('mensajetext2').style.visibility = 'hidden'; // no muestra elemento
    const textoEncriptado = encriptar(inputTexto.value); //encripta lo que ingresen en el textarea
    mensaje.value = textoEncriptado; //envia lo encriptado
    document.getElementsByClassName('input-texto')[0].value = ''; // deja en blanco el textarea
  } else {
    alert('No hay texto'); // muestre mensaje
    mensaje.style.backgroundImage = 'url("Imagenes/finder.png")'; //muestra imagen
    document.getElementById('mensajetext1').style.visibility = 'visible'; //muestra elemento
    document.getElementById('mensajetext2').style.visibility = 'visible'; //muestra elemento
  }
}

function btnDesencriptar() {
  if (!document.getElementsByClassName('input-texto')[0].value == '') {
    const textoDesencriptado = desencriptar(inputTexto.value); //desencripta lo que ingresen en el textarea
    mensaje.value = textoDesencriptado; //envia lo desencriptado
    mensaje.style.backgroundImage = 'none'; // no muestra imagen
    document.getElementById('mensajetext1').style.visibility = 'hidden'; // no muestra elemento
    document.getElementById('mensajetext2').style.visibility = 'hidden'; // no muestra elemento
    document.getElementsByClassName('input-texto')[0].value = '';
  } else {
    alert('No hay texto'); // muestre mensaje
    mensaje.style.backgroundImage = 'url("Imagenes/finder.png")'; // muestra imagen
    document.getElementById('mensajetext1').style.visibility = 'visible'; //muestra elemento
    document.getElementById('mensajetext2').style.visibility = 'visible'; //muestra elemento
  }
}

function btnEnviar() {
  //funcion enviar
  console.log('Entro al metodo copiar'); // mensaje en la consola
  if (document.getElementsByClassName('mensaje')[0].value == '') {
    // Si el textarea esta vacio
    alert('No hay texto'); // muestre mensaje
  } else {
    //de lo contrario lo envía al otro textarea
    mensaje.style.backgroundImage = 'none'; //muestra imagen
    document.getElementById('mensajetext1').style.visibility = 'hidden'; // no muestra elemento
    document.getElementById('mensajetext2').style.visibility = 'hidden'; // no muestra elemento
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    inputTexto.value = mensaje.value; //pone lo del input en la caja de mensaje
    document.getElementsByClassName('mensaje')[0].value = ''; //textarea en blanco
    //alert('Texto enviado al textarea');
  }
}

function btnBorrar() {
  //funcion borrar
  inputTexto.value = ''; //deja en blanco el text area
  mensaje.value = ''; //deja en blanco el text area
  location.reload();
}

function encriptar(stringEncriptada) {
  //funcion para encriptar que recibe parametro
  const matrizCodigo = [
    //array de arrays
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringEncriptada = stringEncriptada.toLowerCase(); //convirte a minuscula
  for (var index = 0; index < matrizCodigo.length; index++) {
    //recorre todo el Array
    console.log('No entro al if'); //mensaje en la consola
    // if (stringEncriptada.includes(matrizCodigo[index][0])) {
    if (Array.isArray(matrizCodigo)) {
      console.log('Entro al if');
      //replaceAll()método reemplazará todas las instancias de la subcadena, es sensible a minusculas y mayusculas. replaceAll(pattern=algo,replacement=otracosa)
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0], //"e"
        matrizCodigo[index][1] //"enter"
      );
      index++; //incrementa al siguiente indice del array
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0], //"i"
        matrizCodigo[index][1] //"imes"
      );
      index++; //incrementa al siguiente indice del array
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0], //"a"
        matrizCodigo[index][1] //"ai"
      );
      index++; //incrementa al siguiente indice del array
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0], //"o"
        matrizCodigo[index][1] //"ober"
      );
      index++; //incrementa al siguiente indice del array
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[index][0], //"u"
        matrizCodigo[index][1] //"ufat"
      );
    }
    return stringEncriptada; // regresa el resultado
  }
}

function desencriptar(stringDesencriptada) {
  const matrizCodigo = [
    //array de arrays
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase(); //convirte a minuscula
  for (var index = 0; index < matrizCodigo.length; index++) {
    //recorre todo el Array
    console.log('No entro al if'); //mensaje en la consola
    // if (stringEncriptada.includes(matrizCodigo[index][0])) {
    if (Array.isArray(matrizCodigo)) {
      console.log('Entro al if');
      //replaceAll()método reemplazará todas las instancias de la subcadena, es sensible a minusculas y mayusculas. replaceAll(pattern=algo,replacement=otracosa)
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1], //"enter"
        matrizCodigo[index][0] //"e"
      );
      index++; //incrementa al siguiente indice del array
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1], //"imes"
        matrizCodigo[index][0] //"i"
      );
      index++; //incrementa al siguiente indice del array
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1], //"ai"
        matrizCodigo[index][0] //"a"
      );
      index++; //incrementa al siguiente indice del array
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1], //"ober"
        matrizCodigo[index][0] //"o"
      );
      index++; //incrementa al siguiente indice del array
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[index][1], //"ufat"
        matrizCodigo[index][0] //"u"
      );
    }
    return stringDesencriptada; // regresa el resultado
  }
}
