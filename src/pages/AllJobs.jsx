import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { JobContainer } from "../components/JobContainer"
import { Pagination } from "../components/Pagination"
import { SearchForm } from "../components/SearchForm"
import { getJobs } from "../redux/features/allJobs/slice"

export const AllJobs = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getJobs())
	}, [])
	return (
		<div
			className="p-8 bg-gray-light 
			min-h-screen flex flex-col gap-10 "
		>
			<SearchForm />
			<JobContainer />
			<Pagination />
		</div>
	)
}
