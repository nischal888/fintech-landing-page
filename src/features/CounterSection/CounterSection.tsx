// src/components/features/CounterSection/CounterSection.tsx
import React, { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';

const CounterSection: React.FC = () => {
	const calculateTimeLeft = () => {
		// Set a target date for Midsummer (e.g., June 24th of the current year)
		const year = new Date().getFullYear();
		const difference = +new Date(`${year}-06-24T00:00:00`) - +new Date();

		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
			};
		} else {
			// If the date has passed, show 0
			timeLeft = { days: 0, hours: 0, minutes: 0 };
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		// Clear the timer if the component is unmounted
		return () => clearTimeout(timer);
	});

	const formatTime = (time: number | undefined) => {
		if (time === undefined) return '00';
		return time < 10 ? `0${time}` : time;
	};

	return (
		<section className="bg-background-light py-14">
			<Container className="text-center">
				<h2 className="text-2xl lg:text-2xl font-normal text-subtle mb-4 mx-auto md:max-w-5xl lg:max-w-5xl">
					We're counting down to a special moment! Enjoy better loan offers and
					limited-time rates, just in time for the{' '}
					<span className="text-primary">Midsummer</span>
				</h2>
				<div className="flex justify-center items-end space-x-4 md:space-x-8 mt-10">
					<div className="text-center">
						<span className="text-5xl md:text-7xl font-medium text-primary">
							{formatTime(timeLeft.days)}
						</span>
						<p className="text-sm font-semibold text-gray-500 mt-1">DAYS</p>
					</div>
					<div className="text-5xl md:text-7xl font-medium text-primary pb-4">
						:
					</div>
					<div className="text-center">
						<span className="text-5xl md:text-7xl font-medium  text-primary">
							{formatTime(timeLeft.hours)}
						</span>
						<p className="text-sm font-semibold text-gray-500 mt-1">HOUR</p>
					</div>
					<div className="text-5xl md:text-7xl font-medium text-primary pb-4">
						:
					</div>
					<div className="text-center">
						<span className="text-5xl md:text-7xl font-medium  text-primary">
							{formatTime(timeLeft.minutes)}
						</span>
						<p className="text-sm font-semibold text-gray-500 mt-1">MINUTE</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CounterSection;
