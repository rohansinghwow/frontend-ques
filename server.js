require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createQuestion } = require("./routes/createQuestion");
const { getQuestions } = require("./routes/getQuestions");

const PORT = 4000;

const app = express();
app.use(express.static("./public"));
app.use(cors());
app.use(express.json());

app.get("/questions", getQuestions);
app.post("/", errorHandler ,createQuestion);

//MiddleWare

function errorHandler(req,res,next){
    if(req.body.questionTitle === ''){
       return res.status(400).send({error : "Please enter the question"})
    }else if(req.body.answer === ''){
      return res.status(400).send({error : "Please enter the asnwer"})
    }
    else{
      next()
    }
}

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Database Connection Succesfull ✅");

  // only start the express service if we are connected to mongo successfully
  app.listen(PORT, () =>
    console.log(`Server started at http://localhost:${PORT}/ ✅`)
  );
});
