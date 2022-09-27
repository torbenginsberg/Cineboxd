import { connect } from "react-redux";
import FilmsIndex from "./films_index";
import fetchFilms from "../../actions/film_actions";

const mSTP = state => {
    return ({
        films: Object.values(state.entities.films)
    })
};

const mDTP = state => {
    fetchFilms: () => dispatchEvent(fetchFilms())
};

export default connect(mSTP, mDTP)(FilmsIndex)
