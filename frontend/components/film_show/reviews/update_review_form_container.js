import React from "react";
import { connect } from "react-redux";
import { fetchReview, updateReview } from "../../../actions/review_actions";
import ReviewForm from './review_form';
import { openModal, closeModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
    film: state.entities.films[ownProps.match.params.filmId]
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateReview: review => dispatch(updateReview(review))
});

class UpdateReviewForm extends React.Component {
    render() {
        return (
            <ReviewForm
                action={this.props.action}
                review={this.props.review}
                film={this.props.film}
                closeModal={this.props.closeModal}
                updateReview={this.props.updateReview}
                currentUserId={this.props.currentUserId}
            />
        );
    }
};

export default connect(
    mSTP,
    mDTP
)(UpdateReviewForm);