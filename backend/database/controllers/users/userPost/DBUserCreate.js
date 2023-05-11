const User = require("../../../models/user")

const createUser = async (user, provider = null) => {
    try {
        if (provider === null) {
            const codeverified = Math.floor(Math.random() * 900000) + 100000;
            const newUser = new User({ ...user, verified: false, codeverified, recoverycode: null })
            const response = await newUser.save()
            return response
        }
        else {
            const newUser = new User(user)
            const response = await newUser.save()
            return response
        }
    } catch (error) {
        throw Error(error)
    }
}

module.exports = createUser