/** Importamos el módulo interno (o built-in) http para poder crear un servidor */
/** Normalmente todos los módulos: internos, custom(propios) o de terceros los importamos al principio del fichero  */
const http = require('http');
const querystring = require('querystring');


// Disponemos de un array de nombres con viajeros en el tiempo de este equipo
const timeTravellers = ["Esteban", "Vanya", "Eva", "Lorena", "Ricardo"];

/** invocar el método .crateServer del objeto http para crear un servidor. Esta función toma por parámetro una función de callback que se va a ejecutar cada vez que el servidor reciba una petición  */
const server = http.createServer((req, res) => {

    // Queremos crear un endpoint que cuando hagan una peticion GET a '/check-traveller?name=Esteban' -> Sí, Esteban forma parte de IronHack Time Taveller. '/check-traveller?name=Mariano'. No, Mariano no forma parte de IronHack Time traveller

    // Queremos crear un endpoint nuevo que cuando hagan una petición GET a '/about-us' pues mostremos una página que hable sobre el equipo de IronHack - Viajeros en el tiempo
    console.log("petición a la URL: ", req.url);
    res.setHeader('Content-Type', 'text/html');

    if (req.url.startsWith("/check-traveller")) {
        // separo la querystring de la URL de la petición
        //const queryStringParam = req.url.split('?')[1]
        // Usamos el operador de desestructuración para asignar a la variable path la primera posición del array y a la variable queryString la segunda posición del array
        const [path, queryString] = req.url.split('?');
        console.log("🚀 ~ file: server.js:21 ~ server ~ queryString:", queryString)
        console.log("🚀 ~ file: server.js:21 ~ server ~ path:", path)
        // en qs.name tenemos el nombre que queremos buscar
        const qs = querystring.parse(queryString);
        console.log("🚀 ~ file: server.js:27 ~ server ~ qs:", qs);

        // ¿Cómo busco en el array timeTravellers si existe el nombre qs.name?
        const isMember = timeTravellers.some(n => n == qs.name);

        res.end(`${qs.name} ${isMember ? 'sí' : 'no'} es miembro de IronTravellers`);



    }

    else if (req.url == "/about-us") {
        res.write("<h1>About us</h1>");
        res.write("<p>Somos el equipo de viajeros en el tiempo</p>");
        res.end();
    } else {


        // la función de callback tiene dos parámetros: req -> request. La peticion que efctua el cliente. res-> response. Objeto que nos permite enviar una respuesta al cliente

        console.log("He recibido una petición");
        // voy a contestar al cliente diciéndole que he recibido su petición 
        // 1. Voy a indicar que el tipo de información que voy a enviar es texto plano
        res.write("<h1>ey! el servidor NodeJS ha recibido tu petición! Vamos por buen camino. Hola Eva!</h1>");
        res.write("<script>console.log('Yo soy código que me ejecuto en el cliente (navegador). Mira la consola del Chrome!')</script>");

        res.end()
    }
});

// Hemos creado un servidor. Pero no es suficiente.
server.listen(3000, () => {
    // la función de callback se ejecuta cuando NodeJS levanta (poner en funcionamiento) el servidor
    console.log("El servidor está corriendo.");
});