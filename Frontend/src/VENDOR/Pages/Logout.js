import React, { useState, useEffect } from 'react';
import '../Pages/Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate(); // Use the useNavigate hook directly

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      // Perform logout actions here, such as clearing authentication tokens or user session data
      // For demonstration purposes, we will clear a hypothetical authentication token from localStorage
      localStorage.removeItem('authToken');

      // Simulate a delay to show the spinner
      await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the delay as needed

      // Redirect the user to the login page or home page after logout
      navigate('/login'); // Use the navigate function to redirect
    };

    logout();
  }, [navigate]);

  return (
    <div className="logout-container">
      {/* Optionally, you can display a message or spinner to indicate that the user is logging out */}
      {loading ? (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      ) : (
        <h1>Logging out...</h1>
      )}
    </div>
  );
};

export default Logout;
