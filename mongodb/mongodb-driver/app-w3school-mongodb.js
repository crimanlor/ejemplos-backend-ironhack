
// importar el método MongoClient del módulo mongodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/";

// El método connect usa el primer parámetro para pasar la connection string
// El segundo parámetro es una función de callback (se ejecuta cuando nos conectamos a la base datos o no)
MongoClient.connect(url, function (err, db) {
    console.log('Me he contectado a la base datos.');
    if (err) throw err;
    var dbo = db.db("sample_mflix");
    /*Return only the documents with the address "Park Lane 38":*/
    var query = { year: { $gte: 2016 } };
    // el método toArray convierte en un array TODOS los documentos que recupera la query. Materializa (se trae todos los datos de estos documentos) a NodeJS.
    dbo.collection("movies").find(query).limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


