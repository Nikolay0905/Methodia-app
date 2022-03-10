import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPost as fetchPostApi } from "../api/postApi";
import { AppThunk } from "../app/store";

export interface Post {
	image: Blob;
	title: string;
	excerpt: string;
	category: string;
}

const initialState: Post[] = [];

export const fetchPost = (): AppThunk<Promise<Post[]>> => (dispatch, _) => {
	return fetchPostApi()
		.then((posts: Post[]) => {
			dispatch(setPosts(posts));
		})
		.catch((error: Error) => {
			alert("Error fetching posts !");
			console.log(error.message);
		});
};

export const postSlice = createSlice({
	name: "postSlice",
	initialState,
	reducers: {
		setPosts: (state, action: PayloadAction<Post[]>) => {
			action.payload.map((post: Post) => state.push(post));
		},
	},
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
