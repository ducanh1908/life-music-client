import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "./../../service/userService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  loading: false,
  error: null,
};

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);
  localStorage.setItem("user", JSON.stringify(data.user));
  console.log(data.user);
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      state.user = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;
