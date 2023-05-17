import styles from "../../styles/purchased.module.css";
import Layout from "@/components/layout";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Orders from "@/components/transactions/Orders";
import { getOrders } from "@/redux/features/transactions/transactionsSlice";

function Index() {
  // const idProducts = useSelector((state)=> state.user.user.purchased)
  const dispatch = useDispatch()

  useEffect(() => {
    //enviar productos al back
    console.log('useEfect');
    dispatch(getOrders())
  }, []);

  const products = [
    {
      _id: "6463037a29a00d1d8dc59706",
      user: "646301bb29a00d1d8dc596cb",
      state: 'en curso',
      time: "2023-5-16",
      total: 50000
    },
    {
      _id: "6463037a29a00d1d8dc59706",
      user: "646301bb29a00d1d8dc596cb",
      state: 'en curso',
      time: "2023-5-16",
      total: 50000
    },
    {
      _id: "6463037a29a00d1d8dc59706",
      user: "646301bb29a00d1d8dc596cb",
      state: 'en curso',
      time: "2023-5-16",
      total: 50000
    },
  ];

  return (
    <Layout>
      {products.map((order) => (
        <Link href={`/orders/${order._id}`} key={order._id}>
          <Orders key={order._id} user={order.user} state={order.state} time={order.time} total={order.total}/>
        </Link>
      ))}
    </Layout>
  );
}


export default Index;
