const Question = require('../models/question');

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
