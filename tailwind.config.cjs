/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primero: '#045256',
				segundo: '#9ab8ba',
				tercero: '#ddf7f8',
				cuarto: '#0b1516',
			},
			screens: {
				mob: { max: '320px' },
				mobl: { max: '480px' },
				tab: { min: '481px', max: '600px' },
				tabl: { max: '800px' },
				lap: { max: '768px' },
				lapl: { max: '1204px' },
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
