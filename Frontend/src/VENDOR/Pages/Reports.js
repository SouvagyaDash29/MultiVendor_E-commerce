import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/Reports.css';

const Reports = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        // Replace 'YOUR_BACKEND_API_ENDPOINT/complaints' with the actual API endpoint URL
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT/complaints');
        setComplaints(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching complaints:', error);
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className='reports'>
      <h1>Customer Complaints</h1>
      {loading ? (
        <p>Loading...</p>
      ) : complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <div className="chat-container">
          {complaints.map(complaint => (
            <div key={complaint.id} className="chat-item">
              <div className="chat-meta">
                <span className="customer-name">{complaint.customerName}</span>
                <span className="datetime">{new Date(complaint.dateTime).toLocaleString()}</span>
              </div>
              <div className="complaint-text">{complaint.complaintText}</div>
              <div className="status">{complaint.status}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
