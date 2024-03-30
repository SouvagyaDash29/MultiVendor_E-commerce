import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/vendor profile.css';

const VendorProfilePage = () => {
  // State to store vendor details
  const [vendorDetails, setVendorDetails] = useState({
    name: '',
    email: '',
    profilePicture: ''
  });

  // Fetch vendor details from the backend when the component mounts
  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        // Fetch vendor details from the backend API
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/vendor');
        const { name, email, profilePicture } = response.data;

        // Update state with the fetched vendor details
        setVendorDetails({
          name,
          email,
          profilePicture
        });
      } catch (error) {
        console.error('Error fetching vendor details:', error);
      }
    };

    fetchVendorDetails();
  }, []);

  return (
    <div className='vendor-profile'>
      <h1 id='vendorprofile-heading'>Vendor Profile</h1>
      <div>
        {/* Display vendor profile picture */}
        <img
        className='vendor-profilephoto'
          src={vendorDetails.profilePicture || 'data:image/jpeg;base64,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'}
          alt="Profile Picture"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      
      <div className='vendor-subdetails'>
        {/* Display vendor name and email */}
        <p id='vendor-name'>Name: {vendorDetails.name}</p>
        <p id='vendor-email'>Email: {vendorDetails.email}</p>
        {/* Add other vendor details here */}
      </div>
    </div>
    </div>
  );
};

export default VendorProfilePage;
