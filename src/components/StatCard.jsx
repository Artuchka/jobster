import React from "react"
import { MdPendingActions } from "react-icons/md"
import { AiOutlineSchedule } from "react-icons/ai"
import { GiTerror } from "react-icons/gi"

export const StatCard = () => {
	return (
		<div className="flex justify-between items-center p-4 border-b-orange-primary border-b-4 rounded-md shadow-md">
			<div className="info flex flex-col  gap-3">
				<span className="text-6xl text-orange-primary font-bold">
					27
				</span>
				<div className="title">Pending Inters</div>
			</div>
			<div className="p-6 bg-orange-light rounded-md">
				<GiTerror className="text-orange-primary text-3xl" />
			</div>
		</div>
	)
}
