/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{jsx,tsx,js}"],
	theme: {
		extend: {
			// screens: {
			// 	sm: "480px",
			// 	md: "768px",
			// 	lg: "976px",
			// 	xl: "1440px",
			// },
			colors: {
				blue: {
					primary: "#3b82f6",
					light: "#bfdbfe",
					dark: "#102a43",
					text: "#486581",
				},
				gray: {
					primary: "#486581",
					light: "#f0f4f8",
				},
				orange: {
					primary: "rgb(233, 185, 73)",
					light: "rgb(252, 239, 199)",
				},
				violet: {
					primary: "rgb(100, 122, 203)",
					light: "rgb(224, 232, 249)",
				},
				red: {
					primary: "rgb(214, 106, 106)",
					light: "#f8d7da",
					dark: "#842029",
					textlight: "rgb(214, 106, 106)",
				},
				green: {
					primary: "rgb(214, 106, 106)",
					dark: "#0f5132",
					light: "#d1e7dd",
				},
			},
		},
	},
	plugins: [],
}
// "blue-light": "#bfdbfe",
// "blue-dark": "#102a43",
// "blue-text": "#486581",
// gray: {
// 	primary: "#486581",
// },
// orange: {
// 	primary: "rgb(233, 185, 73)",
// 	light: "rgb(252, 239, 199)",
// },
// violet: {
// 	primary: "rgb(100, 122, 203)",
// 	light: "rgb(224, 232, 249)",
// },
// red: {
// 	primary: "rgb(214, 106, 106)",
// 	light: "#f8d7da",
// 	dark: "#842029",
// 	textlight: "rgb(214, 106, 106)",
// },
// green: {
// 	primary: "rgb(214, 106, 106)",
// 	dark: "#0f5132",
// 	light: "#d1e7dd",
// },
