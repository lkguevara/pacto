//bcrypt es una libreria que se utiliza para encriptar y desencritpar contraseñas o texto
const bcrypt = require('bcrypt');
const axios = require('axios');
const {userSave} = require('../database/controllers/userSave');
const {checkUserExists} = require('../database/helper/checkUserExists');


const getAllUsers = (req, res) => {

}

const getUserById = (req, res) => {

    const {id} = req.query;

    try{
        const response = axios.get(getUser(id));

        if (response.data){
           return res.status(200).json({msg: 'Usuario traido con exito', user: response.data});
        } 

        return res.status(404).json({msg: 'Error 404, not found '});
    } catch(err){
        return res.status(500).json({error: err, msg: 'Error en la solicitud de la base de datos'});
    }

}

const postNewUser = (req, res) => {

    const userData = req.body;

    /*  Con la función hashSyn de bcrypt me aseguro de encriptar la contraseña hasheandola 
        Esta funcion toma dos parametros, el string a hashear/encriptar y el numero de rondas (iteraciones) que hará para encriptar ese string enviado.
        Cuantas mas iteraciones se hagan, mas segura sera la contraseña (mas dificil de desencriptar) pero a su vez se sacrifica rendimiento.
        Un total de 10 iteraciones son las recomendadas  para hashear una password
    */
    userData.password = bcrypt.hashSync(userData.password, 10);
    userData.calification = 0;

}

module.exports = {getAllUsers, getUserById}