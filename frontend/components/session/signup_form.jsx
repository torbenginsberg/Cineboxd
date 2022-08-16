import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processSignupForm(user)
            .then (() => {
                this.props.closeModal();
            })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
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
            <div className="signup-form-container">
                <div onClick={this.props.closeModal} className="close-x-signup">X</div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2>JOIN CINEBOXD</h2>
                    <br />
                    <div className="signup-form">
                        <label className="signup-box-label">Username
                            <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"    
                            />
                        </label>
                        <br />
                        <label className="signup-box-label">Email address
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"    
                            />
                        </label>
                        <br />
                        <label className="signup-box-label">Password
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"    
                            />
                        </label>
                        <br />
                        <input type="submit" className="signup-submit" value='SIGN UP'/>
                    </div>
                    <div className="signup-errors">
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignupForm);