class Clientes {
  constructor(dni, nombre, apellido) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.arrayCuentas = []; //inicializo en ceros
  }
  toString() {
    let show = `Cliente ${this.nombre} ${this.apellido} con DNI: ${this.dni}`;
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
  setDni() {
    this.dni = dni;
  }
  setNombre() {
    return (this.nombre = nombre);
  }
  setApellido() {
    return (this.apellido = apellido);
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
    while (i < arrayCuentas.length && !encontrado) {
      if (arrayCuentas[i].numeroCuenta == cuenta) {
        encontrado = true;
        indice = i;
      }
      i++;
    }
    return indice;
  }
}
