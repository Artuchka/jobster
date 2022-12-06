import React from "react"

export const InputRow = ({
	name,
	title,
	value,
	handleChange,
	type = "text",
}) => {
	return (
		<div className="row flex flex-col gap-2 w-full">
			<label htmlFor={name} className="text-gray-800">
				{title}
			</label>
			<input
				value={value}
				onChange={handleChange}
				name={name}
				id={name}
				type={type}
				className="rounded-sm bg-blue-light py-2 px-4 "
			/>
		</div>
	)
}
