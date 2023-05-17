import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("getOrders", async () => {
  try {
    const response = await axios.get("/transactions");
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  orders: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state, payload) => {})
      .addCase(getOrders.fulfilled, (state, payload) => {})
      .addCase(getOrders.rejected, (state, payload) => {});
  },
});

export default transactionsSlice.reducer;