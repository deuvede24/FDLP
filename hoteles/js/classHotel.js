class Hotel {
  constructor(nombre, habitaciones, plantas, superficie) {
    this.nombre = nombre;
    this.habitaciones = habitaciones;
    this.plantas = plantas;
    this.superficie = superficie;
  }
  toString() {
    let show = `El hotel ${this.nombre}\n\n\t- Cuenta con ${this.habitaciones} habitaciones \n\t- ${this.plantas} plantas y ${this.superficie} mts2`;
    return show;
  }

  getNombre() {
    return this.nombre;
  }

  getHabitaciones() {
    return this.habitaciones;
  }

  getPlantas() {
    return this.plantas;
  }

  getSuperficie() {
    return this.superficie;
  }

  setNombre(newNombre) {
    this.nombre = newNombre;
  }

  setHabitaciones(newHabitaciones) {
    this.habitaciones = newHabitaciones;
  }

  setPlantas(newPlantas) {
    this.plantas = newPlantas;
  }

  setSuperficie(newSuperficie) {
    this.superficie = newSuperficie;
  }

  calcularMantenimiento(personas) {
    let costRooms = personas * 1500;
    return costRooms;
  }
}
