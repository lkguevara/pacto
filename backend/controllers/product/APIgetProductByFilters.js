const DBProductsFilters = require('../../database/controllers/products/productGet/DBProductGetFilters');

const getProductsByFilters = async (req, res) => {

    try{
        const {filters, order, page} = req.body;
        const products = await DBProductsFilters(filters);
        const amountXPage = 24;
      
        if (products){
            const amountProd = products.length;
      
            const indexLastProd = page * amountXPage
            const indexFirstProd = indexLastProd - amountXPage
            const prodsXPage = products.slice(indexFirstProd, indexLastProd);
    
            return res.status(200).json({
                amount: amountProd,
                products : prodsXPage
            });
        }
    
        return res.status(404).json({msg: "Error 404, not found"});
    } catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Error al buscar los productos"});
    }
   
}

module.exports = {getProductsByFilters}