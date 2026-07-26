import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Enhance from './pages/Enhance';
import Features from './pages/Features';
import Technology from './pages/Technology';
import About from './pages/About';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enhance" element={<Enhance />} />
        <Route path="/features" element={<Features />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;