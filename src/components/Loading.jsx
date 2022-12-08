import React from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export const Loading = () => {
	return (
		<div className="animate-spin z-10  absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-8xl">
			<AiOutlineLoading3Quarters />
		</div>
	)
}
