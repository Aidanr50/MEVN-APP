const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    manufacturer: String,
    model: String,

    reviews: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
})

const Vehicle = mongoose.model('User', userSchema)

module.exports = Vehicle