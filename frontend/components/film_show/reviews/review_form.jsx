import React from "react";
import { closeModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        if (props.review) {
            const datePlaceholder = (props.review.date_watched ? props.review.date_watched : '');
            this.state = {
                body: props.review.body,
                date_watched: datePlaceholder,
                id: props.review.id
            };
        } else {
            this.state = {
                body: '',
                date_watched: ''
            };
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const review = Object.assign({}, this.state, {
            film_id: this.props.film.id,
            user_id: this.props.currentUserId,
        });

        if (this.props.createReview) {
            this.props.createReview(review).then(() => this.props.closeModal());
        } else {
            this.props.updateReview(review).then(() => this.props.closeModal());
        }

        // window.location.reload(false);
    }

    handlePosterMouseOver() {
        let target = document.getElementById('overlay');
        target.style.display = 'block';
    }

    handlePosterMouseOut() {
        let target = document.getElementById('overlay');
        target.style.display = 'none';
    }

    update(field) {
        return e => {
            return this.setState({ [field]: e.currentTarget.value })
        };
    }

    render() {
        return (
            <div className="review-form-wrapper">
                <div className="review-form-container">
                    <div onClick={this.props.closeModal} className='close-x-review'>X</div>
                    <div className="review-form">
                        <aside className="review-form-left-column">
                            <section className="poster-frame">
                                <div className="review-form-poster">
                                    <div>
                                        <img className="review-form-image" src={this.props.film.posterUrl} />
                                        <a href={`films/${this.props.film.id}`} className="frame-link" target="_blank">
                                            <span onMouseOver={this.handlePosterMouseOver} 
                                                onMouseOut={this.handlePosterMouseOut} 
                                                id="overlay">
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </aside>

                        <section className="review-form-right-column">
                            <h1 id="review-form-header">I WATCHED...</h1>
                            <br />
                            <h2 className="headline-2">
                                <span id="film-title-review">{this.props.film.title}</span>
                                <small id="film-year-review">{this.props.film.year}</small>
                            </h2>

                            <form className="review-form-inputs" onSubmit={this.handleSubmit}>
                                <div className="date-input-container">
                                    <input type="date"
                                        className="review-date-input"
                                        value={this.state.date_watched}
                                        onChange={this.update('date_watched')}
                                    />
                                </div>

                                <div className="body-input-container">
                                    <textarea 
                                        className="review-body-input" 
                                        cols='30'
                                        rows='5'
                                        value={this.state.body}
                                        onChange={this.update('body')} 
                                    />
                                </div>

                                <div className="submit-container">
                                    <div className="inner-submit-container">
                                        <input type="submit" className="green-submit" value="SAVE"/>
                                    </div>
                                    <div className="delete-button-container">
                                        <button className="green-submit">DELETE</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(ReviewForm);