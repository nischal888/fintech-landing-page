import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
	return (
		<div className={`w-full px-6 lg:px-0 fin-container ${className}`}>
			{children}
		</div>
	);
};

export default Container;
