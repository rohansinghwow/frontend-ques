const mongoose = require('mongoose')

const reqString = {
    type : String,
    required : true,
}
const detailsSchema = mongoose.Schema(
    {
        prompt : reqString,
        example : reqString,
        code : reqString,

    }
)
const questionSchema = mongoose.Schema({
    title : reqString,
    rating : reqString,
    description : reqString,
    details : detailsSchema
       
})
// const mainSchema = mongoose.Schema({
//     data : questionSchema
       
// })

export default mongoose.models.Question || mongoose.model("Question" , questionSchema)