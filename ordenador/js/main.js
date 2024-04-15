
function crearOrdenadores() {
  let ordenadorMarca1 = prompt("Dime la marca del ordenador");
  let ordenadorModelo1 = prompt("Dime el modelo del ordenador");
  let ordenadorProcesador1 = prompt("Dime el tipo de procesador");
  let ordenadorMemoria1 = prompt("Introduce el valor de la memoria RAM");
  let ordenadorCapacidad1 = prompt("Introduce el la capaciad del disco duro");
  let compu1 = new Ordenador(ordenadorMarca1, ordenadorModelo1, ordenadorProcesador1, ordenadorMemoria1, ordenadorCapacidad1);

  let ordenadorMarca2 = prompt("Dime la marca del ordenador");
  let ordenadorModelo2 = prompt("Dime el modelo del ordenador");
  let ordenadorProcesador2 = prompt("Dime el tipo de procesador");
  let ordenadorMemoria2 = prompt("Introduce el valor de la memoria RAM");
  let ordenadorCapacidad2 = prompt("Introduce el la capaciad del disco duro");
  let compu2 = new Ordenador(ordenadorMarca2, ordenadorModelo2, ordenadorProcesador2, ordenadorMemoria2, ordenadorCapacidad2);

  console.log(compu1.getCapacidad());
  console.log(compu1.getMarca());
  console.log(compu1.getModelo());
  console.log(compu1.getProcesador());
  console.log(compu1.getMemoria());

  ordenadorCapacidad1 = prompt("Indica la nueva capacidad del disco duro de la compu1", "3Tb");
  ordenadorProcesador1 = prompt("Indica la nueva procesador de la compu1", "intel i7");
  ordenadorMemoria1 = prompt("Indica la nueva memoria RAM de la compu1", "8Gb");
  compu1.setCapacidad(ordenadorCapacidad1);
  compu1.setProcesador(ordenadorProcesador1);
  compu1.setMemoria(ordenadorMemoria1);
  alert(compu1);

  let programa = prompt("Qué programa se está ejecutando en la compu2?", "Chrome")
  alert(compu2.programaActual(programa));

}









