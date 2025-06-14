// src/components/features/MainContent/MainContent.tsx
import React from 'react';
import Container from '@/components/ui/Container';

// Data for the service cards - makes it easy to add or remove services later
const servicesData = [
	{
		image: 'https://placehold.co/200x100/B9C9FF/B9C9FF', // Placeholder
		title: 'Lorem ipsum dolor sit amet, consectetur',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	},
	{
		image: 'https://placehold.co/200x100/B9C9FF/B9C9FF',
		title: 'Lorem ipsum dolor sit amet, consectetur',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	},
	{
		image: 'https://placehold.co/200x100/B9C9FF/B9C9FF',
		title: 'Lorem ipsum dolor sit amet, consectetur',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
	},
];

// Reusable ServiceCard component
const ServiceCard = ({ image, title, description }) => (
	<div className="flex flex-col">
		<img
			src={image}
			alt={title}
			className="w-full h-40 object-cover mb-4 rounded-lg"
		/>
		<h3 className="text-xl font-medium text-body mb-2">{title}</h3>
		<p className="text-muted text-sm">{description}</p>
	</div>
);

const MainContent: React.FC = () => {
	return (
		<section className="bg-surface py-14">
			<Container>
				<h2 className="text-3xl font-medium text-primary text-left mb-12">
					Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 text-body text-left lg:grid-cols-3 gap-8">
					{servicesData.map((service, index) => (
						<ServiceCard
							key={index}
							image={service.image}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default MainContent;
