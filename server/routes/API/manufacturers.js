require('dotenv').config()

const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

const Manufacturer = require('../../models/manufacturers');

const router = express.Router()

// Get Manufacturers
router.get('/', async (req, res) => {

    const manufacturers = await Manufacturer.find()

    console.log("request received")
    res.send(manufacturers)
})

// Add Manufacturer
router.post('/', (req, res) => {

    let body = req.body

    const submission = {
        name: body.name
    }

    const newManufacturer = Manufacturer(submission)
    newManufacturer.save()

    // USE BELOW FOR UPLOADING A JSON LIST

    // for(let i = 0; i < body.length; i++) {
    //     let obj = body[i];

    //     console.log(obj)

    //     const newManufacturer = Manufacturer(obj)
    //     newManufacturer.save()
    // }

    // console.log(body)

    res.status(200).send();
})

// Delete Manufacturer
router.delete('/:id', async (req, res) => {

    const { id } = req.params

    await Manufacturer.findByIdAndDelete(id)
    res.status(200).send();
})


module.exports = router
