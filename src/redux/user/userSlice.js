import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
        currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem("currentUser")) : null,
    },
    reducers: {
        createUser: (state, action) => {
            state.users.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        loginUser: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser))
        },
        logoutUser: (state, action) => {
            state.currentUser = {}
            localStorage.setItem("currentUser", null);
        }

    }
});

export default userSlice.reducer;
export const { createUser, loginUser, logoutUser } = userSlice.actions;
