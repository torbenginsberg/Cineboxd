import { connect } from "react-redux";
import NavHeader from './nav_header';
import { withRouter } from 'react-router';
import React from "react";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
    mSTP, mDTP
)(NavHeader));