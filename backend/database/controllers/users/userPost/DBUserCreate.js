const User = require("../../../models/user");
const Wallet = require("../../../models/wallet");

const createUser = async (user, provider = null) => {
    try {
        const newWallet = new Wallet()
        if (provider === null) {
            const codeverified = Math.floor(Math.random() * 900000) + 100000;
            const newUser = new User({ ...user, verified: false, codeverified, recoverycode: null })
            newWallet.user = newUser._id
            const walletUser = await newWallet.save()
            newUser.wallet = walletUser._id
            const response = await newUser.save()
            return response
        }
        else {
            const newUser = new User(user)
            newWallet.user = newUser._id
            const walletUser = await newWallet.save()
            newUser.wallet = walletUser._id
            const response = await newUser.save()
            return response
        }
    } catch (error) {
        throw Error(error)
    }
}

module.exports = createUser