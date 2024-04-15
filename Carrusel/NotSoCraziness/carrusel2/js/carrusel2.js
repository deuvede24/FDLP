
let posicion = 0;
document.getElementById("tema").innerHTML= TEMA;
mostrar();

function mostrar() {
  let imagen = RUTA + imagenes[posicion];
  console.log(imagen);
  console.log(posicion);
  document.getElementById("imagen").src = imagen;
  document.getElementById("nombreImagen").innerHTML = imagen;
}

function avanzar() {
  posicion++;
  if (posicion === imagenes.length) {
    posicion = 0;
  }
  mostrar();
}

function retroceder() {
  posicion--;
  if (posicion === -1) {
    posicion = imagenes.length - 1;
  }
  mostrar();
}
