import React from "react"

export const ButtonLight = ({ children, className, state, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={` ${
				state === "green" ? "bg-green-light text-green-dark" : ""
			} 
			${state === "red" ? "bg-red-light text-red-dark" : ""}
			px-4 py-2 rounded-md text-md capitalize tracking-wider cursor-pointer shadow-md transition-all hover:shadow-xl  text-center ${className}   `}
		>
			{children}
		</div>
	)
}
