import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
  }

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        //actions
    }
})

//actions
//export const { } = productsSlice.actions
export default productsSlice.reducer
