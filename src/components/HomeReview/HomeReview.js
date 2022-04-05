import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Reviewdata from '../../hooks/Reviewdata';
import Review from '../Review/Review';

const HomeReview = () => {
    const [reviews] = Reviewdata();
    const Navigate = useNavigate();
    const showAllReview = () => {

        Navigate("/reviews");
    };
    return (
        <div className='mt-5'>
            <h1>Our Customers speak for us</h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

            <button onClick={showAllReview} className="mt-2 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                See All
            </button>

        </div>
    );
};

export default HomeReview;