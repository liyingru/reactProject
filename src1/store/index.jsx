//创建仓库

import {createStore,combineReducers} from 'redux'
import TopReducer from './reducer/toplist'
import RankReducer from './reducer/rank'
import ShopcartReducer from './reducer/shopcart'
//console.log(combineReducers)
const reducers=combineReducers({
    RankReducer,TopReducer,ShopcartReducer
})
const Store=createStore(reducers);

export default Store