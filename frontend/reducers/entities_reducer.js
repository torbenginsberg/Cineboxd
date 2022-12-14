//keeps track of all relational data in our app
//combines our reducers that handle relational data

import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import filmsReducer from "./films_reducer";
import { likesReducer } from "./likes_reducer";
import { logsReducer } from "./logs_reducer";
import reviewsReducer from "./reviews_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    films: filmsReducer,
    likes: likesReducer,
    logs: logsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;