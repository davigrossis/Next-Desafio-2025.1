import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				md: '768px',
				lg: '1280px',
				xl: '1920px',
				'2xl': '2560px',
				'3xl': '3440px',
			},
			colors: {
				header: 'var(--header)',
				footer: 'var(--footer)',
				white: 'var(--white)',
				bg2: 'var(--bg-2)',
				bg1: 'var(--bg-1)',
				bgcard: 'var(--bg-card)',
				btncard: 'var(--btn-card)',
				sidebar: 'var(--sidebar: #183a4d)',
				modals: 'var(--modals: #183a4d)',
			  },
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				oswald: ['var(--font-oswald)', 'sans-serif'],
				mont: ['var(--font-montserrat)', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
