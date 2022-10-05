import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice/userSlice';
import profileReducer from './userProfileSlice/profileSlice';
import songReducer from './songSlice/songSlice';
import playlistReducer from './playlistSlice/playlistSlice';
import cateReducer from './cateSlice/cateSlice'
import currentPlaylistReducer from './playlistSlice/currentPlaylist'
import currentSongReducer from './songSlice/currentSong'

export const store = configureStore({
    reducer:{
        user : userReducer,
        profile:profileReducer,
        song : songReducer,
        playlist: playlistReducer,
        currentPlaylist: currentPlaylistReducer,
        currentSong: currentSongReducer
,
        cate : cateReducer
    }
})
