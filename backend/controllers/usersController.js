//bcrypt es una libreria que se utiliza para encriptar y desencritpar contraseñas o texto
const bcrypt = require('bcrypt');
//Aun no existe, esperando para continuar con esta sección
const {createUser} = require('../database/controllers/createUser')
const {checkUserExists} = require('../database/helper/checkUserExists');


const getAllUsers = (req, res) => {

    
    try{

        const users = "Aca va la función de traer todos los usuarios";

        if (users){
            return res.status(200).json({msg: 'Usuarios traidos con exito', users: users});
        }

        return res.status(404).json({msg: 'Error 404, not found '});

    } catch (err){
        return res.status(500).json({error: err, msg: 'Error en la solicitud de la base de datos'})
    }
}

const getUserById = (req, res) => {

    const {id} = req.query;

    try{
        const user = getUser(id);

        if (user){
           return res.status(200).json({msg: 'Usuario traido con exito', user: user});
        } 

        return res.status(404).json({msg: 'Error 404, not found '});
    } catch(err){
        return res.status(500).json({error: err, msg: 'Error en la solicitud de la base de datos'});
    }

}


//Si el nuevo usuario se postea esta funcion retornará al usuario en si, si no retorna false
const postNewUser = (req, res) => {

    const userData = req.body;

    /*  Con la función hashSyn de bcrypt me aseguro de encriptar la contraseña hasheandola 
        Esta funcion toma dos parametros, el string a hashear/encriptar y el numero de rondas (iteraciones) que hará para encriptar ese string enviado.
        Cuantas mas iteraciones se hagan, mas segura sera la contraseña (mas dificil de desencriptar) pero a su vez se sacrifica rendimiento.
        Un total de 10 iteraciones son las recomendadas  para hashear una password
    */
    userData.password = bcrypt.hashSync(userData.password, 10);
    userData.calification = 0;

    const newUser = createUser(userData);

    if (newUser){
        return newUser
    }

    return false;

}

module.exports = {getAllUsers, getUserById, postNewUser}