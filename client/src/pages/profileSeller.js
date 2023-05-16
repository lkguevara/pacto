import React, { useEffect } from "react";
import style from "@/styles/profileSeller.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";

const reviews = [
    {
        client: "Juan Carlos",
        calification: 8,
        review: "Me llego el producto en buen estado"
    },
    {
        client: "Alberto Casas",
        calification: 10,
        review: "La calidad del producto es de 10"
    },
    {
        client: "Lena Vargas",
        calification: 6,
        review: "Se demoro un poco en enviarme el producto"
    }
]

function profileSeller() {

  const { productSeller } = useSelector(state => state.products);

  const navigate = useRouter();

  useEffect(() => {
    if (!productSeller){
        navigate.push('/productos');
      }
  }, [productSeller])

  return (
    <>
      <Head>
        <title>H2H | Perfil</title>
        <meta name="description" content="H2H" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pacto-logo.png" />
      </Head>
    
      {
        productSeller && 
        <div className={style.containerProfile}>
        <Link href="/">
            <Image className= {style.imageDetail} priority src="/pacto-logo.png" alt="logo" width="140" height="140"/>
        </Link>
            <h2 className={style.profileTitle}>Información vendedor</h2>
            
            <div className={style.containerProfileData}>
                <div className={style.containerProfileData1}>
                    <h3 className={style.profileDataTitle}>Información personal</h3>
                    
                    <form className={style.form__profile}>
                        <label>Nombre de la tienda o vendedor:</label>
                        <input value={productSeller?.firstname || ""} name="firstname" type="text" readOnly />

                        <label>Ubicacion:</label>
                        <input value={productSeller?.city.city || ""} name="city" type="text" readOnly />

                        <label>Email:</label>
                        <input value={productSeller?.email || ""} name="email" type="text" readOnly />
                    </form>
                </div>

                {/* card opiniones que le han dado al vendedor */}
                <div className={style.containerProfileData2}>
                <h2 className={style.profileDataTitle}>Opiniones de sus compradores</h2>
                {
                    // !productSeller.reviewReceived.length
                    // ?
                    // <div className={style.notReview}>
                    //     <h4>Este comprador aun no tiene reviews recibidas</h4>
                    //     <Image src='/image/triste.png'  width={50} height={50} alt=""/>
                    // </div>
                    // :
                    // <div>
                    //     {productSeller.reviewReceived.map(rev => (
                    //         <h1>review</h1>
                    //     ))}
                    // </div>
                }
                {/*HARDCODEO DE REVIEWS*/}
                {
                    reviews.map(rev => (
                        <div key={rev.client} className={style.review}>
                            <h6>{rev.calification} puntos</h6>
                            <p>{rev.review}</p>
                            <h4>{rev.client}</h4>
                        </div>
                    ))
                }

                    
                </div>
            </div>
        </div>
      }
   </>         

  )
}

export default profileSeller;