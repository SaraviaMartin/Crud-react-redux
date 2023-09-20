import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "peter@gmail.com",
		github: "peterdoe",
	},
	{
		id: "2",
		name: "Papua Ioe",
		email: "papua@gmail.com",
		github: "papua ioe",
	},
	{
		id: "3",
		name: "Paula Susan",
		email: "paula@gmail.com",
		github: "paula",
	},
	{
		id: "4",
		name: "Sharon sanchez",
		email: "sharon@gmail.com",
		github: "midudev",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
