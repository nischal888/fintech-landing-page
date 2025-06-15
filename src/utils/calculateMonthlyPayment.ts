export const calculateMonthlyPayment = (amount: number): number => {
	const months = 12;
	const annualRate = 0.05;
	const monthlyRate = annualRate / 12;
	return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
};
