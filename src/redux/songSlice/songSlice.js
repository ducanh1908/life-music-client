import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";


const initialState = {
  status: "idle",
  songs: [],
  playlist: [{}],
  msg: null,
};

export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  console.log('payload', payload);
  return data;
});

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    upSong(state, action) {
    state.songs.push(action.payload)
      console.log('songs', state.songs)
    },
  },
  extraReducers: {
    [uploadSong.pending]: (state, action) => {
      state.status = "loading";
    },
    [uploadSong.fulfilled]: (state, action) => {
      state.status = "success";
      state.msg = action.payload.msg;
      state.playlist = action.payload.songInfo
      console.log(action.payload);
    },
    [uploadSong.rejected]: (state, action) => {
      state.status = "failed";
    },
  }
});

const { reducer, actions } = songSlice;
export const { upSong } = actions;
export default reducer;
