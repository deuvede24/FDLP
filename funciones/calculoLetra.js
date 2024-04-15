function main() {
  //Variables
  console.clear();
  let letraCalculo = calcularLetra();
  document.getElementById("resultado").innerHTML = "La letra correcta es: " + letraCalculo;
}

function calcularLetra() {
  let numeroDni = Number(prompt("Dime el núemro de u DNI sin letra"));
  let letraDni = prompt("Dime la letra de tu DNI en mayúsculas".toUpperCase());
  console.log("la letra es:", letraDni);

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
  let letraCalculo = letras[(numeroDni % 23) - 1];
  console.log("la letra calculada es:", letraCalculo);

  if (letraCalculo != letraDni) {
    alert("La letra introducida no es válida");
  } else {
    alert("El número de DNI y letra introducidos son correctos");
  }
  return letraCalculo;
}
