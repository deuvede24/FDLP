class Escuderia {
 //static sueldoBase = 50000;
  constructor(name, budget, country) {
    this.name = name;
    this.budget = budget;
    this.country = country
    this.arrayCoches=[];
    this.arrayPilotos=[];
    this.arrayMecanicos=[];
  }

  toString() {
    let show = "";
    show += "La escudería: " + this.name + "\n";
    show += "Tiene: \n";
    show += "\t- Presupuesto: " + this.budget + "\n";
    show += "\t- País de origen: " + this.country + "\n";
    return show;
  }

  getNombre() {
    return this.name;
  }
  getApellido() {
    return this.budget;
  }
  getEdad() {
    return this.country;
  }
  
  setNombre(newName) {
    return this.name=newName;
  }
  setApellido(newBudget) {
    return this.budget=newBudget;
  }
  setEdad(newCountry) {
    return this.country=newCountry;
  }

  agregarCoche(objetoCoche) {
    this.arrayCoches.push(objetoCoche);
  }
  agregarPiloto(objetoPiloto) {
    this.arrayPilotos.push(objetoPiloto);
  }
  agregarMecanico(objetoMecanico) {
    this.arrayMecanicos.push(objetoMecanico);
  }
  
}