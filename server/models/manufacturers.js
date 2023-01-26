const mongoose = require('mongoose')

const manufacturerSchema = new mongoose.Schema({
    name: String,
    vehicles: {type: mongoose.Schema.Types.ObjectId, ref: 'Vehicles'}
})

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema)

module.exports = Manufacturer