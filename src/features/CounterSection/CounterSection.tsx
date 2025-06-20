import React, { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';

type TimeLeft = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const getTargetDate = (): string => {
	const urlParams = new URLSearchParams(window.location.search);
	const counterType = urlParams.get('counter');
	const year = new Date().getFullYear();

	return counterType === 'newyear'
		? `${year}-12-31T00:00:00`
		: `${year}-08-20T00:00:00`; // Default to Music festival
};

const calculateTimeLeft = (target: string): TimeLeft => {
	const difference = +new Date(target) - +new Date();

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	};
};

const formatTime = (time: number): string =>
	time < 10 ? `0${time}` : `${time}`;

const CounterSection: React.FC = () => {
	const targetDate = getTargetDate();
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
		calculateTimeLeft(targetDate)
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);

		// Handle URL changes (e.g., user edits URL and presses Enter)
		const handlePopState = () => {
			const counterSection = document.getElementById('counter');
			if (counterSection) {
				counterSection.scrollIntoView({ behavior: 'smooth' });
			}
		};

		// Scroll to counter section on initial load if URL has counter param
		if (window.location.search.includes('counter=')) {
			const counterSection = document.getElementById('counter');
			if (counterSection) {
				counterSection.scrollIntoView({ behavior: 'smooth' });
			}
		}

		// Listen for popstate event (triggered when user changes URL manually)
		window.addEventListener('popstate', handlePopState);

		// Clean up interval and event listener
		return () => {
			clearInterval(timer);
			window.removeEventListener('popstate', handlePopState);
		};
	}, [targetDate]);

	const eventName =
		new URLSearchParams(window.location.search).get('counter') === 'newyear'
			? 'New Year'
			: 'Helsinki Music Festival';

	const units: (keyof TimeLeft)[] = ['days', 'hours', 'minutes', 'seconds'];

	return (
		<section className="bg-background-light py-14 scroll-mt-20" id="counter">
			<Container className="text-center">
				<h2 className="text-xl lg:text-xl font-normal text-subtle mb-4 mx-auto md:max-w-5xl lg:max-w-4xl">
					We're counting down to a special moment! Enjoy better loan offers and
					limited-time rates, just in time for{' '}
					<span className="text-primary">{eventName}</span>
				</h2>
				<div className="flex justify-center items-end mt-10 gap-x- md:gap-x-8">
					{units.map((unit, index) => (
						<React.Fragment key={unit}>
							{index !== 0 && <div className="pb-4 invisible">:</div>}
							<div key={unit} className="flex flex-col w-24">
								<span className="text-4xl md:text-7xl font-medium text-primary text-center">
									{formatTime(timeLeft[unit])}
								</span>
								<p className="text-sm font-medium text-gray-500 mt-1 text-center">
									{unit.toUpperCase()}
								</p>
							</div>
						</React.Fragment>
					))}
				</div>
			</Container>
		</section>
	);
};

export default CounterSection;
