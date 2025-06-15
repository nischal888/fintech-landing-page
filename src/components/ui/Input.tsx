import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
	return (
		<input
			className={`block w-full px-4 py-3 border border-inputBorder rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 ease-in-out ${className}`}
			{...props}
		/>
	);
};

export default Input;
