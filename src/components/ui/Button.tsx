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
			className={`w-full py-3 text-base rounded-md bg-accent text-white hover:bg-primary-dark focus:ring-primary ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
