const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    prompt : {
        type : String,
        required : true
    },
    example : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    }
    
       
})

export default mongoose.models.Question || mongoose.model("Question" , questionSchema)