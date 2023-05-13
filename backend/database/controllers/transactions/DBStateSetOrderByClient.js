// const { default: mongoose } = require("mongoose");
// const Product = require("../../models/product");
// const User = require("../../models/user");
// const Order = require("../../models/order");

// mongoose.Types.ObjectId
// const DBStateSetOrderByClient = async (idOrder, idProduct) => {

//     try {
//         const setOrder = await User.findOne(
//             { _id: idOrder },
//             { products: { $elemMatch: { _id: idOrder } } },
//         );
//         for (let element of Order.purchased[0].products) {
//             if (element.product.equals(idProduct)) {
//                 element.state = "entregado"
//             }
//         }
//         if (setOrder.purchased[0].products.some(element => element.state === "entregado")) {
//             setOrder.purchased[0].state = "finalizada"
//         }

//         setOrder.save()
//         return Order
//     } catch (error) {
//         console.log(error)
//     }


// }

// module.exports = DBStateSetOrderByClient

const { default: mongoose } = require("mongoose");
const Product = require("../../models/product");
const User = require("../../models/user");
const Order = require("../../models/order");
const DBSetBalance = require("./DBSetBalance");

mongoose.Types.ObjectId
const DBStateSetOrderByClient = async (idOrder, idProduct) => {

    try {
        const setOrder = await Order.findOne(
            { _id: idOrder },
        ).populate("products.product", ["price", "user"]);
        for (let element of setOrder.products) {
            if (element.product._id.equals(idProduct)) {
                element.state = "entregado"
                DBSetBalance(element.product.user, element.product.price, "receivable")
            }
        }
        if (setOrder.products.some(element => element.state === "entregado")) {
            setOrder.state = "finalizada"
        }
        await setOrder.save()
        return setOrder
    } catch (error) {
        console.log(error)
    }


}

module.exports = DBStateSetOrderByClient