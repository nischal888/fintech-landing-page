// src/components/features/Hero/LoanForm.tsx
import React, { useState, type FormEvent } from 'react';
import { formConfig } from './loanFormConfig';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

interface FormValues {
	[key: string]: any;
}

const calculateMonthlyPayment = (amount: number): number => {
	const months = 12;
	const annualRate = 0.05;
	// Simple interest for 12 months: P + P*r
	const total = amount * (1 + annualRate);
	return total / months;
};

const LoanForm: React.FC = () => {
	const initialValues = formConfig.reduce((acc, field) => {
		acc[field.name] = field.type === 'checkbox' ? false : '';
		return acc;
	}, {} as FormValues);

	const [values, setValues] = useState<FormValues>(initialValues);
	const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

	const validateField = (name: string, value: any): string | null => {
		const field = formConfig.find((f) => f.name === name);
		return field?.validation ? field.validation(value) : null;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, type } = e.target;
		const value =
			type === 'checkbox'
				? (e.target as HTMLInputElement).checked
				: e.target.value;
		setValues((prev) => ({ ...prev, [name]: value }));

		// Validate field on change and update errors
		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setValues((prev) => ({ ...prev, [name]: value }));

		// Validate field on input and update errors
		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const validate = (): boolean => {
		const newErrors: { [key: string]: string | null } = {};
		let isValid = true;

		formConfig.forEach(({ name, validation }) => {
			if (validation) {
				const error = validation(values[name]);
				newErrors[name] = error;
				if (error) isValid = false;
			}
		});

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		// TODO: handle submit (e.g. send data to server)
		console.log('Form submitted', values);
	};

	// Extract numeric amount for calculation
	const loanAmountNumber = parseInt(
		(values.loanAmount as string)?.replace(' €', '') || '0',
		10
	);
	const monthlyPayment = loanAmountNumber
		? calculateMonthlyPayment(loanAmountNumber)
		: 0;

	return (
		<form onSubmit={handleSubmit} className="text-left">
			<div className="grid grid-cols-2 gap-6 mb-6">
				{/* Loan Amount Select */}
				<div>
					<label htmlFor="loan-amount" className="block text-sm text-body mb-1">
						Loan Amount
					</label>
					<Select
						id="loan-amount"
						name="loanAmount"
						value={values.loanAmount}
						onChange={handleChange}
						aria-label="Select loan amount"
					>
						<option value="">please select</option>
						{formConfig
							.find((f) => f.name === 'loanAmount')
							?.options?.map((opt) => (
								<option key={opt} value={opt}>
									{opt}
								</option>
							))}
					</Select>

					<p className="text-xs text-red-500 h-3 mt-1">
						{errors.loanAmount || ''}
					</p>
				</div>

				{/* Monthly Payment Display */}
				<div className="flex flex-col items-center h-full text-center">
					<label className="block text-sm text-body mb-1">
						Estimated Monthly Pay
					</label>
					<p className="mt-1 text-2xl text-body">
						{monthlyPayment ? monthlyPayment.toFixed(2) + ' €' : '-'}
					</p>
				</div>
			</div>

			{/* Co-applicant Checkbox */}
			<div className="flex items-center mb-6">
				<Checkbox
					id="co-applicant"
					name="coApplicant"
					checked={values.coApplicant}
					onChange={handleChange}
				/>
				<label htmlFor="co-applicant" className="ml-2 block text-sm text-body">
					I'm applying with a co-applicant
				</label>
			</div>

			{/* Name, Email, Phone fields */}
			{['name', 'email', 'phoneNumber'].map((fieldName) => {
				const field = formConfig.find((f) => f.name === fieldName)!;
				return (
					<div key={field.id} className="mt-3">
						<label
							htmlFor={field.id}
							className="block text-sm font-normal text-body mb-1"
						>
							{field.label}
						</label>
						<Input
							type={field.type}
							id={field.id}
							name={field.name}
							placeholder={field.placeholder}
							value={values[field.name]}
							onInput={handleInput}
						/>

						<p className="text-xs text-red-500 h-3 mt-1">
							{errors[field.name] || ''}
						</p>
					</div>
				);
			})}

			{/* Terms Checkbox */}
			<div className="flex items-center mt-3 mb-6">
				<Checkbox
					id="terms"
					name="terms"
					checked={values.terms}
					onChange={handleChange}
					required
				/>
				<label htmlFor="terms" className="ml-2 block text-sm text-body">
					I accept the{' '}
					<a href="#" className="text-primary hover:underline">
						terms and conditions
					</a>
				</label>
			</div>

			<Button type="submit">Submit</Button>
		</form>
	);
};

export default LoanForm;
