import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./login/login_form_container";

const App = () => (
    <div>
        <h1>Cineboxd</h1>

        <AuthRoute exact path="/login" component={LoginFormContainer}/>
    </div>
);

export default App;