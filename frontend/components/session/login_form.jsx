import React from "react";
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processLoginForm(user)
            .then(() => {
                this.props.closeModal();
                // might want to do something with the history here
            })
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            username: 'torbtheorb',
            password: 'convent1909'
        };
        this.props.processLoginForm(user)
            .then(() => {
                this.props.closeModal();
            })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul>
                {Object.values(this.props.errors).map((err, idx) => (
                    <li key={`err${idx}`} className="login-errors">
                        {err}
                    </li>
                ))}
            </ul>
        );
    }

    renderDemoButton() {
        const button = () => (
            <button
                onClick={this.handleDemoSubmit}
                className='login-demo'
            >Demo</button>
        )
        return button();
    }

    render() {
        return(
            <div className='login-form-container'>
                <div onClick={this.props.closeModal} className="close-x-login">X</div>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    <div className="login-form">
                        <label className="login-box-label">Username:
                            <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className='login-input'
                            />
                        </label>
                        <br />
                        <label className="login-box-label">Password:
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className='login-input'
                            />
                        </label>
                        <input type="submit" className="login-submit" value='SIGN IN'/>

                        <div className="login-demo-container">
                            {this.renderDemoButton()}
                        </div>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
};

export default withRouter(LoginForm);