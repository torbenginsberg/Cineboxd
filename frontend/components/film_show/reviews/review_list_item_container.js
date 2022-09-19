import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ReviewListItem from './review_list_item';

const mSTP = ({ entities: { users }, session: { id } }, { review }) => {
    return ({
        user: users[review.user_id],
        currentUser: users[id]
    })
};

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ReviewListItem);
