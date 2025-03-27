import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DoctorAuth from './pages/DoctorAuth';
import PatientAuth from './pages/PatientAuth';
import TermsAndConditions from './pages/TermsAndConditions';
import DoctorHome from './pages/DoctorHome';
import PatientHome from './pages/PatientHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor-auth" element={<DoctorAuth />} />
          <Route path="/patient-auth" element={<PatientAuth />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/doctor-home" element={<DoctorHome />} />
          <Route path="/patient-home" element={<PatientHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
