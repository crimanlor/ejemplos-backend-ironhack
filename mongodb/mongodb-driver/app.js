// importar un par de métodos del paquete mongodb para conectarnos a la base de datos
const { MongoClient, ServerApiVersion } = require("mongodb");

// Connection string: el string donde especificámos usuario:contraseña y URL de conexión 
const uri = "mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

// función asíncrona
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Una vez nos hemos conectado seleccionamos la base de datos 'sample_flix'
        const database = client.db("sample_mflix");

        // El objeto database ahora guarda una referencia a la base de datos 'sample_flix'. Podemos usar el método collection para seleccionar la colección 'movies'
        const movies = database.collection("movies");

        // He creado un objeto para poder filtrar por las películas cuyo año de lanzamiento fue superior a 1990
        const query = { year: { $gte: 1990 } };

        // Objeto de opciones
        const options = {
            // Quiero quedarme solamente con el campo title y year 
            projection: { _id: 0, title: 1, year: 1 },
            // Queremos ordenar por año de lanzamiento de forma decreciente
            sort: { year: 1 },
            // propiedad limit limita el número de documentos que queremos recuperar

        };

        // Ejecutar la consulta 
        const cursor = movies.find(query, options);
        // Print a message if no documents were found
        if ((await movies.countDocuments(query)) === 0) {
            console.log("No documents found!");
        }

        // Print returned documents
        // El for va a hacer iterar el cursor por todos los resultados de la query. Cuando consultamos una posición de este cursor lo que hacemos es materializar un documento en nuestra aplicación nodejs. 
        for await (const doc of cursor) {
            console.dir(doc);
        }

    // finally es una palabra reservada que significa finalmente. Este bloque de código se ejecuta SIEMPRE , tanto si se ha producido un error como si todo ha ido bien.
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
// ejetuamos la función y como es una función asíncrona, concatenamos la palabra reserva "catch" para capturar cualquier tipo de excepción que suelte nuestro código