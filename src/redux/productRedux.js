import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE

    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },

    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      // Set isFetching to false since the operation is complete
      state.isFetching = false;

      // Find the index of the product with the matching _id in the products array
      const productIndex = state.products.findIndex(
        (item) => item._id === action.payload.id
      );

      // Use the index to replace the old product with the updated product
      // This is done by assigning the new product (action.payload.product) to the products array at the specified index
      state.products[productIndex] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD NEW PRODUCT

    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;

// getProductStart, getProductSuccess, getProductFailure: These reducers handle the state changes for fetching products. getProductStart sets isFetching to true, indicating that a request is in progress. getProductSuccess updates the state with the fetched products and sets isFetching to false.
