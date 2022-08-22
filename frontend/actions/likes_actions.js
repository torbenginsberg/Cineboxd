import * as LikesApiUtil from '../util/likes_api_utils';
import {receiveErrors} from './session_actions';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = like => {
    return ({
        type: RECEIVE_LIKE,
        like
    })
};

const deleteLikeObject = like => {
    return ({
        type: DELETE_LIKE,
        like
    })
};

export const createLike = like => dispatch => LikesApiUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)), err => dispatch(receiveErrors(err)));

export const deleteLike = likeId => dispatch => LikesApiUtil.deleteLike(likeId)
    .then(like => dispatch(deleteLikeObject(like)), err => dispatch(receiveErrors(err)));
