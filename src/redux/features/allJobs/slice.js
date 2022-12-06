const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { toast } = require("react-toastify")
const { customFetch } = require("../../../utils/axiosCustom")

const getJobs = createAsyncThunk("jobs/get", async (_, thunkAPI) => {
	try {
		const { data } = await customFetch.get("/jobs")
		console.log(data)
	} catch (error) {
		console.log(error.response)
	}
})

const filterInititalState = {
	search: "",
	status: "interview",
	type: "",
	sort: "",
	statusOptions: ["pending", "declined", "interview"],
	typeOptions: ["", "", "", ""],
	sortOptions: ["", "", "", ""],
}

const initialState = {
	isLoading: false,
	jobs: [],
	...filterInititalState,
}
const slice = createSlice({
	name: "allJobs",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getJobs.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getJobs.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(getJobs.rejected, (state, { payload }) => {
			state.isLoading = false
			toast(payload)
		})
	},
})

export default slice.reducer

export const {} = slice.actions
export const selectAllJobs = (state) => state.allJobs
