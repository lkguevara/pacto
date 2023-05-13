
import Layout from "../../components/layout";
import Link from "next/link";
import style from "../../styles/cart/envio.module.css";
import { GrMapLocation } from 'react-icons/gr';
import ProductoCard from "../../components/cart/productCart";
import { payment } from "@/redux/features/carrito/carrito";
import { useDispatch } from "react-redux";


export default function car() {

  const dispatch = useDispatch();

  const handlePayment = ()=>{
  
    //enviar productos
     dispatch(payment())
  }



  return (
    <>
      <Layout>
            <p className={style.titleCart}>Información de envío</p>
            
            <div className={style.container}>
                <GrMapLocation className={style.imageEnvio}/>
                <div className="direccion">
                    <p>Av. Siempre Viva 123</p>
                    <p>Springfield, USA</p>
                </div>
                <button className={style.buttonEdit}>Editar o Elegir otra</button>
            </div> 

            <div className={style.resumenCompra}>
                <p>Resumen compra</p>
                <h3><span>Productos</span>(2)</h3>
                <h3>Total: $1500</h3>
            </div>

            <Link href="">
                    <button className={style.buttonContinue} onClick={handlePayment}>Continuar</button>
            </Link>
     
      </Layout>
    </>
)}