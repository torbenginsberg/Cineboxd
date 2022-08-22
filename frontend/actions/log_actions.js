import * as LogsApiUtil from '../util/log_api_utils';
import {receiveErrors} from './session_actions';

export const RECEIVE_LOG = 'RECEIVE_LOG';
export const DELETE_LOG = 'DELETE_LOG';

const receiveLog = log => {
    return ({
        type: RECEIVE_LOG,
        log
    })
};

const deleteLogObject = log => {
    return ({
        type: DELETE_LOG,
        log
    })
};

export const createLog = log => dispatch => LogsApiUtil.createLog(log)
    .then(log => dispatch(receiveLog(log)), err => dispatch(receiveErrors(err)));

export const deleteLog = logId => dispatch => LogsApiUtil.deleteLog(logId)
    .then(log => dispatch(deleteLogObject(log)), err => dispatch(receiveErrors(err)));