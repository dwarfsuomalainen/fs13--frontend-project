import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";
import { ProductsType } from "../../types/productsType";

const initialState: ProductsType[] = [];
const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
        return state.filter(item => item.id !== action.payload)
    },
  },
});
const productReducer = productSlice.reducer;
export default productReducer;
export const { addProduct } = productSlice.actions;
export const{deleteProduct} = productSlice.actions
