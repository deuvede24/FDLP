function calcular() {
  let xCA = parseFloat(document.getElementById("xCA").value);
  let yCA = parseFloat(document.getElementById("yCA").value);
  let radioCA = parseFloat(document.getElementById("rCA").value);
  let centerA = new Punto(xCA, yCA);
  console.log("el center A es:", centerA);
  let circA = new Circulo (centerA, radioCA);
  
  let xCB = parseFloat(document.getElementById("xCB").value);
  let yCB = parseFloat(document.getElementById("yCB").value);
  let radioCB = parseFloat(document.getElementById("rCB").value);
  let centerB = new Punto(xCB, yCB);
  console.log("el center B es:", centerB);
  let circB = new Circulo (centerB, radioCB);


  document.getElementById("distancia").innerHTML = circA.distanciaCentros(circB);
  
  document.getElementById("iguales").innerHTML = (circA.iguales(circB))? "Sí" : "No";
  document.getElementById("concentricos").innerHTML = (circA.concentricos(circB)) ? "Sí" : "No";

  document.getElementById("radio").innerHTML = (circA.igualRadio(circB))? "Sí" : "No";
  document.getElementById("tagentes").innerHTML = (circA.sonTangentes(circB))? "Sí" : "No";
  document.getElementById("secantes").innerHTML = (circA.sonSecantes(circB))? "Sí" : "No";

  document.getElementById("separados").innerHTML = (circA.noSetocan(circB))? "Sí" : "No";

}