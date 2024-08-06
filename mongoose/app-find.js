const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // Nos conectamos a la base de datos 'Ironcats'
    await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/Ironcats'); 

    // Definimos esquema
    const kittySchema = new mongoose.Schema({
        name: String,
        furColour: String
    });

    // Definimos modelo
    const Kitten = mongoose.model('Kitten', kittySchema);

    // Para consultar documentos de la colección 'kittens', podemos usar un método estático de la clase Kitten. El método se llama 'find'
    const gatitos = await Kitten.find({
        name: /^L/i
    });

    // En la variable 'gatitos' vamos a obtener un array con todos los documentos de la colección Kittens que cumplen con el criterio de búsqueda
    console.log("Gatos recuperados de MongoDB: ", gatitos);

}