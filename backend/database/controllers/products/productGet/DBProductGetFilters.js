const Product = require("../../../models/product");
const DBProductGetCategory = require('../productGet/handlers/DBProductGetCategory')
const handlerFilters = require('./handlers/handlerFilters');
const getProductsAll = require("./handlers/handlerGetAll");

//filters = {price: {min: 20, max: 100}, categorias:{categoria: audio, subcategoria: audifonos} , status: [bueno, muy bueno]}

const DBProductsFilters = async (filters) => {
    try {
        let response = {}
    
        switch (true) {
           
            // case (!filters.price && !filters.categories && !filters.status):
            case (!filters.price && !filters.categories && !filters.status):
           
                response = await getProductsAll()
                break
                
            case (filters.categories):
                if (!filters.price && !filters.status) {
                    response = await DBProductGetCategory(filters.categories.category, filters.categories.subcategory)
                } else {
                    response = await handlerFilters(filters)
                }
                break
                
                default:
                    // response = await handlerFilters(filters)
                    response = await getProductsAll()
        }
     
        return response

    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = DBProductsFilters