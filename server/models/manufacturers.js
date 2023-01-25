const mongoose = require('mongoose')

const manufacturersSchema = new mongoose.Schema({
    name: String,
    vehicles: {type: mongoose.Schema.Types.ObjectId, ref: 'Vehicles'}
})

const Manufacturer = mongoose.model('Manufacturer', userSchema)

module.exports = Manufacturer