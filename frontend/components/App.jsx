import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import NavHeaderContainer from "./nav_header/nav_header_container";
import FilmShowContainer from "./film_show/film_show_container";
import FilmsIndexContainer from "./films_index/films_index_container";
import HomeContainer from "./home/home_container";
import PageNotFound from "./404_page/page_not_found";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header><Route path='/' component={NavHeaderContainer}/></header>

        <Switch>
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/films/:filmId' component={FilmShowContainer}/>
            <Route exact path='/films' component={FilmsIndexContainer}/>
            <Route path='*' component={PageNotFound} />
        </Switch>
    </div>
);

export default App;