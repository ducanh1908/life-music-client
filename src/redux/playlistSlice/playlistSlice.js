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

export const fetchPlaylist = createAsyncThunk("/playlists", async (payload) => {
  const data = await playlistApi.getAllPlaylist();
  return data.playlists;
});

export const getPlaylistByUserId = createAsyncThunk("/playlist/userid", async (payload) => {
  const data = await playlistApi.getPlaylistByUserId(payload);
  return data.playlists;
});
export const searchPlaylist = createAsyncThunk(
    "/playlist/search",
    async (payload) => {
      const res = await playlistApi.searchPlaylist(payload);
      return res
    })
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
    [getPlaylistByUserId.fulfilled] : (state, action) => {
      state.playlist = action.payload
    },
    [searchPlaylist.fulfilled] : (state, action) => {
        state.playlists = action.payload.playlists.length>0 ? action.payload.playlists : state.playlists
        console.log(state.playlists);
    }
}
});

const { reducer, actions } = playlistSlice;

export default reducer;
