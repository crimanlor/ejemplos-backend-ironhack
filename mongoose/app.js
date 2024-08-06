const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // Nos conectamos a la base de datos 'Ironcats'. Si no está creada, se va a crear con la conexión
  await mongoose.connect('mongodb+srv://criadomanzaneque:MSNvQed7qIZgA387@cluster0.fl8rdre.mongodb.net/Ironcats');
  
  // Primer paso importante con Mongoose: Definir tu Schema. 
  // Para definir tu Schema hay que tener claro que tipo de información quieres manejar. En esta caso, queremos crear una colección de gatitos. Los gatitos tienen un nombre y un color de pelo.
  const kittySchema = new mongoose.Schema({
    name: String,
    furColour: String
});
  // Creamos el modelo
  // Kitten es un nombre arbitrario pero normalmente le ponemos el mismo nombre que la coleccion que queremos crear. Además, el nombre de la colección siempre debería ir en plural (convención)
  const Kitten = mongoose.model('Kitten', kittySchema);

  // Ahora que hemos asociado el modelo al Schema, podemos crear nuevas instancias de la clase 'Kitten' 
  const loki = new Kitten({
      name: "Loki",
      furColour: "Black and white"
  });

  // Ahora podemos guardarlo en la base de datos
  await loki.save();

  // Info seta creada
  console.log('Gatito creadado correctamente');
}