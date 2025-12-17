import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Visa from './pages/Visa';
import Flights from './pages/Flights';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:country" element={<DestinationDetail />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/flights" element={<Flights />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;