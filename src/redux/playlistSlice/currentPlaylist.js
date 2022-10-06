import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import playlistApi from "./../../service/playlistService"
import {imageUpload} from "../../components/UploadFile/avatarUpload";


const initialState = {
  currentPlaylists: {},
  loading: false
};


export const getPlaylistById = createAsyncThunk("/playlist/id", async(payload)=> {
  
  const data = await playlistApi.getPlaylistById(payload);
  return data;
})

export const addSongToPlaylist = createAsyncThunk("/playlist/add-song", async(payload)=> {
 const{songId,playlistId} = payload.payload
  const data = await playlistApi.addSongPlaylist(songId,playlistId);
  return data;
})

export const removeSongFromPlaylist = createAsyncThunk("/playlist/remo-song", async(payload)=> {
  // const{songId,playlistId} = payload.payload
  // const data = await playlistApi.addSongPlaylist(songId,playlistId);
  // return data;
})

export const updatePlaylist = createAsyncThunk("/playlist/id", async(payload)=> {
const {id,avatar,name,description}=payload
  let media;
  let image;
  if (avatar) {
    media = await imageUpload([avatar])
    image = media[0].url
  }

  const data = await playlistApi.updatePlaylist(id, {image, name, description});
  return data;
})

const currentPlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState,
  reducers: { 
  },
  extraReducers : {
 
    [getPlaylistById.fulfilled] : (state, action) => {
      state.playlist = action.payload
    },
    [updatePlaylist.fulfilled] : (state, action) => {
      state.playlist = action.payload
    },
    [addSongToPlaylist.fulfilled] : (state, action) => {
      state.playlist = action.payload
    }
}
});

const { reducer, actions } = currentPlaylistSlice;

export default reducer;
