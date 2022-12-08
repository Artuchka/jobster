import React from "react"
import { FaLocationArrow } from "react-icons/fa"
import { MdOutlineBusinessCenter } from "react-icons/md"
import { BsFillCalendar2WeekFill } from "react-icons/bs"
import { JobStatus } from "./JobStatus"
import { Button } from "./Button"
import { ButtonLight } from "./ButtonLight"
import { useDispatch } from "react-redux"
import { removeJob, setEditJob } from "../redux/features/addJob/addJobSlice"
import moment from "moment"
import { Link } from "react-router-dom"

export const JobItem = (props) => {
	const { company, jobLocation, position, jobType, status, _id, createdAt } =
		props

	const dispatch = useDispatch()

	return (
		<div className="bg-white shadow-xl rounded-md">
			<div className="naming flex gap-5 items-stretch  p-4 border-b-2  border-b-gray-primary ">
				<div className="avatar rounded-md bg-blue-primary aspect-square w-16 text-white text-4xl flex items-center justify-center ">
					B
				</div>
				<div className="desc flex flex-col justify-center gap-2">
					<div className="jobname text-xl text-blue-dark">
						{position}
					</div>
					<div className="company text-gray-primary">{company}</div>
				</div>
			</div>
			<div className="info  p-4  grid grid-cols-2 gap-6">
				<div className="flex gap-3 ">
					<FaLocationArrow className="text-gray-primary" />
					<span className="text-blue-dark">{jobLocation}</span>
				</div>
				<div className="flex gap-3 ">
					<BsFillCalendar2WeekFill className="text-gray-primary" />
					<span className="text-blue-dark">
						{moment(createdAt).format("MMM Do YY")}
					</span>
				</div>

				<div className="flex gap-3 ">
					<MdOutlineBusinessCenter className="text-gray-primary" />
					<span className="text-blue-dark">{jobType}</span>
				</div>
				<JobStatus status={status} />
			</div>

			<div className="buttons flex gap-3 px-4 pb-4 ">
				<Link to="/add-job">
					<ButtonLight
						state="green"
						onClick={() =>
							dispatch(
								setEditJob({
									company,
									jobLocation,
									position,
									jobType,
									status,
									editId: _id,
								})
							)
						}
					>
						edit
					</ButtonLight>
				</Link>
				<ButtonLight
					state="red"
					onClick={() => dispatch(removeJob(_id))}
				>
					delete
				</ButtonLight>
			</div>
		</div>
	)
}
