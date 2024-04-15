function calcular() {
    //Variables
    let data1 = 0;
    let data2 = 0;
    let op = Number(document.getElementById("op").value);
    let area = 0;
    let radio = 0;

    
    switch (op) {
      case 1:
        data1=prompt("Introduce el valor de lado:");
        area = cuadrado(data1);
        break;
      case 2:
        data1=prompt("Introduce el valor de base:");
        data2=prompt("Introduce el valor de altura:");
        area = rectangulo(data1,data2);  
        break;
      case 3:
        mensaje=prompt("Introduce el valor de base:");
        data1=mensaje
        data2=prompt("Introduce el valor de altura:");
        area = triangulo(data1,data2);
        break;
      case 4:
        radio=prompt("Introduce el valor de radio");
        area = circulo(radio);
        break;
    }
    document.getElementById("resultado").innerHTML = area;
    } 
  

    function cuadrado(n1) {
        let area = n1 * n1;
        return area;
      }

      function rectangulo(n1, n2) {
        let area = (n1 * n2);
        return area;
      }

      function triangulo(n1, n2) {
        let area = (n1 * n2/2);
        return area;
      }

      function circulo(radio) {
        let area = ((Math.PI*radio**2).toFixed(2));
        return area;
      }
 
    
      