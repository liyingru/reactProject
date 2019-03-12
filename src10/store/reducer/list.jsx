const defaultState={
    list:[],
    select:[]
}
const ListReducer=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch (type){
        case "UPDATE":
            return {...state,list:[...payload]}
        case "NEW":
            return {...state,select:[...payload]}
        case "CHECK":
            return {...state,select:[...payload]}
        case "DEL":
            return {...state,select:[...payload]}
        default:
            return {...state}
    }
}

export default ListReducer
