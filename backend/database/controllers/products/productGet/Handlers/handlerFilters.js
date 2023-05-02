const Product = require("../../../../models/product");

const handlerFilters = async (filters) => {
    searchproduct = Product.find()
    searchproduct.setOptions({ lean: true })
    searchproduct.collection(Product.collection)
    if (filters.categories !== null) {
        searchproduct.where({"category" : filters.categories.category})
        if (filters.categories.subcategory !== null) searchproduct.where({"subcategory" : filters.categories.subcategory})
    }
    if (filters.status) searchproduct.or({"state" : filters.status})
    if (filters.price){
        if (filters.price.min) searchproduct.where("price").gte(filters.price.min)
        if (filters.price.max) searchproduct.where("price").lte(filters.price.max)
    }
    
    const products = await searchproduct.exec()
    
    return products
}

module.exports = handlerFilters