const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: Number,
    overview: String,
    year: String,
    displacement: {
        Number,
        min: [0.1],
        max: [10.0]
    },
    fuel: {
        String,
        enum: ["Petrol", "Diesel", "Electric", "LPG", "Hybrid"]
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