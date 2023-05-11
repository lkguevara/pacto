const DBUserRecovery = require("../../database/controllers/users/userPost/DBUserRecovery");
require("dotenv").config();

const sendRecoveryCode = async (req, res) => {
    try{

        if (req.user){
            const user = req.user;
            const {email} = req.query;
            const sended = await DBUserRecovery(email);

            const userData = {
                id: user._id,
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                adress: user.address,
                products: user.products,
                calification: user.calification,
                phone: user.phone,
              }

            if (sended){
                return res.status(200).json({sended,
                    msg: "Codigo de recuperación enviado",
                    userData});
            }

            return res.status(500).json({msg: "No se pudo enviar el mail con el codigo de recuperación"});
        }

        return res.status(404).json({msg: "Error 404! Not found"});

    }catch(err){
        return res.status(500).json({error: err.message,
                                    msg: "Problemas de conexión en el servidor!"});
    }
}

module.exports = {sendRecoveryCode}