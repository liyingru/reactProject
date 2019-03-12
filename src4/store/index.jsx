import {createStore,combineReducers} from 'redux';
import ListReducer from './reducer/list';

const reducers=combineReducers({
    ListReducer
})

const Store=createStore(reducers);

export default Store;