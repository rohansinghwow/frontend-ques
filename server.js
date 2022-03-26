require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 4000
const mongoose = require('mongoose')
const cors = require('cors')
const Question = require('./models/question')
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error' , (error)=>console.log(error))
db.once('open' , ()=>console.log("Database Connection Succesfull ✅"))

app.use(express.json())


// Get all questions

app.get('/questions' ,async (req,res)=>{
     
    try {
        const questions = await Question.find()
        res.send(questions)
    }
    catch (error){
       res.status(500).json({message : error.message})
    }
})


//Post a question


app.post('/' , async(req,res)=>{
    const postQuestion = new Question({
        questionTitle : req.body.questionTitle,
        answer : req.body.answer,
        submitDate : req.body.date
    })

    try {
        const newQuestion = await postQuestion.save()
        res.status(201).json(newQuestion)
    } catch (error){
        res.status(400).json({message : error.message})
    }
})


app.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}/ ✅`))