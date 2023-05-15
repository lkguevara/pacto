const { Category } = require("../../../models/category")
const Product = require("../../../models/product")
const User = require("../../../models/user")

const productSave = async (product, idUser) => {
    try {
        const newProduct = new Product(product)
        const uploadproduct = await User.findByIdAndUpdate(idUser, { $push: { products: newProduct._id } })
        const subcategories = await Category.findOneAndUpdate(
            { name: product.category, "subCategories.name": product.subcategory },
            { $push: { "subCategories.$.products": newProduct._id } },
            { new: true }
        );
    
        await newProduct.save()
        return newProduct

    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = productSave
