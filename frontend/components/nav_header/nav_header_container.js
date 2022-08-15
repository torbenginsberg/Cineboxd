import { connect } from "react-redux";
import NavHeader from './nav_header';
import { withRouter } from 'react-router';

const mSTP = state => ({

});

const mDTP = dispatch => ({
    
});

export default withRouter(connect(
    mSTP, mDTP
)(NavHeader));