const { Category } = require("../../../models/category")
const Product = require("../../../models/product")
const User = require("../../../models/user")




const productSave = async (product, idUser) => {
    try {
        const newProduct = new Product(product)
        uploadproduct = await User.findOneAndUpdate(idUser, { $push: { products: newProduct._id } }).exec()
        const updatedVendor = await User.findOne({ _id: idUser })
        const subcategories = await Category.findOneAndUpdate({ name: product.maincategory, subCategories: { $elemMatch: { name: product.subcategory } } }, { "subCategories.$": 1 }, { $push: { products: newProduct._id } })
        newProduct.user = idUser
        newProduct.save()
        return newProduct

    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = productSave
