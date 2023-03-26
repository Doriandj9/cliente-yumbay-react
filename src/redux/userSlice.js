//logica de estado

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    username: null,
    email: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        login(state,action) {
            const {name,username,email} = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        logout(state,action) {
            const exit = action.payload;
            state.name = exit;
            state.username = exit;
            state.email = exit;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
