import { customFetch } from "../../../utils/axiosCustom"

import { setJobsLoading, unsetJobsLoading } from "../allJobs/slice"
import { removeUser } from "../user/userSlice"
import { getJobs } from "../allJobs/slice"
import { clearAddJob } from "./addJobSlice"
const HTTP_UNAUTHORIZED_CODE = 401

export const addJobThunk = async (_, thunkAPI) => {
	try {
		const state = thunkAPI.getState()
		const { position, company, jobLocation, status, jobType } = state.addJob
		const { data } = await customFetch.post("/jobs", {
			position,
			company,
			jobLocation,
			status,
			jobType,
		})
		thunkAPI.dispatch(clearAddJob())
		console.log(data.user)
		return data.user
	} catch (error) {
		console.log(error)

		if (error.status === 401) {
			thunkAPI.dispatch(removeUser())
			return
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}
export const removeJobThunk = async (_id, thunkAPI) => {
	thunkAPI.dispatch(setJobsLoading())
	try {
		const { data } = await customFetch.delete(`/jobs/${_id}`)
		thunkAPI.dispatch(unsetJobsLoading())
		thunkAPI.dispatch(getJobs())
		return data
	} catch (error) {
		thunkAPI.dispatch(unsetJobsLoading())
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}
export const saveEditedJobThunk = async (_, thunkAPI) => {
	const {
		position,
		company,
		jobLocation,
		status,
		editId: id,
	} = thunkAPI.getState().addJob
	try {
		const { data } = await customFetch.patch(`/jobs/${id}`, {
			position,
			company,
			jobLocation,
			status,
		})
		return data
	} catch (error) {
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
}
