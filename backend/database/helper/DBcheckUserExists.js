const  User  = require("../models/user")

//Funcion para verificar si el usuario existe en la base de datos

const checkUserExists = async (idUser, email = false) => {
    let isUser = null;
    if (email){
        isUser = await User.findOne({email: email})
    } else{
        isUser = await User.findById(idUser);
    }


    if (isUser != null) {

        return true
    }

    return false
}



module.exports = checkUserExists

