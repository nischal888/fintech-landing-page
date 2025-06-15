import React from 'react';
import Container from '@/components/ui/Container';
import ServiceCard from './ServiceCard';
import { servicesData } from './serviceData';

const ServiceContent: React.FC = () => {
	return (
		<section className="bg-surface py-14 scroll-mt-20" id="services">
			<Container>
				<h2 className="text-3xl font-medium text-primary text-left mb-12">
					Services
				</h2>
				<div
					className="grid grid-cols-1 md:grid-cols-2 text-body text-left 
				lg:grid-cols-3 gap-8"
				>
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

export default ServiceContent;
