const Question = require('../models/question');

exports.createQuestion = async (req, res) => {
  const postQuestion = new Question({
    questionTitle: req.body.questionTitle,
    answer: req.body.answer,
    submitDate: req.body.date,
  });

  try {
    const newQuestion = await postQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
