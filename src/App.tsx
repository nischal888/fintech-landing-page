import Header from '@/features/Header/Header';
import './App.css';
import HeroSection from '@/features/HeroSection/HeroSection';
import ServiceContent from '@/features/ServiceContent/ServiceContent';
import CounterSection from '@/features/CounterSection/CounterSection';
import Footer from '@/features/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<ServiceContent />
			<CounterSection />
			<Footer />
		</>
	);
}

export default App;
