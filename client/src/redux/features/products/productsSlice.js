import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    categorias: {},
    status: [],
    price: { min: 0, max: 100}
  },
  orderBy: "default",
  page: 1,
};

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
});

//hola soy edward

export const { setFilters, setOrderBy, setPage } = productsSlice.actions;

export default productsSlice.reducer;
