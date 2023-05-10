import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    products: []
  },
  reducers: {
    addProducto: (state, action) => {
      state.products.push(action.payload);
    }
  }
});


export const agregarProductoAsync = (producto) => (dispatch) => {
  try {
    // Guardar el producto en el almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Despachar acción para actualizar el estado del carrito en Redux
    dispatch(agregarProducto(producto));
  } catch (error) {
    console.error(error);
  }
};

export const enviarProductos = () => async (dispatch, getState) => {
  try {
    // Obtener los productos del estado del carrito
    const productos = getState().carrito.productos;

    // Enviar solicitud al servidor para agregar los productos al carrito
    const respuesta = await axios.post('/api/carrito', { productos });

    // Limpiar el almacenamiento local y el estado del carrito
    localStorage.removeItem('carrito');
    dispatch({ type: 'RESET_CARRITO' });
  } catch (error) {
    console.error(error);
  }
};

export const { agregarProducto } = carritoSlice.actions;
export default carritoSlice.reducer;