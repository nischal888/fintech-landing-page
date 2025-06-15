import React from 'react';
import Button from '@/components/ui/Button';

interface NavLink {
	label: string;
	href: string;
}

interface NavigationProps {
	navLinks: NavLink[];
	isMobile?: boolean;
	onLinkClick?: () => void;
	activeHref?: string;
	setActiveHref?: (href: string) => void;
}

const baseLinkClass = `
  text-body px-3 py-1 rounded-[8px] transition-all duration-200 ease-in-out 
  hover:bg-accent hover:text-white 
  active:bg-accent active:text-white 
  transform hover:scale-[1.02] active:scale-95
`;

const Navigation: React.FC<NavigationProps> = ({
	navLinks,
	isMobile = false,
	onLinkClick,
	activeHref,
	setActiveHref,
}) => {
	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		if (href.startsWith('#')) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}

			if (onLinkClick) onLinkClick();

			if (setActiveHref) setActiveHref(href);
			else window.location.hash = href; // fallback
		}
	};

	if (isMobile) {
		return (
			<nav className="flex flex-col items-center space-y-4">
				{navLinks.map(({ label, href }) => {
					const isActive = href === activeHref;

					return (
						<a
							key={label}
							href={href}
							onClick={(e) => handleClick(e, href)}
							className={`${baseLinkClass} text-base ${
								isActive ? 'bg-accent text-white' : ''
							}`}
						>
							{label}
						</a>
					);
				})}
				<Button fullWidth className="mx-4">
					Apply Now
				</Button>
			</nav>
		);
	}

	return (
		<nav className="hidden md:flex items-center space-x-8">
			<ul className="flex space-x-8">
				{navLinks.map(({ label, href }) => {
					const isActive = href === activeHref;

					return (
						<li key={label}>
							<a
								href={href}
								onClick={(e) => handleClick(e, href)}
								className={`${baseLinkClass} ${
									isActive ? 'bg-accent text-white' : ''
								}`}
							>
								{label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
