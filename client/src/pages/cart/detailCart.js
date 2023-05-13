
import Layout from "../../components/layout";
import Link from "next/link";
import style from "../../styles/cart/car.module.css";
import Image from "next/image";
import ProductoCard from "../../components/cart/productCart";

export default function car() {
  return (
    <>
      <Layout>
        <div className={style.container}>
            <p className={style.titleCart}>Carrito de compras</p><hr/>

            <ProductoCard />

            {/*  Costo envío*/}
            <div className={style.shipping}>
              <h5>Costo de envío</h5>
              <p>$500</p>
            </div>

            {/*  total producto*/}
            <div className={style.shipping}>
              <h5>Total con envío</h5>
              <p>$ 1500</p>
            </div>
            
            {/* Sección para los botones de submit y cancelar */}
            <div className={style.buttons}>
                <Link href="/">
                    <button className={style.buttonCancel}>Cancelar</button>
                </Link>
                <Link href="/cart/shipmentCart">
                    <button className={style.buttonContinue}>Continuar</button>
                </Link>
            </div>
          </div>    
     
      </Layout>
    </>
)}