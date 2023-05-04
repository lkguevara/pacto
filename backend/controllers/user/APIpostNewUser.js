//bcrypt es una libreria que se utiliza para encriptar y desencritpar contraseñas o texto
const bcrypt = require('bcrypt');
const createUser = require('../../database/controllers/DBUserCreate');
const checkUserExists = require('../../database/helper/DBcheckUserExists')

//Si el nuevo usuario se postea esta funcion retornará al usuario en si, si no retorna false
const postNewUser = async (req, res) => {

    const userData = req.body;

   
   try{

         /*  Con la función hashSyn de bcrypt me aseguro de encriptar la contraseña hasheandola 
            Esta funcion toma dos parametros, el string a hashear/encriptar y el numero de rondas (iteraciones) que hará para encriptar ese string enviado.
            Cuantas mas iteraciones se hagan, mas segura sera la contraseña (mas dificil de desencriptar) pero a su vez se sacrifica rendimiento.
            Un total de 10 iteraciones son las recomendadas para hashear una password
        */
        userData.password = bcrypt.hashSync(userData.password, 10);
        userData.calification = 0;

        const newUser = await createUser(userData);
    
        if (await checkUserExists(newUser._id)){

            return res.status(200).json(newUser);
        }

        return res.status(500).json({msg: "Se produjo un error interno en el servidor. Inténtelo de nuevo más tarde."});

    } catch (err){
            return res.status(500).json({error: err.message,
                                        msg: "Error con la conexón a la base de datos"});
    }
        

}

module.exports = {postNewUser}