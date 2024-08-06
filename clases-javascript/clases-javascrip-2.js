/**
 * Un madellero tiene las siguientes características
 * 
 * 1. nombre del país
 * 2. el número total de medalles
 * 3. un método para actualizar el medallero
 */
class Medallero {
    constructor(nombre, numMedallas) {

        if (!nombre || !numMedallas || numMedallas < 0 || typeof numMedallas != 'number') {
            throw new Error('Pasame bien los argumentos, tronco.');
        }

        // usamos la palabra reservada this para crear NUEVAS propiedades a este objeto
        this.nombre = nombre;
        this.numMedallas = numMedallas;
    }

    incrementarMedalla() {
        this.numMedallas++;
    }
}


// Crear una instancia de la clase Medallero para España que ha ganado 3 medallas
const medalleroEspaña = new Medallero("España", 3);
medalleroEspaña.incrementarMedalla();
console.log(medalleroEspaña);

const medalleroChina = new Medallero("China", 17);
console.log(medalleroChina)
