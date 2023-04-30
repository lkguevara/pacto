import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categorias: {},
    status: [],
    price: { min: 0, max: 100 },
  },
  orderBy: "default",
  page: 1,
  productList: [],
  status: "idle",
  error: null,
};

export const fetchProductsAsync = createAsyncThunk("products/fetchProducts",
  async (filters, orderBy, page) => {
    const data = await fetchProducts(filters, orderBy, page);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//hola soy edward

export const { setFilters, setOrderBy, setPage } = productsSlice.actions;

export default productsSlice.reducer;
