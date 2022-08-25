import React from "react";
import { Link } from "react-router-dom";
import HomeBackdrop from '../../../app/assets/images/godfather-brando-1.png';
import Sicario from '../../../app/assets/images/Sicario.jpeg';
import Dunkirk from '../../../app/assets/images/dunkirk_poster.png';
import FrancesHa from '../../../app/assets/images/francesha_poster.png';
import Mononoke from '../../../app/assets/images/mononoke_poster.png';
import Social from '../../../app/assets/images/social_poster.png';
import Whiplash from '../../../app/assets/images/whiplash_poster.png';

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
                <Link to="/films/4" className="poster-link"><img src={Sicario} alt="Sicario" /></Link>
                <Link to="/films/6" className="poster-link"><img src={Mononoke} alt="Princess Mononoke" /></Link>
                <Link to="/films/8" className="poster-link"><img src={FrancesHa} alt="Frances Ha" /></Link>
                <Link to="/films/9" className="poster-link"><img src={Whiplash} alt="Whiplash" /></Link>
                <Link to="/films/11" className="poster-link"><img src={Dunkirk} alt="Dunkirk" /></Link>
                <Link to="/films/14" className="poster-link"><img src={Social} alt="The Social Network" /></Link>
            </div>

            <p className=""></p>
        </div>
    )
}