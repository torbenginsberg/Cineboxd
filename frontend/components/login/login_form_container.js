import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mSTP = state => {
    return {
        errors: state.errors.session,
    }
};

const mDTP = dispatch => {
    return{
        login: user => dispatch(login(user))
    };
};

export default connect(
    mSTP,
    mDTP
)(LoginModal);