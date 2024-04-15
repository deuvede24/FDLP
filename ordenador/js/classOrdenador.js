class Ordenador {
  constructor(marca, modelo, procesador, memoria, capacidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.procesador = procesador;
    this.memoria = memoria;
    this.capacidad = capacidad;
  };


  getMarca() {
    return this.marca;
  }

  getModelo() {
    return this.modelo;
  }

  getProcesador() {
    return this.procesador;
  }

  getMemoria() {
    return this.memoria;
  }

  getCapacidad() {
    return this.capacidad;
  }


  setProcesador(newProcesador) {
    this.procesador = newProcesador;
  }

  setMemoria(newMemoria) {
    this.memoria = newMemoria;
  }

  setCapacidad(newCapacidad) {
    this.capacidad = newCapacidad;
  }


  toString() {
    let show = `La marca de este ordenador es ${this.marca} modelo ${this.modelo} \n\t- Con procesador ${this.procesador}\n\n\t-Tiene memoria RAM de ${this.memoria}\n\t-Cuenta con${this.capacidad}de capacidad `;
    return show;
  }
  programaActual(prog) {
    return `El ${this.marca} ${this.modelo} en estos momento está ejecutando ${prog}`;
  }

}
