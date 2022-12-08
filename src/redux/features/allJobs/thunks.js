import { removeUser } from "../user/userSlice"
const { customFetch } = require("../../../utils/axiosCustom")
const HTTP_UNAUTHORIZED_CODE = 401

export const getJobsThunk = async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get("/jobs")
		return data
	} catch (error) {
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}
