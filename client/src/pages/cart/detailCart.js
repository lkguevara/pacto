
import Layout from "../../components/layout";
import Link from "next/link";
import style from "../../styles/cart/car.module.css";
import Image from "next/image";
import ProductoCard from "../../components/cart/productCart";
import { useSelector } from "react-redux";

export default function car() {

  const shoppingCart = useSelector((state)=> state.shoppingCart.products);
  let totalPrice = null;

  return (
    <>
      <Layout>
        <div className={style.container}>
            <p className={style.titleCart}>Carrito de compras</p><hr/>

            {shoppingCart.length > 0 && shoppingCart.map(item=>{
              const {product,ammount,_id} = item;

              totalPrice += product.price;
            
              return (<ProductoCard name= {product.name} images={product.images} price={product.price} ammount={ammount}/>)
            })}


            {/*  Costo envío*/}
            {/* <div className={style.shipping}>
              <h5>Costo de envío</h5>
              <p>$500</p>
            </div> */}

             {/* total producto */}
             <div className={style.shipping}>
              <h5>Total con envío</h5>
              <p>{`$ ${totalPrice}`}</p>
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