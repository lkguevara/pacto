const User = require("../../../models/user")

const createUser = async (user) => {
    try {
        const codeverified = Math.floor(Math.random() * 900000) + 100000;
        const newUser = new User({ ...user, verified: false, codeverified })
        const response = newUser.save()
        return response
    } catch (error) {
        throw Error(error)
    }
}

module.exports = createUser