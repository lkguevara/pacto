import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {},
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
