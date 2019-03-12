let defaultData={
    info:{
        height:200,
        width:200,
        background:'red',
       // display:'inline-block',
        position:'absolute',
        top:0,
        left:10,
        marginLeft:300,
        marginTop:200,
        transform:'rotate(120deg)'

    },
    infos:{
        position:'absolute',
        top:0,
        left:10,
    }
}
let data=(state=defaultData,action)=>{
    switch(action.type){
        case 'onChangeData':
        return {...state,info:{
            ...state.info,
            ...action
        }}
        case 'onChangeDatas':
        return {
            ...state,infos:{
                ...state.infos,
                ...action
            }
        }
        default:
        return state
    }
}
export default data