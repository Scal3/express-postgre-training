const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const indexRouter = require('./routes/index')


const PORT = process.env.PORT || 9321
const app = express()

app.use(express.json())
app.use(indexRouter)

const start = () => {
  try{
    app.listen(PORT, () => {
      console.log(`app is listening ${PORT} port`)
    })
  } catch(err) {
    console.log(err)
  }
}

start()