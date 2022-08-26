import { connect } from "react-redux";
import HomePage from './home';
import { openModal } from "../../actions/modal_actions";
import { fetchFilms } from "../../actions/film_actions";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        films: Object.values(state.entities.films)
    }
};

const mDTP = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchFilms: () => dispatch(fetchFilms())
    }
};

export default connect(
    mSTP,
    mDTP
)(HomePage);