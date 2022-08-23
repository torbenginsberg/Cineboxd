import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import showFilmReducer from "./films_show_reducer";

export default combineReducers({
    modal: modalReducer,
    showFilmId: showFilmReducer
});