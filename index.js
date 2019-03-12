const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()

const upload = multer({
    dest: 'uploads/'
})


app.use(express.static('client'))
app.use(bodyParser.json())

// AUTHENTICATION ROUTE
require('./routes/authRoute')(app)

// UPLOAD ROUTE
require('./routes/uploadRoute')(app, upload)


app.listen(PORT)