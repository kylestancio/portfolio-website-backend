const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())

app.get('/', (req, res) => {
  res.json({"test": "Test"})
})

app.get('/get/image/:filename', (req, res) => {
  res.sendFile(__dirname + '/images/' + req.params.filename)
})

app.listen(process.env.PORT || 3001, ()=>{
  console.log(`Running in ${process.env.NODE_ENV}`)
  console.log(`Listening to PORT ${ process.env.PORT || 3001 }`)
})