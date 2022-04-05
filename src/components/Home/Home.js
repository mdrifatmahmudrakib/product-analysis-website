import React from 'react';
import './Home.css';
import img from '../Img/shoe.png'
import HomeReview from '../HomeReview/HomeReview';
const Home = () => {
    return (
        <div className='py-4'>
            <div className="grid grid-cols-2 mx-auto px-8">
                <div className='mt-24 p-3' >
                    <h1 className='text-6xl'>Love the Planet<br />we walk on</h1>
                    <p className='mt-2 pl-32 pr-32'>Selected materials designed for comfort and sustainability</p>
                    <button className="mt-2 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>

                <div>
                    <img src={img} alt='' className='mx-auto' width="400" height="400"></img>
                </div>
            </div>

            <HomeReview></HomeReview>
        </div >


    );
};

export default Home;