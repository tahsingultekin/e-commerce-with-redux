import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [] };

export const getCategories = createAsyncThunk("getCategory", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data;
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
