const mongoose = require('mongoose');
const { Schema } = mongoose;

// Crear el esquema para Usuario
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true // Elimina espacios en blanco al principio y al final
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son obligatorios'],
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria']
    },
    contacto: {
        telefono: {
            type: String,
            required: [true, 'El teléfono es obligatorio'],
            validate: { 
                validator: function (v) {
                    // Valida que el teléfono tenga un formato simple
                    return /^[\d\s\-\+\(\)]{7,15}$/.test(v);
                },
                message: 'El teléfono no es válido'
            }
        },
        email: {
            type: String,
            required: [true, 'El email es obligatorio'],
            match: [/.+@.+\..+/, 'El email no es válido']
        }
    },
    cursos: {
        type: [String], // Array de strings para los nombres de los cursos
        default: []
    }
});

// Crear el modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);


// Conectar a la base de datos
mongoose.connect("mongodb+srv://oscar:oscar@cluster0.c8tq0vp.mongodb.net/ironhackDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a la base de datos");

    // Crear algunos usuarios
    const usuario1 = new Usuario({
        nombre: 'Juan',
        apellidos: 'Pérez García',
        fechaNacimiento: new Date('1990-05-15'),
        contacto: {
            telefono: '22',
            email: 'juan.perez@example.com'
        },
        cursos: ['Curso de Desarrollo Web', 'Curso de React']
    });

    const usuario2 = new Usuario({
        nombre: 'Ana',
        apellidos: 'López Fernández',
        fechaNacimiento: new Date('1985-09-25'),
        contacto: {
            telefono: '666-789-012',
            email: 'ana.lopez@example.com'
        },
        cursos: ['Curso de UX/UI']
    });

    // Guardar los usuarios en la base de datos
    return Promise.all([usuario1.save(), usuario2.save()]);
}).then(() => {
    console.log('Usuarios guardados exitosamente');
    mongoose.disconnect();
}).catch((error) => {
    console.error('Error:', error.message);
    mongoose.disconnect();
});
