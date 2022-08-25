import React from "react";
import { Link } from 'react-router-dom';
import ProfileDropdownContainer from "./profile_dropdown_container";
import CineboxdLogo from '../../../app/assets/images/Cineboxd-1.jpeg'

export default ({ currentUser, logout, openModal}) => {
    const handleProfileMouseOver = () => {
        let target = document.getElementById('profile-dropdown');
        target.style.display = 'block';
    }

    const handleProfileMouseOut = () => {
        let target = document.getElementById('profile-dropdown');
        target.style.display = 'none';
    }

    const display = currentUser ? (
        <nav className="nav-header">
            <ul className="nav-items">
                <li onMouseOver={handleProfileMouseOver} onMouseOut={handleProfileMouseOut} className="nav-item">
                    <a className="nav-item" id="profile-name-text">{currentUser.username}</a>
                    <ProfileDropdownContainer />
                </li>
                <li className="nav-item"><a className="nav-item-link" onClick={logout}>Log Out</a></li>
                <li className="nav-item"><a className="nav-item-link">Activity</a></li>
                <li className="nav-item"><a className="nav-item-link">Films</a></li>
                <li className="nav-item"><a className="nav-item-link">Lists</a></li>
                <li className="nav-item"><a className="nav-item-link">Search</a></li>
            </ul>
        </nav>
    ) : (
        <nav className="nav-header">
            <ul>
                <li className="nav-item"><a className="nav-item-link" onClick={() => openModal({ modal_type: 'login'})}>Sign In</a></li>
                <li className="nav-item"><a className="nav-item-link" onClick={() => openModal({ modal_type: 'signup'})}>Create Account</a></li>
                <li className="nav-item"><a className="nav-item-link">Activity</a></li>
                <li className="nav-item"><a className="nav-item-link">Films</a></li>
                <li className="nav-item"><a className="nav-item-link">Lists</a></li>
                <li className="nav-item"><a className="nav-item-link">Search</a></li>
            </ul>
        </nav>
    );

    return (
        <header className="nav-bar">
            <Link to='/'>
                <div className="logo">
                    <img src={CineboxdLogo} />
                </div>
            </Link>
            <div>
                {display}
            </div>
        </header>
    );
};

