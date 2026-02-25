import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cartItems: [],
};
const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemtoCart(state, action) {
      const existingitem = state.cartItems.find(item => item.id == action.payload.id);
      if (existingitem) {
        existingitem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeItemfromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    IncreaseItemquantity(state, action) {
      // payload is the item ID directly, consistent with other reducers
      const itemtoIncrease = state.cartItems.find(item => item.id == action.payload);
      if (itemtoIncrease) {
        itemtoIncrease.quantity += 1;
      }
    },
    ItemsQuantitytoDecrease(state, action) {
      const itemToDecrease = state.cartItems.find(item => item.id == action.payload);
      if (itemToDecrease && itemToDecrease.quantity && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    }
  }
});
export const {
  addItemtoCart,
  removeItemfromCart,
  IncreaseItemquantity,
  ItemsQuantitytoDecrease,
  clearCart
} = cartslice.actions;
export default cartslice.reducer; 