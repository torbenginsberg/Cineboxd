import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import NavHeaderContainer from "./nav_header/nav_header_container";
import Modal from "./modal/modal";

const App = () => (
    <div>
        <Modal />
        <header><Route path='/' component={NavHeaderContainer}/></header>
    </div>
);

export default App;