const clientes = [];
console.log("array", clientes);
let posicion = 0;

class Cliente{
    constructor(dni, nombre, apellido){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuenta = [];
        console.log(Cliente);
    }
    getDni(){
        return this.dni;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    setDni(newdni){
        this.dni = newdni;
    }
    setNomnbre(newNombre){
        this.nombre = newNombre;
    }
    setApellido(newApellido){
        this.apellido = newApellido;
    }
    toString(){
        let mostrar = `
            Datos del clinete:
            Nombre:  ${this.nombre}  
            apellido:  ${this.apellidio} 
            DNI: ${this.dni}.`   
        return mostrar; 
    }
    aregrarCuentas(account){
        this.cuenta.push(account);
    }
}

class Cuenta {
    constructor(numCuenta){
        this.numCuenta = numCuenta;
        this.saldo = 0;
    }
    ingresarDinero(importe){
        if(importe <= 0){
            alert('Inserta un amount correcta.');
        }else{
            this.saldo += importe;
        }
    }
        retirarDinero(importe){
            if(importe <= 0){
                alert('Inserta una importe valido.');
            }else{
                this.saldo -= importe;
            }
        }
    }
    
