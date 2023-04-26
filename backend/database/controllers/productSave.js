const { Product } = require("../mongoose");
const { User } = require("../mongoose")

const productSave = async (product, idUser) => {
    const newProduct = new Product(product)
    uploadproduct = await User.findOneAndUpdate(idUser, { $push: { products: newProduct._id } }).exec()
    const updatedVendor = await User.findOne({ _id: idUser }).populate('products')
    newProduct.user = idUser
    newProduct.save()
    return newProduct
}

module.exports = productSave
