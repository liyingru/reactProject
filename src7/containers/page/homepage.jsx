import React,{Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
class Homepage extends Component{
    state = {
        isShow:false,
        ind:false
    }
    componentDidMount(){
        let {list}=this.props;
        if(list.length===0){
            axios('/mock/brand.json').then(res=>{
                this.props.update(res.data)
            })
        }
    }
    changStyle = () =>{
        this.setState({
           isShow:true,
           ind:true
        })
    }
    handleDel = ()=>{
        this.setState({
            isShow:false,
            ind:false
         })
    }
    add=()=>{
        this.props.history.push('/add')
    }
    handleClick=(type)=>{
        let {list,update}=this.props;
        var obj={
            money:this.refs.val.value,
            type:type
        }
        list.push(obj);
        this.refs.val.value='';
        update(list);
        this.props.history.push('/homepage')
    }
    render(){
        let {list}=this.props;
        return <div className="wrap">
            <div className='fast'>
                 <input type="text" 
                    ref='val'
                    placeholder='输入金额或估值,快速记一笔!'
                    onFocus={()=>{this.changStyle()}}  
                    style={{
                        width:this.state.ind ?'30%':'100%'
                    }} />
                   {
                        this.state.isShow ?  <div className='button'>
                                                <button className='income'  onClick={()=>this.handleClick('收入')}>收</button>
                                                <button className='exptend' onClick={()=>this.handleClick('支出')}>送</button>
                                                <button className='del' onClick={()=>this.handleDel()}>取消</button>
                                             </div> : null
                    }
               </div>
            <ul>
                {
                    list&&list.map((item,index)=>{
                        return <li key={index}>
                            <p className="title">
                                <span>{item.money}</span>
                                <span>{item.date}</span>
                            </p>
                            <p>{item.event}</p>
                        </li>
                    })
                }
            </ul>
            <div className="btn">
            <span onClick={()=>this.add()}>+</span>
            </div>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({type:"UPDATE",payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);