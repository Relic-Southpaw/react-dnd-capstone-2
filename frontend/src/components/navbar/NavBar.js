import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import AnonUserLinks from './AnonUserLinks';
import UserAccountMenu from './UserAccountMenu'
import "./NavBar.css"
const NavBar = () => {
    const { currentUser } = useContext(UserContext)
    return (
        <nav className='NavBar navbar navbar-expand bg-light'>
            <a href='/' className="btn btn-secondary">SpellBook</a>
            <div className='NavBarLinks container-sm h-100 ml-auto'>

                {currentUser ? <UserAccountMenu /> : <AnonUserLinks />}
                {/* <Link className='nav-item fs-4 fw-bolder p-5' to="/login">
                    Login
                </Link>
                <Link className='nav-item fs-4 fw-bolder mr-5' to='/signup'>
                    Sign-Up
                </Link> */}


            </div>
        </nav>
    )
}

export default NavBar;