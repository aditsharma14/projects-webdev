import { createSlice } from '@reduxjs/toolkit';

export const mealSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'breakfast', cost: 50, selected: false },
    { name: 'lunch', cost: 100, selected: false },
    { name: 'dinner', cost: 150, selected: false },
    { name: 'High Tea', cost: 25, selected: false }
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
      state[action.payload].selected = !state[action.payload].selected;
    }
  }
});

export const { toggleMealSelection } = mealSlice.actions;
export default mealSlice.reducer;