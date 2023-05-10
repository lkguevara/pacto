const checkUserExists = require("../../database/helper/DBcheckUserExists");
//Requiero jwt ya que cuando un usuario vuelva a loggear de forma "manual", se le asignará un nuevo token por seguridad
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    // if (!req.user){

    const { email, password } = req.query;
    if (email && password) {
      const user = await checkUserExists(null, email);
      console.log(user);
      //Verifico que el usuario ingresado exista en la db
      if (user) {
        //Checkeo si la contraseña ingresada coincide con la almacenada en la db
        if (bcrypt.compare(password, user.password)) {
          /*Genero el token asociado al id del usuario, dejo comentado el tiempo de expiracion del token 
                        (Por tema de seguridad deberia estar activado pero tenemos que determinar el tiempo que pondremos para que expire)*/
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_PRIVATE_KEY /*, { expiresIn: '1h' }*/
          );
          console.log(token);

          user.token = token;
          await user.save();

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

          return res
            .status(200)
            .json({
              msg: "Inicio de sesión exitoso",
              token: token,
              verified: true,
              user:userData
            });
        }

        return res
          .status(401)
          .json({ msg: "La contraseña ingresada no coincide!" });
      }

      return res.status(401).json({ msg: "El usuario ingresado no existe!" });
    }

    // }

    return res
      .status(200)
      .json({ msg: "Inicio de sesión exitoso", user: req.user });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      msg: "Error 500! Problemas internos con la conexión del servidor.",
    });
  }
};

module.exports = { login };
