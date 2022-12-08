import { toast } from "react-toastify"
import {
	addUserToLS,
	getUserFromLS,
	removeUserFromLS,
} from "../../../utils/localStorage"
import {
	loginUserThunk,
	registerUserThunk,
	updateUserThunk,
} from "./userThunks"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thunkAPI) => {
		return registerUserThunk("/auth/register", user, thunkAPI)
	}
)
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thunkAPI) => {
		return loginUserThunk("/auth/login", user, thunkAPI)
	}
)

const testUser = {
	email: "testUser@test.com",
	password: "secret",
}
export const loginTestUser = createAsyncThunk(
	"user/loginUser",
	async (_, thunkAPI) => {
		return loginUserThunk("/auth/login", testUser, thunkAPI)
	}
)

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkAPI) => {
		return updateUserThunk("/auth/updateUser", user, thunkAPI)
	}
)

const initialState = {
	isLoading: false,
	user: getUserFromLS(),
}
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		removeUser(state) {
			state.user = {}
			removeUserFromLS()
			console.log("setting to null")
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state) => {
			state.isLoading = true
			toast.warning("loading")
		})
		builder.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload
			toast.success(`welcome ${payload.email}`)
			addUserToLS(payload)
		})
		builder.addCase(registerUser.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(`Error: ${payload}`)
		})

		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true
			toast.warning("loading")
		})
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload
			toast.success(`welcome back ${payload.email}`)
			addUserToLS(payload)
		})
		builder.addCase(loginUser.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(`Error: ${payload}`)
		})

		builder.addCase(updateUser.pending, (state) => {
			state.isLoading = true
			toast.warning("loading")
		})
		builder.addCase(updateUser.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.user = payload
			toast.success(`all is up to date, ${payload.name}!`)
			addUserToLS(payload)
		})
		builder.addCase(updateUser.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(`Error: ${payload}`)
		})
	},
})

export default userSlice.reducer
export const { removeUser } = userSlice.actions

export const selectUser = (state) => state.user
