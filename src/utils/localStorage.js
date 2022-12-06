const APP_PREFIX = "reactjobstat"

export const addUserToLS = (user) => {
	localStorage.setItem(`${APP_PREFIX}_user`, JSON.stringify(user))
}
export const removeUserFromLS = () => {
	localStorage.removeItem(`${APP_PREFIX}_user`)
}
export const getUserFromLS = () => {
	return JSON.parse(localStorage.getItem(`${APP_PREFIX}_user`)) || {}
}
