import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
    return {
        errors: state.errors.session,
    }
};

const mDTP = dispatch => {
    return{
        processLoginForm: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(
    mSTP,
    mDTP
)(LoginForm);