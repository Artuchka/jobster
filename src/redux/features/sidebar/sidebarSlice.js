const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
	isOpen: false,
}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		openSidebar(state) {
			state.isOpen = true
		},
		closeSidebar(state) {
			state.isOpen = false
		},
		toggleSidebar(state) {
			console.log("toggling")
			state.isOpen = !state.isOpen
		},
	},
})

export const selectSidebar = (state) => state.sidebar

export default sidebarSlice.reducer
export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions
