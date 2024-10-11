import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.find((cartitem) => cartitem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementIteamQunity(state, action) {
      const iteamId = action.payload;
      const item = state.find((cartitem) => cartitem.id === iteamId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity(state, action) {
      const iteamId = action.payload;
      const item = state.find((cartitem) => cartitem.id === iteamId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((cartIteam) => cartIteam.id !== iteamId);
      }
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incrementIteamQunity,
  decrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
