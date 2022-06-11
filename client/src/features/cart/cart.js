import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import db from "../../services/db_query";
import { editProduct } from "../products/products";

const initialState = [];

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const data = await db.getCartItems();
    return data;
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item) => {
    const data = await db.addItemToCart(item);
    return data;
  }
);

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async () => {
    const data = await db.checkoutCart();
    return data;
  }
);

const updateCartItem = (updatedProduct, cartItem) => {
  const cartItemCopy = JSON.parse(JSON.stringify(cartItem));
  cartItemCopy.title = updatedProduct.title;
  cartItemCopy.price = updatedProduct.price;
  return cartItemCopy;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const id = action.payload.item._id;
      const tempCart = state.filter(item => item._id !== id)
      return [...tempCart, action.payload.item]
    });
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      return [];
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;
      const modifiedItems = state.map(item => {
        if (item.productId === updatedProduct._id) {
          return updateCartItem(updatedProduct, item);
        }
        return item;
      });
      return modifiedItems;
    })
  }
});

export default cartSlice.reducer;