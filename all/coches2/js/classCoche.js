class Coches {
    constructor(coche, potencia, velocidadMax, color, precio) {
        this.coche = coche;
        this.potencia = potencia;
        this.velocidadMax = velocidadMax;
        this.color = color;
        this.precio = precio;
    }

    toString() {
        let show = "";
        show += "Coche: " +  this.coche + "\n";
        show += "Tiene: \n";
        show += "\t- Potencia: "+ this.potencia + "\n";
        show += "\t- Velocidad máxima: " + this.velocidadMax + "\n";
        show += "\t- Color: " + this.color +  "\n";
        show += "\t- Precio: " + this.precio + " millones" + "\n";
        return show;
    }

    getCoche() {
        return this.coche;
    }
    getPotencia() {
        return this.potencia;
    }
    getVelocidadmax() {
        return this.velocidadMax;
    }
    getColor() {
        return this.color;
    }
    getPrecio() {
        return this.precio;
    }

    setCoche(newCoche) {
        return this.coche = newCoche;
    }
    setPotencia(newPotencia) {
        return this.potencia = newPotencia;
    }
    setVelocidadmax(newVelocidadmax) {
        return this.velocidadMax = newVelocidadmax;
    }
    setColor(newColor) {
        return this.color = newColor;
    }
    setPrecio(newPrecio) {
        return this.precio = newPrecio;
    }
}