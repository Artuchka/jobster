import { Input } from "postcss"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Button } from "../components/Button"
import { InputRow } from "../components/InputRow"
import { selectUser, updateUser } from "../redux/features/user/userSlice"

export const Profile = () => {
	const { user } = useSelector(selectUser)
	const dispatch = useDispatch()

	const [values, setValues] = useState({
		name: user?.name || "",
		lastName: user?.lastName || "",
		email: user?.email || "",
		location: user?.location || "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		const badInputs = Object.keys(values)
			.reduce((total, curr) => {
				if (!values[curr]) return [...total, curr]
				return total
			}, [])
			.join(", ")

		if (badInputs.length !== 0) {
			toast.warn(`please fill inputs: ${badInputs} `)
			return
		}

		dispatch(updateUser(values))
	}
	return (
		<div
			className="wrapper p-8 bg-gray-light 
	min-h-screen flex flex-col gap-10"
		>
			<form
				className=" bg-white py-4 px-14 flex flex-col  gap-6  w-full max-w-4xl border-t-4 border-blue-primary rounded-lg shadow-md hover:shadow-2xl transition-all duration-700"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl text-blue-dark">Profile</h2>

				<InputRow
					title="name"
					name="name"
					value={values.name}
					handleChange={handleChange}
				/>
				<InputRow
					title="lastname"
					name="lastName"
					value={values.lastName}
					handleChange={handleChange}
				/>
				<InputRow
					title="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				<InputRow
					title="Location"
					name="location"
					value={values.location}
					handleChange={handleChange}
				/>

				<Button state="dark" type="submit" className="w-full py-2">
					save changes
				</Button>
			</form>
		</div>
	)
}
