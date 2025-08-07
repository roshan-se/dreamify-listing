import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-out',
			once: false,
			mirror: true,
		});

		AOS.refresh();

	}, []);
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
