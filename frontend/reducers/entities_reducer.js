//keeps track of all relational data in our app
//combines our reducers that handle relational data

import { combineReducers } from "redux";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;