const { Schema } = require("mongoose")

const productCategorySchema = new Schema({
    id: Schema.Types.ObjectId,
    product: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const subCategorySchema = new Schema({
    id: Schema.Types.ObjectId,
    productCategory: [productCategorySchema],
})

const MainCategory = new Schema({
    id: Schema.Types.ObjectId,
    subCategories: [subCategorySchema]
})

module.exports = MainCategory