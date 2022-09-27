import React from "react";
import { Link } from "react-router-dom";

function FilmIndexItem({ film }) {
    return (
        <li className="films-index-list-item">
            <Link to={"/films/" + film.id} className="film-poster-link">
                <img src={film.posterUrl} alt="" />
            </Link>
        </li>
    );
};

export default FilmIndexItem;
