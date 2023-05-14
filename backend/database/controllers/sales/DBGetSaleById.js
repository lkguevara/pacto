const Order = require("../../models/order");

const getSaleByIdDB = async (id) => {
    try {

        const order = await Order.findById(id)
            .populate("users.user", ["firstname", "lastname"])
            .populate("products.product", ["name", "price"])
            .lean()
        if (order === null) {
            return false
        }
        return order


    } catch (err) {
        throw new Error(`Error al traer la venta seleccionada ${err}`)
    }
}

module.exports = getSaleByIdDB;