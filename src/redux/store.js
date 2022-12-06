import { configureStore } from "@reduxjs/toolkit"
// import counterReducer from "./features/counter/counterSlice"
import userReducer from "./features/user/userSlice"
import sidebarReducer from "./features/sidebar/sidebarSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		sidebar: sidebarReducer,
	},
})
