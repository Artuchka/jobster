import React from "react"
import { StatCard } from "../components/StatCard"

export const Home = () => {
	return (
		<div
			className="p-8 bg-gray-light 
	min-h-screen"
		>
			<div className="statcard-list flex flex-col gap-4">
				<StatCard />
				<StatCard />
				<StatCard />
			</div>

			<div className="chart"></div>
		</div>
	)
}
