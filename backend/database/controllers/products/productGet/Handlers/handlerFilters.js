const Product = require("../../../../models/product");

const handlerFilters = async (filters) => {
    searchproduct = Product.find()
    searchproduct.setOptions({ lean: true })
    searchproduct.collection(Product.collection)
    if (filters.categorias !== null) {
        searchproduct.where("maincategory").eq(filters.categorias.categoria)
        if (subcategoria !== null) searchproduct.where("maincategory").eq(filters.categorias.subcategoria)
    }
    if (filters.status.length != 0) searchproduct.or(filters.status)
    if (filters.price.min) searchproduct.where("price").gte(filters.price.min)
    if (filters.price.max) searchproduct.where("price").lte(filters.price.max)
    const products = await searchproduct.exec()
    return products
}

module.exports = handlerFilters