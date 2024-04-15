/*const TEMA = "MONTERREY";
const RUTA = "./img/mtyFotos3/";
const DESC = "Ciudad de las montañas";*/
class Imagen{
    constructor (imagen, title, nombre, descripcion){
        this.imagen=imagen;
        this.title=title;
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
toString(){
    let show = `Imagen de ${this.nombre} ${this.descripcion} guardado en el archivo ${this.imagen}`;
    return show
}

}

    
  