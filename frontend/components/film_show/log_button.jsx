import React from "react";
import { connect } from "react-redux";
import { createLog, deleteLog } from "../../actions/log_actions";
import { findLog } from "../../reducers/selectors/log_selectors";
import { AiFillEye } from 'react-icons/ai';

const mSTP = (state, ownProps) => {
    return {
        log: findLog(state.entities.logs, ownProps.film_id, ownProps.user_id)
    }
};

const mDTP = dispatch => {
    return {
        createLog: log => dispatch(createLog(log)),
        deleteLog: logId => dispatch(deleteLog(logId))
    }
};

class LogButton extends React.Component {
    constructor(props){
        super(props)
        this.toggleLog = this.toggleLog.bind(this)
    }

    toggleLog() {
        if (this.props.log) {
            this.props.deleteLog(this.props.log.id)
        } else {
            this.props.createLog({
                film_id: this.props.film_id,
                user_id: this.props.user_id
            })
        };
    }

    render() {
        let status;
        if (this.props.log) {
            status = 'Watched'
        } else {
            status = 'Watch'
        }
        return (
            <i 
                id={this.props.log ? 'has-seen-film' : ''} 
                className='film-log' 
                onClick={this.toggleLog}
            >
                <AiFillEye />
                <p>{status}</p>
            </i>
        )
    }
};

export default connect(
    mSTP,
    mDTP
)(LogButton);