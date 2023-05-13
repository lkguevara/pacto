const checkProductsPayment = async(req,res,next) =>{
    const user = req.userId
    console.log(user,10);

    next()


}

module.exports = checkProductsPayment