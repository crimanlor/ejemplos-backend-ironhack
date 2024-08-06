const palabraClave = "vaca";

const dniRegex = /[0-9]{8}[A-Z]/; // sugar syntax --> Estamos haciendo lo mismo que new RegExp

const dniRegexExp = new RegExp(palabraClave, "i");
dniRegexExp.test("40123456T");
dniRegex.test("Hay una vaca");

/** */
// Más ejemplos de azucar sintáctico
const gatos = []; // Crea un array --> sugar syntax
gatos.push("Loki");

// Para crear un array en JavaScript
const perros = new Array();
perros.push("Toby");

// Método estático de la clase Array. El método estátic isArray devuelve true si lo que le pasas por parámetro es un array
console.log("[1, 2, 3] es un array?: ", Array.isArray([1, 2, 3]));
console.log("'1, 2, 3' es un array?: ", Array.isArray('1, 2, 3'));