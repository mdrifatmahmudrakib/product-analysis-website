import React from 'react';

const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div>
            <div>
                <div className='border border-gray-400 m-5 h-60 rounded-3xl'>
                    <div className='m-10'>
                        <h1 className='text-xl font-bold m-3'>{name}</h1>
                        <p className='text-sm font-thin'>{review}</p>
                        <p className='font-bold m-2'>Rating: ( {rating} )</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;