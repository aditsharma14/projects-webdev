import { createSlice } from "@reduxjs/toolkit";
import micImg from './lograstudio-public-speaking-3926344_1280.jpg';
import whiteboardImg from './mnplatypus-whiteboard-2903269_1920.png';
import chairImg from './pexels-chairs-2181916_1280.jpg';
import speakersImg from './squirrel_photos-speakers-4109274_1280.jpg';
import signageImg from './geralt-signpost-235079_1920.jpg';
import laptopImg from './startupstockphotos-laptops-593296_1280.jpg';

export const avSlice = createSlice({
    name: 'av',
    initialState: [
        {image: micImg,
            name:"Microphone",
            cost: 100,
            quantity: 0,
            selected: false
        },
        {
            image: whiteboardImg,
            name:"Whiteboard",
            cost: 200,
            quantity: 0,
            selected: false
        },
        {
            image: chairImg,
            name:"Chairs",
            cost: 300,
            quantity: 0,
            selected: false
        },
        {
            image: speakersImg,
            name:"Speakers",
            cost: 400,
            quantity: 0,
            selected: false
        },
        {
            image: signageImg,
            name:"Signange",
            cost: 500,
            quantity: 0,
            selected: false
        },
        {
            image: laptopImg,
            name:"Laptops",
            cost: 600,
            quantity: 0,
            selected: false
        }
    ],
    reducers: {
        incrementAvQuantity:(state,action)=>{
            const item=state[action.payload];
            if(item){
                item.quantity++;
            }
        },
        decrementAvQuantity:(state,action)=>{
            const item=state[action.payload];
            if(item && item.quantity>0){
                item.quantity--;
            }
        }
    }
})
export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;
