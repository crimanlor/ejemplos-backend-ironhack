const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/tecnocasa');

// oneToOne();
oneToMany();

// Relación one to one
function oneToOne(){

    // Subesquema
    const Owner = new mongoose.Schema({
        name: String,
        // un propietario realmente va a tener muchos mas campos. DNI, fecha nacimineto, deudas hacienda, etc.
    })

    // Esquema entidad principal
    const houseSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String,
        owner: Owner // subesquema
    })
    const House = mongoose.model('House', houseSchema)

    House.create({
        street: "100 Maple Street",
        city: "Fort Townville",
        state: "New West Virgota",
        zip: "77777",
        owner: { name: "Alex Merced" }
    }) 

    House.find({}).then(house => {
        console.log(house);
    });
}

async function oneToMany() {

    const ownerSchema = new mongoose.Schema({
        name: String
    })
    const Owner = mongoose.model("Owner", ownerSchema)

    const houseSchema = new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        zip: String,
        owner: { type: mongoose.Types.ObjectId, ref: "Owner" }
    })
    const House = mongoose.model("House", houseSchema)

    // Create a Owner
    const alex = await Owner.create({ name: "Alex Merced" })

    // Create a new house
    House.create({
        street: "100 Maple Street",
        city: "Fort Townville",
        state: "New West Virgota",
        zip: "77777",
        owner: alex
    })

    // query for all houses, use populate to include owner info
    console.log(await House.findOne().populate("owner"));
}
