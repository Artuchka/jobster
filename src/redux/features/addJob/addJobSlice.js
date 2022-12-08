import { toast } from "react-toastify"
import { getUserFromLS } from "../../../utils/localStorage"

import { addJobThunk, removeJobThunk, saveEditedJobThunk } from "./thunks"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
	position: "",
	company: "",
	jobLocation: "",
	status: "interview",
	statusOptions: ["interview", "pending", "declined"],
	jobType: "intership",
	jobTypeOptions: ["full-time", "part-time", "intership", "remote"],
	isLoading: false,

	isEditing: false,
	editId: "",
}

export const addJob = createAsyncThunk("jobs/createJob", addJobThunk)

export const removeJob = createAsyncThunk("jobs/removeJob", removeJobThunk)
export const saveEditedJob = createAsyncThunk(
	"jobs/saveEdited",
	saveEditedJobThunk
)

const addJobSlice = createSlice({
	name: "addJob",
	initialState,
	reducers: {
		clearAddJob() {
			return {
				...initialState,
				jobLocation: getUserFromLS()?.location || "",
			}
		},
		updateAddJob(state, { payload }) {
			const { name, value } = payload
			state[name] = value
		},

		setEditJob(state, { payload }) {
			return { ...state, ...payload, isEditing: true }
		},
	},

	extraReducers: (builder) => {
		builder.addCase(addJob.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(addJob.fulfilled, (state) => {
			state.isLoading = false
			toast.success("added the job!")
		})
		builder.addCase(addJob.rejected, (state, { payload }) => {
			state.isLoading = false
			toast.error(`Error: ${payload}`)
		})

		builder.addCase(removeJob.fulfilled, (state, { payload }) => {
			toast.success("deleted")
		})
		builder.addCase(removeJob.rejected, (state, { payload }) => {
			toast.error(payload)
		})

		builder.addCase(saveEditedJob.fulfilled, (state, { payload }) => {
			toast.success("save edited version!")
		})
		builder.addCase(saveEditedJob.rejected, (state, { payload }) => {
			toast.error(payload)
		})
	},
})

export default addJobSlice.reducer
export const { clearAddJob, updateAddJob, setEditJob } = addJobSlice.actions

export const selectAddJob = (state) => state.addJob
