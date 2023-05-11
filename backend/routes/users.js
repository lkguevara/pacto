const express = require('express');
const router = express.Router();
const {getAllUsers} = require('../controllers/user/APIgetAllUsers');
const {postNewUser} = require('../controllers/user/APIpostNewUser');
const {setVerified} = require('../controllers/user/APISetIsVerified');
const {login} = require('../controllers/user/APILoginUser');
const checkUserExists = require('../database/helper/DBcheckUserExists');
const { verifyToken }  = require('../controllers/token/verifyToken');
const {autoLogin} = require('../middlewares/autoLoginMiddleware');
const {checkUserEmail} = require('../middlewares/checkUserMiddleWare');
const {sendRecoveryCode} = require('../controllers/user/APIRecoverySendCode');

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

router.get('/verify', verifyToken , (req, res) => {setVerified(req, res)})

//LOGIN ROUTE
router.get('/login', (req, res) => {login(req, res)});

router.get('/autologin', autoLogin, (req, res) => {login(req, res)});

//Ruta para obtener el codigo de recuperacion de password
router.get('/recoveryCode', checkUserEmail, (req, res) => {sendRecoveryCode(req, res)});

router.get('/recovery', (req, res) => {})




module.exports = router;

