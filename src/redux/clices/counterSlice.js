import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counter', 
    initialState:{
        counterData:9,
    },
    reducers:{
        plus:(state)=>{
            state.counterData+=1
        },
        minus:(state)=>{
            state.counterData-=1
        },
        reset: (state) => {
            state.counterData = 0
        }
    },
    // extraReducers:'',
});

export default counterSlice.reducer;
export const {plus, minus, reset}=counterSlice.actions;