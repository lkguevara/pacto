const Product = require("../../models/product");
const User = require("../../models/user");

const DBStateGetOrder = async (idUser) => {
    try {
        const userOrder = await User.findById(idUser)
            .select("purchased")
            .populate("purchased.products.product", ["name", "price"])
            .lean()
        if (userOrder === null) {
            return false
        }
        console.log(userOrder.purchased)
        return userOrder

    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBStateGetOrder