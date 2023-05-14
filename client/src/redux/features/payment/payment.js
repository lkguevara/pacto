// paymentSlice.js
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const payment = createAsyncThunk(
    "payment",
    async (_, { getState,dispatch }) => {
      try {
        const token = localStorage.getItem("user_verified");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
  
  
        let productsLocalStorage = JSON.parse(localStorage.getItem("shopping_cart"))
        const response = await axios.post("/payment", productsLocalStorage, config);
        const paymentUrl = response.data;

        dispatch(setPaymentUrl(paymentUrl));

        dispatch(setStatus('succeeded'));
  
  
      } catch (error) {
        console.error(error);
        dispatch(setError(error.message));
        dispatch(setStatus('failed'));
       
      }
    }
  );
  


const initialState = {
  paymentUrl: '',
  status: 'idle',
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentUrl: (state, action) => {
      state.paymentUrl = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPaymentUrl, setStatus, setError } = paymentSlice.actions;

export default paymentSlice.reducer;
