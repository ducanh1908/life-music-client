import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import playlistApi from "./../../service/playlistService"


const initialState = {
  playlistAdmin: [],
  loading: false
};

// get all play list
export const getAllPlaylist = createAsyncThunk("/playlists", async (payload) => {
  const data = await playlistApi.getAllPlaylist(payload);
  return data.playlists;
});

const playlistAdminSlice = createSlice({
  name: "playlistAdmin",
  initialState,
  reducers: { 
  },
  extraReducers : {
    
  [getAllPlaylist.fulfilled] : (state, action) => { 

    state.playlistAdmin = action.payload;
  },



}
});

const { reducer, actions } = playlistAdminSlice;

export default reducer;
