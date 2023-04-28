import styles from "@/styles/Productos.module.css";
import Layout from "@/components/layout";
import Link from "next/link";
import ProductoCard from "@/components/productoCard";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "@/redux/features/products/productsSlice";
import { useEffect, useState } from "react";
import { filterPrice } from "@/components/filters/filterPrice";
import { filterProducts } from "@/redux/features/products/productsSlice";

export default function Productos() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [price, setPrice] = useState({
    minimo: "",
    maximo: "",
  });

  const handlePriceChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const handleSubmitFilterPrice = () => {
    dispatch(filterProducts(filterPrice(products.copyItems, price)));
    setPrice({
      ...price,
      minimo: "",
      maximo: "",
    });
  };

  // RENDERIZADO DEL COMPONENTE
  return (
    <>
      <Layout title="Productos">
        <div className={styles.main}>
          <h1 className={styles.title}>Productos</h1>
          <div className={styles.container}>
            <div className={styles.filterPanel}>
              <h3>FilterPanel</h3>
              <div>
                <p>Precio</p>
                <input
                  name={"minimo"}
                  value={price.minimo}
                  type="text"
                  id="min-value"
                  placeholder="mínimo"
                  onChange={handlePriceChange}
                />
                <input
                  value={price.maximo}
                  name={"maximo"}
                  type="text"
                  id="max-value"
                  placeholder="máximo"
                  onChange={handlePriceChange}
                />
                <button onClick={handleSubmitFilterPrice} type="submit">
                  search
                </button>
              </div>
            </div>
            <div className={styles.listContainer}>
              {products.items?.map((prod, index) => (
                <ProductoCard key={index} producto={prod} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
