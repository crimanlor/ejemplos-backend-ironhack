const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // Conexión a DB y crear IronhanckDB
    await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/IronhackDB'); 

    // Crear esquema
     /** Los usuarios tienen un nombre, apellidos y fecha de nacimiento. Queremos también vamos a guardar la forma de contacto que es a través de un teléfono y su email. También vamos a guardar el nombre de los cursos que ha cursado hasta el momento. */
    const studentSchema = new mongoose.Schema({
        name: String,
        lastName: String,
        birthDate: Date,
        contact: {
            phone: String,
            email: String
        },
        finishedCourses: [String]
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
    matias.save();

    // Info confirmación
    console.log('Usuario guardado correctamente');
}