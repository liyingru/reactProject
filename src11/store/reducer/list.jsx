const defaultState={
    list:[]
}
const ListReducer=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch (type){
        case "UPDATE":
            return {...state,list:payload}
        default:
            return {...state}
    }
}

export default ListReducer
