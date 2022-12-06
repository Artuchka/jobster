import React from "react"
import { JobItem } from "../components/JobItem"
import { Pagination } from "../components/Pagination"
import { SearchForm } from "../components/SearchForm"

export const AllJobs = () => {
	return (
		<div
			className="p-8 bg-gray-light 
			min-h-screen flex flex-col gap-10 "
		>
			<SearchForm />
			<div className="jobs-container">
				<div className="title">75 Jobs Found</div>
				<div className="jobs-lits flex flex-col gap-6">
					<JobItem />
					<JobItem />
					<JobItem />
					<JobItem />
				</div>
			</div>
			<Pagination />
		</div>
	)
}
