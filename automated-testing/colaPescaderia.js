/**
 * Queremos implementar una función para emular coger turno en una cola de la pescadería
 * 
 * ["Vanya", "Zulema"]
 * 
 * cogerTurno(personas, "Esteban");
 */

function cogerTurno(personasEsperando, nuevaPersona) {
    personasEsperando.push(nuevaPersona);
}

function siguienteComprador(personasEsperando){
    personasEsperando.shift();
}

module.exports = {
    cogerTurno,
    siguienteComprador
}

