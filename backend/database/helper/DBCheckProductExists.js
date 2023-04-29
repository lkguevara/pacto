const  Product  = require("../models/product")

//Funcion para verificar si el usuario existe en la base de datos

const checkProductExists = async (idProd) => {
    console.log("Desde el check ", idProd)
    const isProd = await Product.findById(idProd)
    if (isProd !== null) {
        return true
    }

    return false
}



module.exports = checkProductExists

