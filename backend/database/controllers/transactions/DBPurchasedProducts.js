const Product = require("../../models/product");
const User = require("../../models/user");

const DBPurchasedProducts = async (idUser) => {
    try {
        const shoppingCartProducts = await User.findById(idUser).select(["shoppingCart", "purchased"])
        const stockProducts = []
        const outStock = []
        if (shoppingCartProducts.shoppingCart.products.length === 0) {
            throw Error("No hay ningun producto en el carrito")
        }
        for (let element of shoppingCartProducts.shoppingCart.products) {
            let product = await Product.findById(element.product).select(["stock", "purchasedBy"])
            if (product.stock < element.ammount) {
                outStock.push(product)
            }
            else {

                product.stock -= element.ammount
                product.purchasedBy.push({ user: shoppingCartProducts._id, ammount: element.ammount })
                console.log(product.purchasedBy)
                if (product.stock === 0) {
                    product.active = "agotado"
                }
                stockProducts.push(product)
            }
        }
        if (outStock.length !== 0) {
            throw ("productos sin stock suficiente: " + outStock)
        }
        for (element of stockProducts) {
            element.save()
        }
        shoppingCartProducts.purchased.push({ products: shoppingCartProducts.shoppingCart.products })
        shoppingCartProducts.shoppingCart = {}
        await shoppingCartProducts.save()
        return true
    } catch (error) {
        throw Error(error)
    }
}


module.exports = DBPurchasedProducts