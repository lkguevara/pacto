const getAllSalesDB = require('../../database/controllers/sales/DBGetAllSales');

const getAllSales = async (req, res) => {

    try{
        const sales = await getAllSalesDB();

        if (sales){
            return res.status(200).json({
                msg: "Ventas traidas con exito!",
                sales
            });
        }

        return res.status(404).json({
            msg: "Error 404! Not found"
        })
    } catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Problemas de conexión en el servidor!"});
    }
}

module.exports = {getAllSales};