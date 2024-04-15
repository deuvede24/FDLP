const arrayHoteles = [];
let posicionActual = 0;

function crearHotel() {
  let hotelNombre = prompt("Dime el nombre del hotel:");
  let hotelHabitaciones = prompt("Dame el número de habitaciones:");
  let hotelPlantas = prompt("Dime el número de plantas del hotel:");
  let hotelSuperficie = prompt("¿Cuál es la superficie del hotel en mts2?:");
  let hotel = new Hotel(
    hotelNombre,
    hotelHabitaciones,
    hotelPlantas,
    hotelSuperficie
  );
  arrayHoteles.push(hotel);
  posicionActual = arrayHoteles.length - 1;
  hotelNombre = arrayHoteles[posicionActual].nombre;
  hotelHabitaciones = arrayHoteles[posicionActual].habitaciones;
  hotelPlantas = arrayHoteles[posicionActual].plantas;
  hotelSuperficie = arrayHoteles[posicionActual].superficie;

  console.log(hotel.getNombre());
  console.log(hotel.getHabitaciones());
  console.log(hotel.getPlantas());
  console.log(hotel.getSuperficie());



}
