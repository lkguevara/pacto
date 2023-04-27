const { User } = require("../schemas/userSchema")


const createUser = async (user) => {
    try {
        const newUser = new User(user)
        const response = newUser.save()
        return response
    } catch (error) {
        throw Error(error)
    }
}

module.exports = createUser