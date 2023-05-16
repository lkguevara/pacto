const  DBStateGetOrder = require("../../database/controllers/transactions/DBStateGetOrder");
const getStateOrder = async(req,res)=>{
    
    const data  = await DBStateGetOrder('646301bb29a00d1d8dc596cb')
    res.status(200).json(data)
    



}

module.exports = getStateOrder;