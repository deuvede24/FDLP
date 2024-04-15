let edificios = [ //para crear edificios hotel hospital y cinema.
    new Hotel("Hotel Arts", "15","2500"),// nombre, plantas,superficie.
    new Hospital("Cruz Roja","5","3000"),//nombre, plantas,superficie.
    new Cine("Multiplex", "3", "5000"),//nombre,plantas,superficies.
]
edificios = [
    [new Hotel("Hotel Palace","20", "3000","300"),
    new Hotel("Hotel Ritz", "25","4000","500"),
    new Hotel("Hotel W" ,"300","15","2500","800"),],

    [new Hospital("Sant Juan de diu","4","2500","100"),
    new Hospital("Barcelona","10","5000","180"),
    new Hospital("Hospital Clinic","15","3500","200"),],

    [new Cine("Cinesa","4","2000","400"),
    new Cine("Cinema","5","3000","600"),
    new Cine("Uppal","3","3300","350"),]
]
console.table(edificios);
let posicion = 0;

function buscar(valor){
    let encontardo = false;
    let indice = -1;
    let i = 0;
    let vuelats = edificios.length; 
    while (i < vuelats && !encontardo) {   
        if (valor === edificios[i].nombre) {
            indice = i;  
            encontardo = true;
        }
        i++;
    }
    return indice;
}

function aregrar(){
    let tipo, newEdificio, enfermo, habitacion, capacity;
    let nombreEdificio = prompt("Introduce el nombre del nuevo Edificio:", "Hotel W");
    let indice = buscar(nombreEdificio);
    if(indice >= 0){
        let message = `El edifico ${this.nombre} esta registrado con datos:`
        message += edificios[indice].toString();
        alert(message);
    }else{
        do{
            tipo = prompt("Indica el tipo de edificio que quieres aregrar: A-Hotel , B-Hospital ,C- Cinema", "A").toUpperCase();
        }while(!('ABC'.includes(tipo)));
           //let nombreEdificio = prompt("Indica el nombre del edificio","Hotel Arts");
            numeroPlantas = Number("Indica el numero de plantas:","15");
            superficie = Number("Indica el superficie de edificio:","2500");
        }if(tipo === "A"){
             habitacion = parseInt(prompt("Indica numero de habitaciones:","300"));
             newEdificio = new Hotel( nombreEdificio ,numeroPlantas ,superficie,habitacion);
        }else if(tipo ==="B"){
            enfermo = parseInt(prompt("Indica numero de enfermos: ","100"));
            newEdificio = new Hospital(nombreEdificio,numeroPlantas,superficie,enfermo);
        }else{
            capacity = parseInt(prompt("Indica el aforo del cine:","600"));
            newEdificio = new Cine(nombreEdificio,numeroPlantas,superficie,capacity);
        }
        edificios.push(newEdificio);
        indice = edificios.length -1;
        alert("Datos de new edificio son: +\n" + edificios[indice].toStrig());
        console.table(edificios);
    }



function mostrar(){
    nombreEdificio = prompt("Indica el nombre del edificio que quieres mostrar:", "Hotel Ritz");
    indice = buscar(nombreEdificio);
    if(indice < 0){
         alert("El edificio que desea no esta registrado.");
    }else{
        const edifico = edificios[indice];
        if(edifico instanceof Hotel){
            let limpioInfo = edifico.limpia();
            let costeVigilanciaInfo = edifico.costeVigilanciaHotel();
            let srvicioHabitacionesInfo = edifico.srvicioHabitaciones();
            document.getElementById("result").innerHTML = edifico.toStrig() + limpioInfo + costeVigilanciaInfo + srvicioHabitacionesInfo;
        }else if(edifico instanceof Hospital){
            let limpioInfo = edifico.limpia();
            let costeVigilanciaInfo = edifico.costeVigilanciaHosp() ;
            let almuerzoInfo = edifico.repatirAlmuerzo();
            document.getElementById("result").innerHTML = edifico.toStrig() +limpioInfo + costeVigilanciaInfo+ almuerzoInfo ;
        }else if(edifico instanceof Cine){
            let limpioInfo = edifico.limpia();
            let costeVigilanciaInfo = edifico.costeVigilanciaCine();
            assistents = Number(prompt("Introduce el numero de assistentes: "));
            entryPrice = parseFloat(prompt("Introduce el precio de la entrada:"));
            let cineInfo = edifico.projectSession(assistents ,entryPrice);
            document.getElementById("result").innerHTML = edifico.toStrig();
            document.getElementById("result").innerHTML = cine.toStrig() + limpioInfo + costeVigilanciaInfo + cineInfo ;
        }
    }
}
function eliminar(){
    let nombreEdificio = prompt( "Indica el nombre del edificio que quieres eliminar:","Hotel W");
    let indice = buscar(nombreEdificio);
    if(indice < 0 ){
        alert("El edificio que quieres eliminar no esta registrado.");
    }else{
        let edificio = edificios[indice];
    alert("¿Desea eliminar este edificio?\n"  + edificio.toStrig());
    confirmEliminar = confirm(message);
    if(confirmEliminar){
        edificios.splice(indice, 1);
        alert("Edificio esta elminado.");
    }else{
        alert("El edificio no esta eliminado esta mantiene registrado.");
    }
    console.table(edificios);
    }
}