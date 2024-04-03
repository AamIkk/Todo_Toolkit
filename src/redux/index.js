import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./clices/counterSlice";
import todoReducer from "./clices/todoReducer";

const store=configureStore({
    reducer:{
        counter:counterSlice,
        todo: todoReducer,
    }
});

export default store;