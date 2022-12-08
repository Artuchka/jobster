import { getJobsThunk, getStatsThunk } from "./thunks"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { toast } = require("react-toastify")

export const getJobs = createAsyncThunk("jobs/get", getJobsThunk)

export const getStats = createAsyncThunk("jobs/stats", getStatsThunk)

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
	page: 1,
	...filterInititalState,
	defaultStats: {},
	monthlyApplications: [],
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
		setStats(state, { payload }) {
			return { ...state, ...payload }
		},
		setPage(state, { payload }) {
			state.page = payload
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

		builder.addCase(getStats.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getStats.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.defaultStats = payload.defaultStats
			state.monthlyApplications = payload.monthlyApplications
		})
		builder.addCase(getStats.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(payload)
		})
	},
})

export default slice.reducer

export const {
	updateFilters,
	clearFilters,
	unsetJobsLoading,
	setJobsLoading,
	setStats,
	setPage,
} = slice.actions
