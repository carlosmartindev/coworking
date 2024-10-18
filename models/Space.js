const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }, // Agrega este campo
});

module.exports = mongoose.model('Space', SpaceSchema);
