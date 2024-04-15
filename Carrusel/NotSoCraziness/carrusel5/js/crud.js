function agregar() {
    let nuevoArchivo = prompt("indica el nombre del nuevo archivo", "rascacielos.jpg");
    let nuevoTitulo = prompt("El nuevo título de la imagne es:", "Skyline atardecer");
    let nuevoNombre = prompt("introduce el nombre del sitio", "eveningSkyline");
    let nuevaDescripcion = prompt("Describe el sitio", "Es increíble");
    let imagenNueva = new Imagen(
        nuevoArchivo,
        nuevoTitulo,
        nuevoNombre,
        nuevaDescripcion
    );
    arrayImagenes.push(imagenNueva);
    posicionActual = arrayImagenes.length-1;
    mostrar();
}

