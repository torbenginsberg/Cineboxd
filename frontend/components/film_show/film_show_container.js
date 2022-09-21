import { connect } from "react-redux";
import FilmShow from './film_show';
import { fetchFilm } from "../../actions/film_actions";
import { fetchFilmReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    const thisFilm = state.entities.films[ownProps.match.params.filmId] || {}
    return ({
        currentUser: state.entities.users[state.session.id],
        film: thisFilm
    })
};

const mDTP = dispatch => ({
    fetchFilm: filmId => dispatch(fetchFilm(filmId)),
    fetchFilmReviews: filmId => dispatch(fetchFilmReviews(filmId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mSTP, 
    mDTP
)(FilmShow);