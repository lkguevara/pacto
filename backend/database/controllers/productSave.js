const Product = require("../mongoose");

const productSave = async (product, idUser) => {
    const newProduct = new Product(product)
    const idVendor = await User.findOneAndUpdate(idUser, { $push: { products: newProduct._id } }).exec()

}