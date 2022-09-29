import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import userApi from './../../service/userService';

export const register = createAsyncThunk(
    '/register',
    async (payload) => {
       try {
        const data = await userApi.register(payload);
        localStorage.setItem('user', JSON.stringify(data.user))
        return data.user;
       } catch (error) {
        console.log(error)
       } 
    }
  )
const initialState = {
    user:[],
    loading: false,
    error: null,
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {       
    },
    extraReducers : {
        [register.fulfilled]: (state, action) => {
            state.user = action.payload
        }
    }
})

const {reducer} = userSlice;
export default reducer;