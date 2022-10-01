import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";


const initialState = {
  songs: [],
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
  
});

const { reducer, actions } = songSlice;
export const { upSong } = actions;
export default reducer;
