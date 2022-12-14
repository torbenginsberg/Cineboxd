// combines our multiple, domain-specific reducers, ultimately creating our default app state

import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: errorsReducer
})

export default rootReducer;