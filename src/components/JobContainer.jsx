import React from "react"
import { useSelector } from "react-redux"
import {
	selectAllJobs,
	selectFilteredJobs,
} from "../redux/features/allJobs/selectors"
import { JobItem } from "./JobItem"
import { Loading } from "./Loading"

export const JobContainer = () => {
	const filteredJobs = useSelector(selectFilteredJobs)
	const { isLoading } = useSelector(selectAllJobs)

	if (isLoading) {
		return <Loading />
	}

	console.log(filteredJobs)
	if (filteredJobs.length < 1) {
		return <h1>no jobs found sorry</h1>
	}
	return (
		<div className="jobs-container">
			<div className="title">
				Jobs Found:
				<span className="font-bold text-2xl">
					{filteredJobs.length}
				</span>
			</div>
			<div className="jobs-lits flex flex-col gap-6">
				{filteredJobs?.map((job) => {
					return <JobItem {...job} key={job._id} />
				})}
			</div>
		</div>
	)
}
