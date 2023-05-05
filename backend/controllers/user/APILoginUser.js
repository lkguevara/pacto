const checkUserExists = require('../../database/helper/DBcheckUserExists');

const login = async (req, res) =>{

    try{

        

    }catch(err){
        return res.status(500).json({error: err.message,
                                    msg: 'Error 500! Problemas internos con la conexión del servidor.'})
    }
}