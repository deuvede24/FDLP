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
  getImagen() {
    return this.imagen;
  }

  getTitle() {
    return this.title;
  }

  getNombre() {
    return this.nombre;
  }

  getDescripcion() {
    return this.descripcion;
  }


  setImagen(newImagen) {
    this.imagen = newImagen;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setNombre(newNombre) {
    this.nombre = newNombre;
  }

  setDescripcion(newDescripcion) {
    this.descripcion = newDescripcion;
  }
}
