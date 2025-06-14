import Header from '@/features/Header/Header';
import './App.css';
import HeroSection from '@/features/HeroSection/HeroSection';
import MainContent from '@/features/MainContent/MainContent';
import CounterSection from '@/features/CounterSection/CounterSection';
import Footer from '@/features/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<HeroSection />

			<MainContent />
			<CounterSection />
			<Footer />
		</>
	);
}

export default App;
