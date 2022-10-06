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
// getplay list and user 
export const fetchPlaylist = createAsyncThunk("/playlist", async (payload) => {
 
  const data = await playlistApi.getAllPlaylistUser(payload);
  return data.playlists;
});
// get all play list
export const getAllPlaylist = createAsyncThunk("/playlists", async (payload) => {
  const data = await playlistApi.getAllPlaylist(payload);
  return data.playlists;
});



const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: { 
  },
  extraReducers : {
    [createPlaylist.fulfilled] : (state, action) => {
      state.playlist = action.payload;
    },
    [fetchPlaylist.fulfilled] : (state, action) => {
        state.playlist = action.payload
  },
  [getAllPlaylist.fulfilled] : (state, action) => { 

    state.playlist = action.payload;
  }

}
});

const { reducer, actions } = playlistSlice;

export default reducer;
