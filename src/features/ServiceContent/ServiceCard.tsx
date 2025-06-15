import React from 'react';
import { type Service } from './types';

const ServiceCard: React.FC<Service> = ({ image, title, description }) => (
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

export default ServiceCard;
