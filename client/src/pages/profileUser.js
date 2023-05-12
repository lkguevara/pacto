import React from "react";
import style from "@/styles/profileUser.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";

function profileUser() {

    const {user} = useSelector(state => state.user);
    
  return (
    <>
    <Head>
        <title>H2H | Perfil</title>
        <meta name="description" content="H2H" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pacto-logo.png" />
    </Head>
    
      <div className={style.containerProfile}>
      <Link href="/">
        <Image className= {style.imageDetail} priority src="/pacto-logo.png" alt="logo" width="140" height="140"/>
      </Link>
        <h2 className={style.profileTitle}>Mi Cuenta</h2>
        
        <div className={style.containerProfileData}>
                <div className={style.profileDataTitle}>
                    <h3>Datos Personales</h3>
                    <Image className={style.lapiz} src='/image/lapiz.png' alt='' width='22' height='22' />
                </div>
                
                <form className={style.form__Login}>
                    <label>Email:</label>
                    <input value={user?.email || ""} name="email" type="email" readOnly />

                    <label>Nombre:</label>
                    <input value={user?.firstname || ""} name="firstname" type="text" readOnly />

                    <label>Apellido:</label>
                    <input value={user?.lastname || ""} name="lastname" type="text" readOnly />

                    <label>Dirección:</label>
                    <input value={user?.address || ""} name="address" type="text" readOnly />
        
                    <label>Teléfono:</label>
                    <input value={user?.phone || "None"} name="phone" type="text" readOnly />
                    
                    <div className={style.secciones}>
                        <button >Ir a mis pedidos</button>
                        <button >Ir a mis Productos</button>
                        <button className={style.deslogueo}>Cerrar Sesion</button>
                    </div>
                    
                </form>

        </div>
      </div>
    </>      

  )
}

export default profileUser;