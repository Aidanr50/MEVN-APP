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

app.use('/api/reviews', reviews)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on ${port}`))
