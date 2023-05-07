import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  sendCode: false,
  token: null,
  loading: false,
  error: null,
  verify:false,
};

// Async thunk para enviar los datos del usuario al backend y recibir la respuesta con el token y código de verificación
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData) => {
    console.log(userData);
    const response = await axios.post('http://localhost:3001/user', userData);
    return response.data;
  }
);

// Async thunk para enviar el código de verificación al backend y recibir la respuesta con los datos del usuario
export const verifyCode = createAsyncThunk(
    'auth/fetchUserData',
    async ({ email, code,token}) => {
      console.log(token);
      const response = await axios.get(`http://localhost:3001/verify?email=${email}&code=${Number(code)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    }
  );
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Acciones para enviar los datos del usuario y recibir el token y código de verificación
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.sendCode = true;
          state.token = action.payload.token;
          localStorage.setItem('token', action.payload.token);
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Acciones para enviar el código de verificación y recibir los datos del usuario
        .addCase(verifyCode.pending, (state) => {
          state.loading = true;
        })
        .addCase(verifyCode.fulfilled, (state, action) => {
          state.loading = false;
          state.sendCode = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.verify = true;
          localStorage.setItem('token', action.payload.token);
        })
        .addCase(verifyCode.rejected, (state, action) => {
          console.log(action);
          state.loading = false;
          state.error = action.payload;
          state.sendCode = true
        })
    },
  });
  
export default authSlice.reducer;