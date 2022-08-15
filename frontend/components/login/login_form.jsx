import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
                    <li key={`err${idx}`}>
                        {err}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return(
            <div className='login-form-container'>
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
                        <input type="submit" className="login-submit" value='Sign In'/>
                    </div>

                    <div className="login-errors">
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
};

export default LoginForm;