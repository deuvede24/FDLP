class Mascota {
  constructor (chip, nombre, tipo, raza, sexo) {
    this.chip = chip;
    this.nombre = nombre;
    this.tipo = tipo;
    this.raza = raza;
    this.sexo = sexo;
    this.esterilizado = false;
    this.fechaBaja = null;
  }

  esterilizarMascota() {
    this.esterilizado = true;
    return this.nombre + " ha sido esterilizad" + ((this.sexo=='F') ?'a':'o');
  }

  bajaMascota() {
    let mensaje="";
    if (this.fechaBaja === null) {
      this.fechaBaja = new Date().toDateString();
      mensaje= this.nombre + " ha sido dado/a de baja\n";    
    } else {
      mensaje = 'La mascota ya ha sido dada de baja con anterioridad\n';
    }
    return mensaje + this.toString();
  }

  toString() {
    let mostrar = "";
    mostrar += `- ${this.nombre}, (chip ${this.chip}), ${this.tipo} ${this.raza} sexo `;
    mostrar += ((this.sexo=='F') ?'femenino':'masculino') + ", ";
    mostrar += ((this.esterilizado) ?'esterilizada, ':'');
    mostrar += ((this.fechaBaja != null) ? 'con fecha de baja ' + this.fechaBaja:'');
    return mostrar;
  } 


}