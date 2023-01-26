require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

const app = express()

app.use(bodyParser.json())
app.use(cors())
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

const reviews = require('./routes/API/reviews')
const manufacturers = require('./routes/API/manufacturers')

app.use('/api/reviews', reviews)
app.use('/api/manufacturers', manufacturers)

app.get('/', (req, res) => {
    res.send("Hello")
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on ${port}`))
