import { toast } from "react-toastify"
import { customFetch } from "../../../utils/axiosCustom"
import { getUserFromLS } from "../../../utils/localStorage"
import { removeUser } from "../user/userSlice"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
	position: "",
	company: "",
	jobLocation: "",
	status: "interview",
	statusOptions: ["interview", "pending", "declined"],
	jobType: "internship",
	jobTypeOptions: ["full-time", "part-time", "internship", "remote"],
	isLoading: false,
}

export const addJob = createAsyncThunk(
	"jobs/createJob",
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState()
			const { position, company, jobLocation, status, jobType } =
				state.addJob
			const { data } = await customFetch.post(
				"/jobs",
				{ position, company, jobLocation, status, jobType },
				{
					headers: {
						authorization: `Bearer ${state.user.user.token}`,
					},
				}
			)
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
	},
})

export default addJobSlice.reducer
export const { clearAddJob, updateAddJob } = addJobSlice.actions

export const selectAddJob = (state) => state.addJob
