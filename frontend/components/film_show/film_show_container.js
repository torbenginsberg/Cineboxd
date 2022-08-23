import { connect } from "react-redux";
import FilmShow from './film_show';
import { fetchFilm } from "../../actions/film_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        film: state.entities.films[ownProps.match.params.filmId]
    })
};

const mDTP = dispatch => ({
    fetchFilm: filmId => dispatch(fetchFilm(filmId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mSTP, 
    mDTP
)(FilmShow);