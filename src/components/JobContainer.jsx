import React from "react"
import { useSelector } from "react-redux"
import { selectAllJobs } from "../redux/features/allJobs/selectors"
import { JobItem } from "./JobItem"
import { Loading } from "./Loading"

export const JobContainer = () => {
	const { isLoading, jobs, totalJobs } = useSelector(selectAllJobs)

	if (isLoading) {
		return <Loading />
	}

	console.log(jobs)
	if (!jobs || jobs.length < 1) {
		return <h1>no jobs found sorry</h1>
	}
	return (
		<div className="jobs-container">
			<div className="title">
				Jobs Found:
				<span className="font-bold text-2xl">{totalJobs}</span>
			</div>
			<div className="jobs-lits flex flex-col gap-6">
				{jobs?.map((job) => {
					return <JobItem {...job} key={job._id} />
				})}
			</div>
		</div>
	)
}
