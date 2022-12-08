import { getJobsThunk } from "./thunks"

const {
	createSlice,
	createAsyncThunk,
	createSelector,
} = require("@reduxjs/toolkit")
const { toast } = require("react-toastify")

export const getJobs = createAsyncThunk("jobs/get", getJobsThunk)

const filterInititalState = {
	search: "",
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
		setJobsLoading(state) {
			state.isLoading = true
		},
		unsetJobsLoading(state) {
			state.isLoading = false
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

export const { updateFilters, clearFilters, unsetJobsLoading, setJobsLoading } =
	slice.actions
