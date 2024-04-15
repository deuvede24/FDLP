function main() {
    //Variables
    console.clear()
    let cadenaEntrada = document.getElementById("cadena").value;
    let cadenaResultado = esPalindromo(cadenaEntrada);
    
    document.getElementById("resultado").innerHTML = cadenaResultado;
    document.getElementById("resultado").innerHTML = "Tu frase girada es: " + cadenaGirada;
}

function esPalindromo(texto) {
    let array = texto.split();
    let cadenaLimpia = limpiarStr(array);
    let cadenaGirada = girarStr(cadenaLimpia);
    console.log("la ccadena girada es;", cadenaGirada);
    console.log("la ccadena limpia es;", cadenaLimpia);
    return cadenaGirada == cadenaLimpia.join() ? "Sí es!" : "No es";

}

function limpiarStr(texto) {
    let fraseEntrada = texto.toLowerCase();
    let fraseLimpia = fraseEntrada.replace("/\,*\s/g", "");
    console.log("la frase limpia es;", fraseLimpia);
    //let fraseLimpia = fraseSinEspacios;
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


/*
function esPalindromo(texto) {
  let cadenaReves=tex.join();
  cadenaReves == fraseLimpia ? true : false;
  console.log("la comprobación es;", cadenaReves);
  return cadenaReves;
}*/

