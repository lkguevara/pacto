const Product = require("../../../models/product");
const DBProductGetCategory = require("./DBProductGetCategory");
const handlerFilters = require("./Handlers/handlerFilters");
const getProductsAll = require("./Handlers/handlergetall");

//filters = {price: {min: 20, max: 100}, categorias:{categoria: audio, subcategoria: audifonos} , status: [bueno, muy bueno]}

const DBPRoductFilters = async (filters) => {
    try {
        let response = {}

        switch (true) {
            case (!filters.price && !filters.categorias && !filters.status):
                response = await getProductsAll()
                break

            case (filters.categorias):
                if (!filters.price && !filters.status) {
                    response = await DBProductGetCategory(filters.categorias.categoria, filters.categorias.subcategoria)
                } else {
                    response = await handlerFilters(filters)
                }
                break

            default:
                response = await handlerFilters(filters)
        }

        return response

    } catch (error) {

    }
}