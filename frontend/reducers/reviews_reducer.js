import {
    RECEIVE_REVIEW,
    RECEIVE_FILM_REVIEWS,
    REMOVE_REVIEW
} from '../actions/review_actions';

import { RECEIVE_FILM } from '../actions/film_actions';

const reviewsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_FILM_REVIEWS:
            return action.reviews.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        case RECEIVE_FILM:
            if (action.film.reviews) {
                Object.values(action.film.reviews).forEach(review => {
                    newState[review.id] = review
                })
            };
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;