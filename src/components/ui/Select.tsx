import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
	className = '',
	children,
	...props
}) => {
	return (
		<select
			className={`mt-1 block pr-10 w-full px-4 py-3 text-base border border-inputBorder focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm ${className}`}
			{...props}
		>
			{children}
		</select>
	);
};

export default Select;
