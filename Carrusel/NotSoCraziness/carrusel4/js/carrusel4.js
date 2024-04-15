
//let posicion = 0;
let posicionActual = 0;
document.getElementById("tema").innerHTML = TEMA;
mostrar();

function mostrar() {
  let imagenSrc = RUTA + arrayImagenes[posicionActual].imagen;
  let imagenNombre = arrayImagenes[posicionActual].nombre;
  let imagenTitulo = arrayImagenes[posicionActual].title;
  let imagenDesc = arrayImagenes[posicionActual].descripcion;
  console.log(imagenSrc);
  console.log(posicionActual);
  document.getElementById("imagen").src = imagenSrc;
  document.getElementById("imagen").title = imagenTitulo;
  document.getElementById("imagen").alt = imagenTitulo;
  document.getElementById("nombreImagen").innerHTML = imagenNombre;
  document.getElementById("desc").innerHTML = imagenDesc;
}

function avanzar() {
  posicionActual++;
  if (posicionActual === arrayImagenes.length) {
    posicionActual = 0;
  }
  mostrar();
}

function retroceder() {
  posicionActual--;
  if (posicionActual === -1) {
    posicionActual = arrayImagenes.length - 1;
  }
  mostrar();
}

function showInfo(){
    alert(arrayImagenes[posicionActual].toString())
}
