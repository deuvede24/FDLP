class Treballador {
    constructor(nom, cognom, carrec, disponibilitatTrasllat) {
        this.nom = nom;
        this.cognom = cognom;
        this.carrec = carrec;
        this.disponibilitatTrasllat = disponibilitatTrasllat;
    }
}


//let posicionActual = 0;

/*function p2b() {
    let trabajadorEncontrado;
    let indexTrabajadorN = -1;
    let nomTrabajador = prompt("Dime el nombre del trabajador que quieres ver:", "Pep");
    let apellidoTrabajador = prompt("Dime la escudería que quieres ver: ", "Vila");

    indexTrabajadorN = treballadors.findIndex(
        ((nombreT) => nombreT.nom === nomTrabajador)
    );
    indexTrabajadorA = treballadors.findIndex(
        ((apellidoT) => apellidoT === apellidoTrabajador));
    trabajadorEncontrado = treballadors[indexTrabajadorN];
    if (indexTrabajadorN == -1) {
        mensaje = "El trabajador no está registrada, lo siento! \n";
        alert(mensaje);

    } else {
        console.log("trabajador encontrado: ", trabajadorEncontrado);
        console.log("El indexTrabajador es: ", indexTrabajadorN);


        document.getElementById("nom1").innerHTML = nomTrabajador;
        document.getElementById("cognoms1").innerHTML = apellidoTrabajador;

        let carrecT = treballadors[indexTrabajadorN].carrec;
        let trasllatT = treballadors[indexTrabajadorN].disponibilitatTrasllat;

        console.log(carrecT);
        console.log(indexTrabajadorN);

        document.getElementById('carrec1').innerHTML = carrecT;
        document.getElementById('trasllat1').innerHTML = trasllatT;


    }
}*/

