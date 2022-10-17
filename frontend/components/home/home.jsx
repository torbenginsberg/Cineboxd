import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';

// export default ({ currentUser, openModal }) => {
//     return (
//         <div className="home-page">
//             <img src="https://cineboxd-seed-photos.s3.amazonaws.com/godfather-brando-1.png" />

//             <div className="home-backdrop">
//                 <div className="backdrop-fade">
//                     <h2 className='home-headline'>The social network for film lovers.</h2>
//                     {currentUser ? '' : <p className="home-sign-up" onClick={() => openModal({modal_type: 'signup'})}>
//                         <button className="green-submit">Get started - it's free!</button>
//                     </p>}
//                 </div>
//             </div>
            
//             <div className="home-film-list">
//                 <Link to="/films/28" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/Sicario.jpeg' alt="Sicario" /></Link>
//                 <Link to="/films/30" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/mononoke_poster.png' alt="Princess Mononoke" /></Link>
//                 <Link to="/films/32" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/francesha_poster.png' alt="Frances Ha" /></Link>
//                 <Link to="/films/33" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/whiplash_poster.png' alt="Whiplash" /></Link>
//                 <Link to="/films/35" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/dunkirk_poster.png' alt="Dunkirk" /></Link>
//                 <Link to="/films/38" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/social_poster.png' alt="The Social Network" /></Link>
//             </div>

//             <p className="center-headlines">Cineboxd lets you...</p>

//             <div className="cineboxd-lets-you">
//                 <div className="cineboxd-lets-you-box">
//                     <i className="lets-you-heart"><FaHeart /></i>
//                     <p>Show some love for your favorite films with a "like"</p>
//                 </div>

//                 <div className="cineboxd-lets-you-box">
//                     <i className="lets-you-review"><CgNotes /></i>
//                     <p>Write reviews to share your thoughts with the community.</p>
//                 </div>

//                 <div className="cineboxd-lets-you-box">
//                     <i className="lets-you-watch"><AiFillEye /></i>
//                     <p>Keep track of every film you've ever watched...or just start from the day you join!</p>
//                 </div>
//             </div>

//             <p className="center-headlines">Check out the inspiration for this site...</p>
//             <div className="center-headlines"><a href="//letterboxd.com" target='_blank'><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb-1000px.png" alt="Letterboxd" className="letterboxd-horizontal" /></a></div>
//         </div>
//     )
// }

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser, openModal } = this.props
        return (
            <div className="home-page">
                <img src="https://cineboxd-seed-photos.s3.amazonaws.com/godfather-brando-1.png" />
    
                <div className="home-backdrop">
                    <div className="backdrop-fade">
                        <h2 className='home-headline'>The social network for film lovers.</h2>
                        {currentUser ? '' : <p className="home-sign-up" onClick={() => openModal({modal_type: 'signup'})}>
                            <button className="green-submit">GET STARTED - IT'S FREE!</button>
                        </p>}
                    </div>
                </div>
                
                <div className="home-film-list">
                    {/* hard coded links for heroku to match the different ids */}
                    <Link to="/films/21" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/Sicario.jpeg' alt="Sicario" /></Link>
                    <Link to="/films/23" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/mononoke_poster.png' alt="Princess Mononoke" /></Link>
                    <Link to="/films/25" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/francesha_poster.png' alt="Frances Ha" /></Link>
                    <Link to="/films/26" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/whiplash_poster.png' alt="Whiplash" /></Link>
                    <Link to="/films/28" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/dunkirk_poster.png' alt="Dunkirk" /></Link>
                    <Link to="/films/31" className="poster-link"><img src='https://cineboxd-seed-photos.s3.amazonaws.com/social_poster.png' alt="The Social Network" /></Link>
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
}

export default HomePage;