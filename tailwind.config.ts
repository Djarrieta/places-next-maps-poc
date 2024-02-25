import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				land: "#F1F3F4",
				darkLand: "#666666",
				mountain: "#C1E4CB",
				redPlace: "#F06293",
				yellowPlace: "#F29900",
			},
		},
	},
	plugins: [],
};
export default config;
