import { createSlice } from "@reduxjs/toolkit";

const defaultCurrentUser = {
    email:  "mucahittasan00@gmail.com",
    name: "Mucahit Tasan",
    password: "123456",
    photo: "https://avatars.githubusercontent.com/u/88967412?v=4",
    username: "tasanmucahit"
}

export const userSlice = createSlice({
    name: "users",
    defaultCurrentUser: {

    },
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
        currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem("currentUser")) : defaultCurrentUser,
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
            localStorage.setItem("currentUser", {});
        }

    }
});

export default userSlice.reducer;   
export const { createUser, loginUser, logoutUser } = userSlice.actions;
