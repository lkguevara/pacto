const DBProductsFilters = require('../../database/controllers/products/productGet/DBProductGetFilters');

const conditions = {
    isUndefined : "undefined",
    asc : "ASC",
    desc : "DESC",
    typeof:{
        string: "string",
        integer: "number",
        boolean: "boolean"
    }
}

const getProductsByFilters = async (req, res) => {

    //Va a recibir por QUERY los filtros y adicionalmente tambien recibirá el name para buscar
    try{
      
        const {categoria, subcategoria, status, priceMin, priceMax, orderBy, order, page, search} = req.query;
       
        const amountXPage = 24;
       
        const filters = {
            categories : categoria != conditions.isUndefined || categoria === undefined ? {
                category :  categoria,
                subcategory : subcategoria != conditions.isUndefined ? subcategoria : null
            } : null,
            status : status ? status : null,
            price : priceMin != conditions.isUndefined && priceMax != conditions.isUndefined ? {
                min : priceMin != conditions.isUndefined ? priceMin : null,
                max : priceMax != conditions.isUndefined ? priceMax : null
            } : null
        }

        let products = await DBProductsFilters(filters);
  
        if (products){

            const amountProd = products.length;
      
            const indexLastProd = page * amountXPage
            const indexFirstProd = indexLastProd - amountXPage

            if (search){
                products = products.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase()));
            }

            if (orderBy){
                products.sort((a, b) => {
                
                    switch (typeof a[orderBy]){
                        case (conditions.typeof.integer):
                            if (conditions.asc === order){
                                return a[orderBy] - b[orderBy]
                            }

                            return b[orderBy] - a[orderBy];
                        break;

                        case (conditions.typeof.boolean):
                            if (conditions.asc === order){
                                if (a.active && !b.active) {
                                    return -1; // a es verdadero y b es falso, a viene primero
                                } else if (!a.active && b.active) {
                                    return 1; // b es verdadero y a es falso, b viene primero
                                } else {
                                    return 0; // ambos son verdaderos o falsos, el orden no importa
                                }
                            }

                            if (!a.active && b.active) {
                                return -1; 
                            } else if (a.active && !b.active) {
                                return 1; 
                            } else {
                                return 0; 
                            }
                        break;

                        default:
                            if (conditions.asc === order){
                        
                                return a[orderBy].localeCompare(b[orderBy]);
                            }
            
                            return b[orderBy].localeCompare(a[orderBy]);
                        break;
                    }
                    
                })
            }



            const prodsXPage = products.slice(indexFirstProd, indexLastProd);
    
            return res.status(200).json({
                amount: amountProd,
                products : prodsXPage
            });
        }
    
        return res.status(404).json({msg: "Error 404, not found"});
    } catch (err){
        return res.status(500).json({error: err.message,
                                    msg: "Error al buscar los productos"});
    }
   
}

module.exports = {getProductsByFilters}