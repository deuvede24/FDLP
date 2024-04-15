function buscar(nombreHotel) {
  let encontrado = false;
  let indice = -1;
  let i = 0;
  while (i < arrayHoteles.length && !encontrado) {
    if (arrayHoteles[i].nombre == nombreHotel) {
      encontrado = true;
      indice = i;
    }
    i++;
  }
  return indice;
}
function encontraHotel() {
  let nomHotel = prompt("Dime el nombre del hotel a buscar", "");
  let indexTrobat = buscar(nomHotel);

  if (indexTrobat == -1) {
    alert("Este hotel no existe");
  }
  return indexTrobat;
}


