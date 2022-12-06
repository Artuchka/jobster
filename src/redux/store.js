import { configureStore } from "@reduxjs/toolkit"
// import counterReducer from "./features/counter/counterSlice"
import userReducer from "./features/user/userSlice"
import sidebarReducer from "./features/sidebar/sidebarSlice"
import addJobReducer from "./features/addJob/addJobSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		sidebar: sidebarReducer,
		addJob: addJobReducer,
	},
})
