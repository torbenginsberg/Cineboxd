import React from "react";
import { connect } from "react-redux";
import { fetchReview, updateReview, deleteReview } from "../../../actions/review_actions";
import ReviewForm from './review_form';
import { openModal, closeModal } from "../../../actions/modal_actions";

const mSTP = state => {
    let targetReview = Object.values(state.entities.reviews).find(review => review.user_id === state.session.id)
    return {
        currentUserId: state.session.id,
        film: state.entities.films[state.ui.showFilmId],
        review: targetReview
    }
};

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: review => dispatch(deleteReview(review))
});

class UpdateReviewForm extends React.Component {
    render() {
        return (
            <ReviewForm
                review={this.props.review}
                film={this.props.film}
                closeModal={this.props.closeModal}
                updateReview={this.props.updateReview}
                currentUserId={this.props.currentUserId}
                deleteReview={this.props.deleteReview}
            />
        );
    }
};

export default connect(
    mSTP,
    mDTP
)(UpdateReviewForm);