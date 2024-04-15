function main() {
  //Variables
  console.clear()
  let cadenaEntrada = document.getElementById("cadena").value;
  let cadenaLimpia = limpiarStr(cadenaEntrada);
  let cadenaGirada = girarStr(cadenaLimpia);
  console.log("cadena limpia ahora", cadenaLimpia);
  console.log("cadena girada ahora:", cadenaGirada);

  let cadenaResultado= cadenaLimpia == cadenaGirada ? "Sí es palíndromo!" : "No es palíndromo";
  document.getElementById("resultado").innerHTML = cadenaResultado;
}

function limpiarStr(texto) {
  let fraseEntrada = texto.toLowerCase();
  let fraseLimpia = fraseEntrada.replace(/\,*\s/g, "");
  console.log("la frase limpia es;", fraseLimpia);
  return fraseLimpia;
}

function girarStr(texto) {
  let cadenaGirada = "";
  let i = 0;
  for (i = texto.length; i >= 0; i--) {
    cadenaGirada += texto.charAt(i);
  }
  console.log("la frase girada es;", cadenaGirada);
  return cadenaGirada;
}

