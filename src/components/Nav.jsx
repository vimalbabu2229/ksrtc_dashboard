import React from 'react'
import './Nav.css'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'

function Nav() {
    return (
        <div className='nav-bar'>
            <div className='nav-wrap'>
                <img src={logo} alt="logo"  className='nav-img'/>
                <span className='head-text'>KSRTC</span>
            </div>
            <div className='nav-wrap'>
                <span>Admin</span>
                <img src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Nav