const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voitureSchema = new Schema({
    name: String,
    model: String,
    brand: String,
    transmission: String
})

module.exports = mongoose.model("Voiture", voitureSchema);