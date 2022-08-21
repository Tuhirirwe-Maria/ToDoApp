import React from 'react'
import logo from "../images/M_logo.png"

function User(){

    return (
        <div className='User'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='info'>
                <p>Maria Let's PLan </p>
            </div>
        </div>
    )
}

export default User