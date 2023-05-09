import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import style from "../styles/Login.module.css"

import { useState } from "react"
import { GoogleButton } from 'react-google-button';
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {useAuthState} from 'react-firebase-hooks/auth';
import { useEffect } from "react"


export default function login(){

    //google firebase:
    const googleAuth = new GoogleAuthProvider();
    const [user, setUser] = useAuthState(auth)

    const loginGoogle = async () => {
        const result = await signInWithPopup(auth, googleAuth);
    };

    useEffect(() => {
        console.log(user)
    },[user])

    const [signIn,setSignIn] = useState({
        email:'',
        password:'',

    });

    const handleChange = (event)=>{
        const {name, value} = event.target;
        console.log(name,value);
        setSignIn({
            ...signIn,
            [name]:value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSignIn({
            ...signIn,
            email:'',
            password:'',
        })

    }


    return (
        <div className= {style.login}>
            <Head>
                <title>PACTO | Login</title>
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

                
                    <form className={style.form__Login} onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input onChange={(e)=> handleChange(e)} value={signIn.email}  name={"email"} type="email" placeholder="Email" />

                        <label>Contraseña:</label>
                        <input onChange={(e)=> handleChange(e)} value={signIn.password} name={"password"} type="password" placeholder="Contraseña" />

                        <button type="submit">Iniciar Sesión</button>
                        <div className={style.google}>
                            <GoogleButton type="dark" onClick={loginGoogle}/>
                            <button onClick={() => auth.signOut()}>LOGOUT</button>
                        </div>
                    </form>
                    <Link href="/forgotpass">
                        <span className={style.forgetPass}>¿Olvidaste tu contraseña?</span>
                    </Link>
              
            </div>

        </div>
    )
}

