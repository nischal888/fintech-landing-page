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
		<>
			<select
				className={`appearance-none  mt-1 block pr-5 lg:pr-10 w-full px-4 py-3 text-base border border-inputBorder focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm transition-colors duration-200 ease-in-out ${className}`}
				{...props}
			>
				{children}
			</select>
			<span className="pointer-events-none absolute right-2 [top:55%] transform -translate-y-1/2 text-gray-500">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="black"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</span>
		</>
	);
};

export default Select;
