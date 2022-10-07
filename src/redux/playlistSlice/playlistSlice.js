import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import playlistApi from "./../../service/playlistService"


const initialState = {
  playlists: [],
  loading: false
};


export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  return data;
});
export const createPlaylist = createAsyncThunk(`/playlist`, async (payload) => {
  
    const data = await playlistApi.createPlaylist(payload);
    return data.playlists;
  });

export const getPlaylistAndUser = createAsyncThunk("/playlists/:id", async (payload) => {
  const data = await playlistApi.getAllPlaylistUser(payload);
 
  return data.playlists;
});



const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: { 
  },
  extraReducers : {
    [createPlaylist.fulfilled] : (state, action) => {
      state.playlists = action.payload;
    },
    [getPlaylistAndUser.fulfilled] : (state, action) => {
        state.playlists = action.payload
  },

}
});

const { reducer, actions } = playlistSlice;

export default reducer;
