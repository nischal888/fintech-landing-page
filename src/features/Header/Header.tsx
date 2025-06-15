import React, { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeHref, setActiveHref] = useState(
		window.location.hash || '#hometop'
	);

	const navLinks = [
		{ label: 'Home', href: '#hometop' },
		{ label: 'Services', href: '#services' },
		{ label: 'Counter', href: '#counter' },
		{ label: 'Contact', href: '#contact' },
	];

	useEffect(() => {
		const onHashChange = () => {
			setActiveHref(window.location.hash || '#hometop');
		};
		window.addEventListener('hashchange', onHashChange);

		// Optional: check hash on load
		onHashChange();

		return () => window.removeEventListener('hashchange', onHashChange);
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-white py-4 shadow-sm">
			<Container className="flex items-center justify-between">
				<div
					className="text-2xl font-bold text-primary"
					aria-label="Company logo"
				>
					FinTech
				</div>
				<Navigation
					navLinks={navLinks}
					activeHref={activeHref}
					setActiveHref={setActiveHref}
				/>
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
				<div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 p-4">
					<Navigation
						navLinks={navLinks}
						isMobile
						onLinkClick={() => setIsMenuOpen(false)}
						activeHref={activeHref} // pass activeHref here too
					/>
				</div>
			)}
		</header>
	);
};

export default Header;
