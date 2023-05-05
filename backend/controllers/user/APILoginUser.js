const checkUserExists = require('../../database/helper/DBcheckUserExists');
const bcrypt = require('bcrypt');

const login = async (req, res) =>{

    try{

        const {user} = req.body;

        if (user){
            const userToCompare = checkUserExists(user.email);

            if (userToCompare){

                if (bcrypt.compare(user.password, userToCompare.password)){
                    //Falta terminar
                    return "LOGEADO"
                }
            }
        }

    }catch(err){
        return res.status(500).json({error: err.message,
                                    msg: 'Error 500! Problemas internos con la conexión del servidor.'})
    }
}