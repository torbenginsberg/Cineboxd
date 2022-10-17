import React from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import LikeButton from "./like_button";
import LogButton from './log_button';
import { AiOutlineClockCircle } from 'react-icons/ai';
import ReviewListItemContainer from "./reviews/review_list_item_container";

class FilmShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchFilm(this.props.match.params.filmId);
        this.props.fetchFilmReviews(this.props.match.params.filmId);
    }

    currentUserReview() {
        let theCurrentUser = this.props.currentUser
        let targetReviews = this.props.film.reviews ? this.props.film.reviews : {};
        return Object.values(targetReviews).find(review => review.user_id === theCurrentUser.id);
    }

    isEmpty(obj) {
        if (obj === undefined) return true;
        return Object.keys(obj).length === 0
    }

    render() {
        if (!this.props.film) return null;

        const { film, openModal } = this.props
        const reviewsObj = film.reviews;

        const reviewsArr = this.isEmpty(reviewsObj) ? [] : Object.values(reviewsObj)

        const reviewStatusText = this.currentUserReview() ? 'Edit your review...' : 'Write a review...';
        const modalType = this.currentUserReview() ? 'edit-review' : 'review';
        return(
            <div className="film-show-all">
                <div className="film-show-backdrop-container">
                    <div id="backdrop" className="film-show-backdrop-wrapper">
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
                                            <p>{film.year}</p>
                                        </small>
                                         {" Directed by "}
                                        <p className="director-name">{film.director_name}</p>
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
                                                    <LogButton
                                                        currentUser={this.props.currentUser}
                                                        film_id={this.props.film.id} 
                                                        user_id={this.props.currentUser.id}
                                                    />
                                                </span>
                                                <span className="action-like">
                                                    <LikeButton
                                                        currentUser={this.props.currentUser}
                                                        likeable_id={this.props.film.id}
                                                        likeable_type={'Film'}
                                                        user_id={this.props.currentUser.id}
                                                    />
                                                </span>
                                                {/* <span className="action-watchlist">
                                                    <i>
                                                        <AiOutlineClockCircle />
                                                    </i>
                                                    <p>Watchlist</p>
                                                </span> */}
                                            </li>
                                            {/* <li className="actions-row-rating">rating</li> */}
                                            <li className="basic-action-row" onClick={() => openModal({ modal_type: modalType})} film={film}>{reviewStatusText}</li>
                                            {/* <li>add to lists</li> */}
                                        </ul>
                                    </section>
                                </aside>

                                <section className="film-reviews">
                                    <section className="reviews-block">
                                        <h2 className="review-section-heading">
                                            <p>Reviews</p>
                                        </h2>

                                        <ul>
                                            {this.isEmpty(reviewsObj) ? null : 
                                                reviewsArr.map(review => (
                                                    <ReviewListItemContainer
                                                        review={review}
                                                        key={review.id}
                                                        deleteReview={this.props.deleteReview}
                                                        updateReview={this.props.updateReview}
                                                        openModal={this.props.openModal}
                                                        film={film}
                                                    />
                                            ))}
                                        </ul>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
};

export default FilmShow;
