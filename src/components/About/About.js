import React from 'react';

import img from "../Img/rifat.png";
const About = () => {
    return (
        <div className='py-4 mt-6'>

            <div className="grid grid-cols-2 px-8">
                <div className='mt-24 p-3' >
                    <h1 className='text-6xl font-bold'>About Developer<br /><span className='text-orange-500'>Rifat Mahmud</span></h1>


                    <p className='mt-4 text-xl px-12'>I am a Web Developer located in Dhaka, Bangladesh. Working as a Professional Full stack Web
                        developer
                        and completed over 50 web projects worldwide. I am looking to take on more work and to increase
                        my
                        skills as a Web Developer.</p>
                    <button className="mt-2 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Hire Me
                    </button>
                </div>

                <div>
                    <img src={img} alt='' className='mx-auto' width="600" height="600"></img>
                </div>

            </div>


        </div >



    );
};

export default About;