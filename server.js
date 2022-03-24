require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error' , (error)=>console.log(error))
db.once('open' , ()=>console.log("Database Connection Succesfull ✅"))

app.use(express.json())
//Routes
const questionsRouter = require('./routes/questions')
app.use('/questions' , questionsRouter)
app.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}/ ✅`))