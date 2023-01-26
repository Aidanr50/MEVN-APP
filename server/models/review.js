const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: Number,
    overview: String,
    year: String,
    displacement: {
        type: Number,
        min: 0,
        max: 10
    },
    fuel: {
        type: String,
        enum: ["Petrol", "Diesel", "Electric", "LPG", "Hybrid", "Hydrogen"]
    },
    transmission: {
        type: String,
        enum: ["Manual", "Automatic"]
    },
    vehicle: {type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'},
    images: [
        {
            url: String,
            filename: String,
            displayName: String,
            uploadDate: Date
        }
    ]

})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review