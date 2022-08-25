import FightClub from '../../../app/assets/images/fight_club.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div className="not-found-backdrop" style={{backgroundImage: `url(${FightClub})`}}>
            <div className="not-found-header">
                <h2>Sorry, we can't find the page you requested.</h2>
                <h3>Perhaps you imagined it...? Let's get back to <Link to="/" className='reality-link' style={{color: '#fff'}}>reality</Link></h3>
            </div>
        </div>
    )
}