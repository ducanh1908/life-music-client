import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";
import playlistApi from "./../../service/playlistService";

const initialState = {
  playlists: [],
  playlist: {},
  loading: false,
  fetchPlaylistStatus: "idle",
  addSongToPlaylistStatus: 'idle',
};


export const uploadSong = createAsyncThunk("user/uploadSong", async (payload) => {
  const data = await userApi.uploadSong(payload);
  return data;
});

// getplay list and user
export const fetchPlaylist = createAsyncThunk("fetchPlaylist/playlist", async (payload) => {
  const data = await playlistApi.getAllPlaylistUser(payload);
  return data.playlists;
});
// get all play list
export const getAllPlaylist = createAsyncThunk(
  "/playlists",
  async (payload) => {
    const data = await playlistApi.getAllPlaylist(payload);
    return data.playlists;
  }
);
export const addToPlaylist = createAsyncThunk(
  "addToPlaylist/playlist/addsong/:songId",
  async (payload) => {
    const data = await playlistApi.addSongToPlaylist(payload);
    return data
  }
);

export const getPlaylistAndUser = createAsyncThunk("/playlists/:id", async (payload) => {
  const data = await playlistApi.getAllPlaylistUser(payload);
  return data.playlists;
});
// get all play list
export const getAllPlaylist = createAsyncThunk("/playlists", async (payload) => {
  const data = await playlistApi.getAllPlaylist(payload);
  return data.playlists;
});


// export const getPlaylistByUserId = createAsyncThunk("/playlist/userid", async (payload) => {
//   const data = await playlistApi.getPlaylistByUserId(payload);
//   return data.playlists;
// });
export const searchPlaylist = createAsyncThunk(
    "/playlist/search",
    async (payload) => {
      const res = await playlistApi.searchPlaylist(payload);
      return res
    })
const playlistSlice = createSlice({
  name: "playlist",
  initialState,

  reducers: {},
  extraReducers: {
    [createPlaylist.fulfilled]: (state, action) => {
      state.playlist = action.payload;
    },
    [fetchPlaylist.pending]: (state, action) => {
      state.fetchPlaylistStatus = 'loading';
    },
    [fetchPlaylist.fulfilled]: (state, action) => {
      state.fetchPlaylistStatus = 'success';
      state.playlist = action.payload;
      console.log('playlist action', action.payload)
    },
    [fetchPlaylist.rejected]: (state, action) => {
      state.fetchPlaylistStatus = 'false';
    },
    [getAllPlaylist.fulfilled]: (state, action) => {
      state.playlist = action.payload;
    },
    [addToPlaylist.pending]: (state, action) => {
      state.addSongToPlaylistStatus = 'loading';
    },
    [addToPlaylist.fulfilled]: (state, action) => {
      state.addSongToPlaylistStatus = 'success';
    },
    [addToPlaylist.rejected]: (state, action) => {
      state.addSongToPlaylistStatus = 'false';
    },
    [createPlaylist.fulfilled] : (state, action) => {
      state.playlists = action.payload;
    },
    [getPlaylistAndUser.fulfilled] : (state, action) => {
        state.playlists = action.payload
    },
  },

    [getAllPlaylist.fulfilled]: (state, action) => {
      state.playlist = action.payload;
    },
    // [getPlaylistByUserId.fulfilled] : (state, action) => {
    //   state.playlist = action.payload
    // },
    [searchPlaylist.fulfilled] : (state, action) => {
        state.playlists = action.payload.playlists.length>0 ? action.payload.playlists : state.playlists
    }
}
});
const { reducer, actions } = playlistSlice;

export default reducer;
