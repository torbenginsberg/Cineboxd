import React from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import LikeButton from "./like_button";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';


class FilmShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.filmId);
    }

    render() {
        if (!this.props.film) return null;
        const { film } = this.props
        return(
            <div>
                <div className="film-show-backdrop-container">
                    <div id="backdrop" className="film-show-backdrop-wrapper">
                        <div className="backdrop-placeholder"></div>
                        <div className="backdrop-image" style={{backgroundImage: `url(${film.backdropUrl})`}}></div>
                        <div className="film-show-backdrop-fade"></div>
                    </div>
                </div>

                <div id="content" className="film-show-body">
                    <div className="content-wrap">
                        <div id="film-show-wrapper">
                            <div className="poster-column">
                                <section className="poster-container">
                                    <div>
                                        <img className="featured-film-poster-image" src={film.posterUrl}/>
                                    </div>
                                    <ul className="film-stats">
                                        <li className="film-stat-watches">
                                            <p>Watches</p>
                                        </li>
                                        <li className="film-stat-likes">
                                            <p>Likes</p>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="details-column">
                                <section className="featured-film-header">
                                    <h1 className="film-show-title">{film.title}</h1>
                                    <p>
                                        <small className="number">
                                            <a href="/">{film.year}</a>
                                        </small>
                                         {" Directed by "}
                                        <a href="/">{film.director_name}</a>
                                    </p>
                                </section>
                                <section className="featured-film-details">
                                    <section>
                                        <div className="featured-film-overview">
                                            <div className="featured-film-summary">
                                                <p>{film.summary}</p>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                
                                <aside className="sidebar">
                                    <section id="userpanel" className="actions-panel">
                                        <ul className="actions-panel-list">
                                            <li className="actions-row1">
                                                <span className="action-watch">
                                                    <i><AiOutlineEye /></i>
                                                    <p>Watch</p>
                                                </span>
                                                <span className="action-like">
                                                    <LikeButton
                                                        currentUser={this.props.currentUser}
                                                        likeable_id={this.props.film.id}
                                                        likeable_type={'Film'}
                                                        user_id={this.props.currentUser.id}
                                                    />
                                                </span>
                                                <span className="action-watchlist">
                                                    <i>
                                                        <AiOutlineClockCircle />
                                                    </i>
                                                    <p>Watchlist</p>
                                                </span>
                                            </li>
                                            <li className="actions-row-rating">rating</li>
                                            <li>review or log</li>
                                            <li>add to lists</li>
                                        </ul>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img className="film-show-poster-sticky" src={film.posterUrl}/> */}
            </div>
        )
    }
};

export default FilmShow;
