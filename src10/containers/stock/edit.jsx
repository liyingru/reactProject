import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
class Edit extends Component{
    delete=()=>{
        let {select}=this.props;
        select.forEach((item,k)=>{
            if(item.isCheck){
                select.splice(k,1)
            }
        })
        this.props.del(select)
    }
    render (){
        let {select} =this.props;
        return  <Fragment>
        <header className='del_head'>
             <span onClick={()=>this.props.history.push('/stock/optional')}>返回</span>
             <span>自选设置</span>
             <span onClick={()=>this.props.history.push('/add')}>添加股票</span>  
        </header>
       <ul className='del_new'>
        {
            select && select.map((i,k)=>{
                return <li key={k}>
                     <input type="checkbox" checked={i.isCheck}
                     onChange={(ev)=>{
                         select[k].isCheck=ev.target.checked;
                         this.props.check(select)
                     }}/>
                     {i.name}
                </li>
            })
        }
       </ul>
       <p className='del_del' onClick={()=>this.delete()}>删除</p>
    </Fragment>
    }
}
let mapState = (state)=>{
    return state.ListReducer
}
let mapDispatch=(dispatch)=>{
    return {
       check(payload){
           dispatch({type:'CHECK',payload})
       },
       del(payload){
        dispatch({type:'DEL',payload})
    }
    }
}
export default connect(mapState,mapDispatch)(Edit);