import React from "react"

import { FcStatistics } from "react-icons/fc"
import { MdGroups } from "react-icons/md"
import { AiOutlineUserAdd } from "react-icons/ai"
import { ImProfile } from "react-icons/im"

export const navLinks = [
	{
		title: "stats",
		path: "/",
		icon: <FcStatistics />,
		id: "1",
	},
	{
		title: "all jobs",
		path: "/all-jobs",
		icon: <MdGroups />,
		id: "2",
	},
	{
		title: "add job",
		path: "/add-job",
		icon: <AiOutlineUserAdd />,
		id: "3",
	},
	{
		title: "profile",
		path: "/profile",
		icon: <ImProfile />,
		id: "4",
	},
]
