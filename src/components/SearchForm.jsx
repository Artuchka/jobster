import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAddJob } from "../redux/features/addJob/addJobSlice"
import { selectAllJobs } from "../redux/features/allJobs/selectors"
import { clearFilters, updateFilters } from "../redux/features/allJobs/slice"
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
	const {
		search,
		status,
		type,
		sort,
		statusOptions,
		typeOptions,
		sortOptions,
	} = useSelector(selectAllJobs)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		const { name, value } = e.target
		dispatch(updateFilters({ name, value }))
	}

	return (
		<form
			className=" bg-white py-4 px-14 flex flex-col  gap-6  w-full max-w-4xl border-t-4 border-blue-primary rounded-lg shadow-md hover:shadow-2xl transition-all duration-700

		"
		>
			<h2 className="text-2xl text-blue-dark">Search Form</h2>

			<div
				className="inputs
					flex flex-col gap-2
					w-full

					md:flex-row
					md:items-center"
			>
				<InputRow
					title="Search"
					name="search"
					value={search}
					handleChange={handleChange}
				/>

				<SelectRow
					title="status"
					name="status"
					value={status}
					handleChange={handleChange}
					options={["all", ...statusOptions]}
				/>

				<SelectRow
					title="Type"
					name="type"
					value={type}
					handleChange={handleChange}
					options={["all", ...typeOptions]}
				/>

				<SelectRow
					title="Sort"
					name="sort"
					value={sort}
					handleChange={handleChange}
					options={sortOptions}
				/>

				<Button
					className="w-full py-2 !bg-red-light !text-red-primary
    hover:!bg-red-dark hover:!text-white"
					onClick={() => dispatch(clearFilters())}
				>
					Clear Filters{" "}
				</Button>
			</div>
		</form>
	)
}
