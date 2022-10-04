import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import songApi from "./../../service/songService";
import searchSongApi from "../../service/searchService";

const initialState = {
  songs: [],
  loading: false,
  search: []
};

export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  return data;
});

export const fetchSong = createAsyncThunk("/songs", async (payload) => {
  const data = await songApi.getSong();
  return data.songs;

});
export const searchSong = createAsyncThunk('/song/search/:key', async (payload) => {
  let data = await searchSongApi.searchSong();
  return data;
} )

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    upSong(state, action) {
      state.songs.push(action.payload)
    },
    // handleSearch(state, action) {
    //   state.search = [];
    //   state.search.push(action.payload);
    // }
  },
  extraReducers : {
    [fetchSong.fulfilled] : (state, action) => {
      state.songs = action.payload;
    },
    [searchSong.fulfilled] : (state, action) => {
      state.search = action.payload;
      state.loading = false;
    }
  }
});


const { reducer, actions } = songSlice;
export const { upSong } = actions;
export default reducer;
