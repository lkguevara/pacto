const bcrypt = require('bcrypt');
const checkUserExists = require('../../database/helper/DBcheckUserExists');

const editUser = async (req, res) => {
    
    const {id, firstName, lastName, address, email, phone, password} = req.body;

    try{
        console.log(lastName);
        const user = await checkUserExists(id, false);
        // Regex para comprobar si un email es valido o no
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (user){

            if (firstName)  user.firstname = firstName;
            if (lastName) user.lastname = lastName;
            if (address) user.address = address;
            if (email && email.match(regex)) user.email = email;
            if (phone) user.phone = phone;

            if (password){
                let newPass = bcrypt.hashSync(password, 10);

                user.password = newPass;
            }

            //Actualizo los cambios en la DB
            user.save();

            const userData = {
                id: user._id,
                lastname: user.lastname,
                firstname: user.firstname,
                email: user.email,
                adress: user.address,
                products: user.products,
                calification: user.calification,
                phone: user.phone,
            };

            return res.status(200).json({user: userData,
                                        msg: "Cambios aplicados con exito!"});
        }

        return res.status(404).json({msg: "Error 404! Usuario no encontrado"});
    } catch(err){
        return res.status(600).json({error: err.message,
                                    msg: "Error 500! Problemas internos con la conexión del servidor."})
    }
}

module.exports = {editUser}