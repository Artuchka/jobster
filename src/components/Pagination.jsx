import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllJobs } from "../redux/features/allJobs/selectors"
import { setPage } from "../redux/features/allJobs/slice"
import { Button } from "./Button"
import { ButtonLight } from "./ButtonLight"
import { Loading } from "./Loading"

export const Pagination = () => {
	const { page, numOfPages, isLoading } = useSelector(selectAllJobs)
	const dispatch = useDispatch()

	if (isLoading) {
		return <Loading />
	}

	const pages = Array.from({ length: numOfPages }, (_, ind) => ind + 1)

	return (
		<div className="flex gap-3 w-max mx-auto my-6">
			<Button
				state="light"
				disabled={page - 1 === 0}
				onClick={() => {
					dispatch(setPage(Math.max(page - 1, 1)))
				}}
			>
				{"<<"} Prev
			</Button>
			<div className="page-list flex grow gap-3">
				{pages.map((pageNum) => {
					return (
						<Button
							key={pageNum}
							state={`page ${pageNum === page ? "active" : ""}`}
							onClick={() => {
								dispatch(setPage(pageNum))
							}}
						>
							{pageNum}
						</Button>
					)
				})}
			</div>
			<Button
				disabled={page + 1 > numOfPages}
				state="light"
				onClick={() => {
					dispatch(setPage(Math.min(page + 1, numOfPages)))
				}}
			>
				Next {">>"}
			</Button>
		</div>
	)
}
