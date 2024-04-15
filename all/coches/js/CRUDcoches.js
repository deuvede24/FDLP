let arrayTrabajadores = [];
let arrayMecanicos = [];
let arrayPilotos = [];
//+const arrayEscuderias =[];
let posicionActual = 0;
let TrabajadorNuevo;
let tipoTrabajador;

console.table(arrayEscuderias);

function altaPilotos() {
  let mensaje = "";
  let indexEscuderia = 0;
  let nomEscuderia = prompt("Dime el nombre de la escudería: ", "Ferrari");

  indexEscuderia = arrayEscuderias.findIndex(
    (escuderia) => escuderia.name === nomEscuderia
  );
  if (indexEscuderia == -1) {
    mensaje = "La escudería no existe, regístrala primero \n";
    alert(mensaje);
  } else {
    pilotoNombre = prompt("Nombre del piloto", "Checo");
    pilotoApellido = prompt("Apellido del piloto", "Pérez");
    pilotoEdad = prompt("Edad del piloto", "24");
    pilotoAntiguedad = prompt("Antigüedad del piloto", "10");
    pilotoDni = prompt("Dni del piloto", "123456");
    pilotoAltura = prompt("Altura del piloto en mts", "1,80");
    pilotoPeso = prompt("Peso del piloto en kg", "70kg");

    let nuevoPiloto = new Piloto(
      pilotoNombre,
      pilotoApellido,
      pilotoEdad,
      pilotoAntiguedad,
      pilotoDni,
      pilotoAltura,
      pilotoPeso
    );
    nuevoPiloto.sueldoPiloto();
    arrayEscuderias[indexEscuderia].agregarPiloto(nuevoPiloto);
    console.table(arrayPilotos);
    arrayTrabajadores.push(nuevoPiloto);
    console.table(arrayEscuderias);

    posicionActual = arrayPilotos.length - 1;
    alert("Piloto creado con éxito!"); //arrayPilotos[posicionActual]);
    console.table(arrayEscuderias);
  }
}

function altaMecanicos() {
  let mensaje = "";
  let indexEscuderia = 0;
  let nomEscuderia = prompt("Dime el nombre de la escudería: ", "Ferrari");

  indexEscuderia = arrayEscuderias.findIndex(
    (escuderia) => escuderia.name === nomEscuderia
  );
  if (indexEscuderia == -1) {
    mensaje = "La escudería no existe, regístrala primero \n";
    alert(mensaje);
  } else {
    mecanicoNombre = prompt("Nombre del mecánico", "Checo");
    mecanicoApellido = prompt("Apellido del mecánico", "Pérez");
    mecanicoEdad = prompt("Edad del mecánico", "24");
    mecanicoAntiguedad = prompt("Antigüedad del mecánico", "10");
    mecanicoDni = prompt("Dni del mecánico", "123456");
   do{ mecanicoEstudios = prompt(
      "El mecánico tiene estudios superiores?",
      "Si/No "
    ).toUpperCase();
  } while (!"SI,NO,S,N,si,no,s,n,sí,SÍ".includes(mecanicoEstudios));

    let nuevoMecanico = new Mecanico(
      mecanicoNombre,
      mecanicoApellido,
      mecanicoEdad,
      mecanicoAntiguedad,
      mecanicoDni,
      mecanicoEstudios
    );
    nuevoMecanico.sueldoMecanico();
    arrayEscuderias[indexEscuderia].agregarMecanico(nuevoMecanico);
    console.table(arrayMecanicos);
    arrayTrabajadores.push(nuevoMecanico);
    console.table(arrayEscuderias);

    //posicionActual = arrayMecanicos.length - 1;
    alert("Mecánico creado con éxito!"); //arrayMecanicos[posicionActual]);
    console.table(arrayEscuderias);
  }
}

