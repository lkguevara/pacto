import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from '@/utils/api';
// const API_URL = "http://localhost:3001/";
const API_URL = "https://few-rule-production.up.railway.app/";
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
  amountXPage : 0,
  productList: { cantidad: 0, products: [] },
  productDetail: {},
  status: "idle",
  error: null,
};

export const fetchProductsAsync = createAsyncThunk("products/fetchProducts",async (path) => {
  const response = await axios.get(`${path}`);
  const data = await response.data;
  return data;
  }
);

//conetario

export const fetchProductDetailAsync = createAsyncThunk("products/fetchProductDetail",async (id) => {
  const response = await axios.get(`product?id=${id}`);
  const data = await response.data;
  return data;
  }
);


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
    setAmountXPage: (state, action) => {
      state.amountXPage = action.payload;
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
        })

        // **** GET PRODUCT DETAIL ****
        .addCase(fetchProductDetailAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.productDetail = action.payload;
        })
        .addCase(fetchProductDetailAsync.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })

    },
});

export const { setFilters, setOrderBy, setPage, setAmountXPage, resetState } = productsSlice.actions;

export default productsSlice.reducer;
