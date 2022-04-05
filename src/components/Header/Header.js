import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-5'>

            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Link className='pr-2' to='/'>Home</Link>
                        <Link className='pr-2' to='/reviews'>Reviews</Link>
                        <Link className='pr-2' to='/dashboard'>Dashboard</Link>
                        <Link className='pr-2' to='/blogs'>Blogs</Link>
                    </Nav>
                </Container>
            </Navbar>


        </div>


    );
};

export default Header;