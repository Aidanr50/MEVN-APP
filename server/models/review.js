const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: Number,
    overview: String,
    practicality: String,
    interior: String,
    driving: String,
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