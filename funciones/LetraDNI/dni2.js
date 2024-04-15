function main() {
  //Variables
  console.clear();
  let carnet = document.getElementById("cadena").value;

  let letraCalculo = calcularLetra(carnet);
  document.getElementById("resultado").innerHTML =
    "La letra correcta es: " + letraCalculo;
}

function calcularLetra(numeroDni) {
  let i = 1;
  let letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  let letraDni = numeroDni.charAt(numeroDni.length - 1);
  console.log("La letra de dni es:", letraDni);

  for (i = 1; i < numeroDni.length - 1; i++) {
    numeroDni += numeroDni.charAt(i);
    numeroDni = parseInt(numeroDni);
    console.log("El número de dni es:", numeroDni);
  }

  let letraCalculo = letras[(numeroDni % 23) - 1];
  console.log("La letra calculada es:", letraCalculo);

  if (letraCalculo != letraDni) {
    alert("La letra introducida NO es válida");
  } else {
    alert("El número de DNI y letra introducidos son correctos");
  }
  return letraCalculo;
}
