import React from "react";
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal}) => {
    const display = currentUser ? (
        <nav className="nav-header">
            <ul>
                <li><p className="nav-item">Profile</p></li>
                <li><a className="nav-item" onClick={logout}>Log Out</a></li>
                <li><p className="nav-item">Activity</p></li>
                <li><p className="nav-item">Films</p></li>
                <li><p className="nav-item">Lists</p></li>
                <li><p className="nav-item">Search</p></li>
            </ul>
        </nav>
    ) : (
        <nav className="nav-header">
            <ul>
                <li><a className="nav-item" onClick={() => openModal({ modal_type: 'login'})}>Sign In</a></li>
                <li><a className="nav-item" onClick={() => openModal({ modal_type: 'signup'})}>Create Account</a></li>
                <li><p className="nav-item">Activity</p></li>
                <li><p className="nav-item">Films</p></li>
                <li><p className="nav-item">Lists</p></li>
                <li><p className="nav-item">Search</p></li>
            </ul>
        </nav>
    );

    return (
        <header className="nav-bar">
            <Link to='/'>
                <div className="logo">
                    <p>LOGO</p>
                </div>
            </Link>
            <div>
                {display}
            </div>
        </header>
    );
};

