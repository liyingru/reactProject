import { UPDATE } from 'store/type/rank'
import { CHECK_ITEM } from 'store/type/rank'
import { PLUS } from 'store/type/rank'
import { MINUS } from 'store/type/rank'
import { CHECK_ALL } from 'store/type/rank'

const defaultState = {
    shopcartList: [{
        "count": 1,
        "id": 1,
        "name": "苹果",
        "price": 8,
        "add": "陕西富士",
        "isCheck": true,
        "imgurl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=367566168,1295433230&fm=26&gp=0.jpg"
    }]
}
const ShopcartReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE:
            //console.log({...state,topList:payload})
            return {...state, shopcartList: payload };
        case CHECK_ITEM:
            return {...state, shopcartList: [...payload] };
        case CHECK_ALL:
            return {...state, shopcartList: [...payload] }
        case PLUS:
            return {...state, shopcartList: [...payload] };
        case MINUS:
            return {...state, shopcartList: [...payload] }
        default:
            return state
    }
}

export default ShopcartReducer;