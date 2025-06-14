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
}

const Navigation: React.FC<NavigationProps> = ({
	navLinks,
	isMobile = false,
	onLinkClick,
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
		}
	};

	if (isMobile) {
		return (
			<nav className="flex flex-col items-center space-y-4">
				{navLinks.map(({ label, href }) => (
					<a
						key={label}
						href={href}
						onClick={(e) => handleClick(e, href)}
						className="text-text-dark hover:text-primary transition-colors text-base"
					>
						{label}
					</a>
				))}
				<Button fullWidth className="mx-4">
					Apply Now
				</Button>
			</nav>
		);
	}

	return (
		<nav className="hidden md:flex items-center space-x-8">
			<ul className="flex space-x-8">
				{navLinks.map(({ label, href }) => (
					<li key={label}>
						<a
							href={href}
							onClick={(e) => handleClick(e, href)}
							className="text-body hover:text-primary transition-colors text-base"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
			<Button className="px-5 py-2.5">Apply Now</Button>
		</nav>
	);
};

export default Navigation;
