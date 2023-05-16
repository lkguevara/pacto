const express = require('express');
const router = express.Router();

const {postNewQuestion} = require('../controllers/question/APIPostNewQuestion');

router.post('/question', (req, res) => {postNewQuestion(req, res)});

module.exports = router;