import { createSlice } from "@reduxjs/toolkit";
import chairImg from './pexels-chairs-2181916_1280.jpg';
import largeRoomImg from './shameersrk-convention-center-3908238_1280.jpg';
import auditoriumImg from './crystal710-event-venue-1597531_1280.jpg';

export const venueSlice = createSlice({
    name: 'venue',
    initialState: [
        { image: chairImg,
            name:"Small conference room",
            capacity: 15,
            cost: 3000,
            quantity: 0,
            selected: false
        },
        {
            image: largeRoomImg,
            name:"Large conference room",
            capacity: 100,
            cost: 6500,
            quantity: 0,
            selected: false
        },
        {
            image: auditoriumImg,
            name:"Auditorium Hall (Capacity:200)",
            cost: 10000,
            capacity: 500,
            quantity: 0,
            selected: false
        }
        
    ],
    reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
}
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;