/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				primary: {
					300: '#DC9D93',
					500: '#D38377',
					700: '#C86556',
				},
				secondary: '#2B1E1E',
				gray: {
					100: '#F5F5F5',
				},
			},
		},
	},
	plugins: [],
};
