import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    loading: false,
    error: null,

}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
            registerSuccess: (state, action) => {
                state.user.push(action.payload);
            }

    }
})

export const {registerSuccess} = userSlice.actions;
export default userSlice.reducer;