const DBUserVerified = require('../../database/controllers/users/userPost/DBUserVerified');

const setVerified = async (req, res) => {
    const { email, code } = req.query;

    try {

     

        if ( await DBUserVerified(email, code)) {


            /* OPCION 1: UNA VEZ VERIFICADO SE LOGGEA ACA AUTOMATICAMENTE
                OPCION 2: CUANDO EL FRONT RECIBE verified true, REDIRECCIONA AL USER A LA VENTANA DE LOGIN
            */
            return res.status(200).json({msg: "Usuario verificado exitosamente!",
                                        verified: true});
        }

        return res.status(400).json({ msg: "El codigo de verificación ingresado no es valido!",
                                    verified: false });

    } catch (err) {
        return res.status(500).json({
            error: err.message,
            msg: 'Error 500! Problemas internos con la conexión del servidor.'
        })
    }
}

module.exports = { setVerified }