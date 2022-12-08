import React from "react"
import { StatCard } from "../components/StatCard"

export const DefaultStats = ({ data }) => {
	return (
		<div className="statcard-list flex flex-col gap-8 md:flex-row ">
			<StatCard title="pending" value={data.pending} />
			<StatCard title="interview" value={data.interview} />
			<StatCard title="declined" value={data.declined} />
		</div>
	)
}
