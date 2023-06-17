/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7986cb",
				secondary: "#ff80ab",
				accent: "#1fb2a6",
				neutral: "#d1d5db",
				"base-100": "#1f2937",
				info: "#64b5f6",
				success: "#36d399",
				warning: "#fbbd23",
				error: "#dc2626",
			},
		},
		fontFamily: {
			sans: ["Outfit", "sans-serif"],
			serif: ["Pacifico", "serif"],
			sans2: ["Abril Fatface", "serif"],
		},
	},
	daisyui: {
		themes: [
			{
				darkTheme: {
					primary: "#7986cb",
					secondary: "#ff80ab",
					accent: "#1fb2a6",
					neutral: "#d1d5db",
					//bg Color
					"base-100": "#1f2937",
					info: "#64b5f6",
					success: "#36d399",
					warning: "#fbbd23",
					error: "#dc2626",
				},
			},
		],
		// prefix: "daisy",
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
