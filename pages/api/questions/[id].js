import nc from "next-connect";
import { connectDb } from "../../../utils/connectDb";
import QuestionModel from "../../../models/QuestionModel";

connectDb();
const handler = nc()
  .get(async (req, res) => {
    try {
      const {id} = req.query
      const question = await QuestionModel.find({_id : id});
      // const questions = await QuestionModel.find({_id : "626bbd68cdbd054a5f85838f"})
      res.send(question);
    } catch (error) {
      console.log(error);
    }
  })
  

export default handler;
