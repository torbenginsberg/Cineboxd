import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import React from "react";
import { logout } from "../../actions/session_actions";
import ProfileDropdown from "./profile_dropdown";

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(
    null,
    mDTP
)(ProfileDropdown));