const Product = require("../../../models/product");
const DBProductGetCategory = require("./DBProductGetCategory");
const getProductsAll = require("./Handlers/handlergetall");

//filters = {price: {min: 20, max: 100}, categorias:{categoria: audio, subcategoria: audifonos} , status: [bueno, muy bueno]}

const DBPRoductFilters = async (filters) => {
    try {
        let response = {}
        switch (true) {
            case (filters.price === null && filters.categorias === null && filters.status === null):
                response = await getProductsAll()
                return response
            case (filters.categorias !== null):
                if (filters.price === null && filters.status === null) {
                    response = await DBProductGetCategory(filters.categorias.categoria, filters.categorias.subcategoria)
                    return response
                }
                else if (filters.price !== null || filters.status !== null) {

                    response = Product.find()
                    response.setOptions({ lean: true })
                    response.collection(Product.collection)
                    if (filters.status.length != 0) response.or(filters.status)
                    if (filters.price.min) response.where(price).gt(filters.price.min)
                    if (filters.price.max) response.where(price).lt(filters.price.max)
                    const products = await response.exec()
                }


        }

    } catch (error) {

    }
}