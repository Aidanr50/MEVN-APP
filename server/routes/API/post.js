const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', (req, res) => {
    res.send('Hello')
})

module.exports = router