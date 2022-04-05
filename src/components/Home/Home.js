import React from 'react';
import './Home.css';
import img from '../Img/shoe.png'
const Home = () => {
    return (
        <div className='py-4'>
            <div class="grid grid-cols-2 mx-auto px-8">
                <div className='mt-24 p-3' >
                    <h1 className='text-3xl'>Love the Planet<br />we walk on</h1>
                    <p className='mt-2'>Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                    <button class="mt-2 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>

                <div>
                    <img src={img} alt='' className='mx-auto' width="400" height="400"></img>
                </div>
            </div>
        </div >


    );
};

export default Home;