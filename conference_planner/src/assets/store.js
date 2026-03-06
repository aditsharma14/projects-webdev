import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueslice';
import avReducer from './avslice';
import mealsReducer from './mealslice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});

export default store;