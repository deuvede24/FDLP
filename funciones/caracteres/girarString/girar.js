function main() {
  //Variables
  let frase = document.getElementById("cadena").value;
  let mensaje = girarStr(frase);
  document.getElementById("resultado").innerHTML = mensaje;
}

function girarStr(texto) {
  let mensaje = "";
  let i = 0;
  for (i = texto.length; i >= 0; i--) {
    mensaje += texto.charAt(i);
   // mensaje += texto[i]; 
  }
  return mensaje;
}
