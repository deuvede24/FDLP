const TEMA = 'MONTERREY';
const RUTA = 'img/mty6/';

const arrayImagenes = [
  new Imagen(
    'cerro_silla.jpg',
    'Emblema de la ciudad',
    'Cerro de la Silla',
    'Destaca por su forma única que asemeja a una silla de montar'
  ),
  new Imagen(
    'puente.jpg',
    'Puente de la unidad',
    'Puente atirantado',
    'Magnífica obra de ingeniería que conecta la ciudad'
  ),
  new Imagen(
    'flag.jpg',
    'Vistas mirador',
    'Mirador Obispado',
    'Localizado en la cima del Cerro del Obispado cuenta con la segunda bandera más grande de México'
  ),
  new Imagen(
    'gris.jpg',
    'Río gris',
    'Santa Catarina',
    'En Santa Catarina río que alberga campos de fútbol'
  ),
  new Imagen(
    'panorama.jpg',
    'Skyline atardecer',
    'Skyline Monterrey',
    'Edificios modernos que alberga la ciudad'
  ),
  new Imagen(
    'club_campestre.jpg',
    'Club de golf',
    'Club Campestre',
    'Situado en el municipio de San Pedro, cuenta con unas maravillosas vistas de la ciudad'
  ),
];

let imagenNueva = new Imagen(
  'flag.jpg',
  'Vistas mirador',
  'Mirador Obispado',
  'Localizado en la cima del Cerro del Obispado cuenta con la segunda bandera más grande de México'
);
/*console.log(imagenNueva.toString());
console.table(imagenNueva);*/
arrayImagenes.push(imagenNueva)
