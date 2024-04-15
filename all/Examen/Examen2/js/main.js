/*function p1() {
    let array1 = [];
    let array2 = [];
    for (i = 100; i >= 5; i -= 5) {
        array1.push(i);
        if ((array1 % 3) == 0) {
            array2.push(array1)
            array2+=array2.charAt(array2.length);
        }
    }
    document.getElementById("array1").innerHTML = + array1.join(" ");
    document.getElementById("array2").innerHTML = + array2.join(" ");

}*/

function p1() {
  let array1 = [];
  let array2 = [];
  let number;
  let i;
  for (i = 100; i >= 5; i -= 5) {
    array1.push(i);
    number = i;
    if (number % 3 == 0) {
      array2.push(number);
    }

    console.log("el number es:", number);
    console.log("array1 es:", array1);
    console.log("array2 es:", array2);
  }
  array2.reverse();
  document.getElementById("array1").innerHTML = array1;
  document.getElementById("array2").innerHTML = array2;
}

function p2b() {
  let persona;
  for (i = 0; i < treballadors.length; i++) {
    if (treballadors[i].nom === "Pep") {
      console.log("El nombre es:", treballadors[i].nom);
      persona = treballadors[i];
      document.getElementById("nom1").innerHTML = persona.nom;
      document.getElementById("cognoms1").innerHTML = persona.cognom;
      document.getElementById("carrec1").innerHTML = persona.carrec;
      document.getElementById("trasllat1").innerHTML =
        persona.disponibilitatTrasllat;
    }
  }
}

/*let persona = treballadors.find((nomT) => nomT.nom === "Pep");
  document.getElementById("nom1").innerHTML = persona.nom;
  document.getElementById("cognoms1").innerHTML = persona.cognom;
  document.getElementById("carrec1").innerHTML = persona.carrec;
  document.getElementById("trasllat1").innerHTML =
    persona.disponibilitatTrasllat;
}*/

function p2c() {
  let trabajadoresDisponibles = [];
  let i;
  for (i = 0; i < treballadors.length; i++) {
    if (treballadors[i].disponibilitatTrasllat === true) {
      trabajadoresDisponibles.push(treballadors[i]);
    }
  }
  console.log(trabajadoresDisponibles);
}

/*let i=0;
  while (i < treballadors.length) {
    if (treballadors[i].disponibilitatTrasllat === true) {
      trabajadoresDisponibles.push(treballadors[i]);
    }
    i++;
  }
  console.log(trabajadoresDisponibles);

}*/

function p2e() {
  let newWorker = new Treballador("Juan", "Romero", "administrativo", false);
  treballadors.push(newWorker);
  document.getElementById("nom2").innerHTML = newWorker.nom;
  document.getElementById("cognoms2").innerHTML = newWorker.cognom;
  document.getElementById("carrec2").innerHTML = newWorker.carrec;
  document.getElementById("trasllat2").innerHTML =
    newWorker.disponibilitatTrasllat;
}
