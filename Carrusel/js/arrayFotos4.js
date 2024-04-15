const TEMA = "MONTERREY";
const RUTA = "./img/mtyFotos3/";
const DESC = "Ciudad de las montañas";
const arrayImagenes = [
    new Imagen("cerro_silla.jpg", "Emblema de la ciudad", "Cerro de la Silla", "Destaca por su forma única que asemeja a una silla de montar"),
    new Imagen("puente.jpg", "Puente de la unidad", "Puente atirantado", "Magnífica obra de ingeniería que conecta la ciudad"),
    new Imagen("gris.jpg", "Vistas mirador", "Mirador Obispado", "Localizado en la cima del Cerro del Obispado cuenta con la segunda bandera más grande de México"),
    new Imagen("panorama.jpg", "Skyline atardecer", "Skyline Monterrey", "Edificios modernos que alberga la ciudad"),
    new Imagen("club_campestre.jpg", "Club de golf", "Club Campestre", "Situado en el municipio de San Pedro, cuenta con unas maravillosas vistas de la ciudad"),
]

let imagenNueva = new Imagen("flag.jpg", "Vistas mirador","Mirador Obispado","Localizado en la cima del Cerro del Obispado cuenta con la segunda bandera más grande de México");
/*console.log(imagenNueva.toString());
console.table(imagenNueva);*/
arrayImagenes.push(imagenNueva)