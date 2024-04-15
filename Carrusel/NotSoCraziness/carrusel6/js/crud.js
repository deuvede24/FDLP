function agregar() {
  let indexAgregar = encontrarImagen();
  if (indexAgregar == -1) {
    let nuevoArchivo = prompt(
      "Indica el nombre del archivo a agregar",
      "rascacielos.jpg"
    );
    let nuevoTitulo = prompt(
      "Dime el título de la imagen a agregar:",
      "Skyline atardecer"
    );
    let nuevoNombre = prompt("Introduce el nombre de la imagen", "eveningSkyline");
    let nuevaDescripcion = prompt("Describe la imagen", "Es increíble");
    let imagenNueva = new Imagen(
      nuevoArchivo,
      nuevoTitulo,
      nuevoNombre,
      nuevaDescripcion
    );
    arrayImagenes.push(imagenNueva);
    posicionActual = arrayImagenes.length - 1;
    mostrar();
    alert("Foto creada");
  } else {
    alertalert("La imagen ya existe");
    mostrar();
  }
}

function mostrarI() {
  let indexMostrar = encontrarImagen();
  if (indexMostrar == -1) {
    alert("La imagen no está, aquí tienes la última");
    posicionActual = arrayImagenes.length - 1;
    mostrar();
  } else {
    let imgFoto = arrayImagenes[indexMostrar].getImagen();
    let titleFoto = arrayImagenes[indexMostrar].getTitle();
    let nomFoto = arrayImagenes[indexMostrar].getNombre();
    let descFoto = arrayImagenes[indexMostrar].getDescripcion();

    alert(`Datos foto:\n
      \t- Nom: ${imgFoto}\n
      \t- Title: ${titleFoto}\n
			\t- Nom: ${nomFoto}\n
		\t- Descripción: ${descFoto}\n`);
    posicionActual = indexMostrar;
    mostrar();
  }
}

function modificar() {
  let indexModificar = encontrarImagen();
  let imatgeAModificar;
  if (indexModificar == -1) {
    alert("Esta imagen no existe, aquí tienes la última");
    posicionActual = arrayImagenes.length - 1;
    mostrar();
  } else {
    confirm(
      "Seguro que quires modificar:" + arrayImagenes[indexModificar].toString()
    );
    /*if (confirm == true) {
      posicionActual = indexModificar;
      console.log("posción:", posicionActual);
      alert("Aquí la tienes, cierto?"); 
      mostrar();
    }*/
    posicionActual = indexModificar;
    mostrar();
    alert("Aquí la tienes, cierto?");
    imatgeAModificar = arrayImagenes[indexModificar];
    let nouNomFoto = prompt("Dame el nuevo nombre", imatgeAModificar.nombre);
    let nouTitFoto = prompt("Dame el nuevo title", imatgeAModificar.title);
    let nouDescFoto = prompt(
      "Dame la nueva descripción",
      imatgeAModificar.descripcion
    );
    let nouImgFoto = prompt("Dame la nueva imagen", imatgeAModificar.imagen);
    imatgeAModificar.setNombre(nouNomFoto);
    imatgeAModificar.setTitle(nouTitFoto);
    imatgeAModificar.setDescripcion(nouDescFoto);
    imatgeAModificar.setImagen(nouImgFoto);

    alert("Foto modificada, aquí la tienes");
    posicionActual = indexModificar;
    mostrar();
  }
}

function eliminar() {
  let indexEliminar = encontrarImagen();
  if (indexEliminar == -1) {
    alert("Esta imagen no está, aquí tienes la última");
    posicionActual = arrayImagenes.length - 1;
    mostrar();
  } else {
    confirm(
      "Seguro que quires borrar" + arrayImagenes[indexEliminar].toString()
    );
    arrayImagenes.splice(indexEliminar, 1);
    alert("Imagen borrada, aquí tienes la anterior");
    posicionActual = indexEliminar - 1;
    mostrar();
  }
}
