import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AirportPage } from './pages/AirportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/airport" element={<AirportPage />} />
      </Routes>
    </Router>
  );
}

export default App;