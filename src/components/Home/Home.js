import React from 'react';
import './Home.css';
import img from '../Img/shoe.png'
import HomeReview from '../HomeReview/HomeReview';
const Home = () => {
    return (
        <div className='py-4'>

            <div className="grid grid-cols-2 px-8">
                <div className='mt-24 p-3' >
                    <h1 className='text-6xl font-bold'>Love the Planet<br /><span className='text-orange-500'>we walk on</span></h1>

                    <h6 className='text-3xl mt-5'>25% Off On All Products
                    </h6>
                    <p className='mt-4 text-xl px-12'>Selected materials designed for comfort and sustainability.Limited Stock Available!</p>
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