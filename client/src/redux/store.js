import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/products/productsSlice';
import menuReducer from './features/menu/menuSlice';
import authReducer from "./features/auth/authSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import shoppingCartReducer from "./features/carrito/carrito";
import paymentReducer from "./features/payment/payment";

const store = configureStore({
    reducer:{
        shoppingCart: shoppingCartReducer,
        payment: paymentReducer,
        products: productsSlice,
        menu: menuReducer,
        user:authReducer,
        categories: categoriesReducer,
        locations: departmentsSlice
    }
})

export default store;
