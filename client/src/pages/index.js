import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Login from '@/pages/login';
import EnConstruccion from '@/components/enConstruccion';
import Slider from '@/components/slider';
import Destacados from "@/components/destacados";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProducts } from "@/redux/features/products/productsSlice";
import Boletin from '@/components/boletin';



export default function Home() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.products);
 
 useEffect(()=>{
     fetch("http://localhost:3000/api/items")
     .then(response => response.json())
     .then(data=> dispatch(addProducts(data.products)))
 },[])

  return (
    <>
      <Layout title="Home">
        <Slider />
        <Destacados />
        <Boletin />
      </Layout>
    </>
  )
}
