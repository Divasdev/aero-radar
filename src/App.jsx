import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AirportPage } from './pages/AirportPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { FlightPage } from './pages/FlightPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/airport" element={<AirportPage />} />
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;