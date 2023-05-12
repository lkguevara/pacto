import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/router";
import { registerUser, verifyCode } from "@/redux/features/auth/authSlice";
import { sendCode } from "@/redux/features/auth/authSlice";

export default function login() {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user)
  const navigate = useRouter();
  

  useEffect(() => {
    if (userState.verify){
      navigate.push('/');
    }
    if(typeof window !== 'undefined' && localStorage.getItem("user_unverified")){

      dispatch(sendCode())
    }
    
  }, [userState.verify])

  //User State
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname:"",
    lastname:"",
    address:"",
    phone:"",
    code:"",
    // confirmarPass: "",
  });

  //Code State
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSignup({
    //   ...user,
    //   email: "",
    //   password: "",
    //   email: "",
    //   password: "",
    //   firstname:"",
    //   lastname:"",
    //   address:"",
    //   phone:"",
    //   // confirmarPass: "",
    // });
    dispatch(registerUser(user));

  };

  const handleSubmitCode = (event) => {
    event.preventDefault();
    dispatch(verifyCode({email:user.email,code:user.code, token:localStorage.getItem("user_unverified")}));
  };





  return (
    <div>
      <Head>
        <title>PACTO | Registro</title>
        <meta name="description" content="PACTO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pacto-logo.png" />
      </Head>
  
      <div className={style.login}>
        {userState.sendCode ? (
          <div className={style.containerLogin}>
            <form className={style.form__Login} onSubmit={handleSubmit}>
              <label>Código:</label>
              <input
                value={user.code}
                name={"code"}
                type="text"
                placeholder="Ingresa el código"
                onChange={(e) => handleChange(e)}
              />
  
              <button type="submit" onClick={handleSubmitCode}>Enviar</button>
            </form>
          </div>
        ) : (
          <div className={style.containerLogin}>
            <div>
              <Link href="/">
                <Image
                  className={style.logo}
                  priority
                  src="/pacto-logo.png"
                  alt="logo"
                  width="140"
                  height="140"
                />
              </Link>
              <h3>Crea tu cuenta</h3>
              <div className={style.sign}>
                <p>¿Ya tienes una cuenta?</p>
                <Link href="/login">
                  <span>Inicia Sesión</span>
                </Link>
              </div>
            </div>
  
            <form className={style.form__Login} onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                value={user.email}
                name={"email"}
                type="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
              <label>Nombre:</label>
              <input
                value={user.firstname}
                name={"firstname"}
                type="text"
                placeholder="Nombre"
                onChange={(e) => handleChange(e)}
              />
              <label>Apellido:</label>
              <input
                value={user.lastname}
                name={"lastname"}
                type="text"
                placeholder="Apellido"
                onChange={(e) => handleChange(e)}
              />
              <label>Dirección:</label>
              <input
                value={user.address}
                name={"address"}
                type="text"
                placeholder="Dirección"
                onChange={(e) => handleChange(e)}
              />
  
              <label>Teléfono:</label>
              <input
                value={user.phone}
                name={"phone"}
                type="number"
                placeholder="Ingresa tu teléfono"
                onChange={(e) => handleChange(e)}
              />
              <label>Contraseña:</label>
              <input
                value={user.password}
                name={"password"}
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(e) => handleChange(e)}
              />
  
              <button type="submit">Registrate</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
