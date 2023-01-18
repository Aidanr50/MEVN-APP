const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/API/post')

app.use('/api/post', posts)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on ${port}`))
