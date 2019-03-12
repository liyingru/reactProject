import { UPDATE } from 'store/type/rank'
const defaultState = {
    topList: []
}
const TopReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE:
            //console.log({...state,topList:payload})
            return {...state, topList: payload }
        default:
            return state
    }
}

export default TopReducer;