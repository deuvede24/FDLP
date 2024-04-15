class Clientes {
  constructor(dni, nombre, apellido) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.arrayCuentas = []; //inicializo en ceros
  }
  toString() {
    let show = `Cliente ${this.nombre} ${this.apellido} con DNI: ${this.dni}`;
    //return show;
    if (this.arrayCuentas.length == 0) {
      show += "Este cliente no tiene aún cuentas asociadas";
    } else {
      show += "Cuentas:<br>"
      show += this.arrayCuentas.join("<br>");
    }
    return show;
  }


  //getters
  getDni() {
    return this.dni;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }

  //setters
  setDni(newDni) {
    this.dni = newDni;
  }
  setNombre(newNombre) {
    return (this.nombre = newNombre);
  }
  setApellido(newApellido) {
    return (this.apellido = newApellido);
  }

  addCuenta(cuenta) {
    let mensaje;
    this.arrayCuentas.push(cuenta);
    mensaje = `La cuenta` + cuenta.numeroCuenta + `ha sido añadida con éxito`;
    return mensaje;
  }

  /*crearCuenta(objetoCuenta) {
    this.arrayCuentascuentas = push(objetoCuenta);
  }*/

  buscarCuenta(cuenta) {
    let encontrado = false;
    let i = 0;
    let indice = -1;
    while (i < this.arrayCuentas.length && !encontrado) {
      if (this.arrayCuentas[i].numeroCuenta == cuenta) {
        encontrado = true;
        indice = i;
      }
      i++;
    }
    return indice;
  }

  
}
