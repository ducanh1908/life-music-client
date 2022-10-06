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
    return data.playlist;
  });
// get playlist and user 
export const fetchPlaylist = createAsyncThunk("/playlists/UserId", async (payload) => {
  const data = await playlistApi.getAllPlaylistUser(payload);
  console.log(data.playlists)
  return data.playlist;
});
// get all play list


const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: { 
  },
  extraReducers : {
    [createPlaylist.fulfilled] : (state, action) => {
      state.playlists = action.payload;
    },
    [fetchPlaylist.fulfilled] : (state, action) => {
        state.playlists = action.payload
  },
  
}
});

const { reducer, actions } = playlistSlice;

export default reducer;
