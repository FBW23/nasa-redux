import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import nasaReducer from '../reducers/';

const store = createStore(nasaReducer, applyMiddleware(thunk));

export default store;
