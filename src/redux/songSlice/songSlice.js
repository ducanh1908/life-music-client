import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import songApi from "./../../service/songService";
const initialState = {
  status: "idle",
  getUploadSongsStatus: "idle",
  deleteSongStatus: "idle",
  songs: [],
  loading: false,
  search: [],
  uploadSongs: []
};
export const getUploadedSongs = createAsyncThunk("user/getUploadedSongs", async (payload) => {
  const data = await songApi.uploadedSongs(payload);
  return data;
});

export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  return data;
});

export const fetchSong = createAsyncThunk("/songs", async (payload) => {

  const data = await songApi.getSong();
  return data.songs;
});
export const getSongsByPlaylistId = createAsyncThunk("/songs/id", async (payload) => {
  const data = await songApi.getSongsByPlaylistId(payload);
  return data.songs;
});
export const searchSong = createAsyncThunk(
    '/song/search',
    async (term) => {
      const res = await songApi.searchSong(term);
      console.log(res)
      return res;
} )

export const deleteSongById = createAsyncThunk('song/deleteSong', (payload) => {
  const data = songApi.deleteSong(payload);
  return data
});

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    loading(state, action) {
      state.status = action.payload
    },
    changeStatus(state, action) {
      state.status = action.payload
    },
    changeDeleteSongStatus (state, action) {
      state.deleteSongStatus = action.payload
    },
    upSong(state, action) {
      state.songs.push(action.payload)
    },
  },
  extraReducers : {
    [fetchSong.fulfilled] : (state, action) => {
      state.songs = action.payload;
    },
    [uploadSong.pending] : (state, action) => {
      state.status = 'loading'
    },
    [uploadSong.fulfilled] : (state, action) => {
      state.status = 'success';
    },
    [uploadSong.rejected] : (state, action) => {
      state.status = 'false'
    },
    [getUploadedSongs.pending] : (state, action) => {
      state.getUploadSongsStatus = 'loading';
    },
    [getUploadedSongs.fulfilled] : (state, action) => {
      state.getUploadSongsStatus = 'success';
      state.uploadSongs = action.payload
    },
    [getUploadedSongs.rejected] : (state, action) => {
      state.getUploadSongsStatus = 'false';
    },
    [getSongsByPlaylistId.fulfilled] : (state, action) => {
      state.getUploadSongsStatus = 'success';
      state.songs = action.payload;
    },
    [searchSong.fulfilled] : (state, action) => {
      state.search = action.payload;
      state.songs = action.payload.length >0 ? action.payload : state.songs;
    }
    },
    [deleteSongById.fulfilled] : (state, action) => {
      state.deleteSongStatus = 'success';
    },
    [deleteSongById.rejected] : (state, action) => {
      state.deleteSongStatus = 'false'
    },
});

const { reducer, actions } = songSlice;
export const {upSong, loading, changeStatus, changeDeleteSongStatus } = actions;
export default reducer;
