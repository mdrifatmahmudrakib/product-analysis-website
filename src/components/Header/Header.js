import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black pt-2 pb-2'>

            <Navbar>
                <Container>
                    <Nav className="mx-auto ">
                        <Link className='pr-4 text-2xl text-orange-600' to='/'>Home</Link>
                        <Link className='pr-4 text-2xl text-orange-600' to='/reviews'>Reviews</Link>
                        <Link className='pr-4 text-2xl text-orange-600' to='/dashboard'>Dashboard</Link>
                        <Link className='pr-4 text-2xl text-orange-600' to='/blogs'>Blogs</Link>
                        <Link className='pr-4 text-2xl text-orange-500' to='/about'>About</Link>
                    </Nav>
                </Container>
            </Navbar>


        </div>


    );
};

export default Header;