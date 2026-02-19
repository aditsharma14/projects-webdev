import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './assets/cartslice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
