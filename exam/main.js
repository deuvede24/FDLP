function p1() {
  let i;
  let datosEntrada = [];
  let datosSalida = [];
  let arrayPersonas = [];

  for (i = 0; i < 50; i++) {
    datosEntrada[i] = Math.floor(Math.random() * 20) + 1;
    console.log("los numeros son:", datosEntrada);
    console.log("i es:", i);

    datosEntrada.forEach((elemento) => {
      if (!datosSalida.includes(elemento)) {
        datosSalida.push(elemento);
      }
    });
    console.log(datosSalida);
  }
  datosSalida.sort(function (a, b) {
    // para ordenar los números, si no 4ex. 100<3
    return a - b;
  });
  document.getElementById("entrada").innerHTML = datosEntrada;
  document.getElementById("salida").innerHTML = datosSalida;
}


function p2d() {
  alert(arrayPersonas[1].toString());
}

/*let h1 = prompt("Qué hobby quieres añadir:", "bailar")
let h2 = prompt("Qué otro hobby quieres añadir:", "cantar")*/

/*let h1=alert(arrayPersonas[0].agregarHobbies(cantar));
let h2=alert(arrayPersonas[0].agregarHobbies(bailar));

console.log("hobbies: ", arrayPersonas[0]);
console.log("hobbies: ", h2);*/
/*let h1;
h1= arrayPersonas[0].arrayHobbies[0].agregarHobbies(bailar);*/


function p2e() {
  let i;
  for (i = 0; i < arrayPersonas.length; i++) alert(arrayPersonas[i].toString());
}
