import React from "react"
import imgLogo from "./../assets/favicon-32x32.png"

export const Logo = ({ className }) => {
	return (
		<div className={`flex justify-start items-center gap-5 mx-auto`}>
			<img src={imgLogo} alt="logo" className={``} />
			<span
				className={`${className} text-4xl text-blue-primary font-bold`}
			>
				Jobster
			</span>
		</div>
	)
}
