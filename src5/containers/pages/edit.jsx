import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../css/add.css'
import '../../css/header.css'
class Edit extends Component{
    constructor(props){
        super(props)
        this.state={
            sex:'先生',
            value:''
        }
    }
    changeSex = (num) =>{
        let {list,update}=this.props;
        let {id}=this.props.location;
        num ? this.setState({
            sex:'女士'
        }) :this.setState({
            sex:'先生'
        })
       list[id].index=num;
       update(list)
    }   
    changeInput=(key,val)=>{
        let {id}=this.props.location;
        let {update,list}=this.props;
        list[id][key]=val;
        update(list)
    }
    handleRight=()=>{
        this.props.history.push('/list')
    }
    Delete=()=>{
        let {id}=this.props.location;
        let {update,list}=this.props;
        list.splice(id,1);
        update(list);
        this.props.history.push('/list')
    }
    render(){
        let {id}=this.props.location;
        let {list}=this.props;
        return <Fragment>
            <header>
                <span><Link to="/list">返回</Link></span>
                <span>编辑地址</span>
                <span onClick={()=>this.Delete()}>删除</span>
            </header>
            <section>
            <ul>
                <li className="input">
                    <span>联系人</span>
                    <input data-prop="concats" type="text"
                    value={list[id]?list[id].concats:this.state.value}
                    onChange={(e)=>this.changeInput('concats',e.target.value)}
                    />
                </li>
                <li className="sex">
                    <span onClick={()=>{this.changeSex(0)}} className={ list[id].index ?'':'active'}>先生</span>
                    <span onClick={()=>{this.changeSex(1)}} className={ list[id].index ?'active':''}>女士</span>
                </li>
                <li className="input">
                    <span>电话</span>
                    <input type="text" data-prop="tel" 
                    value={list[id]?list[id].tel:this.state.value}
                    onChange={(e)=>this.changeInput('tel',e.target.value)}
                    />
                </li>
                <li className="input">
                    <span>地址</span>
                    <input type="text" data-prop="address" 
                     value={list[id]?list[id].address:this.state.value}
                     onChange={(e)=>this.changeInput('address',e.target.value)}
                    />
                </li>
                <li className="input">
                    <span>门牌号</span>
                    <input type="text" data-prop="area" 
                     value={list[id]?list[id].area:this.state.value}
                     onChange={(e)=>this.changeInput('area',e.target.value)}
                    />
                </li>     
            </ul>
            <div className="btn" onClick={()=>this.handleRight()}>确定</div>
        </section>
        </Fragment>
    }
}


const mapStateToProps=(state)=>{
    return state.ListReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({type:'UPDATE',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit);