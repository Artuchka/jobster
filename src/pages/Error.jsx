import React from "react"
import { Link } from "react-router-dom"
import notFoundImg from "./../assets/notfound.svg"

export const Error = () => {
	return (
		<div className="bg-gray-light h-screen flex items-center flex-col justify-center">
			<img
				src={notFoundImg}
				alt="not found"
				className="w-[80vw] max-w-4xl  h-[40vh] object-contain"
			/>
			<h1>Ohh! Page Not Found</h1>
			<p className="text-gray-primary">
				We can't seem to find the page you're looking for
			</p>
			<Link
				to="/"
				className="underline mt-4 text-blue-primary capitalize tracking-wider"
			>
				back Home
			</Link>
		</div>
	)
}
