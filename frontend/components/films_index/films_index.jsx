import React from "react";
import FilmIndexItem from "./film_index_item";

class FilmsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchFilms()
    }

    render() {
        let { films } = this.props;
        return (
            <div className="films-index-container">
                <div className="films-index">
                    <ul className="films-index-list">
                        {films ? films.map(thisFilm => <FilmIndexItem key={thisFilm.id} film={thisFilm} />) : null }
                    </ul>
                </div>
            </div>
        );
    }
};

export default FilmsIndex;