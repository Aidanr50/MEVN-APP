const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    reviews: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
})

const User = mongoose.model('User', userSchema)

module.exports = User