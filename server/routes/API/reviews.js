require('dotenv').config()

const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

const Review = require('../../models/review');

const router = express.Router()

// Get Reviews
router.get('/', async (req, res) => {
    // const reviews = await loadPostCollection()
    // res.send(await reviews.find({}).toArray())

    const reviews = await Review.find()

    console.log("request received")
    res.send(reviews)
})

// Add Review
router.post('/', (req, res) => {
    // const reviews = await loadPostCollection()
    // await reviews.insertOne({
    //     text: req.body.text,
    //     createdAt: new Date(),
    // })
    // res.status(201).send()

    let body = req.body

    const submission = {
        rating: body.rating,
        overview: body.overview,
        practicality: body.practicality,
        interior: body.interior,
        driving: body.driving
    }

    const newReview = Review(submission)
    newReview.save()

    res.status(200).send();
})

// Delete Review
router.delete('/:id', async (req, res) => {
    // const reviews = await loadPostCollection()
    // await reviews.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    // res.status(200).send()

    const { id } = req.params

    await Review.findByIdAndDelete(id)
    res.status(200).send();
})

// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

// async function loadPostCollection() {
//     const client = await mongodb.MongoClient.connect(dbUrl, { useNewUrlParser: true})

//     return client.db('Autotrusted-1').collection('reviews')
// }

module.exports = router
