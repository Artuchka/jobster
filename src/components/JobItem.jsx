import React from "react"
import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineBusinessCenter } from "react-icons/md"
import { BsFillCalendar2WeekFill } from "react-icons/bs"
import { JobStatus } from "./JobStatus"
import { ButtonLight } from "./ButtonLight"

export const JobItem = () => {
	return (
		<div className="bg-white shadow-xl rounded-md">
			<div className="naming flex gap-5 items-stretch  p-4 border-b-2  border-b-gray-primary ">
				<div className="avatar rounded-md bg-blue-primary aspect-square w-16 text-white text-4xl flex items-center justify-center ">
					B
				</div>
				<div className="desc flex flex-col justify-center gap-2">
					<div className="jobname text-xl text-blue-dark">
						Civil Engineer
					</div>
					<div className="company text-gray-primary">
						Bechtelar-Bednar
					</div>
				</div>
			</div>
			<div className="info  p-4  grid grid-cols-2 gap-6">
				<div className="flex gap-3 ">
					<FaLocationArrow className="text-gray-primary" />
					<span className="text-blue-dark">Kiamba</span>
				</div>
				<div className="flex gap-3 ">
					<BsFillCalendar2WeekFill className="text-gray-primary" />
					<span className="text-blue-dark">Dec 27th, 2021</span>
				</div>

				<div className="flex gap-3 ">
					<MdOutlineBusinessCenter className="text-gray-primary" />
					<span className="text-blue-dark">Internship</span>
				</div>
				<JobStatus>declined</JobStatus>
			</div>

			<div className="buttons flex gap-3 px-4 pb-4 ">
				<ButtonLight state="green">edit</ButtonLight>
				<ButtonLight state="red">delete</ButtonLight>
			</div>
		</div>
	)
}
