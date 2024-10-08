// Una función en la cuál recibe un array de numbers. Queremos encontrar el menos número de todos
// el array de numbers nunca es vacío (siempre tiene un elemento al menos)
// es un array de numbers siempre, no te pueden pasar ni strings, ni boleanos

// [10, 1, 5] -> 1
// [-4, -1, 0] -> -4

function findMinimum(numbers) {
    // obtener el primer numero del array
    let currentMin = numbers[0];
    // recorrer el array

    // comprobar cada elemento a ver si el siguiente es menor que el menor que tengo hasta el momento
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
    }

    // retornar el número menor encontrado
    return currentMin
}

module.exports = {
    findMinimum
}

