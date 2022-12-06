import React from "react"
import { toast, ToastContainer } from "react-toastify"
import { StatCard } from "../components/StatCard"
import { Button } from "../components/Button"

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
