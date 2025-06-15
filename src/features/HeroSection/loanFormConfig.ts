export interface LoanFormField {
	id: string;
	label: string;
	type: 'text' | 'email' | 'checkbox' | 'select';
	name: string;
	placeholder?: string;
	options?: string[];
	required?: boolean;
	validation?: (value: string | boolean) => string | null;
}

const loanAmounts = Array.from({ length: 20 }, (_, i) => `${(i + 1) * 1000} €`);

type Validator<T> = (value: T) => string | null;

function withStringTrim(
	validator: Validator<string>
): Validator<string | boolean> {
	return (value) => {
		if (typeof value !== 'string') {
			return 'Invalid value type';
		}
		const trimmed = value.trim();
		return validator(trimmed);
	};
}

function withBooleanCheck(
	validator: Validator<boolean>
): Validator<string | boolean> {
	return (value) => {
		if (typeof value !== 'boolean') {
			return 'Invalid value type';
		}
		return validator(value);
	};
}

export const formConfig: LoanFormField[] = [
	{
		id: 'loan-amount',
		label: 'Loan Amount',
		type: 'select',
		name: 'loanAmount',
		options: loanAmounts,
		required: true,
		validation: withStringTrim((value) => {
			if (!value) return 'Please choose a loan amount.';
			return null;
		}),
	},
	{
		id: 'co-applicant',
		label: "I'm applying with a co-applicant",
		type: 'checkbox',
		name: 'coApplicant',
	},
	{
		id: 'name',
		label: 'Name',
		type: 'text',
		name: 'name',
		placeholder: 'name',
		required: true,
		validation: withStringTrim((value) =>
			value === '' ? 'Please add your name so we know who you are.' : null
		),
	},
	{
		id: 'email',
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'email',
		required: true,
		validation: withStringTrim((value) => {
			if (!value) return 'Please share your email so we can contact you.';
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(value)
				? null
				: 'Oops, that email doesn’t look right. Could you check it?';
		}),
	},
	{
		id: 'phone-number',
		label: 'Phone Number',
		type: 'text',
		name: 'phoneNumber',
		placeholder: 'phone',
		required: true,
		validation: withStringTrim((value) => {
			if (!value) return 'Please enter your phone number so we can reach you.';
			const phoneRegex =
				/^(?:\+358|0)\s?(?:4[0-1]|4[4-6]|49|50|57|7[1-4]|77|80|90|[2-3]|[5-6]|8|9|1[3-9])\s?[0-9]{5,8}$/;
			return phoneRegex.test(value)
				? null
				: 'Unmatched. Try a Finnish like 040 123 4567 or 09 123 4567';
		}),
	},
	{
		id: 'terms',
		label: 'I accept the terms and conditions',
		type: 'checkbox',
		name: 'terms',
		required: true,
		validation: withBooleanCheck((value) =>
			value ? null : 'You must accept the terms'
		),
	},
];
