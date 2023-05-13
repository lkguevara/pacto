const checkUserExists = require("../database/helper/DBcheckUserExists")
const checkProductExists = require("../database/helper/DBCheckProductExists");
const checkProductsPayment = async(req,res,next) =>{

    //token usuario
    const userId = req.userId;
    //productos del shopping cart del usuario
    const shoppingCart  = req.body;
    //validar el usuario
    const user = await checkUserExists(userId,null);


    //productos con formato mercado pago
    const formattingProducts = [];


    if(user){

        const productsMercadoPago = Promise.all(shoppingCart.map(async(item)=>{

            //validar existencia del producto
            const realProduct = await checkProductExists(item.product._id)

            if(realProduct){

                const productMercadoPago = {
                    id: item.product._id,
                    title: item.product.name,
                    currency_id: "COP",
                    description: item.product.description.slice(0,255),
                    picture_url: item.product.images[0],
                    category_id: item.product.category,
                    quantity: item.ammount,
                    unit_price: item.product.price
                } 
    
                formattingProducts.push(productMercadoPago)
            }

            
        })) 

        await productsMercadoPago;

    }
    // console.log(formattingProducts);
    //enviar data al controller
    req.body = {emailUser: user.email,items:formattingProducts}

    next();

}

module.exports = checkProductsPayment