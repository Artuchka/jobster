import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import styled from "styled-components"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { selectSidebar } from "../redux/features/sidebar/sidebarSlice"
import { selectUser } from "../redux/features/user/userSlice"
import "./styles/dashboard.scss"

export const DashboardLayout = () => {
	const { user } = useSelector(selectUser)
	const { isOpen } = useSelector(selectSidebar)

	console.log(isOpen)
	if (!("email" in user)) {
		return <Navigate to="/landing" />
	}

	return (
		<div className={`layout ${isOpen ? "open" : ""}`}>
			<div className="sidebar">
				<Sidebar />
			</div>
			<div className="sidebar__bg"></div>

			<div className="main">
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
