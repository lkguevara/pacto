import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store'
import axios from "axios";
axios.defaults.baseURL = 'https://few-rule-production.up.railway.app/';

export default function App({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

//Aca se usaria el Provider para el redux Toolkit
