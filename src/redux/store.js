import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice/userSlice';
import profileReducer from './userProfileSlice/profileSlice'
import songReducer from './songSlice/songSlice'
import playlistReducer from './playlistSlice/playlistSlice'
export const store = configureStore({
    reducer:{
        user : userReducer,
        profile:profileReducer,
        song : songReducer,
        playlist: playlistReducer
    }
})
