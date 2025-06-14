import React from 'react';
import Button from '@/components/ui/Button';

interface NavigationProps {
	navLinks: string[];
	isMobile?: boolean;
	onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
	navLinks,
	isMobile = false,
	onLinkClick,
}) => {
	if (isMobile) {
		return (
			<nav className="flex flex-col items-center space-y-4">
				{navLinks.map((link) => (
					<a
						key={link}
						href="#"
						onClick={onLinkClick}
						className="text-text-dark hover:text-primary transition-colors text-base"
					>
						{link}
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
				{navLinks.map((link) => (
					<li key={link}>
						<a
							href="#"
							className="text-body hover:text-primary transition-colors text-base"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
			<Button className="px-5 py-2.5">Apply Now</Button>
		</nav>
	);
};

export default Navigation;
