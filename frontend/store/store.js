// Redux store -- essentially an object that holds my application state, wrapped in a minimalist API


import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));


export default configureStore;