import { connect } from "react-redux";
import { createReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        film: state.entities.films[state.ui.showFilmId]
    }
};

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mSTP,
    mDTP
)(ReviewForm);