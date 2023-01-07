import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { create } from "domain";
import axiosInstance from "../../shared/axiosinstance";
import { ProductsType } from "../../types/productsType";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const jsondata: AxiosResponse<ProductsType[], ProductsType> =
      await axiosInstance.get("products");
    console.log(jsondata.data);
    return jsondata.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const initialState: ProductsType[] = [];
const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editProduct: (state, action) => {
      state.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        state.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    sortByPrice: (state, action: PayloadAction<"asc">) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.price - b.price);
      }
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      } else {
        return state;
      }
    });
  },
});
const productReducer = productSlice.reducer;
export default productReducer;
export const { addProduct } = productSlice.actions;
export const { deleteProduct } = productSlice.actions;
export const { sortByName } = productSlice.actions;
export const { sortByPrice } = productSlice.actions;
