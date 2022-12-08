import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {
	loginTestUser,
	loginUser,
	registerUser,
	selectUser,
} from "../redux/features/user/userSlice"
import { Button } from "./Button"
import { InputRow } from "./InputRow"
import { Logo } from "./Logo"

const initialState = {
	name: "temka",
	email: "yandex@gmail.com",
	password: "1234567",
	isMember: true,
	isTestUser: false,
}
export const SignForm = () => {
	const [values, setValues] = useState(initialState)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user, isLoading } = useSelector(selectUser)

	useEffect(() => {
		if ("name" in user) {
			console.log("doing")
			const { name, email, password } = user
			setValues((prev) => ({ ...prev, name, email }))
		}
	}, [])

	useEffect(() => {
		if ("token" in user) {
			console.log("error here")
			navigate("/")
		}
	}, [user])

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		const badInputs = Object.keys(values)
			.reduce((total, curr) => {
				if (
					curr === "isMember" ||
					curr === "isTestUser" ||
					(values.isMember && !values.name)
				)
					return total
				if (!values[curr]) return [...total, curr]
				return total
			}, [])
			.join(", ")

		if (badInputs.length === 0) {
			// toast.success("all inputs are good")
		} else {
			toast.warn(`please fill inputs: ${badInputs} `)
			return
		}

		if (values.isMember) {
			if (values.isTestUser) {
				dispatch(loginTestUser(values))
			} else dispatch(loginUser(values))
		} else {
			dispatch(registerUser(values))
		}
	}

	return (
		<form
			className=" bg-white py-4 px-14 flex flex-col gap-6 items-center w-10/12 max-w-sm border-t-4 border-blue-primary rounded-lg shadow-xl"
			onSubmit={handleSubmit}
		>
			<Logo />
			<h2>{values.isMember ? "Login" : "Register"}</h2>

			{!values.isMember && (
				<InputRow
					title="name"
					name="name"
					value={values.name}
					handleChange={handleChange}
				/>
			)}
			<InputRow
				title="Email"
				name="email"
				value={values.email}
				handleChange={handleChange}
			/>
			<InputRow
				title="Password"
				name="password"
				type="password"
				value={values.password}
				handleChange={handleChange}
			/>

			<Button className="w-full py-2" type="submit" disabled={isLoading}>
				Submit
			</Button>
			<Button
				disabled={isLoading}
				className="w-full py-2 !bg-blue-light !text-blue-primary
            hover:!bg-blue-dark hover:!text-blue-light"
				type="submit"
				onClick={() =>
					setValues((prev) => ({ ...prev, isTestUser: true }))
				}
			>
				Demo App
			</Button>

			<div>
				{values.isMember ? "Not a member yet? " : "Alrady a member? "}
				<span
					className="text-blue-primary cursor-pointer"
					onClick={() => {
						setValues((prev) => ({
							...prev,
							isMember: !prev.isMember,
						}))
					}}
				>
					{values.isMember ? "Register" : "Login"}
				</span>
			</div>
		</form>
	)
}
