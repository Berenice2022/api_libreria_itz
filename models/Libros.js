//Book Models
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema definido de la libreria
const libroSchema = new Schema({
  titulo: String,
  autor: String,
  año: Number,
});

//Definimos el modelo del libro
const Libro = mongoose.model('Libro', libroSchema);
module.exports = Libro;
