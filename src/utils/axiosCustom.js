import axios from "axios"
import { getUserFromLS } from "./localStorage"

const api = "https://jobify-prod.herokuapp.com/api/v1/toolkit/"

export const customFetch = axios.create({
	baseURL: api,
})

customFetch.interceptors.request.use((config) => {
	const user = getUserFromLS()
	if ("token" in user) {
		console.log("adding header")
		config.headers["Authorization"] = `Bearer ${user.token}`
	}
	return config
})
