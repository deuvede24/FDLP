class Cuenta {
  constructor(numeroCuenta) {
    this.numeroCuenta = numeroCuenta;
    this.saldo = 0;
  }
  toString() {
    let show = `La cuenta ${this.numeroCuenta}\n\n\t- Tiene un saldo de: ${this.saldo}`;
    return show;
  }

  getSaldo(){
    return this.saldo;
  }

  ingresar(monto) {
    let mensaje;
    this.saldo +=monto;
    mensaje = `Se han ingresado ` + monto + `€ con éxito \n`;
    mensaje += `El nuevo saldo en cuenta es: ` + this.saldo + monto;
    return mensaje;
  }

  retirar(monto) {
    let mensaje;
    if (monto > this.saldo) {
      mensaje = `El monto a retirar es mayor que el saldo disponible en cuenta \n
        t- No se puede resalizar esta operación`;
    } else {
      this.saldo -= monto;
      mensaje =
        `El nuevo saldo disponible en cuenta es: €` + this.saldo.toFixed(2);
    }
    return mensaje;
  }
}
