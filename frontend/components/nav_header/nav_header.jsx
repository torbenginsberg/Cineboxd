import React from "react";
import { Link } from 'react-router-dom';
import ProfileDropdownContainer from "./profile_dropdown_container";
import CineboxdLogo from '../../../app/assets/images/Cineboxd-1.jpeg';

export default ({ currentUser, logout, openModal}) => {
    const display = currentUser ? (
        // if signed in

        <nav className="nav-header">
            <ul className="nav-items">
                <li className="nav-item">
                    <a className="nav-item" id="profile-name-text">{currentUser.username}</a>
                    <ProfileDropdownContainer />
                </li>
                <li className="nav-item"><a className="nav-item-link" onClick={logout} href='/'>Log Out</a></li>
                <li className="nav-item"><a href="/#/films" className="nav-item-link">Films</a></li>
            </ul>
        </nav>
    ) : (
        // if not signed in

        <nav className="nav-header">
            <ul>
                <li className="nav-item"><a className="nav-item-link" onClick={() => openModal({ modal_type: 'login'})}>Sign In</a></li>
                <li className="nav-item"><a className="nav-item-link" onClick={() => openModal({ modal_type: 'signup'})}>Create Account</a></li>
                <li className="nav-item"><a href="/#/films" className="nav-item-link">Films</a></li>
            </ul>
        </nav>
    );

    return (
        <header className="nav-bar">
            <Link to='/'>
                <div className="logo">
                    <img src="https://cineboxd-seed-photos.s3.amazonaws.com/Cineboxd-1.jpeg" />
                </div>
            </Link>
            <div>
                {display}
            </div>
        </header>
    );
};

