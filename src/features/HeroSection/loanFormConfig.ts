export interface LoanFormField {
	id: string;
	label: string;
	type: 'text' | 'email' | 'checkbox' | 'select';
	name: string;
	placeholder?: string;
	options?: string[]; // for select
	required?: boolean;
	validation?: (value: any) => string | null; // return error message or null
}

const loanAmounts = Array.from({ length: 20 }, (_, i) => `${(i + 1) * 1000} €`);

export const formConfig: LoanFormField[] = [
	{
		id: 'loan-amount',
		label: 'Loan Amount',
		type: 'select',
		name: 'loanAmount',
		options: loanAmounts,
		required: true,
		validation: (value) => {
			if (!value) return 'Please choose a loan amount.';
			const num = parseInt(value.replace(' €', ''), 10);
			if (isNaN(num) || num < 1000 || num > 20000) return 'Invalid loan amount';
			return null;
		},
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
		placeholder: 'Enter your name',
		required: true,
		validation: (value) =>
			value.trim() === ''
				? 'Please add your name so we know who you are.'
				: null,
	},
	{
		id: 'email',
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Enter your email',
		required: true,
		validation: (value) => {
			if (!value) return 'Please share your email so we can contact you.';
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(value)
				? null
				: 'Oops, that email doesn’t look right. Could you check it?';
		},
	},
	{
		id: 'phone-number',
		label: 'Phone Number',
		type: 'text',
		name: 'phoneNumber',
		placeholder: 'Enter your phone number',
		required: true,
		validation: (value) => {
			if (!value.trim())
				return 'Please enter your phone number so we can reach you.';
			const phoneRegex =
				/^(?:\+358|0)\s?(?:4[0-1]|4[4-6]|49|50|57|7[1-4]|77|80|90|[2-3]|[5-6]|8|9|1[3-9])\s?[0-9]{5,8}$/;
			return phoneRegex.test(value)
				? null
				: 'Unmatched. Try a Finnish like 040 123 4567 or 09 123 4567';
		},
	},
	{
		id: 'terms',
		label: 'I accept the terms and conditions',
		type: 'checkbox',
		name: 'terms',
		required: true,
		validation: (value) => (value ? null : 'You must accept the terms'),
	},
];
