import React from "react"

export const JobStatus = ({ status }) => {
	return (
		<div
			className={`w-max rounded-sm
		 px-4 py-2 
		   ${status === "interview" && "bg-green-light text-green-dark"}
		   ${status === "declined" && "bg-red-light text-red-primary"}
		   ${status === "pending" && "bg-blue-light bg-blue-primary"}
		  `}
		>
			{status}
		</div>
	)
}
