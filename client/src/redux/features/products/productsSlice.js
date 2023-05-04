import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from '@/utils/api';
const API_URL = "http://localhost:3001/";
import axios from "axios";


const initialState = {
  filters: {
    categorias: {},
    status: [],
    price: { min: 0, max: 100 },
    name:"",
  },
  orderBy: "default",
  page: 1,
  productList: { cantidad: 0, products: [] },
  status: "idle",
  error: null,
};

export const fetchProductsAsync = createAsyncThunk("products/fetchProducts",async (path) => {
  const response = await axios.get(`${API_URL}${path}`);
  const data = await response.data;
  return data;
  }
);

export const fetchAddProductsAsync = createAsyncThunk("products/addProducts",async (product)=> {
  const response = await axios.post('http://localhost:3001/product',product);
 const data = await response.data;
 return data;
})

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetState:(state,action)=>{
      state.filters =  {
        categorias: {},
        status: [],
        price: { min: 0, max: 100 },
        name:"",
      },
      state.orderBy = "default",
      state.page = 1,
      state.productList = {
        cantidad: 0,
        products: []
      },
      state.status = "idle",
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList =action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//hola soy edward

export const { setFilters, setOrderBy, setPage, resetState } = productsSlice.actions;

export default productsSlice.reducer;
