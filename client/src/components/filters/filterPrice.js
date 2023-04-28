export const filterPrice = (products,{minimo,maximo})=>{
    if(maximo && minimo){
        return products.filter(product => product.price >= minimo && product.price <= maximo)
    }
    else if(minimo){
        // return console.log("solo precio minimo");
        return (products.filter(product=> product.price >= minimo));
        
    }
    else if(maximo){
        return (products.filter(product=> product.price <= maximo))
    }
    // console.log(products,minimo,maximo);

}