import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postSlice from "../slices/postSlice";

export const store = configureStore({
	reducer: {
		posts: postSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
