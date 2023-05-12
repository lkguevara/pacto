const Product = require("../../models/product");
const User = require("../../models/user");

const DBShoppingCartAddProduct = async (idUser, idProduct, stock) => {
    try {
        const cartUser = await User.findByIdAndUpdate(idUser, { $push: { "shoppingCart.products": { product: idProduct, stock } } }, { returnDocument: "after" })
        return cartUser.shoppingCart
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DBShoppingCartAddProduct