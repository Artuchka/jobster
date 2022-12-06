import React from "react"

export const SelectRow = ({
	title,
	name,
	value,
	handleChange,
	options = [],
}) => {
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
				{options.map((item) => {
					return (
						<option value={item} key={item}>
							{item}
						</option>
					)
				})}
			</select>
		</div>
	)
}
