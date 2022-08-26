import React from "react";
import { Link } from "react-router-dom";
import HomeBackdrop from '../../../app/assets/images/godfather-brando-1.png';
import Sicario from '../../../app/assets/images/Sicario.jpeg';
import Dunkirk from '../../../app/assets/images/dunkirk_poster.png';
import FrancesHa from '../../../app/assets/images/francesha_poster.png';
import Mononoke from '../../../app/assets/images/mononoke_poster.png';
import Social from '../../../app/assets/images/social_poster.png';
import Whiplash from '../../../app/assets/images/whiplash_poster.png';
import { AiFillEye } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';

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
            
            <div className="home-film-list">
                <Link to="/films/16" className="poster-link"><img src={Sicario} alt="Sicario" /></Link>
                <Link to="/films/18" className="poster-link"><img src={Mononoke} alt="Princess Mononoke" /></Link>
                <Link to="/films/20" className="poster-link"><img src={FrancesHa} alt="Frances Ha" /></Link>
                <Link to="/films/21" className="poster-link"><img src={Whiplash} alt="Whiplash" /></Link>
                <Link to="/films/23" className="poster-link"><img src={Dunkirk} alt="Dunkirk" /></Link>
                <Link to="/films/26" className="poster-link"><img src={Social} alt="The Social Network" /></Link>
            </div>

            <p className="center-headlines">Cineboxd lets you...</p>

            <div className="cineboxd-lets-you">
                <div className="cineboxd-lets-you-box">
                    <i className="lets-you-heart"><FaHeart /></i>
                    <p>Show some love for your favorite films with a "like"</p>
                </div>

                <div className="cineboxd-lets-you-box">
                    <i className="lets-you-review"><CgNotes /></i>
                    <p>Write reviews to share your thoughts with the community.</p>
                </div>

                <div className="cineboxd-lets-you-box">
                    <i className="lets-you-watch"><AiFillEye /></i>
                    <p>Keep track of every film you've ever watched...or just start from the day you join!</p>
                </div>
            </div>

            <p className="center-headlines">Check out the inspiration for this site...</p>
            <div className="center-headlines"><a href="//letterboxd.com" target='_blank'><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb-1000px.png" alt="Letterboxd" className="letterboxd-horizontal" /></a></div>
        </div>
    )
}