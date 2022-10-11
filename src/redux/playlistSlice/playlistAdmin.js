import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import playlistApi from "./../../service/playlistService";

const initialState = {
  playlistAdmin: [],
  playlistRandom:[],
  loading: false
};

// get all play list
export const getAllPlaylist = createAsyncThunk("/playlists", async (payload) => {
  const data = await playlistApi.getAllPlaylist(payload);
  return data.playlists;
});
export const getRandomPlaylist = createAsyncThunk("/playlist-random", async (payload) => {
 const data = await playlistApi.getRandomPlaylist(payload);

 return data;
});

const playlistAdminSlice = createSlice({
  name: "playlistAdmin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPlaylist.fulfilled]: (state, action) => {
      state.playlistAdmin = action.payload;
    },
    [getRandomPlaylist.fulfilled]: (state, action) => {
      state.playlistAdmin = action.payload;
    },
  },
  extraReducers : {
    
  [getAllPlaylist.fulfilled] : (state, action) => { 

    state.playlistAdmin = action.payload;
  },
[getRandomPlaylist.fulfilled] : (state, action)=> {
  state.playlistRandom = action.payload;                                     
}

}
});

const { reducer, actions } = playlistAdminSlice;

export default reducer;
