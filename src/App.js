import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { AddJob } from "./pages/AddJob.jsx"
import { AllJobs } from "./pages/AllJobs"
import { DashboardLayout } from "./pages/DashboardLayout"
import { Error } from "./pages/Error"
import { Home } from "./pages/Home"
import { Landing } from "./pages/Landing"
import { Profile } from "./pages/Profile"
import { Register } from "./pages/Register"
import "react-toastify/dist/ReactToastify.css"

function App() {
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DashboardLayout />}>
						<Route index element={<Home />} />
						<Route path="all-jobs" element={<AllJobs />} />
						<Route path="add-job" element={<AddJob />} />
						<Route path="profile" element={<Profile />} />
					</Route>
					<Route path="/landing" element={<Landing />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
