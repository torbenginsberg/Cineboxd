import React from "react";
import { Link } from "react-router-dom";

export default ({ logout }) => {
    const navDropdownStyle = {
        display: 'none'
    }
    return(
        <ul className="nav-dropdown" id='profile-dropdown' style={navDropdownStyle}>
            <li className="divider"><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Films</a></li>
            <li><a href="/">Reviews</a></li>
            <li><a href="/">Watchlist</a></li>
            <li><a href="/">Lists</a></li>
            <li className="divider"><a onClick={logout}>Sign Out</a></li>
        </ul>
    )
}