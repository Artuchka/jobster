import React, { useState } from "react"
import { Button } from "./Button"
import { InputRow } from "./InputRow"
import { SelectRow } from "./SelectRow"

const initialState = {
	search: "",
	status: "",
	type: "",
	sort: "",
}
export const SearchForm = () => {
	const [values, setValues] = useState(initialState)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
		console.log(values)
	}

	return (
		<form className=" bg-white py-4 px-14 flex flex-col  gap-6  w-full max-w-4xl border-t-4 border-blue-primary rounded-lg shadow-md hover:shadow-2xl transition-all duration-700">
			<h2 className="text-2xl text-blue-dark">Search Form</h2>

			<InputRow
				title="Search"
				name="search"
				value={values.search}
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
				title="Type"
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

			<SelectRow
				title="Sort"
				name="sort"
				value={values.sort}
				handleChange={handleChange}
			>
				<option value="latest">latest</option>
				<option value="oldest">oldest</option>
				<option value="a-z">a-z</option>
				<option value="z-a">z-a</option>
			</SelectRow>

			<Button
				className="w-full py-2 !bg-red-light !text-red-primary
    hover:!bg-red-dark hover:!text-white"
			>
				Clear Filters{" "}
			</Button>
		</form>
	)
}
