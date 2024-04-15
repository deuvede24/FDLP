function main() {
  //Variables
  let texto = document.getElementById("cadena").value;
  let mensaje = checkCadena(texto);
  document.getElementById("resultado").innerHTML = mensaje;
}

function checkCadena(texto) {
  let mensaje = "";
  if (texto === texto.toUpperCase()) {
    mensaje += "Este texto está solo formdo por <b>mayúsuclas<b>";
  } else if (texto === texto.toLowerCase()) {
    mensaje += "Este texto está solo formdo por <b>minúsculas<b>";
  } else mensaje += "Este texto está formado por <b>mayúsculas y minúsculas<b>";
  return mensaje;
}
