import { createSelector } from "@reduxjs/toolkit"

export const selectAllJobs = (state) => state.allJobs
export const selectStats = (state) => ({
	defaultStats: state.allJobs.defaultStats,
	monthlyApplications: state.allJobs.monthlyApplications,
})

// NO MORE FRONT-END FILTERING, BEACH
// export const selectFilteredJobs = createSelector([selectAllJobs], (allJobs) => {
// 	const { jobs, search, sort, status, type } = allJobs

// 	if (jobs.length < 1) return []

// 	const filteredJobs = jobs.filter((job) => {
// 		const { company, jobLocation, position } = job
// 		return (
// 			company.includes(search) ||
// 			jobLocation.includes(search) ||
// 			position.includes(search)
// 		)
// 	})
// 	return filteredJobs
// })
