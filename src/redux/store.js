import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice/userSlice'
import songReducer from './songSlice/songSlice'
export const store = configureStore({

    reducer:{
        user : userReducer,
        song : songReducer
    }
})