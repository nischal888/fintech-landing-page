import { formConfig } from '@/features/HeroSection/loanFormConfig';

export const validateField = (
	name: string,
	value: string | boolean
): string | null => {
	const field = formConfig.find((f) => f.name === name);
	if (!field || !field.validation) return null;
	return field.validation(value);
};
