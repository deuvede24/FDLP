let listaCleinets =[
    new Cliente("123456" ,"Tina","Rose"),
    new Cliente("654987","Meena","Maria"),
    new Cliente("987456","Momo","Magic"),
];
//let posicion = 0;

function buscar() {
    let encontardo = false;
    let indice = -1;
    let i = 0;
    let vuelats = clientes.length; 
    while (i < vuelats && !encontardo) {   
        if ( indice = i) {  
            encontardo = true;
        }
        i++;
    }
    return indice;
}
function crearCliente() {
    let dniNum = prompt('Introduce numero de Dni de cliente');
    let indice = buscar(dniNum);
    if (isNaN(dniNum) || dniNum == null) {
        alert('Introduce numero de DNI valildo.');
    } else if (indice < 0) {
        let clienteNombre = prompt('Escribe el nombre del cliente');
        let clienteapellido = prompt('Escribe apellido del cliente');
        const newCliente = new Cliente(dniNum, clienteNombre, clienteapellido);
        clientes.push(newCliente);
        posicion++;
        console.log(newCliente);
        let mensaje = `El cliente nombre ${clienteNombre} ${clienteapellido} con numero de DNI ${dniNum} esta creado.`
        document.getElementById('result').innerHTML = mensaje;
    }else{
        alert('El cliente esta existe.');//indice >= 0.
        posicion = indice;
    }
}
function eliminar(){
     dniNum = prompt('Intoduce el numero de DNI del cliente que quieres eliminar');
    let indice = buscar(dniNum);
    if(dniNum == null){
        alert('Intoduce un numero valido.');
    }else if(indice !== -1){
        let clienteEliminar = clientes[indice];
        clientes.splice(indice, 1);
        alert('El cliente '+ clienteEliminar.getDni() + ' esta eliminado.');
        posicion++;
    }else{
        alert('El cliente que estas quiere eliminar no esta existe.')
    }
    let mensaje = "El cliente esta eliminado."
    document.getElementById('result').innerHTML = mensaje;
}
function buecarCuenta(valor){
    let indice = -1;
    let ingresarCuenta = -1;
    let encontardo= false;
    let i = 0;
    let vueltas = listaCleinets.length;
    while(i < vueltas && !encontardo){
        indiceCuenta = listaCleinets[i].buscarCuenta(valor);
        if(ingresarCuenta >= 0){
            indice = -1;
            encontardo = true;
        }
        i++;
    }
    return [indice,indiceCuenta];
}
function ingresarCuenta(){
    let newDni = prompt('Indica el numero de DNI :', '123456');
    let indice = buscar(newDni);
    if(indice < 0){
        let message = "El cliente no esta existe.";
        document.getElementById('result').innerHTML = message;
    }else{
        let newCuenta = prompt('Indica el numero de cuenta a crear:','000987654');
        let indiceCuenta = buecarCuenta(newCuenta);
        if(indiceCuenta[1] >= 0){
            message = "La cuenta esta registrado.Datos del cliente y cuenta son:\n" + listaCleinets[indiceCuenta[0].toString()];
            alert(message);
        }else{
            newCuenta = new Cuenta[newCuenta];
            console.log(newCuenta);
            listaCleinets[indice].aregrarCuenta(newCuenta);
            message = "La nueva cuenta" +newCuenta.getNumeroCuenta() +"se ha registrado a nombre de:\n" +listaCleinets[indice].toString();
        }
    }
    
}