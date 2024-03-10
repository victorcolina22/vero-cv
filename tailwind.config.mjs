/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
				'heart-animation': 'heart-animation 0.6s ease'
			},
			backgroundColor: {
				'peach': '#FEF1EE',
				'white': '#FFFFFF',
				'white-bg': '#F3F0ED',
				'gray-bg': '#323231'
			},
			colors: {
				'orange': '#E35738',
				'blue-deep': '#4B5594',
				'orange-light': '#EECEC7',
				'white-text': '#F5F0ED',
				'gray': '#323231',
				'blue': '#6167FF',
				'blue-light': '#9DA4F0'
			},
			fontFamily: {
				'caveat-bush': ['Caveat Brush', 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],
				'grafie': ['Grafie', 'sans-serif']
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'heart-animation': {
					'0%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(20deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			}
		},
	},
	plugins: [],
}
