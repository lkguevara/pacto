import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/products/productsSlice';
import menuReducer from './features/menu/menuSlice';
import authReducer from "./features/auth/authSlice";
import categoriesReducer from "./features/categories/categoriesSlice";

const store = configureStore({
    reducer:{
        products: productsSlice,
        menu: menuReducer,
        user:authReducer,
        categories: categoriesReducer,
    }
})

export default store;
