function calcular() {
  //Variables
  let mensaje = verifica();
  document.getElementById("resultado").innerHTML = mensaje;
}

function verifica() {
  //Variables
  let numero = 0;
  let resto = numero % 2;
  let i;
  let encontrado = true;
  let repetirNum = true;
  let verificacion = "";

  while (repetirNum == true) {
    i = 2;
    encontrado = true;
    numero = Number(prompt("Dame otro número"));
    while (typeof numero !== "number") {
      numero = prompt("dame otro número!");
    }
    while (i < numero && encontrado == true) {
      //entro en el bucle para verificar si num es primo o no
      resto = numero % i;
      console.log("el resto es:", resto);
      if (resto === 0)
        encontrado = false;
      console.log("i", i);
      i++;
    }
    if (encontrado == true)
      repetirNum = false;

    console.log("Encontrado", encontrado);
    console.log("Repetir", repetirNum);
  }
  if (encontrado == true) verificacion = "Este número sí es primo";
  return verificacion;
}
