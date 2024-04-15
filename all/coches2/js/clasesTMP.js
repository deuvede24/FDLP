class Trabajador {
 //static sueldoBase = 50000;
  constructor(nombre, apellido, edad, antiguedad, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.antiguedad = antiguedad;
    this.dni = dni
    this.sueldoBase=50000;
  }

  toString() {
    let show = "";
    show += this.nombre + " " + this.apellido + " con DNI: " + this.dni + "\n\n";
    show += "Tiene: \n";
    show += "\t-" + this.edad + " años de edad" + "\n";
    show += "\t-" + this.antiguedad + " años de antigüedad" + "\n";
    return show;
  }

  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getAntiguedad() {
    return this.antiguedad;
  }
  getDni(){
    return this.dni;
  }
  getSueldobase(){
    return this.sueldoBase;
  }
}
////////////////


class Mecanico extends Trabajador {
  constructor(nombre, apellido, edad, antiguedad, dni, estudiosSuperiores) {
    super(nombre, apellido, edad, antiguedad, dni);
    this.estudiosSuperiores = estudiosSuperiores;
  }

  getEstudios() {
    return this.estudiosSuperiores;
  }
  /*setEstudios(newEstudios) {
    return (this.estudiosSuperiores = newEstudios);
  } */
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getAntiguedad() {
    return this.antiguedad;
  }
  getDni(){
    return this.dni;
  }
  getSueldobase(){
    return this.sueldoBase;
  }

  sueldoMecanico() {
    let mensaje = "";
    let sueldoMecanico = parseFloat((super.getSueldobase()) + (super.getAntiguedad() * 10000));
    mensaje +=
      "El sueldo de: " +
      this.nombre +
      this.apellido +
      " es: " +
      sueldoMecanico +
      "€";
    return mensaje;
  }

  toString() {
    let show = "";
    show += "Datos del mecánico: " + "\n";
    show += super.toString() + "\n";
    show += "Estudios superiores: " + this.getEstudios() + "\n"; // o getEstudios() this.estudiosSuperiores
    show += this.sueldoMecanico();
    return show;
  }
}

class Piloto extends Trabajador {
  //static risk = 50000;
  constructor(nombre, apellido, edad, antiguedad, dni, sueldoBase, altura, peso) {
    super(nombre, apellido, edad, antiguedad, dni, sueldoBase);
    this.altura = altura;
    this.peso = peso;
    this.risk = 50000;
  } 
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getAntiguedad() {
    return this.antiguedad;
  }
  getDni(){
    return this.dni;
  }
  getSueldobase(){
    return this.sueldoBase;
  }

  getRisk(){
    return this.risk;
  }

  getAltura() {
    return this.altura;
  }
  setAltura(newAltura) {
    return (this.altura = newAltura);
  }
  getPeso() {
    return this.peso;
  }
  setAltura(newPeso) {
    return (this.peso = newPeso);
  }
  

  sueldoPiloto() {
    let mensaje = "";
    let sueldoPiloto = parseFloat((super.getSueldobase()) + (Number(super.getAntiguedad()) * 10000) + this.getRisk()); //antiguedad puede ser con get
    mensaje +=
      "El sueldo de: " +
      this.nombre + " " +
      this.apellido + " " +
      "es: " + " " +
      sueldoPiloto +
      "€";
    return mensaje;
  }
  toString() {
    let show = "";
    show += "Datos del piloto: " + "\n";
    show += super.toString(); + "\n";
    show += "\t- Mide: " + this.getAltura() + "metros de altura" + "\n";
    show += "\t- Pesa: " + this.getPeso() + " kg" + "\n";
    show += this.sueldoPiloto();
    return show;
  }

}


