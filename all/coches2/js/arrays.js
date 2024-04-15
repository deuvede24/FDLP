let arrayEscuderias = [
    new Escuderia("Ferrari", 4, "Italia"),
    new Escuderia("Mercedes", 5, "Alemania"),
    new Escuderia("RedBull", 4, "Austria"),
    new Escuderia("Mclaren", 6, "UK"),
];

console.table(arrayEscuderias);



let arrayCoches = [
    new Coches("Ferrari 400", "570CV", "320Km/h", "Rojo", 4),
    new Coches("Mercedes", "770CV", "325Km/h", "Azul", 5),
    new Coches("RedBull", "600CV", "340Km/h", "Naranja", 6),
    new Coches("Mclaren", "800CV", "315Km/h", "Negro", 7),
    new Coches("Mclaren", "900V", "350Km/h", "Blanco", 8),
];


console.table(arrayCoches);
arrayEscuderias[0].arrayCoches.push(arrayCoches[0]);
arrayEscuderias[1].arrayCoches.push(arrayCoches[1]);
arrayEscuderias[2].arrayCoches.push(arrayCoches[2]);
arrayEscuderias[3].arrayCoches.push(arrayCoches[3]);
arrayEscuderias[3].arrayCoches.push(arrayCoches[4]);


