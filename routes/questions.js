const express = require('express')
const router = express.Router()
const Question = require('../models/question')


// Get all questions
router.get('/' ,async (req,res)=>{
     
     try {
         const questions = await Question.find()
         res.send(questions)
     }
     catch (error){
        res.status(500).json({message : error.message})
     }
})

// Get single question
router.get('/:id' , getQuestions,  (req,res)=>{
    res.send(res.question.questionTitle)
})
// Update a question PATCH
router.patch('/:id' , getQuestions,  async(req,res)=>{
    
        if(res.question.questionTitle !== null){
            res.question.questionTitle = req.body.questionTitle
        }
        if(res.question.answer !== null){
            res.question.answer = req.body.answer
        }
    
    try{
        const updatedQuestion = await res.question.save()
        res.json(updatedQuestion)
    }catch(error){
        res.status(400).json({message : error.message})
    }
})



// Delete a question
router.delete('/:id' , getQuestions,  async(req,res)=>{
    try{

        await res.question.remove()
        res.json({message : "Question deleted successful"})
    }
    catch (error){
        res.status(500).json({message : "User does not exists"})
    }
})


// POST a question
router.post('/' , async(req,res)=>{
    const questionSinglePost = new Question({
        questionTitle : req.body.questionTitle,
        answer : req.body.answer,
        submitDate : req.body.date
    })

    try {
        const newQuestion = await questionSinglePost.save()
        res.status(201).json(newQuestion)
    } catch (error){
        res.status(400).json({message : error.message})
    }
})


//Get a question by ID middleware
async function getQuestions(req,res,next){
    let question;
    try{
        question = await Question.findById(req.params.id)
        if(question == null){
            return res.status(404).json({message : "Question does not exists"})
        }
        
    }
    catch(error){
        return res.status(500).json({message : error.message}) 
    }
    res.question = question
    next()
}

module.exports = router