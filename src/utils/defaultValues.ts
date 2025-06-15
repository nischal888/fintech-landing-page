import { formConfig } from '@/features/HeroSection/loanFormConfig';

export const generateInitialValues = () =>
	formConfig.reduce((acc, field) => {
		acc[field.name] = field.type === 'checkbox' ? false : '';
		return acc;
	}, {} as { [key: string]: string | boolean });
