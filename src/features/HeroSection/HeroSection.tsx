import React from 'react';
import Container from '@/components/ui/Container';
import LoanForm from './LoanForm';

const HeroSection: React.FC = () => {
	return (
		<section
			className="bg-hero-gradient bg-cover bg-center min-h-screen py-12 md:py-14 
			lg:py-14 scroll-mt-20"
			id="hometop"
		>
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Column: Text Content */}
					<div className="text-center lg:text-left">
						<h1
							className="text-4xl lg:text-5xl font-extrabold text-primary 
						leading-tight"
						>
							Flexible Loans
						</h1>
						<p className="text-2xl lg:text-3xl text-primary font-semibold mt-2">
							from €1,000 up to €20,000
						</p>
						<p className="text-2xl lg:text-3xl text-primary font-normal mt-1">
							tailored to your needs
						</p>

						<p className="mt-6 text-base lg:text-lg text-muted">
							With fixed monthly payments over 12 months at a competitive 5%
							loan rate. Enjoy a simple application process, fast approval, and
							transparent terms designed to help you achieve your goals.
						</p>
					</div>

					<div
						className="bg-white p-8 rounded-lg shadow-xl w-full max-w-[456px]
					 mx-auto lg:mx-0 lg:justify-self-end"
					>
						<h2 className="text-xl font-medium text-body mb-4 text-left">
							Loan that fit
						</h2>
						<LoanForm />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
