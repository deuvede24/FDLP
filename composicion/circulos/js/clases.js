class Punto {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  getPosX() {
    return this.posX;
  }
  getPosY() {
    return this.posY;
  }

  setPosX(posX) {
    this.posX = posX;
  }
  setPosY(posY) {
    this.posY = posY;
  }

  toString() {
    return `(${this.posX},${this.posY})`;
  }
}

class Circulo {
  constructor(centro, radio) {
    this.centro = centro; //centro formado de posX y posY
    this.radio = radio;
  }

  getCentro() {
    return this.centro;
  }
  getRadio() {
    return this.radio;
  }
  getX() {
    return this.centro.posX;
  }
  getY() {
    return this.centro.posY;
  }

  distanciaCentros(otroCirculo) {
    let distX2 = Math.pow(this.getX() - otroCirculo.getX(), 2); //no toFixed pues es NaN
    console.log("distX2 es:", distX2);
    let distY2 = Math.pow(this.getY() - otroCirculo.getY(), 2);
    console.log("distY2 es:", distY2);
    let distTotal = Math.sqrt(distX2 + distY2);
    console.log("La distancia es:", distTotal);
    console.log("getY() es:", this.centro.posY); 

    return distTotal;
  }

  sumaRadios(otroCirculo) {
    let suma = Math.abs(this.radio + otroCirculo.radio);
    console.log("radio es:", radio);
    console.log("otroCirculo es:", otroCirculo.getRadio());
    return suma;
  }

  restaRadios(otroCirculo) {
    let resta = Math.abs(this.radio - otroCirculo.radio);
    return resta;
  }

  iguales(otroCirculo) {
    //mismo centro y radio
    let same =
      this.posX === otroCirculo.posX &&
      this.posY === otroCirculo.posY &&
      this.radio === otroCirculo.radio;
    return same;
  }

  concentricos(otroCirculo) {
    //mismo centro
    let concentric =
      this.getX() === otroCirculo.getX() && this.getY() === otroCirculo.getY();
    return concentric;
  }

  igualRadio(otroCirculo) {
    //mismo radio
    let sameRadio = this.getRadio() === otroCirculo.getRadio();
    return sameRadio;
  }

  sonTangentes(otroCirculo) {
    let tan =
      this.distanciaCentros(otroCirculo) === this.sumaRadios(otroCirculo);
    // son tangentes si (distancia == (this.radio + otroCirculo.radio));
    console.log("El radio es:", this.radio);
    console.log("El otro radio es:", otroCirculo.radio);
    console.log("sumaRadio es:", this.sumaRadios);
    console.log("distanciaCentro es:", this.distanciaCentros);
    return tan;
  }

  sonSecantes(otroCirculo) {
    let secant =
      (this.distanciaCentros(otroCirculo) > this.restaRadios(otroCirculo)) &&
      (this.distanciaCentros(otroCirculo) < this.sumaRadios(otroCirculo));
    // son secantes si (this.restaRadios<distancia>this.sumaRadios);
    console.log("restaRadio es:", this.restaRadios);
    console.log("sumaRadio es:", this.sumaRadios);
    console.log("distanciaCentro es:", this.distanciaCentros);
    console.log("secante es:", secant);
    return secant;
  }

  noSetocan(otroCirculo) {
    let apart =
     (this.distanciaCentros(otroCirculo) > this.sumaRadios(otroCirculo));
    // son secantes si (distancia > (this.radio + otroCirculo.radio));
    return apart;
  }

  toString() {
    let show = `${this.apart} - ${this.secant} - ${this.tan} - ${this.sameRadio}`;
    return show;
  }
}
