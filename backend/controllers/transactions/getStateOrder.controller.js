const  DBStateGetOrder = require("../../database/controllers/transactions/DBStateGetOrder");
const getSaleByIdDB  = require("../../database/controllers/sales/DBGetSaleById");
const getStateOrder = async(req,res)=>{
    
    const data  = await DBStateGetOrder('6462a2c9c84db34e8dfc03e2');
    const orders = await getSaleByIdDB('6462fea26eccf56df52c4088')
    res.status(200).json(orders)
    



}

module.exports = getStateOrder;