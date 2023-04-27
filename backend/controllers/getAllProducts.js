const {getProductsAll} = require('../database/controllers/productsGet.js')

const getAllProducts = (req, res) =>{
  
    try{ 
       const products = getProductsAll();

       if (products){
        return res.status(200).json(products);
       }
       
       return res.status(404).json({msg: 'Error 404, not found'}) 

    } catch(err){
        res.status(500);

        return res.json({
                error : err,
                message :`¡Error al traer los productos!`
        });
    };
}

module.exports = {getAllProducts}