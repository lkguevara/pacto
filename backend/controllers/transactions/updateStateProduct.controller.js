const DBStateSetOrderByClient =  require("../../database/controllers/transactions/DBStateSetOrderByClient")

const updateStateProduct = async (req, res) => {
    const { id, product}  = req.params;

    try{
        if(id && product){
            
            const data  = await DBStateSetOrderByClient(id,product);

            res.status(200).json(data);
        }

       
    }catch(error){
        res.status(400).json({msg:error.message})
    }

};

module.exports = updateStateProduct;
