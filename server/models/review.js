const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: Number,
    overview: String,
    practicality: [
        {
            rating: Number,
            text: String
        }
    ],
    interior: [
        {
            rating: Number,
            text: String
        }
    ],
    driving: [
        {
            rating: Number,
            text: String
        }
    ],
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