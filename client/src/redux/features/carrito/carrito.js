import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      let shoppingCart =
      JSON.parse(localStorage.getItem("shopping_cart")) || [];

      shoppingCart.push(action.payload);

      localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));

      state.products.push(action.payload);
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
export const enviarProductos = () => async (dispatch, getState) => {
  try {
    // Obtener los productos del estado del carrito
    const productos = getState().carrito.productos;

    // Enviar solicitud al servidor para agregar los productos al carrito
    const respuesta = await axios.post("/api/carrito", { productos });

    // Limpiar el almacenamiento local y el estado del carrito
    localStorage.removeItem("carrito");
    dispatch({ type: "RESET_CARRITO" });
  } catch (error) {
    console.error(error);
  }
};

export const { addProduct, verifyLocalStorageProducts } = carritoSlice.actions;
export default carritoSlice.reducer;
