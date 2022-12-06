import React from "react"

export const Button = ({
	disabled = false,
	children,
	className,
	state = "dark",
	type = "button",
	onClick = () => {},
}) => {
	return (
		<button
			disabled={disabled}
			type={type}
			onClick={onClick}
			className={`  px-6 py-3 rounded-md text-md font-medium tracking-wider cursor-pointer shadow-md transition-all capitalize hover:shadow-xl text-center ${className}
				${
					state.includes("light") &&
					"bg-white text-blue-primary hover:bg-blue-primary hover:text-white"
				}
				${state.includes("dark") && " bg-blue-primary text-white hover:bg-blue-dark "}
				${
					state.includes("page") &&
					" bg-blue-light text-blue-primary hover:bg-blue-dark  "
				}
				${
					state.includes("page") &&
					state.includes("active") &&
					" bg-blue-primary text-white hover:bg-blue-dark "
				}
				${state.includes("gray") && " bg-gray-primary text-white hover:bg-blue-dark "}
				${disabled && "pointer-events-none bg-gray-700"}

			`}
		>
			{children}
		</button>
	)
}
