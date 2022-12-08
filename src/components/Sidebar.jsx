import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice"
import { navLinks } from "../utils/navlinks"
import { Logo } from "./Logo"

export const Sidebar = () => {
	const dispatch = useDispatch()
	return (
		<div className="sidebar_inner">
			<div
				className="closebtn text-red-dark text-6xl font-bold self-start"
				onClick={() => {
					dispatch(closeSidebar())
				}}
			>
				&times;
			</div>
			<header className="">
				<Logo className="text-3xl" />
			</header>
			<div className="gap-4 grid ">
				{navLinks.map((link) => {
					const { title, path, icon, id } = link
					return (
						<NavLink
							key={id}
							to={path}
							className={`flex gap-4  items-center text-2xl link `}
							// onClick={() => dispatch(closeSidebar())}
						>
							<div className="text-3xl">{icon}</div>
							<div className="">{title}</div>
						</NavLink>
					)
				})}
			</div>
		</div>
	)
}
