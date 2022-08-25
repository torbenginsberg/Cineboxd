import React from "react";
import { Link } from "react-router-dom";
import HomeBackdrop from '../../../app/assets/images/godfather-brando-1.png'

export default ({ currentUser, openModal }) => {
    return (
        <div className="home-page">
            <div className="film-show-backdrop-container">
                <div className="film-show-backdrop-wrapper">
                    <div className="backdrop-placeholder"></div>
                    <div className="home-backdrop-image" style={{backgroundImage: `url(${HomeBackdrop})`}}></div>
                    <div className="film-show-backdrop-fade"></div>
                </div>
            </div>
        </div>
    )
}