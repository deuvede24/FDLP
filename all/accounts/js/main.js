const arrayClientes = [];
const arrayCuentas = [];
let posicionActual = 0;

function crearCliente() {
  let indexAgregar = encontrar();
  if (indexAgregar == -1) {
    let clienteNombre = prompt("Dime el nombre del cliente:");
    let clienteApellido = prompt("Dime el apellido del cliente:");
    let clienteDni = prompt("Dame el DNI del cliente:");
    let cliente = new Clientes(clienteDni, clienteNombre, clienteApellido);
    arrayClientes.push(cliente);
    console.log("el cliente es", cliente);
    posicionActual = arrayClientes.length - 1;
    clienteDni = arrayClientes[posicionActual].dni;
    clienteNombre = arrayClientes[posicionActual].nombre;
    clienteApellido = arrayClientes[posicionActual].apellido;
    alert(cliente);

  }
}

function crearCuenta() {
  let dniC = prompt("Indica el DNI del cliente a quien quieres crearle una cuenta:", "123456");
  let indexAgregarCuenta = buscar(dniC);
  if (indexAgregarCuenta == -1) {
    alert("Este cliente no existe, créalo primero!");
    //crearCliente();
  } else {
    let cuentaNumber = prompt("Dime el numero de cuenta a asociar:", "123456");//aqui lo de 2 DNIs
    let cuentaNueva = new Cuenta(cuentaNumber);
    arrayCuentas.push(cuentaNueva);
    console.log("la cuenta es", cuentaNueva);
    arrayClientes[indexAgregarCuenta].addCuenta(cuentaNueva);
    posicionActual = arrayCuentas.length - 1;
    console.log("El índice de cliente es:", arrayClientes);
    console.log("El índice de cuentas es:", arrayCuentas);
    // cuentaNumber = arrayCuentas[posicionActual].cuentaNumber;
    alert(`La cuenta ${cuentaNueva} pertecene al cliente ${dniC}`);

  }
}

function ingresarDinero() {
  let monto;
  let cuenta = prompt("Introduce el número de cuenta donde quieres ingresar: ", "123456");
  let indexCuentaIngresar = buscarCuentaIngresar(cuenta);


  console.log("indexCuenta", indexCuentaIngresar);
  if (indexCuentaIngresar == -1) {
    console.log("indexCuenta", indexCuentaIngresar);
    alert("Este cuenta no existe, verifícala");
  } else {
    posicionActual = indexCuentaIngresar;
    monto = prompt("Introduzca la cantidad a ingresar: ", "80");
    console.log("monto", monto);
    arrayClientes[posicionActual].ingresar(monto);

    //alert(arrayCuentas[posicionActual].ingresar(monto));
    posicionActual = arrayCuentas.length - 1;
    console.log("posiciónActual", posicionActual);
   
    




  }

}

