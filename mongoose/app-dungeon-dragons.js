const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/DungeonsDragonsDB')

    // Crear Eschema
    const characterSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please, add the character´s name"]
        },
        atack:  {
            type: Number,
            required: [true, "Please, add the character´s atack"],
            min: [0, 'Too few points of atack'],
            max: [5, 'Too high points of atack']
        },
        intelligent: {
            type: Number,
            required: [true, "Please, add the character´s intelligent"],
            min: [0, 'Too few points of intelligent'],
            max: [12, 'Too high points of intelligent']
        },
        lifeforce: {
            type: Number,
            required: [true, "Please, add the character´s lifeforce"],
            min: [0, 'Too few points of lifeforce'],
            max: [10, 'Too high points of lifeforce']
        },
        level: {
            type: Number,
            default: 0
        }
    })

    // Asociarlo al modelo
    const Character = mongoose.model("Character", characterSchema);

    // Crear al menos 2 personajes (documentos)
    const aragon = new Character({
        name: "Aragon",
        atack: 5,
        intelligent: 12,
        lifeforce: 10,
        level: 5
    });

    const gollum = new Character({
        name: "Gollum",
        atack: 2,
        intelligent: 3,
        lifeforce: 5
    });

    // Guardar documentos
    try {
        await aragon.save();
        console.log('El personaje', aragon.name, 'se ha guardado correctamente en su base de datos')
    } catch(err){
        console.log('El personaje', aragon.name, 'no ha podido guardarse por debido a', err.message)
    }

    try {
        await gollum.save();
        console.log('El personaje', gollum.name, 'se ha guardado correctamente en su base de datos')
    } catch(err){
        console.log('El personaje', gollum.name, 'no ha podido guardarse por debido a', err.message)
    }

}