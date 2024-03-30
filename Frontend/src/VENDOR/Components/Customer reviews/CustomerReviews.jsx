import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Customer reviews/customer review.css'
const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="customer-reviews">
      <h2 className='customer-reviews-heading'>Customer Reviews</h2>
      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review">
            <p>{review.customerName}</p>
            <p>{review.comment}</p>
            <p className='stars'>{review.rating} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
