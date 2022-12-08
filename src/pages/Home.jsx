import React, { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { StatCard } from "../components/StatCard"
import { Button } from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { getStats } from "../redux/features/allJobs/slice"
import { selectAllJobs, selectStats } from "../redux/features/allJobs/selectors"
import { DefaultStats } from "./DefaultStats"
import { ChartStats } from "../components/ChartStats"
import { Loading } from "../components/Loading"

const toastConfig = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
}
export const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getStats())
	}, [])
	const { isLoading } = useSelector(selectAllJobs)
	const { defaultStats, monthlyApplications } = useSelector(selectStats)

	if (isLoading) {
		return <Loading />
	}

	return (
		<div
			className="p-8 bg-gray-light 
	min-h-screen"
		>
			<DefaultStats data={defaultStats} />
			<ChartStats data={monthlyApplications} />
		</div>
	)
}
