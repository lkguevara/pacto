const Product = require("../../../models/product");
const User = require("../../../models/user");

const DBShoppingCartAddProduct = async (idUser, idProduct, ammount) => {
    try {
        const cartUser = await User.findByIdAndUpdate(idUser, { $push: { "shoppingCart.products": { product: idProduct, ammount } } }, { returnDocument: "after" })
        return cartUser.shoppingCart
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = DBShoppingCartAddProduct