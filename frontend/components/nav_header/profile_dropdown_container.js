import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";
import { logout } from "../../actions/session_actions";
import ProfileDropdown from "./profile_dropdown";

const mSTP = state => {
    return {
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(
    mSTP,
    mDTP
)(ProfileDropdown));