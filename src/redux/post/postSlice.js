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
        },
        deletePost: (state, action) => {
            const newPosts = state.posts.filter(post => post.id !== action.payload);
            state.posts = newPosts;
            localStorage.setItem("posts",JSON.stringify(newPosts));
        },
        detailCheck: (state, action) =>  {
            const id = action.payload.id;
            const post = state.posts.find(item => id === item.id);
            post.detailCheck = !post.detailCheck;
           
        },
        commentCheck: (state, action) =>  {
            const id = action.payload;
            const post = state.posts.find(item => id === item.id);
            post.commentCheck = !post.commentCheck;
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        addComment: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            post.comments.push(action.payload);
            localStorage.setItem("posts",JSON.stringify(state.posts));
        },
        likeCheck: (state, action ) => {
            const post = state.posts.find(post => post.id === action.payload.id);
            post.likeCheck = !post.likeCheck
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        likePost: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.id);
            if(post.likeCheck) {
                state.posts.map(post => post.id === action.payload.id ?
                    post.likeCount = post.likeCount + 1 : post.likeCount = 0)  
            }else{
                state.posts.map(post => post.id === action.payload.id ?
                    post.likeCount = post.likeCount - 1 : post.likeCount = 0)
            }
            localStorage.setItem("posts", JSON.stringify(state.posts));
            
        }

    }
});

export default postSlice.reducer;
export const {createPost, deletePost, detailCheck, commentCheck, addComment, likeCheck, likePost} = postSlice.actions
