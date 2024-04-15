
let array=[];
array1 = [
    'Història universal',
    'Història Espanya',
    'Geografia',
    'Història de la llengua catalana',
    'Antropologia',
    'Anglès'];
    
palabra ="Història";
    
    

funtion menu(){

}


//let funcion?

/*Crea una funció que rebi un valor i un array de números com a paràmetre.
Aquesta funció retornarà l’índex de l’array on es troba el valor.
Si el valor no es troba, es retornarà -1.*/
function arrayNumeros(valor, array) {
let i;
let valorBuscado;
let resultado;
  for (i=0; i<array.length; i++){
    if(array1[i].includes(valor))
  resultado=i;}
 else resultado= -1;
 return resultado;
} 





/*Crea una funció que rebi una frase com a paràmetre i la torni en minúscules 
sense espais en blanc, sense accents i sense signes de puntuació.*/

function girarStr(frase) {
  let mensaje = "";
  let i = 0;
  for (i= 0; i<= frase.length; i++) {
    mensaje += texto.charAt(i);
   // mensaje += texto[i]; 
  }
  return mensaje;
}



/*Crea una funció que rebi un array i un string com a paràmetre
i torni un altre array amb aquells elements de l'array rebut que continguin el text enviat.*/

function buscarPalabra(palabra, array1) {
    //let mensaje = "";
    let resultado=[];
    let i;
    for (i= 0; i<= array1.length; i++) {
     if(array1[i].includes("Història"))
     resultado.push(array1[i]);
     // mensaje += texto[i]; 
    }
    return mensaje;
  }