function verPilotos() {
  let pilotoEncontrado;
  //let encontrado = false;
  let indexDnipiloto = -1;
  let idPiloto = prompt("Dime el DNI del piloto: ", "123456");
  console.log("id piloto:", idPiloto);
  console.log("id pilot:", typeof idPiloto);
  let i, j;
  for (i = 0; i < arrayEscuderias.length; i++) {
    for (j = 0; j < arrayEscuderias[i].arrayPilotos.length; j++) {
      if (arrayEscuderias[i].arrayPilotos[j].dni === idPiloto) {
        indexDnipiloto = j;
        console.log("El indexDnipiloto es:", indexDnipiloto);
        pilotoEncontrado = arrayEscuderias[i].arrayPilotos[indexDnipiloto];
      }
    }
  }
  //for (i = 0; i < arrayEscuderias.length; i++)
  /* while (!encontrado) {
     indexDnipiloto = arrayEscuderias[i].arrayPilotos.findIndex((pilot) => (pilot.dni === idPiloto));
      if (indexDnipiloto != -1)
       pilotoEncontrado = arrayEscuderias[i].arrayPilotos[indexDnipiloto];
       encontrado = true;}*/

  if (indexDnipiloto == -1) {
    mensaje = "El piloto no existe, dalo de alta primero \n";
    alert(mensaje);
    altaPilotos();
    //posicionActual = arrayPilotos.length - 1;
  } else {
    console.log("piloto enocntrado: ", pilotoEncontrado);
    console.log("El index piloto es: ", indexDnipiloto);
    alert(pilotoEncontrado.sueldoPiloto());
    alert(pilotoEncontrado.toString());
  }
}

function verMecanicos() {
  let mecanicoEncontrado;
  let encontrado = false;
  let indexDnimecanico = -1;
  let idMecanico = prompt("Dime el DNI del mecanico: ", "123456");
  console.log("id mecanico:", idMecanico);
  console.log("id mecanico:", typeof idMecanico);
  let i, j;
  /*for (i = 0; i < arrayEscuderias.length; i++) {
    for (j = 0; j < arrayEscuderias[i].arrayMecanicos.length; j++) {
      if (arrayEscuderias[i].arrayMecanicos[j].dni === idMecanico) {
        indexDnimecanico = j;
        console.log("El indexDnipiloto es:", indexDnimecanico);
        mecanicoEncontrado =
          arrayEscuderias[i].arrayMecanicos[indexDnimecanico];
      }
    }
  }*/
  i = 0;
  while (i < arrayEscuderias.length && !encontrado) {
    indexDnimecanico = arrayEscuderias[i].arrayMecanicos.findIndex(
      (mecanic) => mecanic.dni === idMecanico
    );
    console.log("index mecanico:", indexDnimecanico);
    if (indexDnimecanico != -1) {
      mecanicoEncontrado = arrayEscuderias[i].arrayMecanicos[indexDnimecanico];
      encontrado = true;
      console.log("i", i);
    }
    i++;
  }

  if (indexDnimecanico == -1) {
    mensaje = "El mecanico no existe, dalo de alta primero \n";
    alert(mensaje);
    altaMecanicos();
    //posicionActual = arrayPilotos.length - 1;
  } else {
    console.log("mecanico enocntrado: ", mecanicoEncontrado);
    console.log("El index mecanico es: ", indexDnimecanico);
    alert(mecanicoEncontrado.sueldoMecanico());
    alert(mecanicoEncontrado.toString());
  }
}

function bajaPilotos() {
  let pilotoEncontrado;
  //let encontrado = false;
  let indexEliminar = -1;
  let escuderiaEncontrada;
  let idPiloto = prompt("Dime el DNI del piloto a eliminar: ", "123456");
  console.log("id piloto:", idPiloto);

  let i, j;
  for (i = 0; i < arrayEscuderias.length; i++) {
    for (j = 0; j < arrayEscuderias[i].arrayPilotos.length; j++) {
      if (arrayEscuderias[i].arrayPilotos[j].dni === idPiloto) {
        escuderiaEncontrada = i;
        indexEliminar = j;
        console.log("El indexDnipiloto es:", indexEliminar);
        pilotoEncontrado = arrayEscuderias[i].arrayPilotos[indexEliminar];
      }
    }
  }
  console.log("id pilot:", typeof idPiloto);
  if (indexEliminar == -1) {
    mensaje = "El mecanico no existe, dalo de alta primero \n";
    l;
    alert(mensaje);
    altaPilotos();
    //posicionActual = (arrayEscuderias[i].arrayPilotos[indexEliminar] - 1);
  } else {
    confirm("Seguro que quieres borrar: " + pilotoEncontrado.toString());
    console.log(escuderiaEncontrada);
    arrayEscuderias[escuderiaEncontrada].arrayPilotos.splice(indexEliminar, 1);
    alert("Piloto borrado");

    console.table("escuderia es:,", arrayEscuderias);
  }
}

