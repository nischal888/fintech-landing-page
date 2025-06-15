import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className = '',
	...props
}) => {
	return (
		<button
			className={`w-full py-3 text-base rounded-md bg-accent
				 text-white hover:bg-primary-dark focus:ring-primary 
				 transform transition-transform duration-200 hover:scale-105 
				 active:scale-95 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
