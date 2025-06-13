/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E40AF', // logo, hero big text
				cta: '#2563EB', // CTA, footer bg, nav hover
				navText: '#111827', // nav text, form label
				heroSmallText: '#374151', // hero small text
				counterText: '#475569', // counter text
				counterBg: '#F5FCFF', // counter bg
				footerText: '#E0E7FF', // footer text
				mainContentBg: '#E0E7FF', // main content bg
				imagePlaceholderBg: '#B9C9FF', // image placeholder bg
				error: '#DC2626',
				success: '#16A34A',
				backgroundImage: {
					'hero-gradient': 'linear-gradient(to top, #FFFFFF, #E0E7FF)', // hero section gradient bottom to top
				},
			},
		},
	},
	plugins: [],
};
