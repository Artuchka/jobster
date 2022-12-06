import axios from "axios"

const api = "https://jobify-prod.herokuapp.com/api/v1/toolkit/"

export const customFetch = axios.create({
	baseURL: api,
})
