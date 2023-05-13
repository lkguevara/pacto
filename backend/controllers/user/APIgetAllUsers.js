const getAllUsersDB = require('../../database/controllers/users/userGet/DBAllUsers');

const getAllUsers = async (req, res) => {
    try{

        let users = await getAllUsersDB();

        if (users){

            //Recorro cada usuario y le saco las keys inncesarias para el admin (Codigo de recuperacion y verificacion, y la password hasheada);
            for (const user of users){
                delete user.password;
                delete user.codeverified;
                delete user.recoverycode;
            }

            return res.status(200).json({msg: 'Usuarios traidos con exito', users});
        }

        return res.status(404).json({msg: 'Error 404, not found '});

    } catch (err){
        return res.status(500).json({error: err.message, msg: 'Error en la solicitud de la base de datos'})
    }
}

module.exports = {getAllUsers}