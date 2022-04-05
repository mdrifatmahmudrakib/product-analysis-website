import React from 'react';

const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div>
            <div>
                <div className='border rounded-md m-5 h-60 shadow-2xl'>
                    <div className='m-10'>
                        <h2 className='text-lg text-orange-500 m-3 text-left'>{name}</h2>
                        <h1 className='text-xl text-left'>"{review}"</h1>

                        <p className='m-2 text-left'>Rating:  {rating} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;