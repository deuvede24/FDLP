function buscar(nombreFoto) {
    let encontrado = false;
    let indice = -1;
    //arr --> 5 fotos --> arr.length = 5 --> si la condicuó serà i < arr.length, la i va de 0 a 4
    let i = 0;
    while (i < arrayImagenes.length && !encontrado) {

        if (arrayImagenes[i].nombre == nombreFoto) {
            encontrado = true;
            indice = i;
        }
        i++;
    }
    return indice;
}

/*function encontrarImagen() {
    let spot = prompt("Dime qué imagen de la ciudad quieres ver", "");
    let indice = buscar(spot)
    if (indice != -1) {
        posicionActual = indice;
        // console.log("la posicón es:", posicionActual);
        // console.log("l índice aquí es:", indice);
        mostrarImagen();
    } else {
        alert("Esta imagen no existe");
    }
}*/

function encontrarImagen() {

    let nomFoto = prompt("Dime el nombre de la imagen", "");
    let indexTrobat = buscar(nomFoto);

    if (indexTrobat == -1) {
        alert("Esta imagen no existe");
    }
    mostrar();
    return indexTrobat;

}