/** 
 * Tenemos un limitación con los objetos.
 * 
 * Queremos crear un medallero olimpico para cada pais. De momento, tan solo queremos guardar el nombre y el numero total de 
 * 
 * Implementa un método para aumentar el numero total de medallas:
 */

const medalleroEspaña = {
    nombre: "España",
    total: 3,
    medallaGanada: function () {
        this.total++;
    }
}

medalleroEspaña.medallaGanada();

const medalleroFrancia = {
    nombre: "Francia",
    total: 27,
    medallaGanada: function () {
        this.total++;
    }
}

const medalleroJapon = {
    nombre: "Japon",
    total: 15,
    medallaGanada: function () {
        this.total++;
    }
}

const medalleroChina = {
    nmbre: "China",
    total: 22,
    medallaGanada: function () {
        this.total++;
    }
};

// Express app
// Enviar a la vista el nombre del pais del medallero de china
console.log(medalleroChina.nombre);