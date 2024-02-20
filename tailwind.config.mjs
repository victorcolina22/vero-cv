/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite'
			},
			backgroundColor: {
				'peach': '#FEF1EE',
				'white': '#FFFFFF',
			},
			colors: {
				'orange': '#E35738',
				'blue-deep': '#4B5594',
				'orange-light': '#EECEC7'
			},
			fontFamily: {
				'caveat-bush': ['Caveat Brush', 'sans-serif'],
				'lato': ['Lato', 'sans-serif']
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			}
		},
	},
	plugins: [],
}
