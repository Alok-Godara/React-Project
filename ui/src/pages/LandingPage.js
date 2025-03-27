import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleDoctorClick = () => {
    navigate('/doctor-auth');
  };

  const handlePatientClick = () => {
    navigate('/patient-auth');
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="app-title">Project-H</h1>
        <p className="app-subtitle">Healthcare at your fingertips</p>
        
        <div className="button-container">
          <button 
            className="role-button doctor-button"
            onClick={handleDoctorClick}
          >
            Doctor
          </button>
          
          <button 
            className="role-button patient-button"
            onClick={handlePatientClick}
          >
            Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 