import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const carritoSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      //obtener los productos
      let shoppingCart = JSON.parse(localStorage.getItem("shopping_cart")) || [];
      
      //verificar si ya existe 
      const productOnStore = shoppingCart.find(product => product.id === action.payload.id)
      
      //verificar si la cantidad del producto agregar es diferente al que ya esta agregado en el storage
      if(productOnStore && productOnStore.amount != action.payload.amount){
        productOnStore.amount = action.payload.amount
        localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
        state.products = shoppingCart;
      }
      // no esta agregado en el local storage
      if(!productOnStore){
        shoppingCart.push(action.payload);
        localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
        state.products.push(action.payload);
      }
    },

    verifyLocalStorageProducts: (state, action) => {
      let productsLocalStorage = JSON.parse(
        localStorage.getItem("shopping_cart")
      );
      state.products = productsLocalStorage;
    },
  },
});

//enviar productos

export const sendProducts = createAsyncThunk('shoppingCart/sendProducts', async (_,{ getState }) => {
  try {
    // Obtener los productos del estado del carrito
    const products = getState().shoppingCart.products;

    const token = localStorage.getItem('user_verified');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    
    
    const response = await axios.post('/shoppingcart', products, config);

    // Enviar solicitud al servidor para agregar los productos al carrito
    // const request = await axios.post('/shoppingcart', { products, token:tokenUser});

    // Limpiar el almacenamiento local y el estado del carrito
    // localStorage.removeItem('carrito');
    return request.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error.message);
  }
});
export const { addProduct, verifyLocalStorageProducts } = carritoSlice.actions;
export default carritoSlice.reducer;
