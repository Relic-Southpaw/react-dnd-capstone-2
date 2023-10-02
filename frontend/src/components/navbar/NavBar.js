import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
    return (
        <nav className='NavBar navbar navbar-expand bg-light'>
            <div className='NavBarLinks container-sm h-100 ml-auto'>
                <Link className='nav-item fs-4 fw-bolder p-5' to="/login">
                    Login
                </Link>
                <Link className='nav-item fs-4 fw-bolder mr-5' to='/signup'>
                    Sign-Up
                </Link>


            </div>
        </nav>
    )
}

export default NavBar;