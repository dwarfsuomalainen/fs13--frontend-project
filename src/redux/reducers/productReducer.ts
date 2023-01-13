import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios, { AxiosResponse } from "axios";
import { stat } from "fs";

import axiosInstance from "../../shared/axiosinstance";
import { CreateProduct, ProductsType } from "../../types/productsType";

export type ProductSliceType = {
  error: boolean;
  loading: boolean;
  products: ProductsType;
  productsRef: ProductsType;
};
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const jsondata: AxiosResponse<ProductsType[], ProductsType> =
      await axiosInstance.get("products");
    return jsondata.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: CreateProduct) => {
    try {
      const jsondata: AxiosResponse<ProductsType, ProductsType> =
        await axiosInstance.post("products", product);
      return jsondata.data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id: number) => {
    try {
      const jsondata: AxiosResponse<ProductsType, ProductsType> =
        await axiosInstance.get(`products/${id}`);
      return jsondata.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "editProduct",
  async (id: string) => {
    try {
      const jsondata: AxiosResponse<ProductsType[], ProductsType> =
        await axiosInstance.get(`products/${id}`);
      return jsondata.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

const initialState: ProductsType[] = [];
const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
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
    onSearchFilter: (state, action) => {
      return {
        ...state,
        products: state.filter((product) => {
          if (
            product.title.toLowerCase().includes(action.payload.toLowerCase())
          ) {
            return product;
          }
        }),
      };
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      } else {
        return action.payload;
      }
    });
    build.addCase(fetchProducts.rejected, (state, action) => {
      console.log("fetching error");
      return state;
    });
    build.addCase(fetchProducts.pending, (state, action) => {
      console.log("data is loading");
      return state;
    });
    build.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.push(action.payload);
      } else {
        console.log("product added");
        return state;
      }
    });
    /*build.addCase(deleteProduct.fulfilled, (state, action)=>{
       if(action.payload) {
        state.splice()
       }
    })*/
  },
});
const productReducer = productSlice.reducer;
export default productReducer;
export const { addProduct } = productSlice.actions;
export const { sortByName } = productSlice.actions;
export const { sortByPrice } = productSlice.actions;
