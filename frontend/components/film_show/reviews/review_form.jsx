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
                date_watched: datePlaceholder
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
    }

    update(field) {
        return e => {
            return this.setState({ [property]: e.currentTarget.value })
        };
    }

    render() {
        return (
            <div className="review-form-wrapper">
                <div onClick={this.props.closeModal} className='close-x-review'>X</div>

                <form onSubmit={this.handleSubmit}>
                    <p className="review-header">I WATCHED...</p>
                    <h1>{this.props.film.title}</h1>
                    <br />

                    <img src={this.props.film.posterUrl} />

                    <input type="date"
                        className="review-date-input"
                        value={this.state.date_watched}
                        onChange={this.update('date_watched')}
                    />

                    <textarea 
                        className="review-body-input" 
                        cols='30'
                        rows='5'
                        value={this.state.body}
                        onChange={this.update('body')} 
                    />

                    <input type="submit" className="green-submit"/>
                </form>
            </div>
        );
    }
};

export default withRouter(ReviewForm);