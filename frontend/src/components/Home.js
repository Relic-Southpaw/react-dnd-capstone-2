import './Home.css'
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Home() {
    const { currentUser } = useContext(UserContext)
    return (
        <div className="welcome container-sm">
            <h1 className='mb-4 fw-bold'>
                DON"T KNOW YET
            </h1>
            <p>
                I HAVE NO CLUE
            </p>
            {
                currentUser
                    ? <h2>
                        Welcome,
                        <span className='text-capitalize'>
                            {' ' + currentUser.firstName}!
                        </span>
                    </h2>
                    : null
            }
        </div>
    )
}

export default Home;