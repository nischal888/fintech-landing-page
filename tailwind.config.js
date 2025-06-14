/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E40AF', // Main branding
				accent: '#2563EB', // CTA buttons, hovers
				body: '#111827', // Default text color
				muted: '#374151', // Secondary/muted text
				subtle: '#475569', // Subtle/inactive
				background: '#F5FCFF', // Light backgrounds
				surface: '#E0E7FF', // Cards, containers
				placeholder: '#B9C9FF', // Image placeholders
				footerText: '#E0E7FF', // Footer text
				error: '#DC2626',
				success: '#16A34A',
				inputBorder: '#A9A9A9',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(to top, #FFFFFF, #E0E7FF)', // hero section gradient bottom to top
			},
		},
	},
	plugins: [],
};
