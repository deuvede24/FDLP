const arrayClientes = [];
const arrayCuentas = [];
let posicionActual = 0;

function crearCliente() {
  let indexAgregar = encontrar();
  if (indexAgregar == -1) {
    let clienteNombre = prompt("Dime el nombre del cliente:", "Paco");
    let clienteApellido = prompt("Dime el apellido del cliente:", "Pérez");
    let clienteDni = prompt("Dame el DNI del cliente:", "123456");
    let cliente = new Clientes(clienteDni, clienteNombre, clienteApellido);
    arrayClientes.push(cliente);
    console.log("El cliente es", cliente);
    posicionActual = arrayClientes.length - 1;
    clienteDni = arrayClientes[posicionActual].dni;
    clienteNombre = arrayClientes[posicionActual].nombre;
    clienteApellido = arrayClientes[posicionActual].apellido;
    alert(cliente);
  }
}

function crearCuenta() {
  let dniC = prompt(
    "Indica el DNI del cliente a quien quieres crearle una cuenta:",
    "123456"
  );
  let indexAgregarCuenta = buscar(dniC);
  if (indexAgregarCuenta == -1) {
    alert("Este cliente no existe, créalo primero!");
    //crearCliente();
  } else {
    let cuentaNueva = prompt("Dime el numero de cuenta a asociar:", "888888");
    arrayClientes[indexAgregarCuenta].addCuenta(new Cuenta(cuentaNueva));
    //  let cuentaNueva = new Cuenta(cuentaNumber);
    //  arrayCuentas.push(cuentaNueva);
    console.log("la cuenta es", cuentaNueva);
    //arrayClientes[indexAgregarCuenta].addCuenta(cuentaNueva);
    posicionActual = arrayCuentas.length - 1;
    console.log("El índice de cliente es:", arrayClientes);
    console.log("El índice de cuentas es:", arrayCuentas);
    console.log("La posición es:", posicionActual);
    // cuentaNumber = arrayCuentas[posicionActual].cuentaNumber;
    alert(`La cuenta ${cuentaNueva} pertecene al cliente ${dniC}`);
  }
}

function ingresarDinero() {
  let monto;
  let indexClienteIngresar = encontrar();
  //let clienteIngresar = prompt("Introduce el Dni del cliente a quién quieres ingresar:", "098765");
  console.log("indexCuenta", indexClienteIngresar);

  if (indexClienteIngresar == -1) {
    console.log("indexCuenta", indexClienteIngresar);
    alert("Este cliente no existe, créalo primero");
    crearCliente();
    crearCuenta();
    ingresarDinero();
  } else {
    let cuenta = prompt(
      "Introduce el número de cuenta donde quieres ingresar: ",
      "123456"
    );
    // posicionActual = indexCuentaIngresar;
    /* monto = prompt("Introduzca la cantidad a ingresar: ", "80");
     console.log("monto", monto);*/
    let indexCuentaIngresar =
      arrayClientes[indexClienteIngresar].buscarCuenta(cuenta);
    if (indexCuentaIngresar < 0) {
      alert(
        "Esta cuenta no le pertece al cliente indicado, verifica la cuenta o créela primero"
      );
      /*crearCuenta()
      ingresarDinero();*/
    } else {
      monto = parseFloat(prompt("Indique el monto a ingrear:", "50€"));
      arrayClientes[indexClienteIngresar].arrayCuentas[
        indexCuentaIngresar
      ].ingresar(monto);
    }

    //alert(arrayCuentas[posicionActual].ingresar(monto));
    posicionActual = arrayCuentas.length - 1;
    console.log("posiciónActual", posicionActual);
  }
}

function retirarDinero() {
  let monto;
  let indexClienteRetirar = encontrar();
  //let clienteIngresar = prompt("Introduce el Dni del cliente a quién quieres ingresar:", "098765");
  console.log("indexClient", indexClienteRetirar);

  if (indexClienteRetirar == -1) {
    console.log("indexClient", indexClienteRetirar);
    alert("Este cliente no existe, créalo primero");
    /* crearCliente();
     crearCuenta();
     ingresarDinero();*/
  } else {
    let cuenta = prompt(
      "Introduce el número de cuenta donde quieres retirar: ",
      "123456"
    );
    // posicionActual = indexCuentaIngresar;
    /* monto = prompt("Introduzca la cantidad a ingresar: ", "80");
     console.log("monto", monto);*/
    let indexCuentaRetirar =
      arrayClientes[indexClienteRetirar].buscarCuenta(cuenta);
    if (indexCuentaRetirar < 0) {
      alert(
        "Esta cuenta no le pertece al cliente indicado, verifica la cuenta o créela primero"
      );
      /*crearCuenta()
      ingresarDinero();*/
    } else {
      monto = parseFloat(prompt("Indique el monto a retirar:", "50€"));
      while (arrayClientes[indexClienteRetirar].arrayCuentas[indexCuentaRetirar].getSaldo(cuenta) < monto)
        monto = parseFloat(prompt("No hay saldo suficiente en la cuenta, indique un saldo más bajo", "20"));

      if (arrayClientes[indexClienteRetirar].arrayCuentas[indexCuentaRetirar].getSaldo(cuenta) > monto)
        arrayClientes[indexClienteRetirar].arrayCuentas[indexCuentaRetirar].retirar(monto);
    }
    //alert(arrayCuentas[posicionActual].ingresar(monto));
    posicionActual = arrayCuentas.length - 1;
    console.log("posiciónActual", posicionActual);
  }
}
