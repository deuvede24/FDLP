let arrayTrabajadores = [];
let arrayMecanicos = [];
let arrayPilotos = [];
//+const arrayEscuderias =[];
let posicionActual = 0;
let TrabajadorNuevo;
let tipoTrabajador;



/*function buscar(dniTrabajador) { //buscar trabajdor por su DNI
  let encontrado = false;
  let indice = -1;
  let i = 0;
  while (i < arrayTrabajadores.length && !encontrado) {
    if (arrayTrabajadores[i].dni == dniTrabajador) {
      encontrado = true;
      indice = i;
    }
    i++;
  }
  return indice;
}

function encontrar() {
  let dniWorker = prompt("Dime el DNI del trabajador", "");
  let indexTrobat = buscar(dniWorker);

  if (indexTrobat == -1) {
    alert("Este trabajor no está registrado");
  }
  return indexTrobat;
}*/
/////////////////////////////////////////////////////////////////////////
/*function crearTrabajador() {
  let hospitalEnfermos, hotelHabitaciones, cineAforo, tipoTrabajador;
  let indexAgregar = encontrar();
  let trabajadorNuevo;
  if (indexAgregar == -1) {
    do {
      tipoTrabajador = prompt(
        `Indica el tipo de edificio nuevo a crear:\n 
        1.Hotel\n 
        2.Hospital\n 
        3.Cine`,
        "1"
      );
    } while (!"123".includes(tipoEdificio));
    let edificioNombre = prompt("Dime el nombre del edificio:", "lola");
    let edificioPlantas = prompt("Dime el número de plantas:", "5");
    let edificioSuperficie = prompt("Dame la superficie:", "400");

    if (tipoEdificio == "1") {
      hotelHabitaciones = prompt(
        "Indica el número de habitaciones del hotel",
        "12"
      );
      edificioNuevo = new Hotel(
        edificioNombre,
        edificioPlantas,
        edificioSuperficie,
        hotelHabitaciones
      );
    } else if (tipoEdificio == "2") {
      hospitalEnfermos = prompt("Indica el número de pacientes actuales", "10");
      edificioNuevo = new Hospital(
        edificioNombre,
        edificioPlantas,
        edificioSuperficie,
        hospitalEnfermos
      );
    } else if (tipoEdificio == "3") {
      cineAforo = prompt("Indica el aforo del cine", "300");
      edificioNuevo = new Cine(
        edificioNombre,
        edificioPlantas,
        edificioSuperficie,
        cineAforo
      );
    }
    arrayEdificios.push(edificioNuevo);
    posicionActual = arrayEdificios.length - 1;
   () edificioNombre = arrayEdificios[posicionActual].nombre;
      edificioPlantas = arrayEdificios[posicionActual].plantas;
      edificioSuperficie = arrayEdificios[posicionActual].superficie; ()

    alert(edificioNuevo);
    alert("Edificio creado");
  } else alert("Este edificio ya existe");
}*/

/*const arrayTrabajadores = []
const arrayPilotos = []
const arrayMecanicos = []*/

console.table(arrayEscuderias);

function agregarPilotos() {
  let mensaje = "";
  let indexEscuderia =0;
  let nomEscuderia = prompt("Dime el nombre de la escudería que quieres ver", "Ferrari");

  indexEscuderia = arrayEscuderias.findIndex((escuderia) => escuderia.name === nomEscuderia)
  if (indexEscuderia = -1) {
    mensaje = "La escudería no existe, regístrala primero \n";
    alert(mensaje);

  } else {
    pilotoNombre = prompt('Nombre del piloto', 'Checo');
    pilotoApellido = prompt('Apellido del piloto', 'Pérez');
    pilotoEdad = prompt('Edad del piloto', "24")
    pilotoAntiguedad = prompt('Antigüedad del piloto', '10');
    pilotoDni = prompt('Dni del piloto', "123456")
    pilotoAltura = prompt('Altura del piloto en mts', '1,80');
    pilotoPeso = prompt('Peso del piloto en kg', '70kg');

    let nuevoPiloto = new Piloto(pilotoNombre, pilotoApellido, pilotoEdad, pilotoAntiguedad, pilotoDni, pilotoAltura, pilotoPeso);
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
/*function agregarPilotos() {
  let mensaje = "";
  let indexEscuderia;
  let nomEscuderia = prompt("dime el nombre de la escudería que quieres ver", "Ferrari");

  indexEscuderia = arrayEscuderias.findIndex((escuderia) => escuderia.name = nomEscuderia)
  if (indexEscuderia < 0) {
    mensaje = "La escudería no existe, regístrala primero \n";
    alert(mensaje);

  } else {
    pilotoNombre = prompt('Nombre del piloto', 'Checo');
    pilotoApellido = prompt('Apellido del piloto', 'Pérez');
    pilotoEdad = prompt('Edad del piloto', "24")
    pilotoAntiguedad = prompt('Antigüedad del piloto', '10');
    pilotoDni = prompt('Dni del piloto', "123456")
    pilotoAltura = prompt('Altura del piloto en mts', '1,80');
    pilotoPeso = prompt('Peso del piloto en kg', '70kg');

    nuevoPiloto = new Piloto(pilotoNombre, pilotoApellido, pilotoEdad, pilotoAntiguedad, pilotoDni, pilotoAltura, pilotoPeso);
    arrayEscuderias[indexEscuderia].agregarPiloto(nuevoPiloto);
  
    let indice = arrayPilotos.length - 1;
    alert("Piloto creado con éxito:\n" + arrayPilotos[indice].toString());
    
    console.table(arrayEscuderias);
  }
}*/






function verEdificio() {
  let indexMostrar = encontrar();
  if (indexMostrar == -1) {
    alert("Este edificio no está");
    posicionActual = arrayEdificios.length - 1;
  } else {
    posicionActual = indexMostrar;

    if (arrayEdificios[posicionActual] instanceof Cine) {
      let precioEntradas = prompt("Cuál es el precio de las entradas?: ", "10" + "€");
      let numAsistentes = prompt("Dime el número de asistentes: ", "100");
      alert(arrayEdificios[posicionActual].proyectarSesion(numAsistentes, precioEntradas));
      alert(arrayEdificios[posicionActual].vigilancia(3000, 0));

    } else if (arrayEdificios[posicionActual] instanceof Hospital) {
      let newEnfermos = prompt("Dime el número de pacientes actuales: ", 40);
      arrayEdificios[posicionActual].setEnfermos(newEnfermos);
      alert(arrayEdificios[posicionActual].repartirComida(newEnfermos));
      alert(arrayEdificios[posicionActual].vigilancia(1000, 0));

    } else if (arrayEdificios[posicionActual] instanceof Hotel) {
      alert(arrayEdificios[posicionActual].vigilancia(1000, 500));

    } alert(arrayEdificios[posicionActual].toString());
  }
}

function eliminarEdificio() {
  let indexEliminar = encontrar();
  if (indexEliminar == -1) {
    alert("Este edificio no existe");
    posicionActual = arrayEdificios.length - 1;
  } else {
    confirm(
      "Seguro que quieres borrar: " + arrayEdificios[indexEliminar].toString()
    );
    arrayEdificios.splice(indexEliminar, 1);
    alert("Edificio borrado");
    posicionActual = indexEliminar - 1;
  }
}
