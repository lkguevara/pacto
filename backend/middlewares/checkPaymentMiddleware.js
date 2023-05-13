const checkProductsPayment = async(req,res,next) =>{
    const user = req.userId
    //vallidaciones antes de enviar a mercado pago

    next()

}

module.exports = checkProductsPayment