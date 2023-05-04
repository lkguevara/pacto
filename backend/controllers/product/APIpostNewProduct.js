const productSave = require('../../database/controllers/products/productPost/DBProductSave');
const checkProductExists = require('../../database/helper/DBCheckProductExists');
const uploadImg = require('../cloudinary/uploadImg');

const postNewProduct = async (req, res) => {

    uploadImg();
    try{
        //En el req.body debo recibir un json con las propiedades iduser y product
        const {idUser, product} = req.body;



        if (idUser && product){

            let aUrlsImg = [];

            for(const [index, img] of product.image){
                aUrlsImg.push(uploadImg(img, product.title + idUser + '' + index))
            }

            const newProd = await productSave(product, idUser);
  
            //Checkeo que el producto fue creado en la db
            if (checkProductExists(newProd._id.toString())){
                return res.status(200).json(newProd);
            }

            return res.status(404).json({msg: "No se pudo cargar el nuevo producto, intentlo de nuevo"});
        }
    } catch (err){
        return res.status(500).json({error: err.message, msg: "Error al cargar el producto"});
    }

    
}

module.exports = {postNewProduct}