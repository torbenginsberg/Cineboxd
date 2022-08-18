import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import NavHeaderContainer from "./nav_header/nav_header_container";
import FilmShowContainer from "./film_show/film_show_container";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header><Route path='/' component={NavHeaderContainer}/></header>

        <Switch>
            <Route exact path='/films/:filmId' component={FilmShowContainer}/>
        </Switch>
    </div>
);

export default App;