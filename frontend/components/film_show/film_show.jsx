import React from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";


class FilmShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.filmId);
    }

    render() {
        if (!this.props.film) return null;
        const { film } = this.props
        return(
            <div>
                {/* <div className="film-backdrop"></div> */}
                <h1>{film.title}</h1>
                <span>{film.year}</span>
                <span>{film.director_name}</span>
                <p>{film.summary}</p>
            </div>
        )
    }
};

export default FilmShow;
