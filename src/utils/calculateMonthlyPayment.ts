export const calculateMonthlyPayment = (amount: number): number => {
	const months = 12;
	const annualRate = 0.05;
	return (amount * (1 + annualRate)) / months;
};

export const parseLoanAmount = (value: string): number => {
	return parseInt(value.replace(' €', ''), 10) || 0;
};
