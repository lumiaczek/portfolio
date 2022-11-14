/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1800px'
			},
			keyframes: {
				loadS: {
					'0%': { width: '0%' },
					'100%': { width: '70%' }
				},
				loadH: {
					'0%': { width: '0%' },
					'100%': { width: '93%' }
				},
				loadJ: {
					'0%': { width: '0%' },
					'100%': { width: '75%' }
				},
				loadT: {
					'0%': { width: '0%' },
					'100%': { width: '40%' }
				},
				loadC: {
					'0%': { width: '0%' },
					'100%': { width: '85%' }
				},
				loadTa: {
					'0%': { width: '0%' },
					'100%': { width: '78%' }
				},
				loadMo: {
					'0%': { width: '0%' },
					'100%': { width: '60%' }
				},
				loadEx: {
					'0%': { width: '0%' },
					'100%': { width: '65%' }
				},
				loadMy: {
					'0%': { width: '0%' },
					'100%': { width: '55%' }
				}
			}
		}
	},
	plugins: []
};
