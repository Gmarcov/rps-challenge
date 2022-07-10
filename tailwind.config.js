/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark: {
					100: "#656565",
					300: "#3a3a3a",
					400: "#343434",
					500: "#292929",
					700: "#1b1b1b",
				},
				green: {
					light: "#A9BAA3",
				},
			},
			fontFamily: {
				arrow: "inter",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"],
	},
};
