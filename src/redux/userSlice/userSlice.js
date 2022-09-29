import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import userApi from './../../service/userService';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
    
        const data = await userApi.register(payload);
        localStorage.setItem('user', JSON.stringify(data.user))
        console.log(data.user);
        return data.user;
    });

    export const login = createAsyncThunk(
        'user/login',
        async (payload) => {
            const data = await userApi.login(payload);
            localStorage.setItem('access_token',data.access_token)
            localStorage.setItem('user', JSON.stringify(data.user))
            console.log(data.user);
            return data.user;
        });
const initialState = {
    user:{},
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
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload
            
        }
    }
})

const {reducer} = userSlice;
export default reducer;