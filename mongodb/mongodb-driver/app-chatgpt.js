const { MongoClient } = require('mongodb');

// URL de conexión a la base de datos
const url = "mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/";

// Nombre de la base de datos y colección
const dbName = "sample_mflix";
const collectionName = "movies";

async function fetchMovies() {
    // Crear un nuevo cliente de MongoDB
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Conectar al servidor de MongoDB
        await client.connect();
        console.log("Conectado correctamente al servidor");

        // Seleccionar la base de datos
        const db = client.db(dbName);

        // Seleccionar la colección
        const collection = db.collection(collectionName);

        // Query para encontrar películas a partir de 1990
        const query = { year: { $gte: 1990 } };

        // Recuperar las películas
        const movies = await collection.find(query).toArray();

        // Mostrar los resultados
        console.log(`Se encontraron ${movies.length} películas:`);
        movies.forEach(movie => console.log(movie.title));

    } catch (err) {
        console.error("Error al conectar o consultar la base de datos", err);
    } finally {
        // Cerrar la conexión
        await client.close();
    }
}

fetchMovies();
