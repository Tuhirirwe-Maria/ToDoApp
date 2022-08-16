import React from 'react'
import logo from "../images/M_logo.png"

function User(){

    return (
        <div className='User'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='info'>
                <p>Let's PLan</p>
                <a href="#">Logout!</a>
            </div>
        </div>
    )
}

export default User