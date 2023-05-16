import Layout from "@/components/layout";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "@/components/purchased";
import styles from "../../styles/purchased.module.css";


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
  console.log(1)



  return (
    <Layout>
      {products.map((product) => (
          <CardProduct name={product.name}/>
      ))}
    </Layout>
  );
}


export default Index;
