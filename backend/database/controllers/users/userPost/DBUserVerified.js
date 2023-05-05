const User = require("../../../models/user");

const DBUserValidate = async (email, query) => {
    const user = await User.findOne({ email })
    if (user?.verified === false) {
        if (query === null) {
            const codeverified = Math.floor(Math.random() * 900000) + 100000;
            const usercodevalidate = await User.findByIdAndUpdate(user._id, { codeverified })
            // aca iria el codigo para enviar el mail
            return null
        }
        else {
            if (user.codeverified === query) {
                const verifiedUpdate = await User.findByIdAndUpdate(user._id, { verified: true })
                return true
            }
            else {
                return false
            }
        }
    }
    else {
        //codigo de verificacion para loggin

    }
}

module.exports = DBUserValidate