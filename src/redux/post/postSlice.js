import { createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
        isLoading: false,
        error: null,
    },
    reducers: {
        createPost: (state, action) => {
            state.posts.push(action.payload);
            localStorage.setItem("posts",JSON.stringify(state.posts))
        }
    }
});

export default postSlice.reducer;
export const {createPost} = postSlice.actions
