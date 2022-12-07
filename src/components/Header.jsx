import React, { useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { toggleSidebar } from "../redux/features/sidebar/sidebarSlice"
import { removeUser, selectUser } from "../redux/features/user/userSlice"
import { Button } from "./Button"
import { Logo } from "./Logo"

export const Header = () => {
	const [userOpen, setUserOpen] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector(selectUser)

	return (
		<div className="p-7 flex justify-between items-center border-b-gray-primary border-b-2 shadow-lg bg-white">
			<BiMenuAltLeft
				className="text-4xl text-blue-primary cursor-pointer  "
				onClick={() => {
					dispatch(toggleSidebar())
				}}
			/>
			<Logo className="text-lg" />
			<Button
				className="flex gap-2 py-2 px-4 items-center relative"
				onClick={() => setUserOpen((prev) => !prev)}
			>
				<FaUserCircle />
				<span>{user.name}</span>
				<SlArrowDown className="self-end" />
				<div
					className={`absolute  -bottom-14 rounded-md shadow-lg left-0	py-4 bg-blue-light text-blue-primary
					w-full  text-center
					${userOpen ? "block" : "hidden"} `}
					onClick={() => {
						dispatch(removeUser())
						toast.success("See Ya later!")
						navigate("/landing")
					}}
				>
					Logout
				</div>
			</Button>
		</div>
	)
}
