/////////////////////////////////////////////////////////////////

function ver() {
  let indexMostrar = encontraHotel();
  if (indexMostrar == -1) {
    alert("Este hotel no está");
    posicionActual = arrayHoteles.length - 1;
    mostrar();
  } else {
    let nHotel = arrayHoteles[indexMostrar].getNombre();
    let hHotel = arrayHoteles[indexMostrar].getHabitaciones();
    let pHotel = arrayHoteles[indexMostrar].getPlantas();
    let sHotel = arrayHoteles[indexMostrar].getSuperficie();

    alert(`Datos Hotel:\n
        \t- Nom: ${nHotel}\n
        \t- Habitaciones: ${hHotel}\n
        \t- Plantas: ${pHotel}\n
        \t- Superficie: ${sHotel}\n`);

    let rooms = arrayHoteles[indexMostrar].getHabitaciones();
    let personas = Math.ceil(rooms / 20);
    let costRooms = arrayHoteles[indexMostrar].calcularMantenimiento(personas);
    alert(`Mantenimiento del Hotel:\n
        \t- Se necesitan: ${personas} personas\n;
        \t- El coste total es: ${costRooms}€\n`);
    posicionActual = indexMostrar;

    /*posicionActual = indexMostrar;
    mostrar();*/
  }
}

function modificar() {
  let indexModificar = encontraHotel();
  let hotelAModificar;
  if (indexModificar == -1) {
    alert("Este hotel no existe");
  } else {
    confirm(
      "Seguro que quires modificar: " + arrayHoteles[indexModificar].toString()
    );
    posicionActual = indexModificar;
    hotelAModificar = arrayHoteles[indexModificar];
    let nouNomHotel = prompt(
      "Dame el nuevo nombre", 
      hotelAModificar.nombre
      );
    let nouHabHotel = prompt(
      "Dame el nuevo número de habitaciones",
      hotelAModificar.habitaciones
    );
    let nouPltHotel = prompt(
      "Dame el nuevo número de plantas",
      hotelAModificar.plantas
    );
    let nouSupHotel = prompt(
      "Dime el nuevo valor de superficie",
      hotelAModificar.superficie
    );

    hotelAModificar.setNombre(nouNomHotel);
    hotelAModificar.setHabitaciones(nouHabHotel);
    hotelAModificar.setPlantas(nouPltHotel);
    hotelAModificar.setSuperficie(nouSupHotel);

    alert("Hotel modificado");
    //mostrar array;
    posicionActual = indexModificar;
    mostrar();
  }
}

function eliminar() {
  let indexEliminar = encontraHotel();
  if (indexEliminar == -1) {
    alert("Este hotel no existe");
    posicionActual = arrayHoteles.length - 1;
    mostrar();
  } else {
    confirm(
      "Seguro que quieres borrar: " + arrayHoteles[indexEliminar].toString()
    );
    arrayHoteles.splice(indexEliminar, 1);
    alert("Hotel borrado");
    posicionActual = indexEliminar - 1;
    mostrar();
  }
}
