import React from "react"

export const SelectRow = ({ title, name, value, handleChange, children }) => {
	return (
		<div className="row flex flex-col gap-2 w-full">
			<label htmlFor={name} className="text-gray-800 capitalize">
				{title}
			</label>

			<select
				value={value}
				onChange={handleChange}
				name={name}
				id={name}
				className="rounded-sm bg-blue-light py-2 px-4"
			>
				{children}
			</select>
		</div>
	)
}
