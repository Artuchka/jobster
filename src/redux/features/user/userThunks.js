import { customFetch } from "../../../utils/axiosCustom"
import axios from "axios"
import { removeUser } from "./userSlice"

export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const { data } = await customFetch.patch(url, user, {
			headers: {
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		})

		return data.user
	} catch (error) {
		console.log(error)
		if (error.response.status === 401) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue("you have no acces to this page")
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}

export const loginUserThunk = async (url, user, thunkAPI) => {
	console.log(`logining user:`, user)
	try {
		const { email, password } = user
		const { data } = await customFetch.post(url, {
			email,
			password,
		})
		return data.user
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}

export const registerUserThunk = async (url, user, thunkAPI) => {
	console.log(`registering user:`, user)
	try {
		const { name, email, password } = user
		const { data } = await customFetch.post(url, {
			name,
			email,
			password,
		})
		return thunkAPI.fulfillWithValue(data.user)
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}
