import nc from "next-connect";
import { connectDb } from "../../utils/connectDb";

connectDb()
const handler = nc()
.get(async(req, res) => {
  try {
    const singleQuestion = await QuestionModel.find({_id: req.query.id})
    res.send(singleQuestion)
  } catch (error) {
      console.log(error)
  }
})
.post(async(req,res)=>{
  const {prompt, example ,rating} = req.body
  const newQuestion = new QuestionModel({prompt, example , rating})
  try{
    await newQuestion.save()
    res.send('Done Post')
  }
  catch(error){
    console.log(error)
  }
})
  

export default handler;