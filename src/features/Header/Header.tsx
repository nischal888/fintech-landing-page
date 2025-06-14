import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navLinks = [
		{ label: 'Home', href: '#hometop' },
		{ label: 'Services', href: '#services' },
		{ label: 'Counter', href: '#counter' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<header className="sticky top-0 z-50 bg-white py-4 shadow-sm">
			<Container className="flex items-center justify-between">
				<div className="text-2xl font-bold text-primary">FinTech</div>
				<Navigation navLinks={navLinks} />
				<div className="md:hidden">
					<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>
			</Container>

			{isMenuOpen && (
				<div className="md:hidden mt-4">
					<Navigation
						navLinks={navLinks}
						isMobile
						onLinkClick={() => setIsMenuOpen(false)}
					/>
				</div>
			)}
		</header>
	);
};

export default Header;
