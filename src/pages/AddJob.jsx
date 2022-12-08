import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { InputRow } from "../components/InputRow"
import { SelectRow } from "../components/SelectRow"
import {
	addJob,
	clearAddJob,
	saveEditedJob,
	selectAddJob,
	updateAddJob,
} from "../redux/features/addJob/addJobSlice"
import { selectUser } from "../redux/features/user/userSlice"
import { Button } from "./../components/Button"

export const AddJob = () => {
	const {
		position,
		company,
		jobLocation,
		status,
		statusOptions,
		jobType,
		jobTypeOptions,
		isEditing,
	} = useSelector(selectAddJob)

	const { user } = useSelector(selectUser)

	useEffect(() => {
		if ("location" in user && !isEditing) {
			dispatch(
				updateAddJob({ name: "jobLocation", value: user.location })
			)
		}
	}, [])

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target
		dispatch(updateAddJob({ name, value }))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!position || !company || !jobLocation) {
			toast.error("complete all fields please")
			return
		}
		if (isEditing) {
			console.log("editing")
			dispatch(saveEditedJob())
		} else {
			dispatch(addJob())
		}
	}
	return (
		<div
			className="wrapper p-8 bg-gray-light 
		min-h-screen flex flex-col gap-10"
		>
			<form
				className=" bg-white py-4 px-14 flex flex-col  gap-6  w-full max-w-4xl border-t-4 border-blue-primary rounded-lg shadow-md hover:shadow-2xl transition-all duration-700"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl text-blue-dark">
					{!isEditing ? "Add Job" : "Edit Job"}
				</h2>

				<InputRow
					title="Position"
					name="position"
					value={position}
					handleChange={handleChange}
				/>
				<InputRow
					title="Company"
					name="company"
					value={company}
					handleChange={handleChange}
				/>
				<InputRow
					title="Job Location"
					name="jobLocation"
					value={jobLocation}
					handleChange={handleChange}
				/>

				<SelectRow
					title="status"
					name="status"
					value={status}
					handleChange={handleChange}
					options={statusOptions}
				/>

				<SelectRow
					title="Job Type"
					name="jobType"
					value={jobType}
					handleChange={handleChange}
					options={jobTypeOptions}
				/>

				<div className="buttons flex gap-3 w-full">
					<Button
						state="gray"
						className="w-full"
						onClick={() => {
							dispatch(clearAddJob())
						}}
					>
						clear
					</Button>
					<Button state="dark" className="w-full" type="submit">
						submit
					</Button>
				</div>
			</form>
		</div>
	)
}
