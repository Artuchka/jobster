import { removeUser } from "../user/userSlice"
import { setJobsLoading } from "./slice"
const { customFetch } = require("../../../utils/axiosCustom")
const HTTP_UNAUTHORIZED_CODE = 401

export const getJobsThunk = async (_, thunkAPI) => {
	try {
		const { search, page, status, type, sort } = thunkAPI.getState().allJobs
		console.log(search)
		let params = `?&sort=latest&status=${status}&page=${page}&jobType=${type}`
		if (search) params += `&search=${search}`
		const { data } = await customFetch.get(`/jobs${params}`)
		return data
	} catch (error) {
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}

export const getStatsThunk = async (_, thunkAPI) => {
	// thunkAPI.dispatch(setJobsLoading)

	try {
		const { data } = await customFetch.get("/jobs/stats")
		console.log(data)
		return data
	} catch (error) {
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
				thunkAPI.dispatch(removeUser())
				return thunkAPI.rejectWithValue(error.response.data.msg)
			}
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
}
