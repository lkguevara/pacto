const checkUserExists = require("../../database/helper/DBcheckUserExists");
const checkProductExists = require("../../database/helper/DBCheckProductExists");
const DBProductGetId = require("../../database/controllers/products/productGet/DBProductGetId")
const DBShoppingCartAddProduct =  require("../../database/controllers/shoppingcart/DBShoppingCartAddProduct")
const DBShoppingCartGet = require("../../database/controllers/shoppingcart/DBShoppingCartGet")

const shoppingCart = async (req, res) => {
  try {
    const productsShoppingCart = req.body;
    const userId = req.userId;

    // buscar el usuario
    let dataUser = await checkUserExists(userId, null);

    if(dataUser){
      
       // Obtener el objeto de usuario actualizado de la base de datos antes de modificarlo
       const products = await Promise.all(productsShoppingCart.map(async (product) => {

        const realProduct = await checkProductExists(product.id);
        if (realProduct) {
  
          const productsShopping =  await DBShoppingCartGet(userId)

          //Si ya hay productos en el carrito
          if(productsShopping.shoppingCart === undefined){
            
             await DBShoppingCartAddProduct(userId,product.id,product.amount);
             
          }else{

          const alreadyInCart = productsShopping.shoppingCart.products.some(item => item.product._id.equals(product.id));
          
          const productAmount = productsShopping.shoppingCart.products.find(item => item.product._id.equals(product.id));

            //el producto no esta en el carrito
            if(!alreadyInCart){
              await DBShoppingCartAddProduct(userId,product.id,product.amount);
            }
            //El producto esta en el carrito
            
            if(alreadyInCart && productAmount.stock != product.amount){
              await DBShoppingCartAddProduct(userId,product.id,product.amount);
            }
          }

          const user = await DBShoppingCartGet(userId);

          return res.status(200).json({products:user.shoppingCart.products});
        }

        return res.status(500).json({error:'Non-existent product'});

      }));

      return res.status(200).json('products added at shopping cart');

    }

    res.status(403).json({ error: 'Access Denied' });
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error adding products to shopping cart' });
  }
};

module.exports = shoppingCart;