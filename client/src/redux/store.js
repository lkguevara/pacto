import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './features/products/productsSlice';
import menuReducer from './features/menu/menuSlice';

const store = configureStore({
    reducer:{
        products: productsReducer,
        menu: menuReducer,
    }
})

export default store;
