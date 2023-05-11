const checkUserExists = require("../../database/helper/DBcheckUserExists");
const checkProductExists = require("../../database/helper/DBCheckProductExists");
const DBProductGetId = require("../../database/controllers/products/productGet/DBProductGetId")

const shoppingCart = async (req, res) => {
  try {
    const productsShoppingCart = req.body;
    const userId = req.userId;

    // buscar el usuario
    let dataUser = await checkUserExists(userId, null);

    if(dataUser){
      //carrito basio
      if (productsShoppingCart.length === 0) {
        //Carrito vacio / boton eliminar del carrito
         dataUser.shoppingCart = [];
        
      } else {
        // Obtener el objeto de usuario actualizado de la base de datos antes de modificarlo
        const products = await Promise.all(productsShoppingCart.map(async (product) => {

          const realProduct = await checkProductExists(product.id);
          if (realProduct) {
            // Verificar si el producto ya está en el carrito de compras del usuario
            const alreadyInCart = dataUser.shoppingCart.find(item => item.id === product.id);
            //costo del producto
            const productPrice = await DBProductGetId(product.id)
  

            if (!alreadyInCart) {
              dataUser.shoppingCart.push({
                id: product.id,
                product: product.name,
                price: productPrice.price,
                amount: product.amount
              });
            }
            return realProduct;
          }
        }));
      }
  
      await dataUser.save();

    return res.status(200).json(dataUser.shoppingCart);

    }

    res.status(403).json({ error: 'Access Denied' });
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error adding products to shopping cart' });
  }
};

module.exports = shoppingCart;