class Edificio {
  constructor(nombre, plantas, superficie) {
    this.nombre = nombre;
    this.plantas = plantas;
    this.superficie = superficie;
  }

  toString() {
    let show = "";
    show += this.nombre + "\n\n";
    show += `Tiene: \n`;
    show += "\t- " + this.plantas + " plantas" + "\n";
    show += "\t- " + this.superficie + "mts2" + "\n";
    return show;
  }

  getNombre() {
    return this.nombre;
  }

  getPlantas() {
    return this.plantas;
  }

  getSuperficie() {
    return this.superficie;
  }

  limpiar() {
    let superficieAlimpiar = (this.superficie / 5) * this.plantas;
    let minutosAlimpiar = this.plantas / 2 + superficieAlimpiar;
    let horas = Math.floor(minutosAlimpiar / 60);
    let minutos = minutosAlimpiar % 60;
    let coste = minutosAlimpiar * 30;
    return `- Se necesitan ${horas} horas y ${minutos} minutos para el servicio de limpieza y 
    tiene un coste total de ${coste.toFixed(2)}€`;
  }

  vigilancia(metrosAcubrir, peligrosidad) {
    let coste = 0;
    let vigilantes = 0;
    vigilantes = Math.ceil(this.superficie / metrosAcubrir);
    coste = vigilantes * 1300 + peligrosidad;
    return `- Se necesitan ${vigilantes} vigilantes para este edificio y 
    tiene un coste de ${coste.toFixed(2)}€`;
  }
}
////////////////
///// FATAN: GETTERS Y SETTERS(de quien haga falta)

class Hospital extends Edificio {
  constructor(nombre, plantas, superficie, enfermos) {
    super(nombre, plantas, superficie);
    this.enfermos = enfermos;
  }

  getEnfermos() {
    return this.enfermos;
  }
  setEnfermos(newEnfermos) {
    return (this.enfermos = newEnfermos);
  } //ojo aquí los getters y setter, quizá al main;

  repartirComida(newEnfermos) {
    let mensaje = "";
    let raciones = parseInt(newEnfermos * 3);
    mensaje += "Se están repartiendo: " + raciones + " raciones de comida";
  return mensaje;
  }

  toString() {
    let show = "";
    show += "El Hospital" + "\n";
    show += super.toString();
    show +=  "\t- Pacientes: " + this.enfermos + "\n";
    show += super.limpiar() + "\n";
   // show += super.vigilancia(1000, 0) + "\n";
   // show += this.repartirComida();
    return show;
  }
}

class Hotel extends Edificio {
  constructor(nombre, plantas, superficie, habitaciones) {
    super(nombre, plantas, superficie);
    this.habitaciones = habitaciones;
  }

  getHabitaciones() {
    return this.habitaciones;
  }

  servicioHabitaciones() {
    let personas = 0;
    let coste = 0;
    let mensaje = "";
    personas = parseInt(Math.ceil(this.habitaciones / 20));
    coste = personas * 1000;
    mensaje =
      "- Se necesitan " +
      personas +
      " personas para el servicio de habitaciones" + "\n";
    mensaje += " el coste de este servicio es: " + coste + "€";
    return mensaje;
  }

  toString() {
    let show = "";
    show += "El Hotel:" + "\n";
    show += super.toString();
    show += "\t- " + this.habitaciones + " habitaciones" + "\n";
    show += super.limpiar() + "\n";
    show += super.vigilancia(1000, 500) + "\n";
    show += this.servicioHabitaciones();
    return show;
  }
}

class Cine extends Edificio {
  constructor(nombre, plantas, superficie, aforo) {
    super(nombre, plantas, superficie);
    this.aforo = aforo;
  }

  getAforo() {
    return this.aforo;
  }
  setAforo(){
    return this.aforo;
  }

  proyectarSesion(numAsistentes, precioEntradas) {
    let recaptacion;
    let mensaje = "";
    if (numAsistentes <= this.aforo) {
      recaptacion = (parseInt(numAsistentes) * parseFloat(precioEntradas));
      mensaje = "Se han recaudado: " + recaptacion + "€";
      return mensaje;
    }
  }

  toString() {
    let show = "";
    show += "El cine: ";
    show += super.toString();
    show +=  "\t- Tiene un aforo máximo de: " + this.aforo + "\n";
    show += super.limpiar() + "\n";
    show += super.vigilancia(3000, 0) + "\n";
    //show += this.proyectarSesion();
    return show;
  }
}
