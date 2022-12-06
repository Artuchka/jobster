import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Logo } from "../components/Logo"

export const Landing = () => {
	return (
		<div className="bg-gray-light min-h-screen p-4 flex flex-col items-start gap-3">
			<Logo />
			<div className="mt-auto mb-auto flex flex-col items-start gap-3">
				<h1 className="text-blue-dark font-bold">
					Job
					<span className="text-blue-primary"> Tracking </span>
					App
				</h1>
				<p className="text-blue-text">
					Crucifix narwhal street art asymmetrical, humblebrag tote
					bag pop-up fixie raclette taxidermy craft beer. Brunch
					bitters synth, VHS crucifix heirloom meggings bicycle
					rights.
				</p>

				<Link to="/register">
					<Button>Login/Register</Button>
				</Link>
			</div>
		</div>
	)
}
