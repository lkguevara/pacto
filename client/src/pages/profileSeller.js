import React from "react";
import style from "@/styles/profileUser.module.css";
import Image from "next/image";
import Link from "next/link";

function profileUser() {
  return (
    
      <div className={style.containerProfile}>
      <Link href="/">
        <Image className= {style.imageDetail} priority src="/pacto-logo.png" alt="logo" width="90" height="90"/>
      </Link>
        <h2 className={style.profileTitle}>Información vendedor</h2>
        
        <div className={style.containerProfileData}>
            <div className={style.containerProfileData1}>
                <h3 className={style.profileDataTitle}>Información personal</h3>
                
                <form className={style.form__profile}>
                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Nombre tienda o vendedor:</label>
                            <input name={"name"} type="text" placeholder="name seller" />
                        </div>
                    </div>

                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Ubicación:</label>
                            <input name={"ubication"} type="text" placeholder="ubication seller" />
                        </div>
                    </div>

                    <div className={style.container}>
                        <div className={style.containerInfo}>
                            <label>Email:</label>
                            <input name={"email"} type="text" placeholder="email seller" />
                        </div>
                    </div>
                </form>
            </div>

            {/* card opiniones que le han dado al vendedor */}
            <div className={style.containerProfileData2}>
            <h2 className={style.profileTitle}>Opiniones de sus compradores</h2>
                <div className={style.containerPuntuacion}>
                    <h1 className={style.titlePuntuacion}>21</h1>
                    <div className={style.puntuacionContainer}>
                        <div className={style.ponderadoPuntuacion}>
                            <div className={style.color}></div>
                            <p>Buena (20)</p>
                        </div>
                        <div className={style.ponderadoPuntuacion}>
                            <div className={style.color}></div>
                            <p>Regular (0)</p>
                        </div>
                        <div className={style.ponderadoPuntuacion}>
                            <div className={style.color}></div>
                            <p>Mala (2)</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
            

  )
}

export default profileUser;