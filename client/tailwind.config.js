/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				current: "#000000e6",
				primary: {
					DEFAULT: "#5597f2",
					45: "rgba(0, 85, 255, 0.45)",
					50: "rgba(0, 85, 255, 0.5)",
				},
				brown: {
					DEFAULT: "#443e38",
				},
				white: {
					DEFAULT: "#FFFFFF",
					50: "rgba(255, 255, 255, 0.5)",
					65: "rgba(255, 255, 255, 0.65)",
					85: "rgba(255, 255, 255, 0.85)",
				},
			},
		},
	},
	plugins: [],
};
