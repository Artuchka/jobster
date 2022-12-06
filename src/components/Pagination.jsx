import React from "react"
import { Button } from "./Button"
import { ButtonLight } from "./ButtonLight"

export const Pagination = () => {
	return (
		<div className="flex gap-3 w-max mx-auto my-6">
			<Button state="light">{"<<"} Prev</Button>
			<div className="page-list flex grow gap-3">
				<Button state="page active">1</Button>
				<Button state="page">2</Button>
				<Button state="page">3</Button>
			</div>
			<Button state="light">{">>"} Prev</Button>
		</div>
	)
}
