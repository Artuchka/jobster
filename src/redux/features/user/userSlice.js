import axios from "axios"
import { toast } from "react-toastify"
import { customFetch } from "../../../utils/axiosCustom"
import {
	addUserToLS,
	getUserFromLS,
	removeUserFromLS,
} from "../../../utils/localStorage"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const registerUser = createAsyncThunk(
	"user/registerUser",
	async (user, thinkAPI) => {
		console.log(`registering user:`, user)
		try {
			const { name, email, password } = user
			const { data } = await customFetch.post("/auth/register", {
				name,
				email,
				password,
			})
			return thinkAPI.fulfillWithValue(data.user)
		} catch (error) {
			return thinkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)
export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (user, thinkAPI) => {
		console.log(`logining user:`, user)
		try {
			const { email, password } = user
			const { data } = await customFetch.post("/auth/login", {
				email,
				password,
			})
			return data.user
		} catch (error) {
			return thinkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkAPI) => {
		try {
			const { data } = await customFetch.patch("/auth/updateUser", user, {
				headers: {
					authorization: `Bearer ${
						thunkAPI.getState().user.user.token
					}`,
				},
			})

			return data.user
		} catch (error) {
			console.log(error)
			if (error.response.status === 401) {
				thunkAPI.dispatch(removeUser())
				return thunkAPI.rejectWithValue(
					"you have no acces to this page"
				)
			}
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
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
