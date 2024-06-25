const http = require('http');

/**
 * 1. Crea un objeto y lo guarda en la variable 'server'
 * 2. createServer toma por parámetro una función de callback!
 * 2.1 El objeto req
 */
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    // 1. devolvemos texto plano al navegador. Los servidores necesitan establecer el tipo de información que devuelven al cliente para que este pueda tomar decisiones como por ejemplo: de qué manera muestra la información. También para que un programador Front End haga uso de esa información
    res.setHeader('Content-Type', 'text/plain');
    // 2. Método del objeto 'response' para enviar información al cliente
    res.write('hello Ironhack');
    // 3. en este punto se hace efectiva la respuesta del servidor al cliente y el cliente recibe la información (texto plano en este caso)
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log("Escuchando peticiones en puerto 3000");
});