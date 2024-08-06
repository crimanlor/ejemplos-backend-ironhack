const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/IronFungis'); // Nos conectamos a la base de datos 'IronFungis'

    // Creamos el esquema
    const fungusSchema = new mongoose.Schema({
        name: String,
        toxicityLevel: Number // 0..nada toxico..10 muy tóxico
    });

    // Asociamos el modelo al esquema
    const Fungus = mongoose.model('Fungus', fungusSchema);

    // Creamos una nueva seta
    const amanita = new Fungus({
        name: "Amanita Muscara",
        toxicityLevel: 8
    })

    // La guardamos en la base de datos
    await amanita.save();

    // Info seta creada
    console.log('Seta creada correctamente');
}