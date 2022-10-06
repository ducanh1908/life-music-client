import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import playlistApi from "./../../service/playlistService"


const initialState = {
  currentPlaylists: {},
  loading: false
};


export const getPlaylistById = createAsyncThunk("/playlist/id", async(payload)=> {
  
  const data = await playlistApi.getPlaylistById(payload);
  return data;
})

export const getSongToPlaylist = createAsyncThunk("/songToplaylis/", async (payload) => {
  const data = await playlistApi.getSongToPlaylist(payload);

  return data.data.songs
  
  })
const currentPlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState,
  reducers: { 
  },
  extraReducers : {
 
    [getPlaylistById.fulfilled] : (state, action) => {
      state.playlist = action.payload
    },  [getSongToPlaylist.fulfilled] : (state, action) => { 

      state.playlistAdmin = action.payload;
    },
}
});

const { reducer, actions } = currentPlaylistSlice;

export default reducer;
