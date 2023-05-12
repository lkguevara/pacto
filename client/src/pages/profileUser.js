import React from "react";
import style from "@/styles/profileUser.module.css";
import Image from "next/image";
import Link from "next/link";

function profileUser() {
  return (
    
      <div className={style.containerProfile}>
      <Link href="/">
        <Image className= {style.imageDetail} priority src="/pacto-logo.png" alt="logo" width="140" height="140"/>
      </Link>
        <h2 className={style.profileTitle}>Mi Cuenta</h2>
        
        <div className={style.containerProfileData}>
            <div className={style.containerProfileData1}>
                <h3 className={style.profileDataTitle}>Datos Personales</h3>
                
                <form className={style.form__profile}>
                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Nombre completo:</label>
                            <input name={"name"} type="text" placeholder="name user" />
                        </div>
                        <Image className= {style.imageProfile} priority src="/edit.svg" alt="logo" width="30" height="30"/>
                    </div>

                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Email:</label>
                            <input name={"email"} type="text" placeholder="email user" />
                        </div>
                        <Image className= {style.imageProfile} priority src="/edit.svg" alt="logo" width="30" height="30"/>
                    </div>

                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Dirección de facturación:</label>
                            <input name={"direccion"} type="text" placeholder="Dirección de facturación" />
                        </div>
                        <Image className= {style.imageProfile} priority src="/edit.svg" alt="logo" width="30" height="30"/>
                    </div>
                    <Link href="/misPedidos">
                        <button type="submit">Ir a mis pedidos</button>
                    </Link>
                </form>
            </div>

        </div>
    </div>
            

  )
}

export default profileUser;