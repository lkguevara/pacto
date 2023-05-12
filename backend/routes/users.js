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
const {recoveryPassword} = require('../controllers/user/APIRecoveryPassword');
const {editUser} = require('../controllers/user/APIEditUser');

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
router.get('/recoverycode', checkUserEmail, (req, res) => {sendRecoveryCode(req, res)});

router.put('/recovery', (req,res, next) => {
  const {email, password, code} = req.body;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email || !password || !code){
    
    return res.status(401).json({msg: "Faltan datos para poder restablecer la contraseña!"});
  }

  if (!email.match(regex)){
    return res.status(401).json({msg: "Debes ingresar un email valido para continuar! (ejemplo@ejemplo.com)"});
  }

  next();
},(req, res) => {recoveryPassword(req, res)});

router.put('/edituser', (req, res) => {editUser(req, res)})




module.exports = router;

