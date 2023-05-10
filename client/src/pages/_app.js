import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store'
import axios from "axios";
import { useEffect } from 'react';
import { autoLoginUser,verifyCode } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/router';
// axios.defaults.baseURL = 'https://few-rule-production.up.railway.app/';
axios.defaults.baseURL = 'http://localhost:3001';
export default function App({ Component, pageProps }) {

     const navigate = useRouter();

     useEffect(() => {
      async function fetchData() {
        if (typeof window !== 'undefined') {
          const user_verified_token = localStorage.getItem("user_verified");
          const user_unverified_token = localStorage.getItem("user_unverified");
     
          if (user_verified_token){
           await store.dispatch(autoLoginUser(user_verified_token))
           if(navigate.pathname === '/login') navigate.push('/')
          }
          
          if(user_unverified_token){
              await store.dispatch(verifyCode({token  :user_unverified_token}))
          
              navigate.push('/signup')
              
          }
        }
      }
    
      fetchData();
    }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

//Aca se usaria el Provider para el redux Toolkit
