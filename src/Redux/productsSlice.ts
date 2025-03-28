import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAll } from "../Services/apiService";

export interface Product {
  id?: string;
  name: string;
  price: string;
}

export interface ProductsState {
  products: object;
  loading: boolean;
  error: string;
}

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.products = action.payload;
      });
  },
});

export const getAllProducts = createAsyncThunk("products/getAll", async (_, thunkApi) => {
  try {
    const response = await apiGetAll("products");
    if (!response.data) {
      throw new Error("No data found");
    }
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export default productsSlice.reducer;
