import React from 'react';
import Container from '@/components/ui/Container';

const footerLinks = {
	about: [
		'Overview',
		'Management Team',
		'Contact',
		'Locations',
		'Awards and Recognition',
	],
	disclosure: [
		'Compliance',
		'Risk Management',
		'Social News',
		'Training Disclosures',
		'Company Secretary',
	],
	useful: ['Office Hours', 'Contact us', 'HR Calculator', 'News', 'Careers'],
};

const Footer: React.FC = () => {
	return (
		<footer className="bg-accent text-white py-12 scroll-mt-20" id="contact">
			<Container>
				<div className="flex flex-col lg:flex-row justify-between gap-y-8">
					{/* Left Column: Brand and Contact */}
					<div className="lg:col-span-1 space-y-4 text-left">
						<h3 className="text-2xl font-bold">FinTech</h3>
						<p className="text-surface">Yliopistokatu, 90570, Oulu Finland</p>
						<p className="text-surface">Phone: +358 4424 84936</p>
						<p className="text-surface">Email: info@fintech.com</p>
						<div className="flex space-x-4 pt-2">
							<a
								href="#"
								className="text-surface hover:text-white transition-colors"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 3.808s-.012 2.741-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-3.808.06s-2.741-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427-.048-1.067-.06-1.407-.06-3.808s.012-2.741.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.316 2.427-.364C9.784 2.013 10.13 2 12.315 2zM12 8.118c-2.136 0-3.862 1.726-3.862 3.862s1.726 3.862 3.862 3.862 3.862-1.726 3.862-3.862S14.136 8.118 12 8.118zM12 14.17c-1.18 0-2.146-.966-2.146-2.146s.966-2.146 2.146-2.146 2.146.966 2.146 2.146-.966 2.146-2.146 2.146zm6.303-7.857a1.44 1.44 0 10-2.88 0 1.44 1.44 0 002.88 0z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className="lg:col-span-3">
						<div className="ml-auto flex flex-col sm:flex-row justify-end gap-12 text-left">
							<div className="flex-1 min-w-[150px]">
								<h4 className="font-bold text-lg mb-4">About us</h4>
								<ul className="space-y-2">
									{footerLinks.about.map((link) => (
										<li
											key={link}
											className="text-surface text-sm hover:text-white transition-colors leading-relaxed whitespace-nowrap"
										>
											{link}
										</li>
									))}
								</ul>
							</div>

							<div className="flex-1 min-w-[150px]">
								<h4 className="font-bold text-lg mb-4">Disclosure</h4>
								<ul className="space-y-2">
									{footerLinks.disclosure.map((link) => (
										<li
											key={link}
											className="text-surface text-sm hover:text-white transition-colors leading-relaxed whitespace-nowrap"
										>
											{link}
										</li>
									))}
								</ul>
							</div>

							<div className="flex-1 min-w-[150px]">
								<h4 className="font-bold text-lg mb-4">Useful links</h4>
								<ul className="space-y-2">
									{footerLinks.useful.map((link) => (
										<li
											key={link}
											className="text-surface text-sm hover:text-white transition-colors leading-relaxed whitespace-nowrap"
										>
											{link}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
