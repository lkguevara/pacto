const { default: mongoose } = require("mongoose");
const Product = require("../../models/product");
const User = require("../../models/user");
mongoose.Types.ObjectId
const DBStateSetOrderByClient = async (idUser, idOrder, idProduct) => {

    try {
        const Order = await User.findOne(
            { _id: idUser },
            { purchased: { $elemMatch: { _id: idOrder } } },
        );
        for (let element of Order.purchased[0].products) {
            if (element.product.equals(idProduct)) {
                element.state = "entregado"
            }
        }
        if (Order.purchased[0].products.some(element => element.state === "entregado")) {
            Order.purchased[0].state = "finalizada"
        }

        Order.save()
        return Order
    } catch (error) {
        console.log(error)
    }


}

module.exports = DBStateSetOrderByClient