import './Home.css'
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import SpellBook from "./SpellBook"

function Home() {
    const { currentUser } = useContext(UserContext)
    return (
        <div className="welcome sm">
            <h1 className='mb-4 fw-bold'>
            </h1>
            {
                currentUser
                    ? <h2 style={{ color: "white" }}>
                        Welcome,
                        <span className='text-capitalize' style={{ color: "lightgreen" }}>
                            {' ' + currentUser}!
                        </span>
                        <br>
                        </br>
                        <p>Enjoy the Magic!!!</p>
                    </h2>
                    : null
            }
            {
                currentUser ?
                    <SpellBook /> :
                    <h2 style={{ color: "white" }}>LOG IN TO SEE THE MAGIC!!!</h2>
            }
        </div >
    )
}

export default Home;