import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import songApi from "./../../service/songService"

const initialState = {
  songs: [],
  loading: false
};

export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  return data;
});

export const fetchSong = createAsyncThunk("/songs", async (payload) => {

  const data = await songApi.getSong();
  return data.songs;
});
export const fetchSongById = createAsyncThunk("song/id", async (payload) => {

  const data = await songApi.getSongById(payload)
  return data;
});
const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    upSong(state, action) {
      state.songs.push(action.payload)
    },
  },
  extraReducers : {
    [fetchSong.fulfilled] : (state, action) => {
      state.songs = action.payload;
    },
    [fetchSongById.fulfilled] : (state, action) => {
      state.songs = action.payload;
    }
  }
});

const { reducer, actions } = songSlice;
export const { upSong } = actions;
export default reducer;
