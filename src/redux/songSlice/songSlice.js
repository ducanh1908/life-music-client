import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import songApi from "./../../service/songService";
import searchSongApi from "../../service/searchService";
const initialState = {
  status: "idle",
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
    '/song/search/:key',
    async (data) => {
      console.log(1)
      const res = await searchSongApi.searchSong();
      console.log(res.data)
      console.log(2)
      return res.data;
} )

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
      state.status = 'loading'
    },
    [getUploadedSongs.fulfilled] : (state, action) => {
      state.status = 'success';
      state.uploadSongs = action.payload
    },
    [getUploadedSongs.rejected] : (state, action) => {
      state.status = 'false'
    },
    [getSongsByPlaylistId.fulfilled] : (state, action) => {
      state.songs = action.payload;
    },
    [searchSong.fulfilled] : (state, action) => {
      state.search = action.payload;
      // state.loading = false;
    }
  }
//   extraReducers : (builder) => {
//     builder.addCase(fetchSong.fulfilled,(state, action) => {
//       state.songs = action.payload;
//     })
//         .addCase(searchSongApi.fulfilled,(state, action) => {
//           state.songs = state.songs.filter((song) =>{
//
//           })
//         })
//   }
});

const { reducer, actions } = songSlice;
export const { upSong } = actions;
export default reducer;
