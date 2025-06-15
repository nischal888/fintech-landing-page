import React, { useState, type FormEvent } from 'react';
import { formConfig } from './loanFormConfig';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

type FormValue = string | boolean;

interface FormValues {
	[key: string]: FormValue;
}

const calculateMonthlyPayment = (amount: number): number => {
	const months = 12;
	const annualRate = 0.05;
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
	const [showCoApplicantForm, setShowCoApplicantForm] = useState(false);
	const [coApplicantValues, setCoApplicantValues] = useState<FormValues>({
		name: '',
		email: '',
		phoneNumber: '',
	});
	const [coApplicantErrors, setCoApplicantErrors] = useState<{
		[key: string]: string | null;
	}>({});
	const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success'>(
		'idle'
	);

	const validateField = (name: string, value: FormValue): string | null => {
		const field = formConfig.find((f) => f.name === name);
		if (!field || !field.validation) return null;
		return field.validation(value);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, type } = e.target;
		const value: FormValue =
			type === 'checkbox'
				? (e.target as HTMLInputElement).checked
				: e.target.value;

		setValues((prev) => ({ ...prev, [name]: value }));

		if (name === 'coApplicant' && value === false) {
			// Reset co-applicant form if unchecked
			setCoApplicantValues({
				name: '',
				email: '',
				phoneNumber: '',
			});
			setCoApplicantErrors({});
			setShowCoApplicantForm(false);
		}

		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;

		if (showCoApplicantForm) {
			setCoApplicantValues((prev) => ({ ...prev, [name]: value }));
			const error = validateField(name, value);
			setCoApplicantErrors((prev) => ({ ...prev, [name]: error }));
		} else {
			setValues((prev) => ({ ...prev, [name]: value }));
			const error = validateField(name, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const validate = (): boolean => {
		let isValid = true;
		const newMainErrors: typeof errors = {};
		const newCoErrors: typeof coApplicantErrors = {};

		formConfig.forEach(({ name, validation }) => {
			if (!validation) return;

			if (['name', 'email', 'phoneNumber'].includes(name)) {
				const value = showCoApplicantForm
					? coApplicantValues[name]
					: values[name];
				const error = validation(value);
				if (showCoApplicantForm) {
					newCoErrors[name] = error;
					if (error) isValid = false;
				} else {
					newMainErrors[name] = error;
					if (error) isValid = false;
				}
			} else {
				const error = validation(values[name]);
				newMainErrors[name] = error;
				if (error) isValid = false;
			}
		});

		setErrors(newMainErrors);
		setCoApplicantErrors(newCoErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const isValid = validate();

		if (!isValid) return;

		if (values.coApplicant && !showCoApplicantForm) {
			setShowCoApplicantForm(true);
			return;
		}

		const payload = {
			mainApplicant: values,
			coApplicant: values.coApplicant ? coApplicantValues : null,
		};

		console.log('Form submitted', payload);
		setSubmissionStatus('success');
		setTimeout(() => {
			setSubmissionStatus('idle');
		}, 3000);

		// Reset form
		setValues(initialValues);
		setErrors({});
		setShowCoApplicantForm(false);
		setCoApplicantValues({ name: '', email: '', phoneNumber: '' });
		setCoApplicantErrors({});
	};

	const loanAmountNumber = parseInt(
		(values.loanAmount as string)?.replace(' €', '') || '0',
		10
	);
	const monthlyPayment = loanAmountNumber
		? calculateMonthlyPayment(loanAmountNumber)
		: 0;

	return (
		<>
			<form onSubmit={handleSubmit} className="text-left">
				<div className="grid grid-cols-2 gap-6 mb-6">
					<div>
						<label
							htmlFor="loan-amount"
							className="block text-sm text-body mb-1"
						>
							Loan Amount
						</label>
						<Select
							id="loan-amount"
							name="loanAmount"
							value={values.loanAmount as string}
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

					<div className="flex flex-col items-center h-full text-center">
						<label className="block text-sm text-body mb-1">
							Estimated Monthly Pay
						</label>
						<p className="mt-1 text-2xl text-body">
							{monthlyPayment ? monthlyPayment.toFixed(2) + ' €' : '-'}
						</p>
					</div>
				</div>

				{/* Checkboxes - hidden on co-applicant form */}
				<div className={`h-8 mb-3 ${showCoApplicantForm ? 'hidden' : 'block'}`}>
					<div className="flex items-center mb-6">
						<Checkbox
							id="co-applicant"
							name="coApplicant"
							checked={values.coApplicant as boolean}
							onChange={handleChange}
						/>
						<label
							htmlFor="co-applicant"
							className="ml-2 block text-sm text-body"
						>
							I'm applying with a co-applicant
						</label>
					</div>
				</div>

				{/* Co-applicant Fields */}
				{showCoApplicantForm && (
					<div className="flex justify-between items-center mb-3 h-8">
						<>
							<h3 className="text-md font-regular">Co-applicant info</h3>

							<button
								type="button"
								onClick={() => setShowCoApplicantForm(false)}
								className="text-sm text-primary hover:underline"
							>
								Back
							</button>
						</>
					</div>
				)}

				{['name', 'email', 'phoneNumber'].map((fieldName) => {
					const field = formConfig.find((f) => f.name === fieldName)!;
					const value = showCoApplicantForm
						? (coApplicantValues[fieldName] as string)
						: (values[fieldName] as string);
					const error = showCoApplicantForm
						? coApplicantErrors[fieldName]
						: errors[fieldName];

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
								value={value}
								onInput={handleInput}
							/>
							<p className="text-xs text-red-500 h-3 mt-1">{error || ''}</p>
						</div>
					);
				})}
				<div
					className={`flex items-center mt-3 mb-1 ${
						showCoApplicantForm ? 'invisible' : ''
					}`}
				>
					<Checkbox
						id="terms"
						name="terms"
						checked={values.terms as boolean}
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

				<Button type="submit" className="mt-6">
					{values.coApplicant && !showCoApplicantForm ? 'Next' : 'Submit'}
				</Button>
			</form>
			{submissionStatus === 'success' && (
				<div
					className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded shadow-lg z-50 transition-all duration-500 ${
						submissionStatus === 'success'
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-4 pointer-events-none'
					}`}
				>
					Thank you! We've received your application and will be in touch soon.
				</div>
			)}
		</>
	);
};

export default LoanForm;
