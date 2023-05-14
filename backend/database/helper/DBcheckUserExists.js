const  User  = require("../models/user")

//Funcion para verificar si el usuario existe en la base de datos
/* Se agregó el parametro lean t/f ya que en algunos casos del proyecto se necesita que se retorne 
un json plano (lean true) y en otro que retorne el json con las funciones de mongoose (lean false)*/
const checkUserExists = async (idUser, email = false, lean = false) => {
    let isUser = null;
    if (email){
        if (lean){
            isUser = await User.findOne({email: email}).lean();
        }else{
            isUser = await User.findOne({email: email});
        }
        
    } else{
        if (lean){
            isUser = await User.findById(idUser).lean();
        }else{
            isUser = await User.findById(idUser)
        }

        
    }




    if (isUser != null) {

        return isUser
    }

    return false
}



module.exports = checkUserExists

