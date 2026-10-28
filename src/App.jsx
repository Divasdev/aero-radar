import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AirportPage } from './pages/AirportPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { FlightPage } from './pages/FlightPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/airport" element={<AirportPage />} />
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;