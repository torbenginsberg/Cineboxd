import * as ReviewApiUtil from '../util/review_api_utils';

//action types
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_FILM_REVIEWS = 'RECEIVE_FILM_REVIEWS';

//action creators
const receiveReview = review => ({
        type: RECEIVE_REVIEW,
        review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveFilmReviews = reviews => ({
    type: RECEIVE_FILM_REVIEWS,
    reviews
});


//thunk action creators
export const createReview = review => dispatch => ReviewApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)));

export const updateReview = review => dispatch => ReviewApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)));

export const deleteReview = reviewId => dispatch => ReviewApiUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(review)));

export const fetchFilmReviews = filmId => dispatch => ReviewApiUtil.fetchFilmReviews(filmId)
    .then(reviews => dispatch(receiveFilmReviews(reviews)));

export const fetchReview = id => dispatch => ReviewApiUtil.fetchReview(id)
    .then(review => dispatch(receiveReview(review)));