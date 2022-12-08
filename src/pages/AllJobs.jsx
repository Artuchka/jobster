import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { JobContainer } from "../components/JobContainer"
import { Pagination } from "../components/Pagination"
import { SearchForm } from "../components/SearchForm"
import { selectAllJobs } from "../redux/features/allJobs/selectors"
import { getJobs } from "../redux/features/allJobs/slice"
import debounce from "lodash.debounce"

export const AllJobs = () => {
	const dispatch = useDispatch()

	const { search, status, type, sort, page } = useSelector(selectAllJobs)
	const debouncedFetch = useCallback(
		debounce(() => {
			dispatch(getJobs())
		}, 500),
		[]
	)
	useEffect(() => {
		debouncedFetch()
	}, [search, status, type, sort, page])
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
