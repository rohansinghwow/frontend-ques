import nc from "next-connect";
import { connectDb } from "../../../utils/connectDb";
import QuestionModel from "../../../models/QuestionModel";

connectDb();
const handler = nc()
  .get(async (req, res) => {
    try {
      const questions = await QuestionModel.find({});
      // const questions = await QuestionModel.find({_id : "626bbd68cdbd054a5f85838f"})
      res.send(questions);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    const {
      
      title,
      rating,
      description,
      details : {
        prompt,
        example,
        code
      }
    } = req.body;
    const newQuestion = new QuestionModel({
      title,
      rating,
      description,
      details: {
        prompt,
        example,
        code,
      },
    });
    try {
      
      await newQuestion.save();
      
      res.send("Done Post");
    } catch (error) {
      console.log(error);
    }
  });

export default handler;
