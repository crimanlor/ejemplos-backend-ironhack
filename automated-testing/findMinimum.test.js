// el fichero tiene que tener el infijo .test. para que Jest sepa que es un fichero testing de forma automática

// tenemos que importar las funciones que queremos crear
const { findMinimum } = require('./findMinimum');

// función es imporada 'magicamente' por JEST
test('El mínimo se encuentra en medio del array', () => {
    // 0. Preparamos la entrada
    const numbers = [10, 1, 5];

    // 1. Ejecutamos la función que queremos probar
    const min = findMinimum(numbers);

    // 2. Analizamos la salida para ver si se cumplen ciertas condiciones usando las aserciones de Jest
    expect(min).toBe(1);

})

test('El mínimo se encuentra en el primer elemento del array', () => {
    const numbers = [-4, -1, 0];

    const min = findMinimum(numbers);

    expect(min).toBe(-4);
});

// Quiero que me escribais un test para comprobar si el mínimo se encuentra al final del array [3, 2, 1]. 19.05 -> Corregir
test('El mínimo se encuentra al final del array', () => {
    const numbers = [3, 2, 1];

    const min = findMinimum(numbers);

    expect(min).toBe(1);
});