function bajaMecanicos() {
  let mecanicoEncontrado;
  //let encontrado = false;
  let indexEliminar = -1;
  let escuderiaEncontrada;
  let idMecanico = prompt("Dime el DNI del piloto a eliminar: ", "123456");
  console.log("id piloto:", idMecanico);

  let i, j;
  for (i = 0; i < arrayEscuderias.length; i++) {
    for (j = 0; j < arrayEscuderias[i].arrayMecanicos.length; j++) {
      if (arrayEscuderias[i].arrayMecanicos[j].dni === idMecanico) {
        escuderiaEncontrada = i;
        indexEliminar = j;
        console.log("El indexDnipiloto es:", indexEliminar);
        mecanicoEncontrado = arrayEscuderias[i].arrayMecanicos[indexEliminar];
      }
    }
  }
  console.log("id mecánico:", typeof idMecanico);
  if (indexEliminar == -1) {
    mensaje = "El mecánico no existe, dalo de alta primero \n";
    alert(mensaje);
    altaMecanicos();
    //posicionActual = (arrayEscuderias[i].arrayPilotos[indexEliminar] - 1);
  } else {
    confirm("Seguro que quieres borrar: " + mecanicoEncontrado.toString());
    console.log(escuderiaEncontrada);
    arrayEscuderias[escuderiaEncontrada].arrayMecanicos.splice(indexEliminar, 1);
    alert("Mecánico borrado");

    console.table("escuderia es:,", arrayEscuderias);
  }
}

function verCoches() {
  let cocheEncontrado;
  //let encontrado = false;
  let indexCoche = -1;
  let nomCoche = prompt("Dime el coche que quieres ver: ", "Ferrari 400");
  console.log("nombre del coche:", nomCoche);

  let i, j;
  for (i = 0; i < arrayEscuderias.length; i++) {
    for (j = 0; j < arrayEscuderias[i].arrayCoches.length; j++) {
      if (arrayEscuderias[i].arrayCoches[j].coche === nomCoche) {
        indexCoche = j;
        console.log("El indexCoche es:", indexCoche);
        cocheEncontrado = arrayEscuderias[i].arrayCoches[indexCoche];
      }
    }
  }
  /*
  //for (i = 0; i < arrayEscuderias.length; i++) 
  while (!encontrado)
    indexDnimecanico = arrayEscuderias[i].arrayMecanicos.findIndex((mecanic) => (mecanic.dni === idMecanico));
  if (indexDnimecanico != -1)
    encontrado = true*/ //OTRA POSIBLE FORMA DE HACERLO QUE HAY QUE PROBAR

  if (indexCoche == -1) {
    mensaje = "Este coche no está registrado, lo siento! \n";
    alert(mensaje);
    //posicionActual = arrayPilotos.length - 1;
  } else {
    console.log("coche encontrado: ", cocheEncontrado);
    console.log("El index coche es: ", indexCoche);
    alert(cocheEncontrado.toString());
  }
}

function verEscuderias() {
  let escuderiaEncontrada;
  //let encontrado = false;
  let indexEscuderia = -1;
  let nomEscuderia = prompt("Dime la escudería que quieres ver: ", "Ferrari");
  console.log("nombre de la escuderías:", nomEscuderia);
  indexEscuderia = arrayEscuderias.findIndex(
    (escuderia) => escuderia.name === nomEscuderia
  );
  escuderiaEncontrada = arrayEscuderias[indexEscuderia];
  /* let i;
  for (i = 0; i < arrayEscuderias.length; i++) {
    // for (j = 0; j < arrayEscuderias[i].arrayCoches.length; j++) {
    if (arrayEscuderias[i].name === nomEscuderia) {
      // indexEscuderia = j;
      console.log("El indexEsucudería es:", indexEscuderia);
      escuderiaEncontrada = arrayEscuderias[i];
    }
  }*/  //OTRA POSIBLE FORMA DE HACERLO QUE NO HACE FALTA PUES SOLO PILLO ESCUDERÍA DIRECTO CON findIndex() 

  /*
//for (i = 0; i < arrayEscuderias.length; i++) 
while (!encontrado)
  indexDnimecanico = arrayEscuderias[i].arrayMecanicos.findIndex((mecanic) => (mecanic.dni === idMecanico));
if (indexDnimecanico != -1)
  encontrado = true*/  //OTRA POSIBLE FORMA DE HACERLO QUE HAY QUE PROBAR

  if (indexEscuderia == -1) {
    mensaje = "Esta escudería no está registrada, lo siento! \n";
    alert(mensaje);
    //posicionActual = arrayPilotos.length - 1;
  } else {
    console.log("escudería encontrada: ", escuderiaEncontrada);
    console.log("El indexEscudería es: ", indexEscuderia);
    alert(escuderiaEncontrada.toString());
  }
}

/* indexEscuderia = arrayEscuderias.findIndex(
   (escuderia) => escuderia.name === nomEscuderia*/
