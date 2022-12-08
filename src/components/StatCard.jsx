import React from "react"
import { MdPendingActions } from "react-icons/md"
import { AiOutlineSchedule } from "react-icons/ai"
import { GiTerror } from "react-icons/gi"

export const StatCard = ({ title, value }) => {
	return (
		<div
			className={`flex justify-between items-center p-4 border-b-orange-primary border-b-4 rounded-md shadow-md grow
		
		${title === "interview" && "bg-green-light text-green-dark"}
		${title === "declined" && "bg-red-light text-red-primary"}
		${title === "pending" && "text-orange-primary bg-orange-light"}
		`}
		>
			<div className="info flex flex-col  gap-3">
				<span className="text-6xl  font-bold">{value}</span>
				<div className="title">{title}</div>
			</div>
			<div
				className={`p-6 
					
					${title === "interview" && "bg-green-300 "}
					${title === "declined" && "bg-red-dark "}
					${title === "pending" && " bg-orange-200"}
					rounded-md`}
			>
				<GiTerror className=" text-3xl" />
			</div>
		</div>
	)
}
