import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../css/header.css';
import '../../css/add.css';
class Add extends Component{
    state={
        index:0,
        sex:'先生'
    }
    changeVal = (num) =>{
        num ? this.setState({
            sex:'女士'
        }) :this.setState({
            sex:'男士'
        })
       this.setState({
           index:num
       })
    }   
    handleSure=()=>{
        let {list,update}=this.props;
        let obj={
            concats:this.refs.concats.value,
            tel:this.refs.tel.value,
            address:this.refs.address.value,
            area:this.refs.area.value,
            index:this.state.index
        }
        list.push(obj);
        update(list)
        this.props.history.push('/list')
        // console.log(list)
    }
    render(){
        let {index}=this.state;
        return <Fragment>
            <header>
                <span><Link to="/list">返回</Link></span>
                <span>添加地址</span>
                <span></span>
            </header>
            <section>
            <ul>
                <li className="input">
                    <span>联系人</span>
                    <input data-prop="concats" type="text" ref="concats"/>
                </li>
                <li className="sex">
                    <span onClick={()=>{this.changeVal(0)}} className={index  ? '':'active'}>先生</span>
                    <span onClick={()=>{this.changeVal(1)}} className={index  ? 'active':''}>女士</span>
                </li>
                <li className="input">
                    <span>电话</span>
                    <input type="text" data-prop="tel" ref="tel"/>
                </li>
                <li className="input">
                    <span>地址</span>
                    <input type="text" data-prop="address" ref="address"/>
                </li>
                <li className="input">
                    <span>门牌号</span>
                    <input type="text" data-prop="area" ref="area"/>
                </li>     
            </ul>
            <div className="btn" onClick={()=>this.handleSure()}>确定</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Add);