import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContext from '../context/UserContext';
import NotFound from '../components/NotFound';
import Home from '../Home';
import LoginForm from '../account/LoginForm';
import SignUpForm from '../account/SignUpForm';
import Profile from '../account/Profile';
import SearchResultsPage from '../search/SearchResultsPage';

export default function AllRoutes() {
    const { loginUser, registerUser } = useContext(UserContext);
    return (
        <Routes>
            <Route
                path='*'
                element={<NotFound />}
            />
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='/login'
                element={<LoginForm loginUser={loginUser} />}
            />
            <Route
                path='/signup'
                element={<SignUpForm registerUser={registerUser} />}
            />
            <Route
                path='/profile/:username'
                element={<Profile itemsOnPage={9} />}
            />
            <Route
                path='search/:path/:id'
                element={<SearchResultsPage itemsOnPage={30} />}
            />
        </Routes>
    );
}