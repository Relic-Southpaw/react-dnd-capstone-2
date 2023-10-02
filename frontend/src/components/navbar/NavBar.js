import React, { useContext } from 'react';
import { Link, link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <div className='container-sm'>
                <Link className='navbar-brand'>
                    Login
                </Link>
                <Link className='navbar-brand'>
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;