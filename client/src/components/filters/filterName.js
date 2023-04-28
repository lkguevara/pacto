export const filterName = (products, productName) => {
 return products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
};
