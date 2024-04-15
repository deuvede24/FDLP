function buscar(dniCliente) {
  let encontrado = false;
  let indice = -1;
  let i = 0;
  while (i < arrayClientes.length && !encontrado) {
    if (arrayClientes[i].dni == dniCliente) {
      encontrado = true;
      indice = i;
    }
    i++;
  }
  return indice;
}

function encontrar() {
  let dniClient = prompt("Dime el DNI del cliente", "");
  let indexTrobat = buscar(dniClient);

  if (indexTrobat == -1) {
    alert("Este cliente no existe");
  }
  return indexTrobat;
}

/////////////////////////////////////////////////////////////////

function verClientes() {
  let indexMostrar = encontrar();
  if (indexMostrar == -1) {
    alert("Este cliente no existe");
    posicionActual == arrayClientes.length - 1;
  } else {
   /* let dniC = arrayHoteles[indexMostrar].getDni();
    let nombreC = arrayHoteles[indexMostrar].getNombre();
    let apellidoC = arrayHoteles[indexMostrar].getApellido();

    alert(`Datos Cliente:\n
        \t- Nom: ${nombreC}\n
        \t- Dni: ${dniC}\n
        \t- Apellido: ${apellidoC}\n`);*/
    alert(arrayClientes[indexMostrar].toString());

    posicionActual = indexMostrar;
    //  crearCliente();
  }
}

function eliminarCliente() {
  let indexEliminar = encontrar();
  if (indexEliminar == -1) {
    console.log("el index eliminar es:", indexEliminar)
    alert("Este cliente no existe");
    posicionActual == arrayClientes.length - 1;
    // mostrar();
  } else {
    confirm(
      "Seguro que quieres borrar: " + arrayClientes[indexEliminar].toString()
    );
    arrayClientes.splice(indexEliminar, 1);
    alert("Cliente borrado");
    posicionActual = indexEliminar - 1;
    // mostrar();
  }
}


