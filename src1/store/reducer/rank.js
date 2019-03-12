import { UPDATE } from 'store/type/rank'
const defaultState = {
    rankList: []
}
const RankReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE:
            //console.log({...state,topList:payload})
            return {...state, rankList: payload }
        default:
            return state
    }
}

export default RankReducer;