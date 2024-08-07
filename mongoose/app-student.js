const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // Conexión a DB y crear IronhanckDB
    await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/IronhackDB'); 

    // Crear esquema
     /** Los usuarios tienen un nombre, apellidos y fecha de nacimiento. Queremos también vamos a guardar la forma de contacto que es a través de un teléfono y su email. También vamos a guardar el nombre de los cursos que ha cursado hasta el momento. */
    const studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: [true, "We need the last name to register the user"]
        },
        birthDate: Date,
        contact: {
            phone: {
                type: String,
                required: [true, 'The phone field is mandatory'],
                validate: {
                    validator: function (v) {
                        // Valida que el teléfono tenga un formato simple
                        return /^[\d\s\-\+\(\)]{7,15}$/.test(v);
                    },
                    message: 'The phone number is invalid'
                }
            },
            email: {
                type: String,
                required: [true, 'Email is mandatory'],
                match: [/.+@.+\..+/, 'The email is invalid']
            }
        },
        finishedCourses: {
            type: [String],
            default: [] // la palabra default establece un valor por defecto para el documento en caso de que el usuario no informe
        }
    })

    // Relacionar esquema con un modelo
    const User = mongoose.model('user', studentSchema);
    
    // Ya tenemos la clase "User" para poder crear nuevos estudiantes en la DB
    const matias = new User({
        name: "Matias",
        lastName: "González",
        birthDate: new Date('1990-10-10'),
        contact:{
            phone: "666777888",
            email: "matias@gmail.com"
        },
        finishedCourses: ["CSS Freecodecamp", "Cibernarium: Introducción a la programación"]
    })

    // Guardar al usuario en la base de datos
    try {
       await matias.save();
    } catch(err){
        console.log('Ha ocurrido un error al guardar el documento', err.message)
    }

    // Info confirmación
    console.log('Usuario guardado correctamente');
}