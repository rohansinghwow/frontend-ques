const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    questionTitle : {
        type : String,
        required : true
    } ,

    answer : {
        type : String,
        required : true
    } , 
    submitDate : {
        type : Date,
        required : true,
        default : Date.now
    }

})

module.exports = mongoose.model('Question' , questionSchema)