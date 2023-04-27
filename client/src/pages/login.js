import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import style from "../styles/Login.module.css"


export default function login({title}){

    return (
        <div className= {style.login}>
            <Head>
                <title>LOGIN {title? `| ${title}` : ""}</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>

            <div className= {style.containerLogin}>
                <div>
                    <Link href="/">
                        <Image className= {style.logo} priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
                    </Link>
                    <h3>¡Hola! Para seguir, ingresa tu email y contraseña</h3>
                    <div className={style.sign}>
                        <p>¿Nuevo usuario?</p>
                        <Link href="/signup">
                            <span>Registrate</span>
                        </Link>
                    </div>
                </div>

                
                    <form className={style.form__Login}>
                        <label>Email:</label>
                        <input type="email" placeholder="Email" />

                        <label>Contraseña:</label>
                        <input type="password" placeholder="Contraseña" />

                        <button>Iniciar Sesión</button>
                    </form>
                    <span className={style.forgetPass}>¿Olvidaste tu contraseña?</span>
              
            </div>

        </div>
    )
}