import React, { useState } from "react"
import { InputRow } from "../components/InputRow"
import { SelectRow } from "../components/SelectRow"
import { Button } from "./../components/Button"

const initialState = {
	position: "",
	company: "",
	location: "",
	status: "",
	type: "",
}
export const AddJob = () => {
	const [values, setValues] = useState(initialState)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
		console.log(values)
	}
	return (
		<div
			className="wrapper p-8 bg-gray-light 
		min-h-screen flex flex-col gap-10"
		>
			<form className=" bg-white py-4 px-14 flex flex-col  gap-6  w-full max-w-4xl border-t-4 border-blue-primary rounded-lg shadow-md hover:shadow-2xl transition-all duration-700">
				<h2 className="text-2xl text-blue-dark">Add Job</h2>

				<InputRow
					title="Position"
					name="position"
					value={values.position}
					handleChange={handleChange}
				/>
				<InputRow
					title="Company"
					name="company"
					value={values.company}
					handleChange={handleChange}
				/>
				<InputRow
					title="Job Location"
					name="location"
					value={values.location}
					handleChange={handleChange}
				/>

				<SelectRow
					title="status"
					name="status"
					value={values.status}
					handleChange={handleChange}
				>
					<option value="all">all</option>
					<option value="interview">interview</option>
					<option value="pending">pending</option>
					<option value="declined">declined</option>
				</SelectRow>

				<SelectRow
					title="Job Type"
					name="type"
					value={values.type}
					handleChange={handleChange}
				>
					<option value="all">all</option>
					<option value="full-time">full-time</option>
					<option value="part-time">part-time</option>
					<option value="intership">intership</option>
					<option value="remote">remote</option>
				</SelectRow>

				<div className="buttons flex gap-3 w-full">
					<Button state="gray" className="w-full">
						clear
					</Button>
					<Button state="dark" className="w-full">
						submit
					</Button>
				</div>
			</form>
		</div>
	)
}
