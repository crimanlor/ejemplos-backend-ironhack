// Al crear un objeto de tipo Date


// Creando una instancia de la clase Date
// Guardamos una referencia del objeto crado en variable 'fecha'

const fecha = new Date('2024-08-05');
console.log(fecha.getDay());

// Más ejemplos: https://github.com/omiras/practica-clases

// MÉTODO ESÁTICO DE LA CLASE DATE
const milisegundosActuales = Date.now();
console.log(milisegundosActuales); // Ejemplo de salida: 1691508440583

const fechaMilisegundos = Date.parse("August 5, 2024 10:20:30"); 
console.log(fechaMilisegundos); // Ejemplo de salida: 1722843630000