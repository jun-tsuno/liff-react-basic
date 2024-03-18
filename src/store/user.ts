import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	isLoggedIn: boolean;
	username: string | null;
	image: string | undefined;
	accessToken: string | null;
}

const initialState: UserState = {
	isLoggedIn: false,
	username: null,
	image: undefined,
	accessToken: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (
			state,
			action: PayloadAction<{
				username: string | null;
				isLoggedIn: boolean;
				image: string | undefined;
				accessToken: string | null;
			}>
		) => {
			state.isLoggedIn = action.payload.isLoggedIn;
			state.username = action.payload.username;
			state.image = action.payload.image;
			state.accessToken = action.payload.accessToken;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
