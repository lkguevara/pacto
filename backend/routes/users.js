const express = require('express');
const router = express.Router();
const {getAllUsers} = require('../controllers/user/APIgetAllUsers');
const {postNewUser} = require('../controllers/user/APIpostNewUser');
const {setVerified} = require('../controllers/user/APISetIsVerified');
const {login} = require('../controllers/user/APILoginUser');
const checkUserExists = require('../database/helper/DBcheckUserExists');

const checkRegister = async (req, res, next) =>{

  if (!(await checkUserExists(null, req.body['email']))){
    return next();
  }
  return res.status(409).json({msg:"El usuario ingresado ya se encuentra en la base de datos"})
}

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

// GET all users
router.get('/users', (req, res) => {getAllUsers(req, res)});

// POST new user
router.post('/user', checkRegister, (req, res) => {postNewUser(req, res)});

// LOGIN user
router.get('/login', (req, res) => {login(req, res)});

// VERIFY user by code
router.get('/verify', (req, res) => {setVerified(req, res)});



module.exports = router;
