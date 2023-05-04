const DBUserVerified= require('../../database/controllers/users/userPost.js');

const setVerified = async (req, res) => {
    const {email, code} = req.query;

    try{

 

        if (await DBUserValidate(email, code)){


            // ACA SE LLAMARÁ AL LOGIN
            return res.status(200).json({verified: true});
        }

        return res.status(400).json({msg: "El codigo de verificación ingresado no es valido!"});

    } catch(err){
        return res.status(500).json({error: err.message,
                                    msg: 'Error 500! Problemas internos con la conexión del servidor.'})
    }
}

module.exports = {setVerified}