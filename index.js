const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})

app.use(express.static('public'))
app.use(bodyParser.json())

// AUTHENTICATION ROUTE
require('./routes/authRoute')(app)

// UPLOAD ROUTE
require('./routes/uploadRoute')(app, upload)

app.listen(PORT, () => {
  console.log(`[[Server is running on port ${PORT}]]`)
})
