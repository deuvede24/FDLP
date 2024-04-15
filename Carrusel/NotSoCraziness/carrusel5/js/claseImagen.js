class Imagen {
  constructor(imagen, title, nombre, descripcion) {
    this.imagen = imagen;
    this.title = title;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  toString() {
    let show = `Imagen de ${this.nombre}: \n\n\t- ${this.descripcion} \n\t- Guardado en el archivo '${this.imagen}'`;
    return show;
  }
}
