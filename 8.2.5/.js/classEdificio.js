class Edificio {
    constructor(nombre, numeroPlantas, superficie) {
        this.nombre = nombre;
        this.numeroPlantas = numeroPlantas;
        this.superficie = superficie;
    }
    toStrig() {
        let mostrar = `${this.nombre} + \n
                Numero de plantas: ${this.numeroPlantas} +\n
                Superficie(m2): ${this.superficie}+\n
                Coste de limpiar: ${this.limpiar}+\n
                Coste de vigilancia: ${this.costeVigilancia}`;
        return mostrar;
    }
    
}
class Hotel extends Edificio {
    constructor(nombre, numeroPlantas, superficie ,habitaciones) {
        super(nombre, numeroPlantas, superficie);
        this.habitaciones = habitaciones;
    }
    limpiar() {
        let tiempoLimpiar = this.superficie / 5;  //given
        let tiempoExtra = this.numeroPlantas * 0.5; //given
        let tiempoLimpia = tiempoLimpiar + tiempoExtra;
        let costeMensual = tiempoLimpia * 30;
        return costeMensual;
    }
    costeVigilanciaHotel() {
        let vigilante = this.superficie / 1000;
        let costeMensual = vigilante * 1800;
        return costeMensual;
    }
    srvicioHabitaciones(){
        let numPersona = this.habitaciones / 20;
        let costemensual = numPersona * 1800;
        return costemensual;
    }
    
    toStrig() {
        let mostrar = `El Hotel ${this.nombre} \n tiene numero de Plantas ${this.numeroPlantas}\n tiene superficie ${this.superficie}m2.\n `
          mostrar += `El coste para limpiar ${this.limpiar()} €.\n`
          mostrar += `El coste vigilancia es ${this.costeVigilanciaHotel()} €. \n` 
          mostrar += `El coste mensual para servicio de habitaciones es ${this.srvicioHabitaciones()}.`           
        return mostrar;
    }
}
class Hospital extends Edificio {
    constructor(nombre, numeroPlantas, superficie, enfermos) {
        super(nombre, numeroPlantas, superficie);
        this.enfermos = enfermos;
    }
    setEnfermos(newEnfermos){
        this.enfermos = newEnfermos;
    }
    limpiar() {
        let tiempoLimpiar = this.superficie / 5;  //given
        let tiempoExtra = this.numeroPlantas * 0.5; //given
        let tiempoLimpia = tiempoLimpiar + tiempoExtra;
        let costeMensual = tiempoLimpia * 30;
        return costeMensual;
    }
    costeVigilanciaHosp() {
        let vigilante = this.superficie / 1000;
        let costeMensualV = vigilante * 1800;
        return costeMensualV;
    }
    repatirAlmuerzo() {
        let almuerzoDiario = this.enfermos * 3;
        return almuerzoDiario;
    }
    actualizaComida(){
        let numEnfermos = Number(prompt("Numero de enfermos hospitalizado:","200"));
        let raccion = numEnfermos * 3;
        return raccion;
    }

    toString() {
        let mostrar = `El Hospital ${this.nombre} \n tiene numero de Plantas ${this.numeroPlantas}\n tiene superficie ${this.superficie}m2 \n `
          mostrar += `El coste para limpiar ${this.limpiar()} €.\n `
          mostrar += `El coste vigilancia es ${this.costeVigilanciaHosp()} €.\n` 
          mostrar += `Hoy comida reparida es ${this.repatirAlmuerzo()}.`           
        return mostrar;
    }
   
}
class Cine extends Edificio {
    constructor(nombre, numeroPlantas, superficie, capacidad) {
        super(nombre, numeroPlantas, superficie);
        this.capacidad = capacidad;
    }
    limpiar(){
        let tiempoLimpiar = this.superficie / 5;  //given
        let tiempoExtra = this.numeroPlantas * 0.5; //given
        let tiempoLimpia = tiempoLimpiar + tiempoExtra;
        let costeMensual = tiempoLimpia * 30;
        return costeMensual;
    }
   
    toString() {
        let mostrar = `El Cinema ${this.nombre}\n  tiene numero de plantas ${this.numeroPlantas}\n superficie de ${this.superficie} m2 \n`;
        mostrar += `El coste mensual de lipmiar es ${this.limpiar()} € \n`
        mostrar += `El coste totsl de vigilancia por mes es  ${this.costeVigilanciaCine()} € \n` 
        mostrar += `La capacidad max. es ${this.aforo}.`
        return mostrar;
    }
    costeVigilanciaCine() {
        let vigilante = this.superficie / 3000;
        let costeMensualV = vigilante * 1800;
        return costeMensualV;
    }
    projectSession(assistents, entryPrice) {
        let resulatdo = "";
        if (assistents > this.capacidad) {
            alert("Error! El valor de assistents es mayor que capacidad.");
        } else {
            const final = assistents * entryPrice;
            resulatdo = "Project session of cine:" + "<br>";
            final.toFixed(2) + "€";
        }
        return resulatdo;
    }
}
