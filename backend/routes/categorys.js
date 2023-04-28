const express = require('express');
const router = express.Router();
const getAllCategorys = require('../controllers/category/APIgetAllCategorys')

// GET all categorys
router.get('/categorys', (req, res, next) => getAllCategorys(req, res))

module.exports = router;