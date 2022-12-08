import React from "react"

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"
// import "./styles.css";

export const ChartStats = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<BarChart
				width={900}
				height={300}
				data={data}
				margin={{
					top: 50,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Bar dataKey="count" barSize={20} fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	)
}

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div
				className="custom-tooltip            
            bg-white p-4  rounded-sm shadow-sm
            "
			>
				<p className="label">{`Amount of jobs created by ${label} : ${payload[0].value}`}</p>
			</div>
		)
	}

	return null
}
