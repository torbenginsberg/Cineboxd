import { connect } from "react-redux";
import NavHeader from './nav_header';
import { withRouter } from 'react-router-dom';
import React from "react";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const mSTP = state => {
    return(
        {currentUser: state.entities.users[state.session.id]}
    )
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
    mSTP, mDTP
)(NavHeader));