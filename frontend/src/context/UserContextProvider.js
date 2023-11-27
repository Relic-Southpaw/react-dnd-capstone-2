import React, { useState, useEffect, useCallback } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router"
import DnDApi from '../api'
import useLocalStorage from '../hooks/useLocalStorage'
import jwt_decode from "jwt-decode"
import LoadingSpinner from '../components/common/LoadingSpinner'

export const TOKEN_STORAGE_ID = "dnd-token";

function UserContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState('');
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    const [userData, setUserData] = useState('');

    const navigate = useNavigate();

    const saveToken = useCallback(() => {
        DnDApi.token = token;
        const { username } = jwt_decode(token);
        setCurrentUser(username);
    }, [token, setCurrentUser]);

    useEffect(() => {
        if (token) saveToken();
        setIsLoading(false);
    }, [token, saveToken]);

    async function registerUser(signUpData) {
        try {
            let token = await DnDApi.register(signUpData)
            setToken(token)
            return { success: true }
        } catch (err) {
            console.error('signup failed', err)
            return { success: false, err }
        }
    }

    async function loginUser(loginData) {
        try {
            let token = await DnDApi.login(loginData)
            console.log(token)
            setToken(token)
        } catch (err) {
            console.log(err)
            console.log("Potato")
            return { err }
        }
    }

    async function updateUser(editData) {
        try {
            let newUserData = await DnDApi.editCurrentUser(
                currentUser.username, editData
            )
            setCurrentUser(newUserData)
            navigate('/')
            return { success: true }
        } catch (err) {
            console.log(err)
            return { success: false, err }
        }
    }


    async function getCurrentUser(username) {
        try {
            const user = await DnDApi.getCurrentUser(username);
            setUserData(user);
        } catch (err) {
            console.error('Error: ', err);
            if (err[0] === 'Unauthorized') {
                return logout();
            }
        }
    }
    async function deleteUser() {
        try {
            const result = await DnDApi.deleteUser(currentUser);
            return result;
        } catch (err) {
            console.error('Error: ', err);
        }
    }

    const logout = () => {
        setCurrentUser('')
        setToken('')
        navigate('/')
    }

    const onHomepage = window.location.pathname === '/'

    if (isLoading && !onHomepage) return <LoadingSpinner />

    return (
        <UserContext.Provider
            value={
                {
                    isLoading,
                    token,
                    currentUser,
                    getCurrentUser,
                    userData,
                    registerUser,
                    loginUser,
                    updateUser,
                    logout,
                    navigate,
                    deleteUser,
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider