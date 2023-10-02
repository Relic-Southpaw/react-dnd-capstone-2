import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router"
import DnDApi from '../api'
import useLocalStorage from '../hooks/useLocalStorage'
import jwt_decode from "jwt-decode"
import LoadingSpinner from '../common/LoadingSpinner'

export const TOKEN_STORAGE_ID = "dnd-token";

function UserContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState('')
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
    const [userData, setUserData] = useState('');

    const navigate = useNavigate()

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
            setToken(token)
            return { success: true }
        } catch (err) {
            console.log(err)
            return { success: false, err }
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

    useEffect(() => {
        async function getCurrentUser() {
            if (token) {
                try {
                    const { username } = jwt_decode(token)
                    DnDApi.token = token
                    const user = await DnDApi.getCurrentUser(username)
                    setCurrentUser(user)
                    navigate('/')
                } catch (err) {
                    console.log(err)
                    setCurrentUser('')
                }
            }
            setIsLoading(false)
        }
        setIsLoading(true)
        getCurrentUser()
    }, [token])

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