const { cogerTurno, siguienteComprador } = require('./colaPescaderia');

it('Tenemos un array con dos personas esperando y llega una nueva', () => {
    const personas = ["Vanya", "Zulema"];

    cogerTurno(personas, "Esteban");

    // Existen varios métodos para hacer aserciones con Jest, no solo .toBe
    expect(personas).toHaveLength(3);
    expect(personas).toContain("Esteban");
    expect(personas[personas.length -1]).toBe("Esteban");  
})

it('El siguiente comprador de un array de 3 personas, debe ser el primer elemento del array', () => {
    const personas = ["Vanya", "Zulema", "Esteban"];
    siguienteComprador(personas)
       // tamaño del array?
       expect(personas).toHaveLength(2);
       // QUIEN NO debería en este array?
       expect(personas).not.toContain('Vanya');

})