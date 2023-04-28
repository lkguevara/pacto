export const filterCategory = (products,category)=>{
   return  products.filter((product) =>
   product.category.toLowerCase().includes(category.toLowerCase())
 );
}