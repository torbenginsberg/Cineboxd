import React from "react";
import { Link } from "react-router-dom";
import HomeBackdrop from '../../../app/assets/images/godfather-brando-1.png'

export default ({ currentUser, openModal }) => {
    return (
        <div className="home-page">
            <img src={HomeBackdrop} />

            <div className="home-backdrop">
                <div className="backdrop-fade">
                    <h2 className='home-headline'>The social network for film lovers.</h2>
                    {currentUser ? '' : <p className="home-sign-up" onClick={() => openModal({modal_type: 'signup'})}>
                        <button className="green-submit">Get started - it's free!</button>
                    </p>}
                </div>
            </div>
            
            <div className="home-movie-list">

                
            </div>
        </div>
    )
}