// npm init > añadir módulo de terceros > npm install
const mongoose = require('mongoose');

// conexión a la base de datos
mongoose.connect('mongodb+srv://<user>:<password>@cluster0.fl8rdre.mongodb.net/runastic');

// crear esquema
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    userType: {
        type: String,
        enum: ['Free', 'Premium']
    },
    physicalCondition: {
        age: Number,
        weight: Number,
        height: Number,
        exerciseFrequency: {
            type: Number,
            min: 0,
            max: 7
        }
    },
    runRecords: [{
        startDate: Date,
        endDate: Date,
        feeling: {
            type: String,
            enum: ['Satisfied', 'Dissatisfied', 'Neutral']
        }
    }]
})

// asociar al modelo
const User = mongoose.model('user', userSchema)
// Comento las funciones para que cada vez que utilizo el comando node, no se ejecuten de nuevo
insert().catch(err => console.log(err));
// newRunRecord().catch(err => console.log(err));
// updateFrequencyExercise().catch(err => console.log(err));

// Función para añadir documento a la base de datos
async function insert(){
    console.log('Ejecutando funcion insert')
    const newUser = await User.create({
        userName: "john@gmail.com",
        password: "1234",
        userType: 'Free',
        physicalCondition: {
            age: 33,
            weight: 70, // kg
            height: 175, // cm
            exerciseFrequency: 0, // just installed the app
        }
    });
}

// Función para añadir nuevo record
async function newRunRecord(){
   const user = await User.findOne({userName: "john@gmail.com"}) 
   user.runRecords.push({
        startDate: new Date('2024-09-02T18:00:00Z'),
        endDate: new Date('2024-09-02T18:30:00Z'),
        feeling: 'Satisfied'
   })
   await user.save();
   console.log('Nuevo registro añadido.');
}

// Función para modificar frecuencia de ejercicio
async function updateFrequencyExercise(){
    const user = await User.findOne({userName: "john@gmail.com"})
    user.physicalCondition.exerciseFrequency = 3
    await user.save();
    console.log("Frecuencia de ejercicio modificada")
}