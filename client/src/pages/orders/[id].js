import styles from "../../styles/purchased.module.css";
import Layout from "@/components/layout";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Purchased from "../../components/transactions/Purchased"

function Index() {
  // const idProducts = useSelector((state)=> state.user.user.purchased)

  useEffect(() => {
    //enviar productos al back
  }, []);

  const products = [
    {
      name: "Product 1",
      // image: "product1.jpg",
    },
    {
      name: "Product 2",
      // image: "product2.jpg",
    },
    {
      name: "Product 3",
      image: "product3.jpg",
    },
  ];



  return (
    <Layout>
      {products.map((product) => (
          <Purchased name={product.name}/>
      ))}
    </Layout>
  );
}


export default Index;
