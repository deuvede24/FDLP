class Persona {
  constructor(nomCompleto, peso, estatura) {
    this.nomCompleto = nomCompleto;
    this.peso = peso;
    this.estatura = estatura;
    this.arrayHobbies = []; //vacío
  }

  //getters
  getNom() {
    return this.nomCompleto;
  }

  getPeso() {
    return this.peso;
  }

  getEstatura() {
    return this.estatura;
  }

  IMC() {
    let mensaje;
    let calculo = this.peso / (this.estatura / 100) ** 2;
    mensaje =
      "El IMC de " + this.nomCompleto + "es: " + calculo.toFixed(2) + "\n";
    return mensaje;
  }

  agregarHobbies(hobby) {
    let mensaje;
    this.arrayHobbies.push(hobby);
    mensaje = "El hobby" + hobby + " se ha añadido con éxito";
    return mensaje;
  }

  toString() {
    let show = "";
    show += this.nomCompleto + "\n\n";
    show += "\t-" + "Pesa: " + this.peso + "kg" + "\n";
    show += "\t-" + "Mide: " + this.estatura + "cm" + "\n";
    show += this.IMC();
    +"\n\n";
    show += this.agregarHobbies();

    return show;
  }
}
