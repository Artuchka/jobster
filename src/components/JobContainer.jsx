import React from "react"
import { useSelector } from "react-redux"
import { selectFilteredJobs } from "../redux/features/allJobs/slice"
import { JobItem } from "./JobItem"

export const JobContainer = () => {
	const filteredJobs = useSelector(selectFilteredJobs)
	console.log(filteredJobs)
	return (
		<div className="jobs-container">
			<div className="title">75 Jobs Found</div>
			<div className="jobs-lits flex flex-col gap-6">
				{filteredJobs?.map((job) => {
					return <JobItem {...job} key={job._id} />
				})}
			</div>
		</div>
	)
}
