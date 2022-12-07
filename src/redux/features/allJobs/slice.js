import { removeUser } from "../user/userSlice"

const {
	createSlice,
	createAsyncThunk,
	createSelector,
} = require("@reduxjs/toolkit")
const { toast } = require("react-toastify")
const { customFetch } = require("../../../utils/axiosCustom")

const HTTP_UNAUTHORIZED_CODE = 401

export const getJobs = createAsyncThunk("jobs/get", async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get("/jobs", {
			headers: {
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		})
		return data
	} catch (error) {
		if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
			thunkAPI.dispatch(removeUser())
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
		return thunkAPI.rejectWithValue(error.response.data.msg)
	}
})

const filterInititalState = {
	search: "testWork",
	status: "interview",
	type: "internsip",
	sort: "name-za",
	statusOptions: ["pending", "declined", "interview"],
	typeOptions: ["internsip", "part-time", "full-time", "remote"],
	sortOptions: ["name-az", "name-za", "a", "b"],
}

const initialState = {
	isLoading: false,
	jobs: [],
	numOfPages: 0,
	totalJobs: 0,
	...filterInititalState,
}
const slice = createSlice({
	name: "allJobs",
	initialState,
	reducers: {
		updateFilters(state, { payload }) {
			const { value, name } = payload
			state[name] = value
		},
		clearFilters() {
			return { ...filterInititalState }
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getJobs.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getJobs.fulfilled, (state, { payload }) => {
			state.isLoading = false
			const { jobs, totalJobs, numOfPages } = payload
			state.jobs = jobs
			state.totalJobs = totalJobs
			state.numOfPages = numOfPages
		})
		builder.addCase(getJobs.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(payload)
		})
	},
})

export default slice.reducer

export const { updateFilters, clearFilters } = slice.actions
export const selectAllJobs = (state) => state.allJobs
// export const selectJobs = (state) => state.allJobs.jobs
// export const selectJobsFilter = (state) => state.allJobs

export const selectFilteredJobs = createSelector([selectAllJobs], (allJobs) => {
	console.log(allJobs)
	const { jobs, search, sort, status, type } = allJobs

	if (jobs.length < 1) return { jobs }

	const filteredJobs = jobs.filter((job) => {
		const { company, jobLocation, position } = job
		return (
			company.includes(search) ||
			jobLocation.includes(search) ||
			position.includes(search)
		)
	})
	return { jobs: filteredJobs }
})
